import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Nav from "./componente/navbar";
export default function Home(){
    
    const alStorage = localStorage.getItem("lista");
    const [count, setCount] = useState(0)
    const [conteudo, setConteudo] = useState("");
    const [frame, setFrame] = useState("");
    const [nome, setNome] = useState("");
    const [video, setVideo] = useState(alStorage ? JSON.parse(alStorage) : []);
    const [Id, setId] = useState(0)

    useEffect(() => {
        localStorage.setItem("lista", JSON.stringify(video));
        document.title= `voce clicou  ${count} vezes`;
    }, [video, count])

   

    const salvar = (e) =>{
        e.preventDefault();
        setVideo([...video,{
            conteudo: conteudo,
            frame: frame,
            nome: nome,
            Id: Id
        }]);
        setConteudo("");
        setNome("");
        setFrame("");
        setId(Id+1)
        setCount(count+1)
    };

    const apagarC = (index) =>{
        const novalista = [...video];
        novalista.splice(index,1);
        setVideo(novalista);
    };


    return(
<div>

        <Nav></Nav>

<form onSubmit={salvar}>
                <h2>Nome</h2>
                <input value={nome} onChange={(e) => setNome(e.target.value)} type="text"></input>
                <h2>Incorporaçao do video:</h2>
                <input value={frame} onChange={(e) => setFrame(e.target.value)} type="text"></input>
                <h2>Conteudo</h2>
                <input value={conteudo} onChange={(e) => setConteudo(e.target.value)} type="text"></input>

                <button type="submit">ADD</button>
            </form>


            <div className="container text-center">
                <div className="row">
                    {video.map((ativ, index) => (
                        <div className="col" key={index}>
                            <div className="card" style={{ width: "18rem" }}>
                              
                                <div  dangerouslySetInnerHTML={ {__html: ativ.frame}}/>
                                <div className="card-body">
                                    <h5 className="card-title">{ativ.nome}</h5>
                                    <p className="card-text">{ativ.conteudo}</p>
                                    <button id={ativ.Id} onClick={() => apagarC(index)} className="btn btn-primary">apagar</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
          

          
     );
}