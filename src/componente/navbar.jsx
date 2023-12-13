import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Nav() {

  const alStorage2 = localStorage.getItem("nomeuso");
  const [guardaruso, setGuardarUso] = useState(alStorage2 ? JSON.parse(alStorage2) : "");
  const [nomeis, setNomeis] = useState("")



  useEffect(()=> {
    if(guardaruso.length === 0){
      setNomeis("Anonimo")
    }
    else{
      setNomeis([guardaruso[0]])
    }
    localStorage.setItem("nomeuso", JSON.stringify(guardaruso))
  }, [guardaruso])
  

  return (
    <nav class="navbar navbar-expand-lg bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand text-light" href="#">
          Navbar
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon text-light"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <Link class="nav-link active text-light" aria-current="page" to="/">  Home</Link>
            <Link class="nav-link text-light" to="/pagina/logual">Login </Link>
            <Link class="nav-link text-light" to="/pagina/casdastra">Cadastro</Link>

            <a class="nav-link disabled text-light" aria-disabled="true">{nomeis}</a>
          </div>
        </div>
      </div>
    </nav>
  );
}
