import { Link } from "react-router-dom";

export default function Login(){

    return(
        <div className="logica">
            <div>
            <h3>Email:</h3>
            <input></input>
            </div>
            <div>
            <h3>Senha:</h3>
            <input></input>
            </div>
            <div>
            <Link to="/">Home</Link>
            <Link to="/pagina/casdastra">Se Cadastre</Link>
            <button> Logar</button>
            </div>

        </div>
    )
}