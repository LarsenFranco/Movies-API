import React, { useState } from "react";
import {
  Nav,
  NavLink,
  NavInput,
  NavButton,
  NavImg,
  Div,
} from "../Elements/NavBarEL";
import {setMovies} from '../../Redux/Actions'

import icon from "../Imgs/iconpng.png";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

function NavBar() {
  let [search, setSearch] = useState("");

  const dispatch=useDispatch();
  
  async function getSearch(str) {
    scrollTo(0, 0);
    const request = await axios.get(`http://localhost:8000/search?search=${str}`);
    dispatch(setMovies(request.data))       
  }

  function handleChange(e) {
    setSearch(e.target.value);
  }

  function handleSubmit() {
    getSearch(search);
    setSearch("");
  }




  return (
    <>
      <Nav>
        <Div>
          <NavImg src={icon} />
        </Div>
        
        <Div>
          <NavLink to="/">Home</NavLink>
          
        </Div>

        <Div margL="auto" > 
          <NavInput onChange={handleChange} value={search} />
          <NavButton onClick={handleSubmit}  >🔍</NavButton>
        </Div>
      </Nav>
 
    </>
  );
}

export default NavBar;
