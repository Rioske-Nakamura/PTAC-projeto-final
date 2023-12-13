import React, { useState, useEffect } from "react";
import Nav from "./componente/navbar";
import Detalhe from "./componente/detalhe";

export default function Home() {
  const alStorage = localStorage.getItem("lista");
  const alStorage2 = localStorage.getItem("contem");
  const alStorage3 = localStorage.getItem("nomeuso");
  const [guardaruso, setGuardarUso] = useState(alStorage3 ? JSON.parse(alStorage3) : []);
  const [count, setCount] = useState(0);
  const [conteudo, setConteudo] = useState("");
  const [frame, setFrame] = useState("");
  const [nome, setNome] = useState("");
  const [video, setVideo] = useState(alStorage ? JSON.parse(alStorage) : []);
  const [Id, setId] = useState(0);
  const [criador, setCriador] = useState("")
  const [linguagem, setLinguagem]= useState("")
  const [mostrarDetalhe, setMostrarDetalhe] = useState(false);
  const [mostrar, setMostrar] = useState(alStorage2 ? JSON.parse(alStorage2) : []);
  const [verificaca, setVerificaCadastro] = useState("")


  

  useEffect(() => {
  localStorage.setItem("lista", JSON.stringify(video));
  localStorage.setItem("contem", JSON.stringify(mostrar));
  localStorage.setItem("nomeuso", JSON.stringify(guardaruso))
  document.title = `Você clicou ${count} vezes`;
 
}, [video, count, mostrar,guardaruso]);


  const salvar = (e) => {
    e.preventDefault();
    if(guardaruso.length === 0){
      
      return setVerificaCadastro("Voce Nao esta logado");
    }
    else{
      
    
    setVideo([
      ...video,
      {
        conteudo: conteudo,
        frame: frame,
        nome: nome,
        Id: Id,
        linguagem: linguagem,
        criador: criador
      },
    ]);
    setConteudo("");
    setNome("");
    setFrame("");
    setId(Id + 1);
    setCount(count + 1);
    setLinguagem("")
    setCriador("")
    setVerificaCadastro("Voce esta logado")
  }
  };

  const apagarC = (index) => {
    const novalista = [...video];
    novalista.splice(index, 1);
    setVideo(novalista);
    setMostrar([]);
  };

  
 
  const descricao = (ativ) => {
    setMostrarDetalhe(true);
    setMostrar([{ conteudo: ativ.conteudo, nome: ativ.nome }]);
  };
  

  

  

  return (
    <div>
      <Nav></Nav>

      <form className="formulario" onSubmit={salvar}>
        <h1 className="text-centro"> Formulario</h1>
                <h2 className="text-centro">{verificaca}</h2>
                <h2>Nome</h2>
                <input className="algo" value={nome} onChange={(e) => setNome(e.target.value)} type="text" />
                <h2>Incorporaçao do video:</h2>
                <input className="algo" value={frame} onChange={(e) => setFrame(e.target.value)} type="text"></input>
                <h2>Conteudo</h2>
                <input className="algo" value={conteudo} onChange={(e) => setConteudo(e.target.value)} type="text"></input>
                <h2>Criador</h2>
                <input className="algo" value={criador} onChange={(e) => setCriador(e.target.value)} type="text"></input>
                <h2>Lingua do Video</h2>
                <input className="algo" value={linguagem} onChange={(e) => setLinguagem(e.target.value)} type="text"></input>
                  <br/>
                <button type="submit" className="btn btn-primary">ADD</button>
            </form>

      <div className="container text-center">
        <div className="row">
          {video.map((ativ, index) => (
            <div className="col" key={index}>
              <div className="card" style={{ width: "18rem", height: "100%", backgroundColor: "rgb(111, 111, 111)", color: "rgb(255, 255, 255", border: "4px rgb(38, 176, 0) solid"}}>
                <div dangerouslySetInnerHTML={{ __html: ativ.frame }} />
                <div className="card-body">
                  <h5 className="card-title">{ativ.nome}</h5>
                  <p className="card-text">{ativ.conteudo}</p>
                  <div className="azul">
                    <button id={ativ.Id} onClick={() => apagarC(index)} className="btn btn-primary">Apagar</button>

                    <button onClick={() => descricao(ativ)} className="btn btn-primary">Descrição</button>


                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {mostrarDetalhe && (
  <Detalhe detalheData={mostrar[0]} onClose={() => setMostrarDetalhe(false)} />
      )}

     
    </div>
  );
}
