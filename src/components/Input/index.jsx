import "./style.css"


const Input = ({type = 'text',...props})=>{
    const label = props.label
    //const placeholderModificado = props.placeholder
    
    return(
        <div className={`campo campo-${type}`}>
            <label htmlFor={`Id${label}`}>{label}</label>
            <input id={`Id${label}`} value={props.valor} onChange={e=> props.setterFunc(e.target.value)} type={type} placeholder={props.placeholder} required={props.required}></input>
        </div>
    )
}


export default Input