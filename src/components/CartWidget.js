import {FaCartArrowDown} from "react-icons/fa";
import { Link } from "react-router-dom";

export const CartWidget = () => {
    return (
        <Link className="valor_carrito" to= "/cart">
            <div className="cartWidget">
                <FaCartArrowDown className="carrito"/> 
                <span> 0 </span>
            </div>
        </Link>
    )
}

