import React from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Navbar from "./components/navbar/Navbar";
import Contact from "./pages/contact/Contact";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";
import Services from "./pages/services/Services";

function App() {
  return (
    <div>
      <ToastContainer />
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/services" element={<Services/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
