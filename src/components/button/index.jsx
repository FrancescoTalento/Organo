import "./style.css"


const CustomButton = (props)=>{
    return(
        <button className="botao">
            {props.children}
        </button>
    )
}

export default CustomButton