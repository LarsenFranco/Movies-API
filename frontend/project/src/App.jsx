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
import { Div, NumsPagesContainer, NumPage } from "./Elements/HomeMovie";

function App() {
  const dispatch = useDispatch();
  let moviesInStore = useSelector((store) => store);
  let moviesFavs = useSelector((store) => store.favoritos);

  let [btnUp, setBtnUp] = useState("none");
  let [page, setPage] = useState(1);

  const turnPage = (value) => {
    switch (value) {
      case "+":
        if (page < 500) {
          setPage(page+=1);
        }
        break;
      case "-":
        if (page > 1) {
          setPage(page-=1);
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
          <Route path="/" element={<Home movies={moviesInStore.moviesView} />} />
          <Route path="/favs" element={<Home movies={moviesFavs} />} />
        </Routes>       
        <FloatButtonBtn disp={btnUp} onClick={() => toUp()}>
          <FloatButtonImg src={arrow} />
        </FloatButtonBtn>       
        {moviesInStore.from !== "search" ? (
          <NumsPagesContainer>
            <Button onClick={() => turnPage("-")}>Prev</Button>
            <Button onClick={() => turnPage("+")}>Next</Button>
          </NumsPagesContainer>
        ) : null}
      </Div>
    </>
  );
}

export default App;
