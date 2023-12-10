import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Cadastro from "./cadastro";
import Login from "./login";
import Nav from "../componente/navbar";
import React, { useState, useEffect } from "react";
export default function Pagina(){
 const {elemanto} = useParams("");

 const alStorage = localStorage.getItem("usuarios");
 const [count, setCount] = useState(0)
const [contas, setContas]= useState(alStorage ? JSON.parse(alStorage) : []);
const [email, setEmail]= useState("");
const [name, setName]= useState("");
const [senha, setSenha]= useState("");
const [idusu, setIdusu]= useState(0)

useEffect(() => {
    localStorage.setItem("usuarios", JSON.stringify(contas));
    document.title= `voce clicou  ${count} vezes`;
}, [contas, count])

const salvar = (e) =>{
    e.preventDefault();
    setContas([...contas,{
        email: email,
        name: name,
        senha: senha,
        iduso: idusu
    }]);
    setConteudo("");
    setName("");
    setSenha("");
    setIdusu(idusu+1)
    setCount(count+1)
    setEmail("")
};



 if(elemanto == "logual"){
    return(
        <div>
            <Nav></Nav>
            <Login/>
          
        </div>
     )
 }
if (elemanto == "casdastra") {
    return(
        
        <div>
            <Nav></Nav>
            <Cadastro></Cadastro>
        </div>
     )
} else {
    return console.error("ta tudo errado");
}
 
}