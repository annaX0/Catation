import Header from "../../Components/header";
import Gato from '../../Assets/willian.png'

function Home(){
        return(
            <div>
                <Header></Header>
                <div className="conteiner">
                    {/* <input type="search" name="busca" id="" />
                    <option value="filtro"></option> */}

                    <div className="cards">
                        <h3>Willian</h3>
                        <img src={Gato}></img>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum eveniet quam beatae reprehenderit dolores ipsam laudantium pariatur doloribus nostrum, molestiae, amet accusantium saepe voluptas esse unde impedit. Impedit, aut corrupti!</p>
                        <button>Adotar</button>
                    </div>

                    <div className="cards">
                        <h3>Willian</h3>
                        <img src={Gato}></img>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum eveniet quam beatae reprehenderit dolores ipsam laudantium pariatur doloribus nostrum, molestiae, amet accusantium saepe voluptas esse unde impedit. Impedit, aut corrupti!</p>
                        <button>Adotar</button>
                    </div>

                    <div className="cards">
                        <h3>Willian</h3>
                        <img src={Gato}></img>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum eveniet quam beatae reprehenderit dolores ipsam laudantium pariatur doloribus nostrum, molestiae, amet accusantium saepe voluptas esse unde impedit. Impedit, aut corrupti!</p>
                        <button>Adotar</button>
                    </div>
                </div>
            </div>
        )
}
export default Home;