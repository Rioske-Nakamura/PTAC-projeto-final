import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const alStorage = localStorage.getItem("usuarios");
  const [contas, setContas] = useState(alStorage ? JSON.parse(alStorage) : []);
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mensagem, setMensagem] = useState(["", ""]);

  useEffect(() => {
    localStorage.setItem("usuarios", JSON.stringify(contas));
  }, [contas]);

  const validar = (e) => {
    e.preventDefault();


    const usuarioEncontrado = contas.find((conta) => conta.email === email);

    if (!usuarioEncontrado) {
      setEmail("");
      setSenha("");
      setMensagem(["Senha ou email incorreto", "eorr"]);
      return;
    }

   
    if (usuarioEncontrado.senha !== senha) {
      setSenha("");
      setEmail("");
      setMensagem(["Senha ou email incorreto", "eorr"]);
      return;
    }

    setMensagem(["Login bem-sucedido!", "suce"]);
  };

  return (
    <div>
      <form className="formulario" onSubmit={validar}>
        <div>
          <h3>Email:</h3>
          <h1 className={mensagem[1]}>{mensagem[0]}</h1>
          <input
            className="algo"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
          />
        </div>
        <div>
          <h3>Senha:</h3>
          <input
            className="algo"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            type="password"
          />
        </div>
        <div>
          <button type="submit" className="btn btn-primary">
            Logar
          </button>
          <br />

          <Link to="/" className="toma">
            Home
          </Link>

          <Link to="/pagina/casdastra">Se Cadastre</Link>
        </div>
      </form>
    </div>
  );
}
