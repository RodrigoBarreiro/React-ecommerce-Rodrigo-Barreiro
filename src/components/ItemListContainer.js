import {Productos} from "./ProductosMock";
import { useState , useEffect } from "react";
import { ItemList } from "./ItemList";
import { useParams } from "react-router-dom";


export const ItemListContainer = () => {

    const {Categoria}  = useParams ()

    const [items, setItems ] = useState ([])
    
    useEffect ( () =>{

        const productosFiltrados = Productos.filter  (
            (productos) => productos.Categoria === Categoria)

        const task = new Promise ((resolve, reject) => {
                setTimeout(() => {
                    resolve (Categoria ? productosFiltrados : Productos )
                }, 2000 );  
            })
        task 
            .then ( (res) => { 
                setItems (res) } )
            .catch ( (err) => { 
                console.log ("Se rechazo") } )

        console.log ("se hizo la peticion")
    } , [Categoria] )

        console.log (items)

    return (
        <div >
            <ItemList items ={items} />
        </div>
    )
}


