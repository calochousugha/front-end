import styles from "./Card.module.css"
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import foto from "../Banner/imagen.png"

const Card = () => {
    return(
        <div className={styles.todo}>
            <div className={styles.video}>
                <img src={foto} alt="imagen del video"/>
            </div>
            <div className={styles.botones}>
                <div className={styles.iconoTexto} >
                    <AiOutlineDelete color="#FFFFFF" />
                    <h3 className={styles.texto}>Eliminar</h3>
                </div>
                <div className={styles.iconoTexto} >
                    <AiOutlineEdit color="#FFFFFF" />
                    <h3 className={styles.texto}>Editar</h3>
                </div>
            </div>
        </div>
    )
}

export default Card;