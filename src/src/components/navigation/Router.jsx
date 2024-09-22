import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from '../../screens/app/App.jsx';
import MapScreen from '../../screens/map/MapScreen';
import HomeScreen from '../../screens/home/HomeScreen';

ReactDOM.createRoot(document.getElementById('root')).render(
    <Router>
        <Routes>
            <Route path="/" element={<App />}>
                <Route index element={<HomeScreen />} />
                <Route path="map" element={<MapScreen />} />
            </Route>
        </Routes>
    </Router>
);