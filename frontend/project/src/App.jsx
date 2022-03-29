
import { Routes, Route } from "react-router-dom";
import styled from  "./App.module.css"
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import { Provider } from 'react-redux';

function App() {
  return (
    <>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />     
      </Routes>
    </>
  );
}

export default App;
