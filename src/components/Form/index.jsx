import "./style.css"
import InputText from "../inputText"
import ComboBox from "../comboBox"
import CustomButton from "../button"
import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';

const FormCadastro = (props)=>{
    //const times = ["Back-End","Front-End","Data-Science", "DevOps", "Mobile", "Innovations and Administration"]
    
        const [nome, setNome] = useState('')
        const [cargo, setCargo] = useState('')
        const [imagem, setImagem] = useState('')
        const [time, setTime] = useState("Back-End")

        const [timeNome, setTimeNome] = useState('')
        const [timeCor, setTimeCor] = useState('')
    
    function onSubmitCard(event){
        event.preventDefault()
        props.aoCadastrarCard({
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
    function onSubmitTime(event){
        event.preventDefault()
        props.aoCadastrarTime({
            id: uuidv4(),
            nome:timeNome,
            cor: timeCor
        })



        setTimeCor('')
        setTimeNome('')
    }

    return(
        <section className="formulario">
            
            <form onSubmit={onSubmitCard}>
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
                    times={props.times} 
                    label="Times" 
                    required={true}
                    valor={time}
                    setterFunc={setTime}
                />

                <CustomButton>
                    Criar Card
                </CustomButton>
            </form>
            <form onSubmit={onSubmitTime}>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <InputText 
                    required={true}
                    label="Nome" 
                    placeholder="Digite o nome do Time"
                    valor={timeNome}
                    setterFunc={setTimeNome}
                />
                
                <InputText 
                    required={true} 
                    label="Cor" 
                    placeholder="Digite a cor do time"
                    valor={timeCor}
                    setterFunc={setTimeCor}
                />
                <CustomButton>
                    Criar um novo Time
                </CustomButton>
            </form>
        </section>
    )
}

export default FormCadastro