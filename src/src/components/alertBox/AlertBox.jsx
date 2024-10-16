import styles from './alertBox.module.css';
function AlertBox({title, message}) {
    return ( 
        <div className={styles.alertBox}>
            <h3>{title}</h3>
            <p>{message}</p>
        </div>
    );
}

export default AlertBox;