import React, { useEffect,useState} from "react";
import { Link } from "react-router-dom";

const Inicio = () =>{
    return(
        <>
        <h1>Inicio</h1>
        <div>
            <Link to="/perfil">Ir al perfil</Link> <br/>
            <Link to="/usuario">Ir al Usuario</Link> <br/>
            <Link to="/ejercicio">Ir al Ejercicio</Link>
        </div>
        </>
    )
}

export default Inicio