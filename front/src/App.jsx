import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Showproducts from "./components/Showproducts";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Showproducts/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
