import './App.css';
import {Header} from "./components/Header";
import {Login} from "./components/Login";
import {Signup} from "./components/Signup";
import {Products} from "./components/Products";
import {Footer} from "./components/Footer";
import {Checkout} from "./components/Checkout";
import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
function App() {
  return (
    <>
        <div className="App">
          <BrowserRouter>          
            <Routes>
              <Route path='/' element={<Login/>} />
            </Routes>
          </BrowserRouter> 
        </div>
    </>
  );
}

export default App;
