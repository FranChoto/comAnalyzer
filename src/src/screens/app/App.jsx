import styles from './app.module.css';
import { Routes, Route } from 'react-router-dom';
import Header from '../../components/header/Header.jsx';
import HomeScreen from '../../screens/home/HomeScreen.jsx';
import MapScreen from '../map/MapScreen.jsx';
import CheckScreen from '../check/CheckScreen.jsx';
import ServerScreen from '../server/ServerScreen.jsx';

function App() {
  return (
    <div className={styles.main}>
      <Header />
      <Routes>
          <Route exact path="/" element={<HomeScreen />} />
          <Route path="/check" element={<CheckScreen />} />
          <Route path="/map" element={<MapScreen />} />
          <Route path="/servidores" element={<ServerScreen />} />
      </Routes>
    </div>
  );
}

export default App;