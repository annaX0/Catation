import '../cards/style.css'
import Doar from '../../Assets/doe.png'

function Cards(props){
    return(
        <div className="cards">
            <img src={props.foto}></img>
            <div className="nome">
            <div className='IconDoar'>
            <a href='#'><img src={Doar} alt="" /></a>
            </div>
            <h3>{props.nome}</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum eveniet quam beatae reprehenderit dolores ipsam laudantium pariatur doloribus nostrum, molestiae, amet accusantium saepe voluptas esse unde impedit. Impedit, aut corrupti!</p>
            <button>Adotar</button>
            </div>
        </div>
    )
}
export default Cards;