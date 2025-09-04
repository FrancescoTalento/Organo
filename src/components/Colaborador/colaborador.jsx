import { AiFillCloseCircle } from "react-icons/ai";
import { GoHeart,GoHeartFill } from "react-icons/go";
import './colaborador.css'



const Colaborador = ({colaborador, corDeFundo,onDelete,onFavorite}) => {
    
    const onClickFavoritarHandler= () => {
        onFavorite(colaborador.id)
    } 

    const propsFavoritar =
    {
        onClick:onClickFavoritarHandler,
        size: 25,
        className:"favoritar-icon"
    }
    
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
            <div className="favoritar">
                {colaborador.favorito ? 
                <GoHeartFill {...propsFavoritar} color="FF0000"/> : 
                <GoHeart {...propsFavoritar}/>}     
            </div>
        </div>

    </div>)
}

export default Colaborador;