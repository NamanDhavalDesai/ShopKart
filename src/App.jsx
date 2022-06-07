import './App.css';
import {Header} from "./components/Header";
import {Login} from "./components/Login";
import {Signup} from "./components/Signup";
import {Products} from "./components/Products";
import {Footer} from "./components/Footer";
import {Checkout} from "./components/Checkout";
import 'bootstrap/dist/css/bootstrap.min.css'
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
          <Header/>
          <BrowserRouter>          
            <Routes>
              <Route path='/' element={<Login/>} />
              <Route path='/signup' element={<Signup/>} />
              <Route path='/products' element={<Products/>} />
              <Route path='/checkout' element={<Checkout/>} />
            </Routes>
          </BrowserRouter>
          <Footer/>
        </div>
    </>
  );
}

export default App;
