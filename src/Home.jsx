import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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

        <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <Link class="nav-link active" aria-current="page" to="/">Home</Link>
        <Link class="nav-link" to="/pagina/logual">Login</Link>
        <Link class="nav-link" to="/pagina/casdastra">Cadastro</Link>
      
        <a class="nav-link disabled" aria-disabled="true">Disabled</a>
      </div>
    </div>
  </div>
</nav>  

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