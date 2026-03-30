import { ToastContainer } from 'react-toastify'
import './App.css'
import NavBar from './components/NavBar'
import Banner from './components/Banner'
import Achievements from './components/Achievements'
import HowItWorks from './components/HowItWorks'
import Pricing from './components/Pricing'
import CTA from './components/CTA'

const pricingData = async() => {
  const res = await fetch("PricingData.json");
  return res.json()
}
const pricingPromise = pricingData();

function App() {

  return (
    <>
      <ToastContainer />
      <NavBar />
      <Banner />
      <Achievements />
      <HowItWorks />
      <Pricing pricingPromise={pricingPromise} />
      <CTA/>
    </>
  );
}

export default App
