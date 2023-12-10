import { Link } from "react-router-dom"



export default function Cadastro(){

    return(
        <div className="formulario">
            <div>
                <h1>Cadastre se:</h1>
            <h3>Email:</h3>
            <input></input>
            </div>
            <div>
            <h3>Senha:</h3>
            <input className="algo"></input>
            <h3>Confirme sua Senha</h3>
            <input className="algo"></input>
            </div>
            <div>
            <button className="btn btn-primary">  Logar</button>
            <br/>
            
                    <Link to="/" className="toma">Home</Link>
                
                    <Link to="/pagina/logual">Logar</Link>
            
            </div>

        </div>
    )
}