import React from "react";
import { InfosUsuarios } from "./InfosUsuarios";
export function CardVideo() {
    const titulo = "Titulo do Video";
    function reproduzVideo() {
        alert("O video está sendo reproduzido");
    }
    return (

       

            <div className="box-pagina-principal" onClick={reproduzVideo}>
                <img src="https://picsum.photos/400/400?a=1 " alt="" />
                <h4>{titulo}</h4>
                <InfosUsuarios></InfosUsuarios>
            </div>

       
    )
}