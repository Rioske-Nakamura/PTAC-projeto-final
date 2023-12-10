import { Link } from "react-router-dom";

export default function Login(){

    return(
        <div className="formulario">
            <div>
            <h3>Email:</h3>
            <input></input>
            </div>
            <div>
            <h3>Senha:</h3>
            <input className="algo"></input>
            </div>
            <div>
            <button className="btn btn-primary">  Logar</button>
            <br/>
            
                    <Link to="/" className="toma">Home</Link>
                
                    <Link to="/pagina/casdastra">Se Cadastre</Link>
            
            </div>

        </div>
    )
}