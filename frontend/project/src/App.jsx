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
import { Div } from "./Elements/HomeMovie";

function App() {
  let moviesInStore = useSelector((store) => store);

  let [btnUp, setBtnUp] = useState("none");

  let dispatch = useDispatch();
  
  let [page, setPage] = useState(1);
  const turnPage = (value) => {
    switch (value) {
      case "+":
        if (page < 500) {
          setPage(page + 1);
        }
        break;
      case "-":
        if (page > 1) {
          setPage(page - 1);
        }
        break;
      default:
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
    getMovies(1);
  }, []);

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
        
        <Div dir={"row"}>
            <Button onClick={() => turnPage("-")}>PREV</Button>
            <Button onClick={() => turnPage("+")}>NEXT</Button>
          </Div>
      </Div>
    </>
  );
}

export default App;
