import { CartWidget } from "./CartWidget"
import {Link} from "react-router-dom"

export const NavBar = () => {

    return (
        <header className= "header">
            <div className = "header_container"> 
                <div>
                    <Link to= "/" className="logo_container">
                        <img className="logo_tipo" src="https://res.cloudinary.com/dntew63nw/image/upload/v1671572214/logoTipo2_xjuhgb.png" alt="logo"></img>
                        <h1>Abstract</h1>
                    </Link>
                </div>
                <ul className="navbar">
                    <Link className="navbar_link" to="/">Todas</Link>
                    <Link className="navbar_link" to="/category/StarWars">StarWars</Link>
                    <Link className="navbar_link" to="/category/Pokemon">Pokemon</Link>
                    <Link className="navbar_link" to="/category/LordOfTheRings">LordOfTheRings</Link>
                    <CartWidget />
                </ul>
            </div>
        </header>
    )
}