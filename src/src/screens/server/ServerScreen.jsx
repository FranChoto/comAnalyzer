import { useState, useEffect } from 'react';
import styles from './serverScreen.module.css';
import PopUp from '../../components/popUp/PopUp';
import axios from 'axios';

function ServerScreen() {

    // Use useEffect to handle filtering whenever any filter changes
    // This effect runs whenever filters state changes
    const [server, setServer] = useState([]);

    useEffect(() => {
        //getServer
        axios.get('')
        .then(response => {
            setServer(response.data)
        })
    }
    , []);

    return (
            <div className={styles.main}>
                <h1>Servidores</h1>
                <div className={styles.tableContainer}>
                <div className={styles.table}>
                    <div className={styles.tableHeader}>
                        <div className={styles.stateHead}><p>Estado</p></div>
                        <div className={styles.cellHead}><p>Nombre</p></div>
                        <div className={styles.cellHead}><p>Zona</p></div>
                        <div className={styles.cellHead}><p>IP Principal</p></div>
                        <div className={styles.cellHead}><p>Rango IP</p></div>
                        <div className={styles.cellHead}><p>Usuario</p></div>
                        <div className={styles.cellHead}><p>Contraseña</p></div>
                        <div className={styles.actionsHead}><p>Acciones</p></div>
                    </div>
                    <div className={styles.tableBody}>
                        {server.map(camara => (
                            <div className={styles.tableRow} key={camara.IP}>
                                <div className={styles.state}><p>{camara.status}</p></div>
                                <div className={styles.cell}><p>{camara.name}</p></div>
                                <div className={styles.cell}><p>{camara.mainIp}</p></div>
                                <div className={styles.cell}><p>{camara.ipsRange}</p></div>
                                <div className={styles.cell}><p>{camara.zone}</p></div>
                                <div className={styles.cell}><p>{camara.username}</p></div>
                                <div className={styles.cell}><p>{camara.password}</p></div>
                                <div className={styles.actions}>
                                    <PopUp name={camara.Nombre} action="edit" />
                                    <PopUp name={camara.Nombre} action="delete" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            </div>
    );
}

export default ServerScreen;