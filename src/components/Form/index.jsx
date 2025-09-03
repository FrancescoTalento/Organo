import "./style.css"
import InputText from "../inputText"
import ComboBox from "../comboBox"
import CustomButton from "../button"
import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';

const FormCadastro = (props)=>{
    const times = ["Back-End","Front-End","Data-Science", "DevOps", "Mobile", "Innovations and Administration"]
    
        const [nome, setNome] = useState('')
        const [cargo, setCargo] = useState('')
        const [imagem, setImagem] = useState('')
        const [time, setTime] = useState("Back-End")
    
    function aoSalvar(event){
        event.preventDefault()
        props.aoCadastar({
            id: uuidv4(),
            nome,
            cargo,
            imagem,
            time
        })    

        setCargo('')
        setImagem('')
        setNome('')
        setTime("Back-End")
        
    }

    return(
        <section className="formulario">
            
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <InputText 
                    required={true}
                    label="Nome" 
                    placeholder="Digite seu nome"
                    valor={nome}
                    setterFunc={setNome}
                />
                
                <InputText 
                    required={true} 
                    label="Cargo" 
                    placeholder="Digite seu cargo"
                    valor={cargo}
                    setterFunc={setCargo}
                />
                
                <InputText 
                    label="Imagem" 
                    placeholder="Digite o endereço da imagem"
                    valor={imagem}
                    required = {false}
                    setterFunc={setImagem}
                />
                
                <ComboBox 
                    times={times} 
                    label="Times" 
                    required={true}
                    valor={time}
                    setterFunc={setTime}
                />

                <CustomButton>
                    Criar Card
                </CustomButton>
            </form>
        </section>
    )
}

export default FormCadastro