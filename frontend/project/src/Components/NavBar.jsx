import React, { useState } from "react";

import {
    Nav,
    NavLink,
    NavInput,
    NavButton,
    NavImg
  } from '../Elements/NavBarEL'

// 
import icon from "../Imgs/iconpng.png"

  function NavBar() {
    let [search, setSearch] =  useState('');


    function handleChange(e){
        setSearch(e.target.value)
    }

    function handleSubmit(){
        //fetch con search
        alert("valor de search "+search)
    }
    
  return (
  <>
    <Nav>
    <NavImg src={icon} />

      <NavLink to='/home' >
        Home
      </NavLink>
      <NavLink to='/favs' >
        Favs
      </NavLink>
    

      <NavInput onChange={handleChange} value={search}/>
      <NavButton onClick={handleSubmit}>🔍</NavButton>
  
  </Nav>
  
  
  </>
   
  )
}

export default NavBar;

