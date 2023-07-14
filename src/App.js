import React, { useEffect,useState} from "react";
import { Routes, Route, Link } from "react-router-dom";
import Inicio from "./components/Inicio";
import Perfil from "./components/Perfil";
import Usuario from "./components/Usuario";
import Ejercicio from "./components/Ejercicio";


const App = ()=>{

  return(
    <Routes>
      <Route path="/" element={<Inicio />}/>
      <Route path="/perfil" element={<Perfil />}/>
      <Route path="/usuario" element={<Usuario />}/>
      <Route path="/ejercicio" element={<Ejercicio />}/>
    </Routes>
  )
}

export default App
