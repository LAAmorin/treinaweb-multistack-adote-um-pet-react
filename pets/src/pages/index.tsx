import type { NextPage } from 'next';
// Instalar o Material UI(terminal): 'npm i @mui/material @emotion/react @emotion/styled'
import { Button, Dialog, DialogActions, Grid, TextField, Snackbar } from '@mui/material';
// importar os componentes criados:
import Titulo from '../ui/components/Titulo/Titulo';
import Lista from '../ui/components/Lista/Lista';
import { useIndex } from '../data/hooks/pages/useIndex';

const Home: NextPage = () => {
  // carregando as constantes/funções criadas para gerenciar os dados na página
  const {listaPets
        , petSelecinado, setPetSelecionado
        , email, setEmail
        , valor, setValor
        , mensagem, setMensagem
        , adotar} = useIndex(); 

  return (
    <div>
      <Titulo titulo="" 
              subtitulo={
                <span>
                  Com um pequeno valor mensal, você <br />pode <strong>adotar um pet virtualmente</strong>
                </span>
              } />

      <Lista pets={listaPets} onSelect={(pet) => setPetSelecionado(pet)} />
        // componente de diálogo (cria um modal)
        <Dialog open={petSelecinado != null} 
                fullWidth 
                PaperProps={{sx: {p: '40px'}}}
                onClose={() => setPetSelecionado(null)}>
          <Grid container spacing={2}>
            <Grid item xs={12}> /** o Grid Conteiner possui 12 colunas */
              <TextField label={'E-mail'} 
                          type={'email'} 
                          fullWidth
                          value={email} 
                          onChange={(e) => setEmail(e.target.value)}/>
            /** OBS: Em onChange, o 'e' = Change Event do HTML, para capturar o valor digitado. */
            </Grid>
            <Grid item xs={12}>
              <TextField label={'Quantia por Mês'} 
                          type={'number'}
                          fullWidth
                          value={valor} 
                          onChange={(e) => setValor(e.target.value)}/>
             /** OBS: Em onChange, o 'e' = Change Event do HTML, para capturar o valor digitado. */
            </Grid>            
          </Grid>
          <DialogActions sx={{mt: 5}}>
            <Button color={'secondary'}
                    onClick={() => setPetSelecionado(null)}>Cancelar</Button>
            <Button variant={'contained'}
                    onClick={() => adotar()}>Confirmar Adoção</Button>
          </DialogActions>
        </Dialog>
        <Snackbar open={mensagem.length > 0} 
                  message={mensagem}
                  autoHideDuration={2500} //medida em milissegundos
                  onClose={()=> setMensagem('')}/>
    </div>
  )
}

export default Home