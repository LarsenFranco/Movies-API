import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import styled from "./App.module.css";
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import { FloatButtonBtn, FloatButtonImg } from "./Elements/FloatButton";
import arrow from "./Imgs/arrow2.png";
import { useDispatch, useSelector } from "react-redux";
import { setMovies } from "../Redux/Actions";
import axios from "axios";
import { Button } from "./Elements/Card";
import { Div, NumsPagesContainer,NumPage } from "./Elements/HomeMovie";

function App() {
  const dispatch = useDispatch();
  let moviesInStore = useSelector((store) => store);
  let [btnUp, setBtnUp] = useState("none");
  let [page, setPage] = useState(1);
  const turnPage = (value) => {
    switch (value) {
      case "e":
        if (page < 500) {
          setPage(499);
        }
        break;
      case "s":
        if (page > 1) {
          setPage(1);
        }
        break;
      default:
        setPage(value);
        break;
    }
  };
  window.onscroll = function () {
    if (window.pageYOffset >= 400) {
      setBtnUp("");
    } else {
      setBtnUp("none");
    }
  };
  function toUp() {
    scrollTo(0, 0);
  }

  async function getMovies(page) {
    scrollTo(0, 0);
    const request = await axios.get(`http://localhost:8000?page=${page}`);
    dispatch(setMovies(request.data));
  }

  useEffect(() => {
    getMovies(page);
  }, [page]);




  return (
    <>
        <NavBar />
      <Div>
        <Routes>
          <Route path="/" element={<Home movies={moviesInStore}/>} />
        </Routes>
        <FloatButtonBtn disp={btnUp} onClick={()=> toUp()}> <FloatButtonImg src={arrow}/>  </FloatButtonBtn>
        
        <NumsPagesContainer>
          <Button        onClick={() => turnPage("s")}>Start</Button>
          <NumPage   disp={page-1>0?"":"none"}      onClick={() => turnPage(page-1)} > {page-1>=1?page-1:null} </NumPage>
          <NumPage  col={"red"} disp={page!==1?"":"none"}      onClick={() => turnPage(page)}> {page!==1?page:null}  </NumPage>
          <NumPage   disp={page+1>500?"none":""}     onClick={() => turnPage(page+1)} > {page+1>500?null:page+1} </NumPage>
          <Button         onClick={() => turnPage("e")}>End</Button>
        </NumsPagesContainer>
      
      </Div>
    </>
  );
}

export default App;
