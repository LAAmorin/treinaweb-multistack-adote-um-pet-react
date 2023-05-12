/** Definir o estilo do componente */
// Instalar o Material UI(terminal): 'npm i @mui/material @emotion/react @emotion/styled'
import { styled } from '@mui/material'
//import { redirect } from 'next/dist/server/api-utils'

// ATENÇÃO: Um componente do 'React' deve sempre começa com letra "Maiúscula";
// OBS: Um componente do 'React' deve sempre começa com letra "Maiúscula";
export const CabecalhoContainer = styled('header')`
    display: flex;
    justify-content: center;
    border-bottom: 1px solid #f0f0f0;
    /* Utilizando a função 'spacing', do tema do "@mui/material", 
     * para criar espaçamentos e assim tornar nosso layout mais armoniozo.
     *
     * Obs: o valor passado no 'spacing' é multiplicado por 8px.*/
    padding: ${({theme}) => theme.spacing(6)};    
`;

// componente criado no estilo do 'IMG' do HTML;
export const Logo = styled('img')`
    width: 230px;
`;