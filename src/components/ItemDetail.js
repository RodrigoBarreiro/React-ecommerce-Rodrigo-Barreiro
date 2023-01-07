import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import {ItemCount} from "./ItemCount";


export const ItemDetail = ({ product }) => {

    const { addToCart , getQuantityById } = useContext(CartContext)

    const onAdd = ( quantity ) => {
        addToCart({...product, quantity: quantity})
    } 

    const quantity = getQuantityById (product.id)

    return(
        <div className = "articulo_detalle">
            <img className="articulo_img" src={product.img} alt= "deco2"/> 
            <div className="articulo_content" >
                <h2 className="titulo_art">{product.Nombre}</h2>
                <p className="texto_art" >{product.Descripcion}</p>
                <p className="precio_art"> $ {product.precio}</p>
                <p className="stock">Stock Disponoble {product.stock} </p>
                <ItemCount onAdd={ onAdd } stock ={product.stock} initial={quantity} />
            </div>
        </div>
    )
}