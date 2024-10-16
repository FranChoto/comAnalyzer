import AlertBox from '../alertBox/AlertBox';
import styles from './alert.module.css';

function Alert() {
    return ( 
        <div className={styles.main}>
            <div className={styles.alertHeader}>
                <img src="alert.svg" alt="" width="30px"/>
                <h2>Alertas</h2>
            </div>
            <div className={styles.alertContainer}>
                <AlertBox title="Alerta" message="Alerta de prueba"/>
                <AlertBox title="Alerta" message="Alerta de prueba"/>
                <AlertBox title="Alerta" message="Alerta de prueba"/>
                <AlertBox title="Alerta" message="Alerta de prueba"/>
            </div>
        </div>
    );
}

export default Alert;