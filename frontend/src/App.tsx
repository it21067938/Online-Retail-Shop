import React from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div>
      <ToastContainer />
      <Navbar/>
      <Routes>
        <Route />
      </Routes>
    </div>
  );
}

export default App;
