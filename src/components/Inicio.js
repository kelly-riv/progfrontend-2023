import React, { useEffect,useState} from "react";
import { Link } from "react-router-dom";
import conejo from "../assets/images/conejo.jpg";
import perro from "../assets/images/perro.jpg";
import gato from "../assets/images/gato.jpg"
import "../inicio.css"

const Inicio = () =>{
    return(
        <>
        
        <div className="container">
        <h1>Inicio</h1>

        <Link to="/perfil" className="btn btn-primary">Ir al perfil</Link> <br /><br />

        <Link to="/usuario" className="btn btn-primary">Ir al Usuario</Link> <br/><br />

        <Link to="/ejercicio" className="btn btn-primary">Ir al Ejercicio</Link><br />
            

        </div>

            <div className="container row ">

                <div className="col-4">

                <h1> Conejo</h1>
                    <div className="card" style={{ width: "18rem" }}>
                        <img src={conejo} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Perfil de usuario</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <Link to="http://accesoriosdetumascota.blogspot.com/2013/06/crianza-de-conejos.html" target="_blank" className="btn btn-primary">Ir al perfil</Link> <br />
                        </div>
                    </div>

                </div>


                <div className="col-4">
                <h1> Perro</h1>

                    <div className="card" style={{ width: "18rem" }}>
                        <img src={perro} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Inicio Sesion</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <Link to="http://imagenesdeperritos.blogspot.com/2013/10/perrito-tierno-blanco.html" target="_blank" className="btn btn-primary">Ir al perfil</Link> <br />
                        </div>
                    </div>
                </div>


                <div className="col-4">
                <h1> Gato</h1>

                    <div className="card" style={{ width: "18rem" }}>
                        <img src={gato} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Ejercicio</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <Link to="https://mascotas.facilisimo.com/blogs/adopcion/a-que-edad-adoptar-un-gato_908171.html" target="_blank" className="btn btn-primary">Ir al Perfil</Link>
                        </div>
                    </div>
                </div>

            </div>
        {/* npm i bootstrap */}
        </>
    )
}

export default Inicio