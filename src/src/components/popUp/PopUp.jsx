import { useState } from 'react';
import styles from './popUp.module.css';
/* eslint-disable react/prop-types */

function PopUp({ name }) {
    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    }

    if (isOpen) {
        return (
            <div className={styles.popupContainer}>
                <div className={styles.insideContainer}>
                    <h2>PopUp</h2>
                    <p>Seguro que quieres borrar la camara con el nombre : {name}</p>
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