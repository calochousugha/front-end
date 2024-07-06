import Card from 'components/Card';
import styles from './Cuerpo.module.css';

const Cuerpo = () => {
    return(
        <>
            <div className={styles.categoria}>Front End</div>
            <div className={styles.cuerpo}>
                <Card />
            </div>
        </>
    )
}

export default Cuerpo;