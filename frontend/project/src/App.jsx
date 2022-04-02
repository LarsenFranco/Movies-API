import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import styled from "./App.module.css";
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import { FloatButtonBtn, FloatButtonImg } from "./Elements/FloatButton";
import arrow from './Imgs/arrow2.png'
function App() {
 
  let [btnUp, setBtnUp] = useState("none")

  window.onscroll = function(){
    if (window.pageYOffset >= 400) {
      setBtnUp("")
    }else{
      setBtnUp("none")
    }
  }

  function toUp(){
    scrollTo(0, 0);
  }

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <FloatButtonBtn disp={btnUp} onClick={()=> toUp()}> <FloatButtonImg src={arrow}/>  </FloatButtonBtn>
    </>
  );
}

export default App;
