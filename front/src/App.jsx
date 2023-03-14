import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import ShowProducts from "./components/Showproducts";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ShowProducts/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
