import styles from "./Banner.module.css";
import banner from "./Banner.png"
import foto from "./imagen.png"

const Banner = ({color}) => {
    return(
        <div className={styles.capa}>
            <div className={styles.orbita}>
                <div className={styles.tarjeta}>Front End</div>
                <h2 className={styles.titulo}>Challenge React</h2>
                <p className={styles.parrafo}>Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte en la resolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación React.</p>
                <div className={styles.cardPhoto} style={{
                        background: "#FFFFFF", 
                        borderRadius: "15px",
                        border: "5px",
                        width: "80%",
                        height: "80%",
                        marginTop: "-280px",
                        marginLeft: "135%",
                        opacity: "1",
                        backgroundRepeat: "no-repeat"
                    }}>
                    <img src={foto} alt="foto de preuba" />          
                </div>
            </div>      
            <div className={styles.gradient} style={{background: `${color}`}}>
                <img src={banner} alt="banner"/>
            </div>
        </div>
    )
}

export default Banner;