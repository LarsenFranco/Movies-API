import React, { useState } from "react";

import {
  Nav,
  NavLink,
  NavInput,
  NavButton,
  NavImg,
  Div,
} from "../Elements/NavBarEL";


import icon from "../Imgs/iconpng.png";

function NavBar() {
  let [search, setSearch] = useState("");

  function handleChange(e) {
    setSearch(e.target.value);
  }

  function handleSubmit() {
    //fetch con search
    alert("valor de search " + search);
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
          <NavButton onClick={handleSubmit}>🔍</NavButton>
        </Div>
      </Nav>
 
    </>
  );
}

export default NavBar;
