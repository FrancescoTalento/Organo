import "./style.css"


const ComboBox = (props)=>{
    const listaOptions = props.times

    return(
        <div className="lista-suspensa">
            <label>Times</label>
            <select required={props.required}  onChange={e=> props.setterFunc(e.target.value)} value={props.valor}>
                {listaOptions.map((value) => {
                    return <option key={value} >{value}</option>
                })}
            </select>
        </div>
    )
}

export default ComboBox