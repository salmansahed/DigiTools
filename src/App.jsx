import { ToastContainer } from 'react-toastify'
import './App.css'
import NavBar from './components/NavBar'
import Banner from './components/Banner'
import Achievements from './components/Achievements'
import HowItWorks from './components/HowItWorks'


function App() {

  return (
    <>
    <ToastContainer/>
    <NavBar/>
    <Banner/>
    <Achievements/>
    <HowItWorks/>
    </>
  )
}

export default App
