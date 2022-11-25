

import {FaCartArrowDown} from "react-icons/fa"

export const CartWidget = () => {
    return (
        <div className="cartWidget">
            <FaCartArrowDown className="carrito"/> 
            <span>0</span>
        </div>
    )
}

