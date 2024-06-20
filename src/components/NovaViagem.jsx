import { useForm } from "react-hook-form"
import "./NovaViagem.css"
import { toast } from "sonner"


export default function NovaViagem({viagens, setViagens}){

    const {register, handleSubmit, reset} = useForm()


    function CadastraViagem(dados){
        const viagens2 = [...viagens]

        viagens2.push({
            titulo: dados.titulo,
            local: dados.local,
            descricao: dados.descricao,
            preco: dados.preco,
            foto: dados.foto
        })
        setViagens(viagens2)
        reset()
        localStorage.setItem('viagens', JSON.stringify(viagens2))
        toast.success('Viagem cadastrada com sucesso!')
    }

    return(
        <>
            <div>
                <h2>Inclusão de Viagens</h2>
                <form onSubmit={handleSubmit(CadastraViagem)}>
                    <p>
                        <label htmlFor="titulo">Titulo da viagem</label>
                        <input type="text" id="titulo"
                        {...register("titulo")}/>
                    </p>
                    <p>
                        <label htmlFor="local">Local da viagem</label>
                        <input type="text" id="local"
                        {...register("local")}/>
                    </p>
                    <p>
                        <label htmlFor="descricao">descrição da viagem</label>
                        <input type="text" id="descricao"
                        {...register("descricao")}/>
                    </p>
                    <p>
                        <label htmlFor="preco">Preço da viagem:</label>
                        <input type="text" id="preco"
                        {...register("preco")}/>
                    </p>
                    <p>
                        <label htmlFor="foto">Url da foto da viagem</label>
                        <input type="text" id="foto"
                        {...register("foto")}/>
                    </p>
                    <input type="submit" value="Cadastrar" />
                </form>
            </div>
        </>
    )

}