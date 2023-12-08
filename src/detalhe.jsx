import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Detalhe({ detalheId }) {
  const alStorage = localStorage.getItem("lista");
  const [video, setVideo] = useState(alStorage ? JSON.parse(alStorage) : []);
  const alStorage2 = localStorage.getItem("contem");
  const [mostrar, setMostrar] = useState(alStorage2 ? JSON.parse(alStorage2) : []);
  
  useEffect(() => {
    localStorage.setItem("lista", JSON.stringify(video));
    localStorage.setItem("contem", JSON.stringify(mostrar));
  }, [video, mostrar]);


  const apagar = () => {
        setMostrar([]);
  };
  return (
    <div className="logica">
      {mostrar.map((ativ, index) => (
        <div key={index}> 
          <p>{ativ}</p>
          <div className="azul">
          <button onClick={() => apagar()} className="btn btn-primary">Fechar</button>

          </div>
        </div>
      ))}
    </div>
  );
}
