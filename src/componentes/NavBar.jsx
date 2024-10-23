import "./navbar.css"
import "./CartWidget"
import CartWidget from "./CartWidget"
import { Link } from "react-router-dom"

const NavBar = () => {

    return(
        <nav className="navbar">
            <div className="divNav">
                <h1 className="h1"><Link to="/">Closteria</Link></h1>
                <ul className="itempadre">
                    <li className="itemHijo"><Link to="/category/jeans" >Jens</Link></li>
                    <li className="itemHijo"><Link to="/category/buzos">Buzos</Link></li>
                    <li className="itemHijo"><Link to="/category/remeras">Remeras</Link></li>
                </ul>
                <CartWidget/>
            </div>
            
                
            
        </nav>
    )
}
export default NavBar