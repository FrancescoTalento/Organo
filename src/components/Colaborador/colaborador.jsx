import { AiFillCloseCircle } from "react-icons/ai";
import './colaborador.css'



const Colaborador = ({colaborador, corDeFundo,onDelete}) => {
    return(
    <div className='colaborador'>
        <AiFillCloseCircle 
            className='deletar'
            onClick={() => onDelete(colaborador.id)}
        />
        <div className='cabecalho' style={{backgroundColor:corDeFundo}}>
            <img src={colaborador.imagem} alt=''/>
        </div>
        <div className='rodape'>
            <h4>{colaborador.nome}</h4>
            <h5>{colaborador.cargo}</h5>
        </div>

    </div>)
}

export default Colaborador;