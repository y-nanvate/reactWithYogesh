import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./coomponets/Home";
import Pagination from "./coomponets/Pagination";
import NavBar from "./coomponets/NavBar";

function App() {

  return (
    <div>
      <NavBar/>
    <Routes>
      <Route path="/home" element={<Home/>}/>
      <Route path="/pagination" element={<Pagination/>}/>
    </Routes>
    </div>
    
  );
}

export default App;
