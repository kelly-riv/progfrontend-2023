import React, { useEffect,useState} from "react";
import "../Ejercicio.css"
import { Link } from "react-router-dom";

const Ejercicio = () =>{

    const [ numValue , setNumValue ] = useState(0)
    const [ resultado, setResultado ] = useState(0)

    const handleNumber = (evento) =>{
        
        setNumValue(evento.target.value)
        setResultado(0)
        console.log(numValue)

    }

    const handleFactorial = () =>{
        let factorial = numValue
        for (let index = numValue; index > 1; index= index-1) {
            factorial = factorial*(index-1)
        }
        setResultado(factorial)
    }


    return(
        <>
        <div class="Container">
        <h1>Ejercicio</h1>
        <label htmlFor="usuario">Indique nombre de usuario</label>
        <input type="number" name="usuario" placeholder="Número" onChange={handleNumber} /> <br />
        <button type="button" onClick={handleFactorial}>Calcular factorial</button> <br/>
        {resultado != 0 &&
                <p>El factorial de {numValue} es: {resultado}</p>
            }
        </div>
        </>
    )
}

export default Ejercicio