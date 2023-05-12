import { NextPage } from "next";
import { Button, Grid, Paper, Snackbar, TextField } from "@mui/material";

// importar os componentes criados:
import { useCadastro } from '../../data/hooks/pages/pet/useCadastro';
import Titulo from '../../ui/components/Titulo/Titulo';

const Cadastro: NextPage = () => {
    const {foto, setFoto
            , historia, setHistoria
            , mensagem, setMensagem 
            , nome, setNome
            , cadastrar} = useCadastro();
           
    return (
        <>
            <Titulo titulo={'Cadastro de Pets para Adoção'}
                    subtitulo={'Preencha os dados do novo Pet'} />

            <Paper sx={{maxWidth: 970, mx: 'auto', p: 5}}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <TextField fullWidth 
                                    label={'Nome'} 
                                    placeholder={'Digite o nome do Pet'}
                                    value={nome}
                                    onChange={(e) => setNome(e.target.value)}/>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField fullWidth 
                                    label={'História Pet'} 
                                    multiline 
                                    rows={4}
                                    value={historia}
                                    onChange={(e) => setHistoria(e.target.value)}/>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField fullWidth 
                                    label={'Foto'} 
                                    placeholder={'Digite o endereço da imagem'}
                                    value={foto}
                                    onChange={(e) => setFoto(e.target.value)}/>
                        <Button variant={'contained'} 
                                color={'secondary'} 
                                component={'a'}
                                sx={{mt: 2}}
                                href={'https://imgur.com/upload'}
                                target={'_blank'}
                                onClick={cadastrar}>
                            Enviar Imagem
                        </Button>
                    </Grid>
                    <Grid item xs={12} sx={{textAling: 'center'}}>
                        <Button variant={'contained'}
                                fullWidth
                                sx={{maxWidth: {md: 200}, mt: 4}}>
                            Cadastrar Pet
                        </Button>
                    </Grid>
                </Grid>
            </Paper>
            <Snackbar autoHideDuration={2500} 
                        message={mensagem}
                        onClose={() => setMensagem('')}
                        open={mensagem.length >0} />
        </>
    )
}

export default Cadastro;