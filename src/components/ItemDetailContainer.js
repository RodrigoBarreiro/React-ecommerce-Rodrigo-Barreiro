import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Productos } from "./ProductosMock";


export const ItemDetailContainer = () => {

    const [product, setProduct] = useState ({})
    
    const {Id} = useParams ()


    useEffect( () => {

        const productoSeleccionado = Productos.find (producto => producto.Id === +Id)
        setProduct(productoSeleccionado)
    }, [Id] )


    return (
    <div>
        <h2>{product.Nombre}</h2>
        <h2>{product.Descripcion}</h2>
        <h2> $ {product.precio}</h2>
        <img src={product.img} alt= "deco"/> 
    </div>
    )
}
