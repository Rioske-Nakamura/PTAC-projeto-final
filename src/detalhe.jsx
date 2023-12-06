import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function Detalhe(){
    const {id} = useParams();

    const fechar = function(){
        
    }

    return(
        <div className="logica">
            <h1>{id}</h1>
            <button className="btn btn-primary" onClick={fechar}>Fechar Descriçao</button>
        </div>
    )
}