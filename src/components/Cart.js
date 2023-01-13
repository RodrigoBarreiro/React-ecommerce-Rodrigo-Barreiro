import { collection, doc, getDoc } from "firebase/firestore"
import { useContext, useEffect, useState} from "react"
import { Link } from "react-router-dom"
import {CartContext} from "../context/CartContext"
import { db } from "../FireBaseConfig"
import { Form } from "./Form"
import { Orders } from "./Orders"


export const Cart = () => {

    const {cart, clearCart, getTotalPrice, deleteProductById} = useContext ( CartContext)
    const [ info, setInfo ] = useState (false)
    const [ orderId, setOrderId] = useState (null)
    const [ order, setOrder] = useState ({})

    const count = cart.reduce (( (acc, cartProduct) => acc + cartProduct.quantity ) , 0 ) 


    useEffect( () => {
        if (orderId){
            const orderCollection = collection (db, "orders")  
            const ref = doc ( orderCollection, orderId)
            getDoc(ref)
            .then( res => {
                setOrder(
                    {
                        id: res.id,
                        ...res.data()
                    }
                )
            })
        }
    }, [orderId] )

    if (orderId){
        return <div>
            <Orders order = { order} orderId = {orderId}/>
        </div>
    }

return (
    <div className="container_compra">
        <div className="container_carrito">
            {
                cart.map ( item => (
                    <div className="tarjetas_carrito" key = {item.id}>
                        <img className="imagen_carrito" src= { item.img} alt="imagenCart" />
                        <h3> Nombre: {item.Nombre} </h3>
                        <p> Precio: ${item.precio} </p>
                        <p> Unidades:{item.quantity}</p>
                        <button className="btn_quitar_carrito" onClick={() => deleteProductById (item.id) }>Quitar articulo</button>
                    </div>
                ))}
            {cart.length <1 &&  <h2 className="no_elementos">No hay elementos</h2>} 
            <div className="cotainer_btn">
                < Link to="/"><button className="btn_inicio">Volver al Inicio</button ></Link>
            </div>
        </div>

        <div className="info_compra">
            <div className="items compras">
                <h3>Cantidad de Items: {count} </h3>
                <h3>Descuentos:</h3>
                <h3>Total: { getTotalPrice() } </h3>
            </div>

            {
                info ? <Form cart = { cart } getTotalPrice = { getTotalPrice } setOrderId = {setOrderId} clearCart = {clearCart} /> : (
                    cart.length > 0 && 
                    <div className="btns">    
                        <button className="btn_compra" onClick={() => setInfo (true) }>Comprar</button>
                        <button className="btn_compra" onClick={clearCart}>Limpiar Carrito</button>
                    </div>
                )
            }
        </div>
    </div>
    )
}
