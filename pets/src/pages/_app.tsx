import '../ui/styles/globals.css'
import type { AppProps } from 'next/app'
import { Router, useRouter } from 'next/router'
// Instalar o Material UI(terminal): 'npm i @mui/material @emotion/react @emotion/styled'
import { ThemeProvider } from '@mui/material'
import tema from '../ui/themes/temas' //importar o 'Tema' criado;
// importar os componentes criados:
import Cabecalho from '../ui/components/Cabecalho/Cabecalho'
import CabecalhoAdmin from '../ui/components/CabecalhoAdmin/CabecalhoAdmin'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <ThemeProvider theme={tema}>
      {router.pathname === '/' ? <Cabecalho /> : <CabecalhoAdmin />}
      <Component {...pageProps} /> 
    </ThemeProvider>
  ); 
}

export default MyApp
