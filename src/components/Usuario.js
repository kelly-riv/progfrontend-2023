import React, { useEffect,useState} from "react";
import { Link } from "react-router-dom";

const Usuario = () =>{
    const [ userName , setUserName ] = useState("")
    const [terminoContrato,setTerminoContrato] = useState(false)

    const handleUser = (evento) =>{
        setUserName(evento.target.value)
    }

    const handleTermino = (evento) =>{
        setTerminoContrato(!terminoContrato)
    }

    return(
        <>
            <h1>Usuario</h1>
            <label htmlFor="usuario">Indique nombre de usuario</label>
            <input type="text" name="usuario" placeholder="Nombre" onChange={handleUser} /> <br />
            {userName === "billgates" &&
                <p>Ya existe</p>
            }

            <input type="checkbox" name="terminos" checked={terminoContrato}  onChange={handleTermino} />
            <label htmlFor="terminos"> Acepto términos de contrato </label> <br/>
            
            <button type="button">Guardar nombre de usuario</button> <br/>
            <Link to="/">Ir al Inicio</Link>

        </>
    )

}

export default Usuario