import React from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Navbar from "./components/navbar/Navbar";
import Contact from "./pages/contact/Contact";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";
import Deals from "./pages/deals/Deals";
import Kitchen from "./pages/categories/Kitchen";
import Sports from "./pages/categories/Sports";
import Electronics from "./pages/categories/Electronics";

function App() {
  return (
    <div>
      <ToastContainer />
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/deals" element={<Deals/>} />
        <Route path="/home&kitchen" element={<Kitchen/>} />
        <Route path="/sports" element={<Sports/>} />
        <Route path="/electronics" element={<Electronics/>} /> 
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
