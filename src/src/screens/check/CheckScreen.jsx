import { useState } from 'react';
import data from '../../../src/testData.json';
import styles from './checkScreen.module.css';
import PopUp from '../../components/popUp/PopUp';

function CheckScreen() {
    const [cameras, setCameras] = useState(data);
    const [isOpen, setIsOpen] = useState(false);
    const [type, setType] = useState('nombre');

    const searchHandler = (e) => {
        let value = e.target.value;
        if (value !== '') {
            switch (type) {
                case 'nombre':
                    setCameras(data.filter(camara => camara.Nombre.toLowerCase().includes(value.toLowerCase())));
                    break;
                case 'ip':
                    setCameras(data.filter(camara => camara.IP.toLowerCase().includes(value.toLowerCase())));
                    break;
                case 'zona':
                    setCameras(data.filter(camara => camara.Zona.toLowerCase().includes(value.toLowerCase())));
                    break;
            }
        } else {
            setCameras(data);
        }
    }

    const togglePopup = () => {
        setIsOpen(!isOpen);
    }


    return (
        <div className={styles.main}>
            <h1>Check Screen</h1>
            <PopUp togglePopup={togglePopup} isOpen={isOpen}/>
            <div className={styles.tableContainer}>
                <input type="text" onChange={(e) => searchHandler(e)} placeholder="Search..."/>
                <select name="search" onChange={(e) => setType(e.target.value)}>
                    <option value="nombre" selected>Nombre</option>
                    <option value="ip">IP</option>
                    <option value="zona">Zona</option>
                </select>
                <div className={styles.table}>
                    <div className={styles.tableHeader}>
                        <p>IP</p>
                        <p>Nombre</p>
                        <p>Servidor</p>
                        <p>Zona</p>
                        <p>Ubicacion</p>
                        <p>Tipo</p>
                    </div>
                    <div className={styles.tableBody}>
                        {cameras.map(camara => (
                            <div className={styles.tableRow} key={camara.IP}>
                                <p>{camara.IP}</p>
                                <p>{camara.Nombre}</p>
                                <p>{camara.Servidor}</p>
                                <p>{camara.Zona}</p>
                                <p>{`${camara.Latitud}, ${camara.Longitud}`}</p>
                                <p>{camara.Tipo}</p>

                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
}

export default CheckScreen;