import styles from './header.module.css';
import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <>
            <div className={styles.main}>
                <nav>
                    <img src="logo.svg" alt="COM Analyzer" width="50px" />
                    <ul>
                        <li><NavLink to="/" className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link}>Inicio</NavLink></li>
                        <li><NavLink to="/" className={styles.link}>Chequeo</NavLink></li>
                        <li><NavLink to="/map" className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link}>Mapa</NavLink></li>
                    </ul>
                    <img src="search.svg" alt="" width="50px" />
                </nav>
            </div>
        </>
    );
}

export default Header;