import { useState } from 'react';
import Colaborador from '../Colaborador/colaborador';
import hexToRgba from 'hex-to-rgba';
import './time.css'

const Time = (props)=>{

    const bgColorStyle ={backgroundColor: hexToRgba(props.time.cor,"0.6")};
    const borderColor ={borderColor:props.time.cor};

    const colorChangeHandler = (event)=>{
        props.colorSetter(event.target.value,props.time.nome);
        
    }
    return(
        props.colaboradores.length > 0 ? <section className='time' style={bgColorStyle}>
            <input type='color' className='input-color' value={props.time.cor} onChange={colorChangeHandler}/>
            <h3 style={borderColor}>{props.time.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map((colaborador) => {
                    return <Colaborador 
                            key={colaborador.id} 
                            colaborador={colaborador} 
                            corDeFundo = {props.time.cor}
                            onDelete = {props.onDeleteColaborador}
                            />
                })}
            </div>
        </section>
        : ''
    )
}

export default Time;

