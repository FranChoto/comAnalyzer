import styles from './popUp.module.css';

function PopUp({ togglePopup , isOpen}) {

    if (isOpen) {
        return (
            <div className={styles.popupContainer}>
                <div className={styles.insideContainer}>
                    <h2>PopUp</h2>
                    <p>Test PopUp</p>
                    <div className={styles.buttonContainer}>
                        <button>Yes</button>
                        <button onClick={() => togglePopup()}>No</button>
                    </div>
                </div>
            </div>
        );
    } else {
        return (
          <button onClick={() => togglePopup()}>Click</button>  
        );
    }
}

export default PopUp;