import './App.css';
import {Header} from "./components/Header";
import {Login} from "./components/Login";
import {Signup} from "./components/Signup";
import {Products} from "./components/Products";
import {Footer} from "./components/Footer";
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
          <Login/>
          <Signup/>
          {/* <BrowserRouter>          
            <Routes>
              <Route path='/' element={<Login/>} />
              <Route path='/signup' element={<Signup/>} />
            </Routes>
          </BrowserRouter> */}
          <Products/>
          <Footer/>
        </div>
    </>
  );
}

export default App;
