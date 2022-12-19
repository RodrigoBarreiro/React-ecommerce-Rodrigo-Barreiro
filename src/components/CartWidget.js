import { useContext } from "react";
import {FaCartArrowDown} from "react-icons/fa";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

export const CartWidget = () => {

    const {cart} = useContext (CartContext)
    const count = cart.reduce (( (acc, cartProduct) => acc + cartProduct.quantity ) , 0 )  
    if (count === 0) {
        return null
    }
    
    return (
        <Link className="valor_carrito" to= "/cart">
            <div className="cartWidget">
                <FaCartArrowDown className="carrito"/> 
                <span> { count } </span>
            </div>
        </Link>
    )
}

