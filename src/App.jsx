import { ToastContainer } from 'react-toastify'
import './App.css'
import NavBar from './components/NavBar'
import Banner from './components/Banner'
import Achievements from './components/Achievements'


function App() {

  return (
    <>
    <ToastContainer/>
    <NavBar/>
    <Banner/>
    <Achievements/>
    </>
  )
}

export default App
