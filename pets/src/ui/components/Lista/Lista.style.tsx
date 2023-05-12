/** Definir o estilo do componente */
// Instalar o Material UI(terminal): 'npm i @mui/material @emotion/react @emotion/styled'
import { styled } from "@mui/system";

// ATENÇÃO: Um componente do 'React' deve sempre começa com letra "Maiúscula";
/** OBS: componentes criados no estilo das TAG's HTML: 'Sul', 'li', 'img', 'div', 'h2' e 'p'; */
export const ListaStyle = styled('ul')`
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    /* Utilizando a função 'spacing', do tema do "@mui/material", 
     * para criar espaçamentos e assim tornar nosso layout mais armoniozo.
     *
     * Obs: o valor passado no 'spacing' é multiplicado por 8px.*/
    padding: ${({theme}) => theme.spacing(2)};
`
export const ItemLista = styled('li')`
    display: grid;
    grid-template-columns: repeat(2, 1fr); // 'repeat' é função para repetição de valores
    gap: ${({theme}) => theme.spacing(5)};
    margin-bottom: ${({ theme}) => theme.spacing(5)};
    
    /* Função 'breakpoints', do tema do "@mui/material", é utilizada para 
     * definir um design responsivo para um downgrade do tamanho da tela. */
    ${({ theme }) => theme.breakpoints.down('md')} {
        grid-template-columns: repeat(1fr);
        gap: ${({theme}) => theme.spacing(2)};
        margin-bottom: ${({ theme}) => theme.spacing(10)}; 
    }
`    
export const Foto = styled('img')`
    width: 100%;
`    
export const Informacoes = styled('div')`
    display: flex;
    flex-direction: column;
    gap: ${({theme}) => theme.spacing(2)};
`
export const Nome = styled('h2')`
    margin: 0;
`    
export const Descricao = styled('p')`
    margin: 0;
    word-break: break-word;
`