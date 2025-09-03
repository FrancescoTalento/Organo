import { useState } from 'react';
import Colaborador from '../Colaborador/colaborador';
import './time.css'

const Time = (props)=>{
    const [bgColor, bgColorSetter] = useState(props.time.corSecundaria)

    const bgColorStyle ={backgroundColor: bgColor};
    const borderColor ={borderColor:props.time.corPrimaria};

    return(
        props.colaboradores.length > 0 ? <section className='time' style={bgColorStyle}>
            <input type='color' className='input-color' value={bgColor} onChange={e => bgColorSetter(e.target.value)}/>
            <h3 style={borderColor}>{props.time.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map((colaborador, indice) => {
                    return <Colaborador 
                            key={indice} 
                            colaborador={colaborador} 
                            corDeFundo = {props.time.corPrimaria}
                            />
                })}
            </div>
        </section>
        : ''
    )
}

export default Time;

