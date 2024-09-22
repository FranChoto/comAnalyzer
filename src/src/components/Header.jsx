import styles from '../styles/header.module.css';

function Header() {
    return (
        <>
            <div className={styles.main}>
                <nav>
                    <img src="logo.svg" alt="COM Analyzer" width="50px" />
                    <ul>
                        <li className={styles.active}>Inicio</li>
                        <li >Chequeo</li>
                        <li >Listado</li>
                    </ul>
                    <img src="search.svg" alt="" width="50px" />
                </nav>
            </div>
        </>
    );
}

export default Header;