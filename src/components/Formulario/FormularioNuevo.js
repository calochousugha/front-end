import styles from "./FormularioNuevo.module.css"

const FormularioNuevo = () => {
    return(
        <>
            <div className={styles.container}>
                <div>
                    <h1>Nuevo Video</h1>
                    <h2>Complete el formulario para crear una nueva tarjeta de video</h2>
                </div>
                <div>
                    <h1>Crear Tarjeta</h1>
                </div>
                <div>
                    <div>
                        <h1>Titulo</h1>
                    </div>
                    <div>
                        <h1>Categoria</h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FormularioNuevo;