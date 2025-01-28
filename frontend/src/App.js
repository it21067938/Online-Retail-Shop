import React from "react";
import { Route, Routes } from "react-router-dom";
import Add from "./pages/Add";
import View from "./pages/View";
import { ToastContainer } from "react-toastify";

function App() {
 
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Add />} />
        <Route path="/all" element={<View />} />
      </Routes>
    </>
  );
}

export default App;
