import { useState } from 'react';
import Colaborador from '../Colaborador/colaborador';
import './time.css'

const Time = (props)=>{
    const bgColorStyle ={backgroundColor: props.time.corSecundaria};
    const borderColor ={borderColor:props.time.corPrimaria};

    const colorChangeHandler = (event)=>{
        props.colorSetter(event.target.value,props.time.nome);
    }
    return(
        props.colaboradores.length > 0 ? <section className='time' style={bgColorStyle}>
            <input type='color' className='input-color' value={props.time.corSecundaria} onChange={colorChangeHandler}/>
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

