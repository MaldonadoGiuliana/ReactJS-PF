import "./navbar.css"
import "./CartWidget"
import CartWidget from "./CartWidget"
import { Link, NavLink } from "react-router-dom"

const NavBar = () => {

    return(
        <nav className="navbar">
            <div className="divNav">
                <h1><Link to="/" className="h1">Closteria</Link></h1>
                <ul className="itempadre">
                    <li className="itemHijo"><NavLink to="/category/jeans"  className={({isActive}) =>  ( isActive ? "active-link" : "" )} >Jens</NavLink></li>
                    <li className="itemHijo"><NavLink to="/category/camperas" className={({isActive}) =>  ( isActive ? "active-link" : "" )}>Camperas</NavLink></li>
                    <li className="itemHijo"><NavLink to="/category/remeras"className={({isActive}) =>  ( isActive ? "active-link" : "" )} >Remeras</NavLink></li>
                </ul>
                <CartWidget/>
            </div>
            
                
            
        </nav>
    )
}
export default NavBar