import styles from './app.module.css';
import { Routes, Route } from 'react-router-dom';
import Header from '../../components/header/Header.jsx';
import HomeScreen from '../../screens/home/HomeScreen.jsx';
import MapScreen from '../map/MapScreen.jsx';

function App() {
  return (
    <div className={styles.main}>
      <Header />
      <Routes>
          <Route exact path="/" element={<HomeScreen />} />
          <Route path="/map" element={<MapScreen />} />
      </Routes>
    </div>
  );
}

export default App;