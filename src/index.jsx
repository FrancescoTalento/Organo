import { useState } from 'react'
import Banner from './components/banner'
import FormCadastro from './components/Form'
import Time from './components/Time/time'
import Rodape from './components/rodape/rodape'

const App = ()=>{
    const times = 
    [
        {
            nome:"Back-End",
            corPrimaria:"#57C278",
            corSecundaria:"#D9F7E9"
        },
        {
            nome:"Front-End",
            corPrimaria:"#82CFFA",
            corSecundaria:"#E8F8FF"
        },
        {
            nome:"Data-Science",
            corPrimaria:"#A6D157",
            corSecundaria:"#F0F8E2"
        },
        {
            nome:"DevOps",
            corPrimaria:"#E06B69",
            corSecundaria:"#FDE7E8"
        },
        {
            nome:"UX e Design",
            corPrimaria:"#DB6EBF",
            corSecundaria:"#FAE9F5"
        },
        {
            nome:"Mobile",
            corPrimaria:"#FFBA05",
            corSecundaria:"#FFF5D9"
        },
        {
            nome:"Innovations and Administration",
            corPrimaria:"#FF8A29",
            corSecundaria:"#FFEEDF"
        }
    ]
    

    const [colaboradores, setColaboradores] = useState([])

    const addNovoColaborador = (colaborador)=>{
        setColaboradores([...colaboradores,colaborador ])
        console.log(colaboradores);


    }
    
   return( 
        <div className='App'>
            <Banner/>
            <FormCadastro aoCadastar={addNovoColaborador}/>
            {times.map(item => 
                <Time 
                    key={item.nome} 
                    time={item} 
                    colaboradores={colaboradores.filter((c) => c.time === item.nome)}/>)}
            <Rodape/>
        </div>
   )
}

export default App;