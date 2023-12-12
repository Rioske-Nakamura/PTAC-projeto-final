import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Cadastro() {
  const alStorage = localStorage.getItem("usuarios");
  const [contas, setContas] = useState(alStorage ? JSON.parse(alStorage) : []);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [senha, setSenha] = useState("");
  const [algo, setAlgo] = useState("");
  const [idusu, setIdusu] = useState(0);
  const [errosenha, setErroSenha]= useState("")
  const [erroemail, setErroEmail]= useState("")
  const [mensagem, setMensagem]= useState("")

  useEffect(() => {
    localStorage.setItem("usuarios", JSON.stringify(contas));
  }, [contas]);

  const salvarusuario = (e) => {
    e.preventDefault();
    
    const confereEmail = email.trim();

    if (!confereEmail.endsWith("@gmail.com")) {
      setErroEmail("Endereço de email incorreto");
      setMensagem("Email não cadastrado");
      setEmail("");
      return;
    }


    for (let i = 0; i < contas.length; i++) {
      if (contas[i].email === email) {
        setEmail("");
        setErroEmail("Email repetido")
        setMensagem("conta nao cadastrada")
        return;
      }
    }

    if (senha === algo) {
      setContas([
        ...contas,
        {
          email: email,
          name: name,
          senha: senha,
          iduso: idusu,
        },
      ]);
      setErroSenha("Esta correta");
      setErroEmail("Email esta correto")
      setMensagem("conta cadastrada")
      setEmail("");
      setName("");
      setSenha("");
      setIdusu(idusu + 1);
      setAlgo("");
    } else {
    setErroSenha("Senha incorreta")
    setMensagem("conta nao cadastrada")
      setSenha("");
      setAlgo("");
      return;
    }
  };

  return (
    <form className="formulario" onSubmit={salvarusuario}>
      <div>
        <h1>Cadastre-se:</h1>
        <h1>{mensagem}</h1>
        <h3>Email:</h3>
        <p className="eorr">{erroemail}</p>
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" />
        <h3>Nome de Usuario:</h3>
        <input value={name} onChange={(e) => setName(e.target.value)} type="text" />
      </div>
      <div>

        <h3>Senha:</h3>
        <p className="eorr">{errosenha}</p>
        <input value={senha} onChange={(e) => setSenha(e.target.value)} type="text" />
        <h3>Confirme sua Senha</h3>
        <input value={algo} onChange={(e) => setAlgo(e.target.value)} type="text" />
      </div>
      <div>
        <button type="submit" className="btn btn-primary">
          Logar
        </button>
        <br />
        <br />
        <Link to="/" className="toma">
          Home
        </Link>
        <Link to="/pagina/logual">Logar</Link>
      </div>
    </form>
  );
}
