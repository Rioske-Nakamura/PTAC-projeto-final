import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


export default function Detalhe({ detalheData, onClose }) {
  const [deta, setDeta] = useState(detalheData);

  const apagar = () => {
    setDeta();
    onClose();
  };

  return (
    <div className="logica">
      <div>
        <h3 className="text-centro">{deta.nome}</h3>
        <p>{deta.conteudo}</p>
        <div className="azul">
          <button onClick={() => apagar()} className="btn btn-primary"> Fechar </button>
        </div>
      </div>
    </div>
  );
}
