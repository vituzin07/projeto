import { Link } from "react-router-dom";
import './navbar.css'
export default function Navbar(){
    return(
        <nav>
            <div className="Navbar">
                    <Link to='/'><div className="inicio">Inicio</div></Link>
                    <Link to='Sobre'><div className="Sobre">Sobre</div></Link>
                    <div className="SearchBar"><input type="text" placeholder="Pesquise"></input></div>
            </div>

        </nav>
    )
}