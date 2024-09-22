import styles from './styles/app.module.css'
import { Outlet } from 'react-router-dom'
import Header from './components/header'
import HomeScreen from './HomeScreen'

function App() {

  return (
    <>
      <div className={styles.main}>
        <Header />
        <HomeScreen />
      </div>
    </>
  )
}

export default App
