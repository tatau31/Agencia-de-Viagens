import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import Itens from './components/Itens'
import NovaViagem from './components/NovaViagem'
import Modal from 'react-responsive-modal'
import 'react-responsive-modal/styles.css'


function App() {

  const [viagens, setViagens] = useState([])
  const [open, setOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  
  useEffect(() => {
    if (localStorage.getItem('viagens')){
      const viagens2 = JSON.parse(localStorage.getItem('viagens'))
      setViagens(viagens2)
    }
  }, [])

  const listaViagens = viagens.map(viagem => (
    <Itens key={viagem.titulo} viagem={viagem} viagens={viagens} setViagens={setViagens}/>
  ))

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  

  return (
    <>
      <Header/>
      <div className='titulo_lista'>
        <div>
          <h3>Viagens Disponiveis!!!</h3>
          <button className='botao_novo' onClick={onOpenModal}>Nova Viagem</button>
        </div>
        <div className='pesquisa'>
          <input type="text" name="" id="" />
          <img src="/pngwing.com.png" alt="" className='icone' />
        </div>
      </div>
      <Modal open={open} onClose={onCloseModal} center>
        <NovaViagem viagens={viagens} setViagens={setViagens}/>
      </Modal>
      <div className='container'>
        {listaViagens}
        
      </div>
    </>
  )
}

export default App

