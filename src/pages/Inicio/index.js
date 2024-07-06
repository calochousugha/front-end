import Banner from "components/Banner";
import Cabecera from "components/Cabecera/Cabecera.js";
import Cuerpo from "components/Cuerpo";
import Footer from "components/Footer/Footer";

const Inicio = () => {
    return(
        <>
            <Cabecera/>
            <Banner color="#6BD1FF"/>
            <Cuerpo />
            <Footer />
        </>
    );
}

export default Inicio;