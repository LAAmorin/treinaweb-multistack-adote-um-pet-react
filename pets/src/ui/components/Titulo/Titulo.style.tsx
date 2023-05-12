/** Definir o estilo do componente */
// Instalar o Material UI(terminal): 'npm i @mui/material @emotion/react @emotion/styled'
import { styled } from '@mui/material';

// ATENÇÃO: Um componente do 'React' deve sempre começa com letra "Maiúscula";
// componente criado no estilo do 'h1' do HTML;
export const TituloStyled = styled('h1')`
    font-size: 20px;
    text-align: center;
    /* Utilizando a função 'spacing', do tema do "@mui/material", 
     * para criar espaçamentos e assim tornar nosso layout mais armoniozo.
     *
     * Obs: o valor passado no 'spacing' é multiplicado por 8px.*/
    margin-top: ${({theme}) => theme.spacing(5)};
`;

// componente criado no estilo do 'h2' do HTML;
export const Subtitulo = styled('h2')`
    font-size: 18px;
    text-align: center;
    /* Utilizando a função 'spacing', do tema do "@mui/material", 
     * para criar espaçamentos e assim tornar nosso layout mais armoniozo.
     *
     * Obs: o valor passado no 'spacing' é multiplicado por 8px.*/
    margin-bottom: ${({theme}) => theme.spacing(5)};
    font-weight: normal;
    /* Utilizando a função 'palette', do tema do "@mui/material", 
     * para implementar uma fonte que chame menos atenção do usuário, 
     * denominada de "fonte secundária".*/
    color: ${({theme}) => theme.palette.text.secondary}
`;