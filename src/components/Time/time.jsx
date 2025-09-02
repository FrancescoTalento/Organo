import Colaborador from '../Colaborador/colaborador';
import './time.css'

const Time = (props)=>{

    const bgColor ={backgroundColor: props.time.corSecundaria};
    const borderColor ={borderColor:props.time.corPrimaria};

    return(
        props.colaboradores.length > 0 ? <section className='time' style={bgColor}>
            <h3 style={borderColor}>{props.time.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map((colaborador) => {
                    return <Colaborador 
                            key={colaborador.nome} 
                            nome={colaborador.nome} 
                            cargo={colaborador.cargo} 
                            imagem={colaborador.imagem}
                            corPrimaria = {props.time.corPrimaria}
                            />
                })}
            </div>
        </section>
        : ''
    )
}

export default Time;

