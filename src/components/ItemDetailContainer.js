import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "./ItemDetail";
import { getDoc, doc, collection } from "firebase/firestore";
import {db} from "../FireBaseConfig";
export const ItemDetailContainer = () => {

    const [product, setProduct] = useState (null)
    
    const {id} = useParams ()


    useEffect( () => {

        /* const task = new Promise ((resolve, reject) => {
            setTimeout(() => {
                resolve (Productos.find (producto => producto.id === +id) )
            }, 2000 );  
        })
    task 
        .then ( (res) => { 
            setProduct (res) } )
        .catch ( (err) => { 
            console.log ("Se rechazo") } ) */

        const itemCollection = collection (db, "products")  
        const ref = doc ( itemCollection, id)
        getDoc(ref)
        .then( res => {
            setProduct (
                {
                id: res.id,
                ...res.data()
                }
            )
        })

    }, [id] )


    return (
        <div>
            {product && <ItemDetail product ={product} />}
        </div>
    )
}



