import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Itens from "./components/Itens";
import NovaViagem from "./components/NovaViagem";
import Modal from "react-responsive-modal";
import "react-responsive-modal/styles.css";

function App() {
  const [viagens, setViagens] = useState([]);
  const [open, setOpen] = useState(false);
  const [pesquisaTermo, setPesquisaTermo] = useState("");
  const [resultadosPesquisa, setResultadosPesquisa] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("viagens")) {
      const viagens2 = JSON.parse(localStorage.getItem("viagens"));
      setViagens(viagens2);
    }
  }, []);

  const listaViagens = viagens.map((viagem) => (
    <Itens
      key={viagem.titulo}
      viagem={viagem}
      viagens={viagens}
      setViagens={setViagens}
    />
  ));

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const handlePesquisaChange = (event) => {
    setPesquisaTermo(event.target.value);
  };

  const pesquisaItem = (event) => {
    event.preventDefault();
    
    const resultados = viagens.filter((viagem) =>
      viagem.titulo.toLowerCase().includes(pesquisaTermo.toLowerCase())
    );
    setResultadosPesquisa(resultados);
  };

  return (
    <>
      <Header />
      <div className="titulo_lista">
        <div>
          <h3>Viagens Disponiveis!!!</h3>
          <button className="botao_novo" onClick={onOpenModal}>
            Nova Viagem
          </button>
        </div>
        <div className="pesquisa_div">
          <form onSubmit={pesquisaItem}>
            <input
              type="text"
              name="pesquisa"
              id="pesquisa"
              value={pesquisaTermo}
              onChange={handlePesquisaChange} // Adicionando onChange para atualizar o estado do termo de pesquisa
              placeholder="pesquisar viagem..."
            />
            <button type="submit">
              <img src="/pngwing.com.png" alt="" className="icone" />
            </button>
          </form>
        </div>
      </div>
      <Modal open={open} onClose={onCloseModal} center>
        <NovaViagem viagens={viagens} setViagens={setViagens} />
      </Modal>
      <div className="container">
        {resultadosPesquisa.length > 0
          ? resultadosPesquisa.map((viagem) => (
              <Itens
                key={viagem.titulo}
                viagem={viagem}
                viagens={viagens}
                setViagens={setViagens}
              />
            ))
          : listaViagens}
      </div>
    </>
  );
}

export default App;
