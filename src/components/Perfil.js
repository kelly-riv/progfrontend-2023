import React, { useEffect,useState} from "react";
const Perfil = () =>{
    const [ contadorLikes , setContadorLikes ]= useState(0)

    const handleContador = (evento) =>{
        setContadorLikes(contadorLikes+1)
    }
    return(
        <>
            <p>Perfil</p>
            <button type="button" onClick={handleContador}>Dar Like</button>
            <p>Conteo de Likes: {contadorLikes} </p>
        </>
    )
}

export default Perfil