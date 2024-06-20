import "./Itens.css"


export default function Itens({viagem, viagens, setViagens}){

    function registraInteresse(){
        
        const viagens2 = [...viagens]

        viagens2.map(viagem2 => {
            
            if (viagem2.titulo === viagem.titulo){
                viagem2.interessados++
            }
        })
        
        
        setViagens(viagens2)
        localStorage.setItem('viagens', JSON.stringify(viagens2))
        return alert('Interesse registrado com sucesso!')
        

    }    

    return(
        <>
            <div className="item">
                <img src={viagem.foto} alt="viagem" className="foto" />
                <div>
                    <h2 className="titulo">{viagem.titulo}</h2>
                    <h3 className="local">Local: {viagem.local}</h3>
                    <p className="descricao">{viagem.descricao}</p>
                    <p className="preco">Preço R$: {viagem.preco}</p>
                    <p>Numero de interessados no pacote: {viagem.interessados}</p>
                    <button onClick={registraInteresse}>Registrar Interesse</button>
                </div>
            </div>
        </>
    )
}