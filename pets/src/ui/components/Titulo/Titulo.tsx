/** Definir a estrutura do componente 'Titulo' */
import { TituloStyled, Subtitulo } from "./Titulo.style";

// Declaração de uma Interface de propriedades para um Função
interface TituloProps {
    titulo: string;
    /** ATENÇÃO:
     * - O ponto de interrogação '?' indica que o parâmetro não é obrigatório;
     * - A barra '|' indica que o parâmetro aceita mais de um tipo;
     * - O 'JSX.Element' informa que o parâmetro pode ser TAG HTML; */
    subtitulo?: string | JSX.Element;    
}

/* OBS: Uma função JavaScript só aceita um retorno. 
 *
 * Sendo assim, para que essa função retorne os estilos 'TituloStyled' e 'Subtitulo',
 * esses devem ser declarados dentro de uma TAG HTML, utilizando-a como um container.
 * Como por exemplo: 'return(<div><ComponeteStyled></ComponeteStyled></div>)'
 * 
 * Entretanto, se não quisermos utilizar uma TAG HTML para que essa não influencie em 
 * nosso estilo, podemos utilizar a TAG vazia do REACT (chamada 'Fragment') conforme abaixo.
 */
export default function Titulo(props: TituloProps) {  // definindo que props é da interface 'TituloProps'
    return( 
        <>
            <TituloStyled>{props.titulo}</TituloStyled>
            <Subtitulo>{props.subtitulo}</Subtitulo>
        </>
    );
}