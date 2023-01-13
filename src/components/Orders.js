import React from 'react'
import { Link } from 'react-router-dom'


export const Orders = ({order, orderId}) => {
    return (
        <div className="contenedor_factura">
            <h2>Factura</h2>
            <div className="contendor_logo">
                <img className="logo_factura" src="https://res.cloudinary.com/dntew63nw/image/upload/v1671572214/logoTipo2_xjuhgb.png" alt="logo_fac"></img>
                <h2>Abstract</h2>
            </div>
            <div className="contenedor_datos">
                <h2>Tu orden de compra es: {orderId} </h2>
                <h4>Compra de: {order?.buyer?.name} </h4>
                <h4>Apellido: {order?.buyer?.lastName} </h4>
                <h4>Telefono de contacto: {order?.buyer?.phoneNumber} </h4>
                <h4>Email: {order?.buyer?.email} </h4>
                <h4>Fecha de la compra: {order?.date?.toDate().toString()}</h4>
                <h4 className="detalle_item">Items: {order?.items?.map((item, i) => (
                    <p key={i}>{item.Nombre} x {item.quantity}</p>
                ))} </h4>
                <h4>Total: {order?.total} </h4>
            </div>
            <Link to="/"><button className='btn_factura'>Seguir Comprando</button></Link>
        </div>
    )
}
