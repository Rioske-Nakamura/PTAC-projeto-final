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
        setImagem("");
        setId(Id+1)
        setCount(count+1)
    };

    const apagarC = (index) =>{
        const novalista = [...video];
        novalista.splice(index,1);
        setVideo(novalista);
    };


    return(


        <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link active" aria-current="page" href="#">Home</a>
        <a class="nav-link" href="#">Login</a>
        <a class="nav-link" href="#">Cadastrar</a>
        <a class="nav-link disabled" aria-disabled="true">Disabled</a>
      </div>
    </div>
  </div>
</nav>  


     );
}