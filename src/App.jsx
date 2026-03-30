import { ToastContainer } from "react-toastify";
import "./App.css";
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import Achievements from "./components/Achievements";
import HowItWorks from "./components/HowItWorks";
import Pricing from "./components/Pricing";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import Products from "./components/Products";
import { useState } from "react";

const pricingData = async () => {
  const res = await fetch("PricingData.json");
  return res.json();
};
const pricingPromise = pricingData();

const productsData = async () => {
  const res = await fetch("Products.json");
  return res.json();
};
const productsPromise = productsData();

function App() {

  const [cartItem, setCartItem] = useState([]);

  return (
    <>
      <ToastContainer />
      <NavBar />
      <Banner />
      <Achievements />
      <Products productsPromise={productsPromise} setCartItem={setCartItem} cartItem={cartItem}/>
      <HowItWorks />
      <Pricing pricingPromise={pricingPromise} />
      <CTA />
      <Footer />
    </>
  );
}

export default App;
