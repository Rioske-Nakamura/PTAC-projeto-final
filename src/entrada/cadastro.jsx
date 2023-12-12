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
  const [errosenha, setErroSenha]= useState([])
  const [erroemail, setErroEmail]= useState([])
  const [mensagem, setMensagem]= useState([])

  useEffect(() => {
    localStorage.setItem("usuarios", JSON.stringify(contas));
  }, [contas]);

  const salvarusuario = (e) => {
    e.preventDefault();
    
    const confereEmail = email.trim();

    if (!confereEmail.endsWith("@gmail.com")) {
      setErroEmail(["Endereço de email incorreto", "eorr"]);
      setMensagem(["Email não cadastrado", "eorr"]);
      setEmail("");
      return;
    }


    for (let i = 0; i < contas.length; i++) {
      if (contas[i].email === email) {
        setEmail("");
        setErroEmail(["Email repetido", "eorr"])
        setMensagem(["Email não cadastrado", "eorr"]);
        return;
      }
    }

    setErroEmail(["Email esta correto", "suce"])

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
      setErroSenha(["Esta correta", "suce"]);
      setErroEmail(["Email esta correto", "suce"])
      setMensagem(["Email cadastrado", "suce"]);
      setEmail("");
      setName("");
      setSenha("");
      setIdusu(idusu + 1);
      setAlgo("");
    } else {
    setErroSenha(["Senha incorreta", "eorr"])
    setMensagem(["Email não cadastrado", "eorr"]);
      setSenha("");
      setAlgo("");
      return;
    }
  };

  return (
    <form className="formulario" onSubmit={salvarusuario}>
      <div>
        <h1>Cadastre-se:</h1>
        <h1 className={mensagem[1]}>{mensagem[0]}</h1>
        <h3>Email:</h3>
        <p className={erroemail[1]}>{erroemail[0]}</p>
        <input className="algo" value={email} onChange={(e) => setEmail(e.target.value)} type="text" />
        <h3>Nome de Usuario:</h3>
        <input className="algo" value={name} onChange={(e) => setName(e.target.value)} type="text" />
      </div>
      <div>

        <h3>Senha:</h3>
        <p className={errosenha[1]}>{errosenha[0]}</p>
        <input className="algo" value={senha} onChange={(e) => setSenha(e.target.value)} type="text" />
        <h3>Confirme sua Senha</h3>
        <input className="algo" value={algo} onChange={(e) => setAlgo(e.target.value)} type="text" />
      </div>
      <div>
        <button type="submit" className="btn btn-primary">Cadastrar</button>
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
