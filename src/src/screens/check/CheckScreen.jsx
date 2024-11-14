import { useState, useEffect } from 'react';
// import data from '../../../src/testData.json';
// import axios from 'axios';
import styles from './checkScreen.module.css';
import PopUp from '../../components/popUp/PopUp';

function CheckScreen() {
    const [cameras, setCameras] = useState([]);
    const [data, setData] = useState([]);
    const [filters, setFilters] = useState({
        type: 'nombre',
        device: 'Todo',
        estado: 'Todo',
        searchValue: ''
    });

    const fetchData = async (url, setData) => {
        try {
            const response = await fetch(url);
            const dataGet = await response.json();
            setData(dataGet);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const fetchAllData = async () => {
        await Promise.all([
            fetchData("http://172.25.8.215:2300/api/camera/getCameras", setData),
        ]);
    };

    useEffect(() => {
        fetchAllData();
    }, []);

    // Use useEffect to handle filtering whenever any filter changes
    useEffect(() => {

        let filtered = data;
        console.log(filtered);


        // Apply device filter
        if (filters.device !== 'Todo' && filters.estado !== 'Todo') {
            filtered = filtered.filter(camara => camara.type === filters.device);
            filtered = filtered.filter(camara => camara.status === filters.estado);
        } else if (filters.device !== 'Todo') {
            filtered = filtered.filter(camara => camara.type === filters.device);
        } else if (filters.estado !== 'Todo') {
            filtered = filtered.filter(camara => camara.status === filters.estado);
        } else {
            filtered = data;
        }
        

        // Apply search filter
        if (filters.searchValue) {
            switch (filters.type) {
                case 'nombre':
                    filtered = filtered.filter(camara =>
                        camara.name.toLowerCase().includes(filters.searchValue.toLowerCase())
                    );
                    break;
                case 'ip':
                    filtered = filtered.filter(camara =>
                        camara.ip.toLowerCase().includes(filters.searchValue.toLowerCase())
                    );
                    break;
                case 'zona':
                    filtered = filtered.filter(camara =>
                        camara.zone.toLowerCase().includes(filters.searchValue.toLowerCase())
                    );
                    break;
                default:
                    break;
            }
        }

        setCameras(filtered);
    }, [filters, data]); // This effect runs whenever filters state changes

    const handleFilterChange = (field, value) => {
        setFilters(prev => ({
            ...prev,
            [field]: value
        }));
        console.log(filters);
    };

    return (
        <div className={styles.main}>
            <div className={styles.header}>
                <h1>Check Screen</h1>
                <div className={styles.searchContainer}>
                    <div className={styles.searchTerms}>
                        <input
                            type="text"
                            value={filters.searchValue}
                            onChange={(e) => handleFilterChange('searchValue', e.target.value)}
                            placeholder="Search..."
                        />
                        <select
                            value={filters.type}
                            onChange={(e) => handleFilterChange('type', e.target.value)}
                        >
                            <option value="nombre">Nombre</option>
                            <option value="ip">IP</option>
                            <option value="zona">Zona</option>
                        </select>
                        <p>Tipo: </p>
                        <select
                            value={filters.device}
                            onChange={(e) => handleFilterChange('device', e.target.value)}
                        >
                            <option value="Todo">Todo</option>
                            <option value="Fixed">Fija</option>
                            <option value="Dome">Domo</option>
                            <option value="Lpr">LPR</option>
                            <option value="Button">Pulsador</option>
                        </select>
                        <p>Estado: </p>
                        <select
                            value={filters.estado}
                            onChange={(e) => handleFilterChange('estado', e.target.value)}
                        >
                            <option value="Todo">Todo</option>
                            <option value="warning">Warning</option>
                            <option value="online">Online</option>
                            <option value="offline">Offline</option>
                            <option value="maintenance">Maintanance</option>
                        </select>
                    </div>
                    <PopUp />
                </div>
            </div>
            <div className={styles.tableContainer}>
                <div className={styles.table}>
                    <div className={styles.tableHeader}>
                        <div className={styles.stateHead}><p>Estado</p></div>
                        <div className={styles.cellHead}><p>IP</p></div>
                        <div className={styles.cellHead}><p>Nombre</p></div>
                        <div className={styles.cellHead}><p>Servidor</p></div>
                        <div className={styles.cellHead}><p>Zona</p></div>
                        <div className={styles.cellHead}><p>Coordenadas</p></div>
                        <div className={styles.cellHead}><p>Tipo</p></div>
                        <div className={styles.actionsHead}><p>Acciones</p></div>
                    </div>
                    <div className={styles.tableBody}>

                        {/* loading */}

                        {(cameras.length !== 0) ? (
                            cameras.map(camara => (
                                <div className={styles.tableRow} key={camara.ip}>
                                    <div className={styles.state}><p>{camara.status}</p></div>
                                    <div className={styles.cell}><p>{camara.ip}</p></div>
                                    <div className={styles.cell}><p>{camara.name}</p></div>
                                    <div className={styles.cell}><p>{camara.server}</p></div>
                                    <div className={styles.cell}><p>{camara.zone}</p></div>
                                    <div className={styles.cell}><p>{`${camara.latitude}, ${camara.longitude}`}</p></div>
                                    <div className={styles.cell}><p>{camara.type}</p></div>
                                    <div className={styles.actions}>
                                        <PopUp name={camara.Nombre} action="edit" />
                                        <PopUp name={camara.Nombre} action="delete" />
                                    </div>
                                </div>
                            ))
                        ) : ( <h1> LOADING... </h1>)}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CheckScreen;