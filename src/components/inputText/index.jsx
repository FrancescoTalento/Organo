import "./style.css"


const InputText = (props)=>{
    const label = props.label
    //const placeholderModificado = props.placeholder
    
    return(
        <div className="campo-texto">
            <label htmlFor={`Id${label}`}>{label}</label>
            <input id={`Id${label}`} value={props.valor} onChange={e=> props.setterFunc(e.target.value)} type="text" placeholder={props.placeholder} required={props.required}></input>
        </div>
    )
}


export default InputText