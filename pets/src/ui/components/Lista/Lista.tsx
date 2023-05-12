/** Definir a estrutura do componente 'Lista' */
// Instalar o Material UI(terminal): 'npm i @mui/material @emotion/react @emotion/styled'
import { Button } from '@mui/material'
import { // importar do estilo do componente
    ListaStyle,
    ItemLista,
    Foto,
    Informacoes,
    Nome,
    Descricao
} from "./Lista.style"
//importar o Data Type
import { Pet } from "../../../data/@types/Pet"
//importat um serviço criado
import { TextService } from "../../../data/services/TextService"

// Declaração de uma Interface de propriedades para um Função
interface ListaProps{
    pets: Pet[];
    onSelect: (pet: Pet) => void;
}

export default function Lista(props: ListaProps) {
    const tamanhoMaximoTexto = 200;

    return (
        <ListaStyle>
            {props.pets.map(pet => (
                <ItemLista key={pet.id}>
                    <Foto src={pet.foto} alt={pet.nome}/>
                    <Informacoes>
                        <Nome>{pet.nome}</Nome>
                        <Descricao>{TextService.limitarTexto(pet.historia, tamanhoMaximoTexto)}</Descricao>
                        <Button variant={'contained'} 
                                fullWidth
                                onClick={() => props.onSelect(pet)}>
                            Adotar {pet.nome}
                        </Button>
                    </Informacoes>
                </ItemLista>
            ))}    
        </ListaStyle>
    )
}