import { NextPage } from "next";
import { 
    Paper
    , Table
    , TableBody
    , TableCell
    , TableContainer
    , TableHead
    , TableRow } from "@mui/material";
import { maxWidth } from "@mui/system";

// importar os componentes criados:
import Titulo from "../../ui/components/Titulo/Titulo";
import { useRelatorio } from "../../data/hooks/pages/pet/useRelatorio"; 

const Relatorio: NextPage = () => {
    const { listaRelatorio } = useRelatorio();

    return (
         <>
            <Titulo titulo={'Relatorio de Adoção'}
                    subtitulo={'Veja a lista de pets adotados'}/>
            <TableContainer 
                    component={Paper}
                    sx={{maxWidth: 830, mx: 'auto', p: {xs: 3, md: 5}}}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Pet</TableCell>
                            <TableCell>E-mail</TableCell>
                            <TableCell align={'right'}>Valor Mensal</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {listaRelatorio.map((relatorio) => (
                            <TableRow key={relatorio.id}>
                                <TableCell>{relatorio.pet.nome}</TableCell>
                                <TableCell>{relatorio.email}</TableCell>
                                <TableCell align={'right'}>{relatorio.valor}</TableCell>
                            </TableRow>
                        ))}                        
                    </TableBody>
                </Table>
            </TableContainer> 
        </>
     )
 }

 export default Relatorio;