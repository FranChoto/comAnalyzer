import styles from './styles/homeScreen.module.css';
function HomeScreen() {
    return (
        <>
            <div className={styles.main}>
                <div className={styles.grid}>
                    <div className={`${styles.container} ${styles.square1}`}>
                        <div className={styles.insideContainer}>
                            Aca irian las listas con las camaras recientes Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum ea, laboriosam dolore dignissimos et ducimus qui neque ipsam magnam tempore at illo itaque architecto totam quod atque. Ab, dolores obcaecati.
                        </div>
                    </div>
                    <div className={`${styles.container} ${styles.square2}`}>
                        <div className={styles.insideContainer}>
                            Esto es una prueba de otras cosa xd Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam odio ducimus ut assumenda porro veritatis error adipisci. Doloremque, corporis dicta, nihil doloribus porro est aut temporibus facere, atque dolorum vero!
                        </div>
                    </div>
                    <div className={`${styles.container} ${styles.square3}`}>
                        <div className={styles.insideContainer}>
                            Y esto otra cosa mas Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem non totam voluptas ea possimus pariatur soluta iure omnis laudantium quasi. Ipsam facilis vitae id aperiam saepe ab quasi velit tempore.
                        </div>
                    </div>
                    <div className={`${styles.container} ${styles.square4}`}>
                        <div className={styles.insideContainer}>
                            Algo mas aca Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, debitis? Voluptate voluptates consectetur cupiditate in. Error corporis, deserunt culpa porro praesentium voluptatem maxime asperiores deleniti ut ad, voluptate, at sed!
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