import { useState, useEffect } from 'react';
import data from '../../../src/testData.json';
import styles from './checkScreen.module.css';
import PopUp from '../../components/popUp/PopUp';

function CheckScreen() {
    const [cameras, setCameras] = useState(data);
    const [filters, setFilters] = useState({
        type: 'nombre',
        device: 'Todo',
        estado: 'Todo',
        searchValue: ''
    });

    // Use useEffect to handle filtering whenever any filter changes
    useEffect(() => {
        let filtered = data;

        // Apply device filter
        if (filters.device !== 'Todo') {
            filtered = filtered.filter(camara => camara.Tipo === filters.device);
        }

        // Apply estado filter
        if (filters.estado !== 'Todo') {
            filtered = filtered.filter(camara => camara.Estado === filters.estado);
        }

        // Apply search filter
        if (filters.searchValue) {
            switch (filters.type) {
                case 'nombre':
                    filtered = filtered.filter(camara => 
                        camara.Nombre.toLowerCase().includes(filters.searchValue.toLowerCase())
                    );
                    break;
                case 'ip':
                    filtered = filtered.filter(camara => 
                        camara.IP.toLowerCase().includes(filters.searchValue.toLowerCase())
                    );
                    break;
                case 'zona':
                    filtered = filtered.filter(camara => 
                        camara.Zona.toLowerCase().includes(filters.searchValue.toLowerCase())
                    );
                    break;
                default:
                    break;
            }
        }

        setCameras(filtered);
    }, [filters]); // This effect runs whenever filters state changes

    const handleFilterChange = (field, value) => {
        setFilters(prev => ({
            ...prev,
            [field]: value
        }));
    };

    return (
        <div className={styles.main}>
            <div className={styles.header}>
                <h1>Check Screen</h1>
                <div className={styles.searchContainer}>
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
                        <option value="Fija">Fija</option>
                        <option value="Domo">Domo</option>
                        <option value="LPR">LPR</option>
                        <option value="Pulsador">Pulsador</option>
                    </select>
                    <p>Estado: </p>
                    <select 
                        value={filters.estado}
                        onChange={(e) => handleFilterChange('estado', e.target.value)}
                    >
                        <option value="Todo">Todo</option>
                        <option value="Warning">Warning</option>
                        <option value="Online">Online</option>
                        <option value="Offline">Offline</option>
                    </select>
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
                        {cameras.map(camara => (
                            <div className={styles.tableRow} key={camara.IP}>
                                <div className={styles.state}><p>{camara.Estado}</p></div>
                                <div className={styles.cell}><p>{camara.IP}</p></div>
                                <div className={styles.cell}><p>{camara.Nombre}</p></div>
                                <div className={styles.cell}><p>{camara.Servidor}</p></div>
                                <div className={styles.cell}><p>{camara.Zona}</p></div>
                                <div className={styles.cell}><p>{`${camara.Latitud}, ${camara.Longitud}`}</p></div>
                                <div className={styles.cell}><p>{camara.Tipo}</p></div>
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

export default CheckScreen;