import { useState } from 'react'
import Banner from './components/banner'
import FormCadastro from './components/Form'
import Time from './components/Time/time'
import Rodape from './components/rodape/rodape'
import { v4 as uuidv4 } from 'uuid';


const App = ()=>{
    const [times, setTimes] = useState(
    [
        {
          id: uuidv4(),
          nome:"Back-End",
          cor:"#57C278",
            
        },
        {
          id: uuidv4(),
          nome:"Front-End",
          cor:"#82CFFA",
            
        },
        {
          id: uuidv4(),
          nome:"Data-Science",
           cor:"#A6D157",
            
        },
        {
          id: uuidv4(),
          nome:"DevOps",
          cor:"#E06B69",
            
        },
        {
          id: uuidv4(),
          nome:"UX e Design",
          cor:"#DB6EBF",
            
        },
        {
          id: uuidv4(),
          nome:"Mobile",
          cor:"#FFBA05",
            
        },
        {
          id: uuidv4(),
          nome:"Innovations and Administration",
          cor:"#FF8A29",
            
        }
    ])
      const inicial = [
    {
      id: uuidv4(),
      favorito:false,
      nome: 'FRANCESCO TALENTO',
      cargo: 'Desenvolvedor de software',
      imagem: 'https://github.com/FrancescoTalento.png',
      time: times[0].nome
    },
    {
      id: uuidv4(),
      favorito:false,
      nome: 'KAUA YUGY',
      cargo: 'Engenheiro de Software na HenricosF SA',
      imagem: 'https://github.com/Bellyzk.PNG',
      time: times[0].nome
    },
    {
      id: uuidv4(),
      favorito:false,
      nome: 'LARISSA KICH',
      cargo: 'Desenvolvedora FullStack',
      imagem: 'https://github.com/Larissakich.png',
      time: times[0].nome
    },
    {
      id: uuidv4(),
      favorito:false,
      nome: 'PAULO SILVEIRA',
      cargo: 'Especialista em .NET Development',
      imagem: 'https://github.com/JasperKent.png',
      time: times[0].nome
    },
    {
      id: uuidv4(),
      favorito:false,
      nome: 'FRANCESCO TALENTO',
      cargo: 'Desenvolvedor de software',
      imagem: 'https://github.com/FrancescoTalento.png',
      time: times[1].nome
    },
    {
      id: uuidv4(),
      favorito:false,
      nome: 'KAUA YUGY',
      cargo: 'Engenheiro de Software na HenricosF SA',
      imagem: 'https://github.com/Bellyzk.PNG',
      time: times[1].nome
    },
    {
      id: uuidv4(),
      favorito:false,
      nome: 'LARISSA KICH',
      cargo: 'Desenvolvedora FullStack',
      imagem: 'https://github.com/Larissakich.png',
      time: times[1].nome
    },
    {
      id: uuidv4(),
      favorito:false,
      nome: 'JASPER KENT',
      cargo: 'Especialista em .NET Development',
      imagem: 'https://github.com/JasperKent.png',
      time: times[1].nome
    },
    {
      id: uuidv4(),
      favorito:false,
      nome: 'FRANCESCO TALENTO',
      cargo: 'Desenvolvedor de software',
      imagem: 'https://github.com/FrancescoTalento.png',
      time: times[2].nome
    },
    {
      id: uuidv4(),
      favorito:false,
      nome: 'KAUA YUGY',
      cargo: 'Engenheiro de Software na HenricosF SA',
      imagem: 'https://github.com/Bellyzk.PNG',
      time: times[2].nome
    },
    {
      id: uuidv4(),
      favorito:false,
      nome: 'LARISSA KICH',
      cargo: 'Desenvolvedora FullStack',
      imagem: 'https://github.com/Larissakich.png',
      time: times[2].nome
    },
    {
      id: uuidv4(),
      favorito:false,
      nome: 'PAULO SILVEIRA',
      cargo: 'Especialista em .NET Development',
      imagem: 'https://github.com/JasperKent.png',
      time: times[2].nome
    },
    {
      id: uuidv4(),
      favorito:false,
      nome: 'FRANCESCO TALENTO',
      cargo: 'Desenvolvedor de software',
      imagem: 'https://github.com/FrancescoTalento.png',
      time: times[3].nome
    },
    {
      id: uuidv4(),
      favorito:false,
      nome: 'KAUA YUGY',
      cargo: 'Engenheiro de Software na HenricosF SA',
      imagem: 'https://github.com/Bellyzk.PNG',
      time: times[3].nome
    },
    {
      id: uuidv4(),
      favorito:false,
      nome: 'LARISSA KICH',
      cargo: 'Desenvolvedora FullStack',
      imagem: 'https://github.com/Larissakich.png',
      time: times[3].nome
    },
    {
      id: uuidv4(),
      favorito:false,
      nome: 'PAULO SILVEIRA',
      cargo: 'Especialista em .NET Development',
      imagem: 'https://github.com/JasperKent.png',
      time: times[3].nome
    },
    {
      id: uuidv4(),
      favorito:false,
      nome: 'FRANCESCO TALENTO',
      cargo: 'Desenvolvedor de software',
      imagem: 'https://github.com/FrancescoTalento.png',
      time: times[4].nome
    },
    {
      id: uuidv4(),
      favorito:false,
      nome: 'KAUA YUGY',
      cargo: 'Engenheiro de Software na HenricosF SA',
      imagem: 'https://github.com/Bellyzk.PNG',
      time: times[4].nome
    },
    {
      id: uuidv4(),
      favorito:false,
      nome: 'LARISSA KICH',
      cargo: 'Desenvolvedora FullStack',
      imagem: 'https://github.com/Larissakich.png',
      time: times[4].nome
    },
    {
      id: uuidv4(),
      favorito:false,
      nome: 'PAULO SILVEIRA',
      cargo: 'Especialista em .NET Development',
      imagem: 'https://github.com/JasperKent.png',
      time: times[4].nome
    },
    {
      id: uuidv4(),
      favorito:false,
      nome: 'FRANCESCO TALENTO',
      cargo: 'Desenvolvedor de software',
      imagem: 'https://github.com/FrancescoTalento.png',
      time: times[5].nome
    },
    {
      id: uuidv4(),
      favorito:false,
      nome: 'KAUA YUGY',
      cargo: 'Engenheiro de Software na HenricosF SA',
      imagem: 'https://github.com/Bellyzk.PNG',
      time: times[5].nome
    },
    {
      id: uuidv4(),
      favorito:false,
      nome: 'LARISSA KICH',
      cargo: 'Desenvolvedora FullStack',
      imagem: 'https://github.com/Larissakich.png',
      time: times[5].nome
    },
    {
      id: uuidv4(),
      favorito:false,
      nome: 'PAULO SILVEIRA',
      cargo: 'Especialista em .NET Development',
      imagem: 'https://github.com/JasperKent.png',
      time: times[5].nome
    },
  ]

    const [colaboradores, setColaboradores] = useState(inicial)

    const addNovoColaborador = (colaborador)=>{
        setColaboradores([...colaboradores,colaborador ])
    }
    const addNovoTime = (time)=>{
      console.log("add novo time",time);
      setTimes([...times,time]);
    }

    function setFavoritoColaborador(id){
      setColaboradores(colaboradores.map(colaborador => {
        if(colaborador.id == id) colaborador.favorito = !colaborador.favorito
        return colaborador
      }))
    }

    function deleteColaborador(id){
      setColaboradores(colaboradores.filter((c) => c.id !== id))
    }

    function changeTeamColor(color, nameTeam){
      setTimes(times.map((time) => {
        if(time.nome === nameTeam){
           time.cor = color
        }
        return time
      }))
    }
    
   return( 
        <div className='App'>
            <Banner/>
            <FormCadastro 
              aoCadastrarCard={addNovoColaborador} 
              aoCadastrarTime={addNovoTime} 
              times={times.map((time) => time.nome)}
            />
            {times.map((item) => 
                <Time 
                    key={item.id} 
                    time={item} 
                    colaboradores={colaboradores.filter((c) => c.time === item.nome)}
                    colorSetter= {changeTeamColor}
                    onDeleteColaborador={deleteColaborador}
                    onFavorite = {setFavoritoColaborador}
                />
                  )}
            <Rodape/>
        </div>
   )
}

export default App;