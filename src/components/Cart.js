import { useContext } from "react"
import {CartContext} from "../context/CartContext"


export const Cart = () => {

    const {cart, clearCart} = useContext( CartContext)

        console.log (cart)

return (
    <div>
        {
            cart.map ( item => (
                <div className="container_carrito" key = {item.Id}> 
                    <img className="imagen_carrito" src= { item.img} alt="imagenCart" />
                    <div className="carrito_contenido">
                        <h2> Nombre: {item.Nombre} </h2>
                        <p> Precio: ${item.precio} </p>
                        <p> Unidades:{item.quantity}</p>
                    </div>    
                </div>
            ))
        }
        <div>
            <button>Comprar</button>
            <button onClick={clearCart}>Limpiar Carrito</button>
        </div>
    </div>
)
}
