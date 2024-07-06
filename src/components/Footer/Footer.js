import Logo from "../Cabecera/Logo.png"
import styles from "./Footer.module.css"

const Footer = () => {
    return(
        <footer className={styles.footer}>
            <section className={styles.logoContainer}>
                <img src={Logo} alt="Logo AluraFlix"/>
            </section>
        </footer>
    )
}

export default Footer;