import React from "react";
import { Route, Routes } from "react-router-dom";
import Add from "./pages/Add";
import View from "./pages/View";
import { ToastContainer } from "react-toastify";
import Sidebar from "./components/sidebar/Sidebar.tsx";
import Navbar from "./components/navbar/Navbar.tsx";

function App() {
  return (
    <>
      <ToastContainer />
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Add />} />
        <Route path="/all" element={<View />} />
      </Routes>
    </>
  );
}

export default App;
