/** Definir a estrutura do componente 'Cabecalho' */
import { // importar do estilo do componente
    CabecalhoContainer,
    Logo
} from "./Cabecalho.style"

export default function Cabecalho() {
    return (
        <CabecalhoContainer>
            <Logo src="/imagens/logo.svg" />
        </CabecalhoContainer>
    )
}