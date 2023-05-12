import { AxiosError } from "axios"; // Instalar o AXIOS (terminal): 'npm i axios@0.26.0'
import { useEffect, useState } from "react";
import { Pet } from "../../@types/Pet"; //importar o Data Type
import { ApiService } from "../../services/ApiService"; //importar meu Servico de Consumo da API

/** OBS: se a funcionalidade não for declarada no 'return' da função,
 * isso significa que está é do tipo private e só poderá ser usada aqui
 * dentro, não podendo ser externalizada.
 * 
 * exemplo: abaixo a função 'setListaPets' é do tipo private
 */
export function useIndex() {
    // constantes para imputar e carregar a Lista de Pets;
    const [listaPets, setListaPets] = useState<Pet[]>([]),
        // constantes para imputar e carregar um Pet (utilizado para abrir ou fechar o Modal);
        [petSelecinado, setPetSelecionado] = useState<Pet | null>(null), 
        // constantes para imputar e carregar o 'e-mail' no Modal;
        [email, setEmail] = useState(''),
        // constantes para imputar e carregar o 'valor' no Modal;
        [valor, setValor] = useState(''),
        // constantes para imputar e carregar 'Mensagem de Validação' do Modal;
        [mensagem, setMensagem] = useState('');

    /** "useEffect" é uma função utilizada para atualizar o componete sempre que uma variável 
     * informada for alterada.
     * 
     * ATENÇÃO: caso não seja informado nenhuma variável, e essa coleção fique vazia, significa que 
     * essa função só irá recarregar o componete quando esse for chamado na primeira vez. */
    useEffect(() => { 
        // ao entrar na página ele irá chamar a API e carregar as informações dos Pets cadastrados;
        ApiService.get('/pets')
                .then((resposta) => {
                    setListaPets(resposta.data);
                })
    }, []) 

    useEffect(() => {
        if(petSelecinado === null) { //sempre que for igual a 'null'
            limparFormulario(); // função de limpar o formulário
        }        
    }, [petSelecinado])

    // função para confirmar a adoção de um Pet; 
    function adotar(){
        if(petSelecinado !== null) {
            if(validarDadosAdocao()) {
                // chamar a API para imputar as informações da adoção;
                ApiService.post('/adocoes', {
                    pet_id: petSelecinado.id,
                    email, 
                    valor
                })
                .then(() => {
                    setPetSelecionado(null); // fechar a modal
                    setMensagem('Pet adotado com sucesso!'); // exibir msg de sucesso                    
                })
                .catch((error: AxiosError) => {
                    // o (?) abaixo significa que ele segue acessando a estrutura se tiver dados, caso contrário, não;
                    setMensagem(error.response?.data.mensagem);
                })

            } else {
                setMensagem('Preencha todos os campos corretamente!'); // exibir msg de validação
            }
        }
    }

    // função para validar os dados para adoção de um Pet;
    function validarDadosAdocao(){ //validação básica
        return email.length > 0 && valor.length > 0;
    }

    // função para limpar os dados do formulário do Modal;
    function limparFormulario(){
        setEmail('');
        setValor('');
    }

    return {listaPets
            , petSelecinado, setPetSelecionado
            , email, setEmail
            , valor, setValor
            , mensagem, setMensagem
            , adotar};
}