import React, { useState } from "react";

import {
    Nav,
    NavLink,
    NavMenu,
    NavBtn,
    NavBtnLINK,
    NavInput,
    NavButton
  } from '../Elements/NavBarEL'

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
    <Nav>
    <NavMenu>
      <NavLink to='/home' activeStyle>
        Home
      </NavLink>
      <NavLink to='/favs' activeStyle>
        Favs
      </NavLink>
    </NavMenu>
    
    <NavBtn>
      <NavInput onChange={handleChange} value={search}/>
      <NavButton onClick={handleSubmit}>🔍</NavButton>
    </NavBtn>
  </Nav>
  )
}

export default NavBar;

