import { useState } from "react"
import { addDoc, collection, serverTimestamp, doc, updateDoc } from "firebase/firestore"
import { db } from "../FireBaseConfig"


export const Form = ( {cart, getTotalPrice, setOrderId, clearCart} ) => {

    const [ userData , setUserData] = useState ({name: "", email: "", direction: "", phoneNumber: "", lastName: "" })

    const fullPurchase = getTotalPrice ()

    const handleSubmit = ( event) => {
        event.preventDefault ()


        const purchaseOrder = {
            buyer: userData,
            items: cart,
            total: fullPurchase,
            date: serverTimestamp ()
        }


        const orderGroup = collection (db, "orders")
        addDoc (orderGroup, purchaseOrder)
        .then (res => setOrderId (res.id))

        cart.map (product => (
            updateDoc ( doc (db, "products" , product.id ) , {stock : product.stock - product.quantity} )
        ))

        clearCart ()
    }

    return (
        <div className="contenedor_formulario">
            <form className="formulario" action= "" onSubmit={handleSubmit}>
                <input 
                    type = "text" 
                    placeholder="Ingrese su Nombre" 
                    name="name" 
                    onChange={ (event) => setUserData ( {...userData, name: event.target.value})} 
                    value = { userData.name } 
                    required
                />
                <input 
                    type = "text" 
                    placeholder="Ingrese su Apellido" 
                    name="lastName" 
                    onChange={ (event) => setUserData ( {...userData, lastName: event.target.value})} 
                    value = { userData.lastName } 
                    required
                />
                <input 
                    type = "email" 
                    placeholder="Ingrese su Email"
                    name="email" 
                    onChange={ (event) => setUserData ( {...userData, email: event.target.value})} 
                    value = {userData.email}
                    required
                />
                <input 
                    type = "text" 
                    placeholder="Ingrese su Direccion" 
                    name="direction" 
                    onChange={ (event) => setUserData ( {...userData, direction: event.target.value})} 
                    value = { userData.direction }
                    required
                />
                <input 
                    type = "tel" 
                    placeholder="Ingrese su Telefono" 
                    name="phoneNumber" 
                    onChange={ (event) => setUserData ( {...userData, phoneNumber: event.target.value})} 
                    value = { userData.phoneNumber}
                    required 
                />
                <button type ="submit" className="btn_formulario" > Finalizar Compra </button>
            </form>
        </div>
    )
}

