import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "./ItemDetail";
import { Productos } from "./ProductosMock";

export const ItemDetailContainer = () => {

    const [product, setProduct] = useState (null)
    
    const {Id} = useParams ()


    useEffect( () => {

        const task = new Promise ((resolve, reject) => {
            setTimeout(() => {
                resolve (Productos.find (producto => producto.Id === +Id) )
            }, 2000 );  
        })
    task 
        .then ( (res) => { 
            setProduct (res) } )
        .catch ( (err) => { 
            console.log ("Se rechazo") } )

    }, [Id] )


    return (
        <div>
            {product && <ItemDetail product ={product} />}
        </div>
    )
}



