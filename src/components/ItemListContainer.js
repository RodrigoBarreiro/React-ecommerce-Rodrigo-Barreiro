import { useState , useEffect } from "react";
import { ItemList } from "./ItemList";
import { useParams } from "react-router-dom";
import RingLoader from "react-spinners/RingLoader";
import {  getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../FireBaseConfig";
const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
};


export const ItemListContainer = () => {

    const {Categoria}  = useParams ()

    const [items, setItems ] = useState ([])
    const [isLoading, setIsLoading] = useState (false)
    
    useEffect ( () =>{

        setIsLoading(true)

        /* const productosFiltrados = Productos.filter  (
            (productos) => productos.Categoria === Categoria) */

        /* const task = new Promise ((resolve, reject) => {
                setTimeout(() => {
                    resolve (Categoria ? productosFiltrados : Productos )
                }, 500 );  
            })
        task 
            .then ( (res) => { 
                setItems (res) } )
            .catch ( (err) => { 
                console.log ("Se rechazo") } ) */

        const itemCollection = collection( db, "products")

        if (Categoria) {
            const q = query (itemCollection, where( "Categoria", "==" , Categoria)  )
            getDocs(q)
        .then((res) => {
            const products = res.docs.map( product => {
                return {
                    ...product.data(),
                    id: product.id
                }
            })
            setItems(products)
        })
        .catch((err) => console.log (err))

        }else {

        getDocs(itemCollection)
        .then((res) => {
            const products = res.docs.map( product => {
                return {
                    ...product.data(),
                    id: product.id
                }
            })
            setItems(products)
        })
        .catch((err) => console.log (err))
    }
        setTimeout( () => {
            setIsLoading (false)
        }, 2000 )

    } , [Categoria] ) 

    return (
        <div  >
            {
                isLoading ? <RingLoader
                color={"#ffb6b9"}
                cssOverride={override}
                size={100}
                aria-label="Loading Spinner"
                data-testid="loader"
                /> : <ItemList items ={items} />
            }
        </div>
    )
}


