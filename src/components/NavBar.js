import { CartWidget } from "./CartWidget"

export const NavBar = () => {

    return (
        <header className= "header">
            <div className = "header_container"> 
                <div className="logo_container">
                    <img className="logo_tipo" src="../images/logoTipo2.png" alt="logo"></img>
                    <h1>Abstract</h1>
                </div>
                <ul className="navbar">
                    <li className="navbar_link"><a href="/starWars">StarWars</a></li>
                    <li className="navbar_link"><a href="/starWars">Pokemon</a></li>
                    <li className="navbar_link"><a href="/starWars">LordOfTheRings</a></li>
                    <CartWidget />
                </ul>
            </div>
        </header>
    )
}