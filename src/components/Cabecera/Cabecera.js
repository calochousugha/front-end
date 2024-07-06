import { Link } from "react-router-dom";
import styles from "./Cabecera.module.css"
import Logo from "./Logo.png"
import CabeceraLink from "components/CabeceraLink/CabeceraLink";

const Cabecera = ({ isActive  }) => {
    return(
        <header className={styles.cabecera}>
            <Link to="/">
                <section className={styles.logoContainer}>
                    <img src={Logo} alt="Logo AluraFlix"/>
                </section>
            </Link>
            <div className={styles.seccionBotones}>
                <button className={`styles.boton ${isActive ? styles.activeBoton : styles.boton}`}>
                    <CabeceraLink url="./">
                        Home
                    </CabeceraLink>
                </button>
                <button className={styles.boton}>
                    <CabeceraLink url="./Nuevo">
                        Nuevo Video
                    </CabeceraLink>
                </button>
            </div>
        </header>
    );
}

export default Cabecera;