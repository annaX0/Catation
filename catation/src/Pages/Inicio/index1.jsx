import Header from "../../Components/header";
import Gato from '../../Assets/willian.png'
import Search from '../../Assets/search.png';
import Doar from '../../Assets/doe.png';
import '../Inicio/style.css'
import Cards from "../../Components/cards";
import Filter from '../../Assets/filter.png'

function Home(){
        return(
            <div>
                <Header></Header>
                <div className="conteiner">
                    <div className="buscar">
                    <input type="search" name="busca" id="" /><img src={Search} alt="" srcset="" />
                    </div>

                    <div className="filter">
                    <label for="filter">Filtro</label>
                    <select name="filter" id="filter">
                    <option value="Ordem alfabetica">Ordem Alfabética</option>
                    <option value="Ordem alfabetica">Ordem Alfabética</option>
                    <option value="Ordem alfabetica">Ordem Alfabética</option>
                    </select>
                    
                    <img src={Filter} alt="" />
                    </div>
                    <Cards 
                    nome="Willian" 
                    foto={Gato}
                    ></Cards>

                    <Cards 
                    nome="Bolinho" 
                    foto={Gato}
                    ></Cards>

                    <Cards 
                    nome="Cloe" 
                    foto={Gato}
                    ></Cards>

                </div>
            </div>
        )
}
export default Home;