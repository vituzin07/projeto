import { Link } from "react-router-dom";
import './navbar.css'
export default function Navbar(){
    return(
        <nav>
            <ul>
                <li>
                    <Link to='/'>Inicio</Link>
                </li>
                <li>
                    <Link to='Sobre'>Sobre</Link>
                </li>
            </ul>
        </nav>
    )
}