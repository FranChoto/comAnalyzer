import { useState } from 'react';
import styles from './popUp.module.css';
/* eslint-disable react/prop-types */

function PopUp({ name, action }) {
    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    }

    if (isOpen) {
        return (
            (action === "delete") ? (
                <div className={styles.popupContainer}>
                    <div className={styles.insideContainer}>
                        <h2>Borrar</h2>
                        <p>Seguro que quieres borrar la camara con el nombre : {name}</p>
                        <div className={styles.buttonContainer}>
                            <button>Yes</button>
                            <button onClick={() => togglePopup()}>No</button>
                        </div>
                    </div>
                </div>
            ) : (action === "edit") ? (
                <div className={styles.popupContainer}>
                    <div className={styles.insideContainer}>
                        <h2>Editar</h2>
                        <p>Seguro que quieres editar la camara con el nombre : {name} </p>
                        <div className={styles.buttonContainer}>
                            <button>Yes</button>
                            <button onClick={() => togglePopup()}>No</button>
                        </div>
                    </div>
                </div>
            ) : (
                <div className={styles.popupContainer}>
                    <div className={styles.insideContainer}>
                        <h2>Agregar</h2>
                        <p>Seguro que quieres agregar una camara?</p>
                        <div className={styles.buttonContainer}>
                            <button>Yes</button>
                            <button onClick={() => togglePopup()}>No</button>
                        </div>
                    </div>
                </div>
            )

        );
    } else {
        return (
            <div className={(action === "delete" || action === "edit") ? styles.toogleButton : styles.addButton}>
                <button onClick={() => togglePopup()}>
                    {(action === "delete") ? "Borrar" : (action === "edit") ? "Editar" : "Agregar"}
                </button>
            </div>
        );
    }
}

export default PopUp;