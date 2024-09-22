import styles from './homeScreen.module.css';
function HomeScreen() {
    return (
        <>
            <div className={styles.main}>
                <div className={styles.grid}>
                    <div className={`${styles.container} ${styles.square1}`}>
                        <div className={styles.insideContainer}>
                            Mapa
                        </div>
                    </div>
                    <div className={`${styles.container} ${styles.square2}`}>
                        <div className={styles.insideContainer}>
                            alertas
                        </div>
                    </div>
                    <div className={`${styles.container} ${styles.square3}`}>
                        <div className={styles.insideContainer}>
                            graficos
                        </div>
                    </div>
                    <div className={`${styles.container} ${styles.square4}`}>
                        <div className={styles.insideContainer}>
                            porcentajes
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <br />
            <br /><br /><br /><br />
        </>
    );
}

export default HomeScreen;