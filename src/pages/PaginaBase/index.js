import Cabecalho from "components/Cabecalho";
import Container from "components/Container";
import Rodape from "components/Rodape";
import FavoritosProvider from "context/Favoritos";
import { Outlet } from "react-router-dom";

export default function PaginaBase(){
    return(
        <main>
            <Cabecalho></Cabecalho>
            <FavoritosProvider>
                <Container>
                    <Outlet/>
                </Container>
            </FavoritosProvider>
            <Rodape/>
        </main>
    )
}