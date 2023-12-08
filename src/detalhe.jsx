import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function Detalhe(){
    const {id} = useParams(id)
    const alStorage = localStorage.getItem("lista");
    const [video, setVideo] = useState(alStorage ? JSON.parse(alStorage) : []);
    return(
        <div className="logica">
            {video.map((ativ, index) => (
        <div key={index}>
          <p>{ativ[id].letra}</p>
          <div className="azul">
            <button
              id={ativ.Id}
              onClick={() => apagarLetra(index)}
              className="btn btn-primary"
            >
              Fechar
            </button>
          </div>
        </div>
      ))}
        </div>
    )
}