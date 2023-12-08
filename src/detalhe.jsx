import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Detalhe({ detalheId }) {
  const alStorage = localStorage.getItem("lista");
  const [video, setVideo] = useState(alStorage ? JSON.parse(alStorage) : []);
  const alStorage2 = localStorage.getItem("contem");
  const [mostrar, setMostrar] = useState(alStorage2 ? JSON.parse(alStorage2) : []);
  

  return (
    <div className="logica">
      {video.map((ativ, index) => (
        <div key={index}> 
          <p>{ativ.conteudo}</p>
          <div className="azul">
            <button className="btn btn-primary">Fechar</button>
          </div>
        </div>
      ))}
    </div>
  );
}
