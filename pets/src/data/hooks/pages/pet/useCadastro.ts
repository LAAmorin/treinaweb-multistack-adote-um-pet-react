import { AxiosError } from "axios";
import { useState } from "react";
import { ApiService } from "../../../services/ApiService";

export function useCadastro() {
    const[foto, setFoto] = useState(''),
        [historia, setHistoria] = useState(''),
        [mensagem, setMensagem] = useState(''),
        [nome, setNome] = useState('');

    function cadastrar() {
        if(validarFormulario()) {
            ApiService.post('/pets',{
                nome, historia, foto
            }).then(() => {limpar(); 
                            setMensagem('Pet Cadastrado com sucesso!')
            }).catch((error: AxiosError) => {setMensagem(error.response?.data.mensagem)})
        } else {
            setMensagem('Preencha todos os campos!')
        }
    }

    function validarFormulario() {
        return nome.length > 2 && historia.length > 20 && foto.length > 5;
    }

    function limpar() {
        setFoto('');
        setNome('');
        setHistoria('');
    }

    return {
        foto, setFoto
        , historia, setHistoria
        , mensagem, setMensagem 
        , nome, setNome
        , cadastrar
    }
}