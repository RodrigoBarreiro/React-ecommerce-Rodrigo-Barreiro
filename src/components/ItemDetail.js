import {ItemCount} from "./ItemCount";


export const ItemDetail = ({product}) => {
    console.log (product)
    return(
        <div className = "articulo_detalle">
        <img className="articulo_img" src={product.img} alt= "deco2"/> 
        <div className="articulo_content" >
            <h2 className="titulo_art">{product.Nombre}</h2>
            <p className="texto_art" >{product.Descripcion}</p>
            <p className="precio_art"> $ {product.precio}</p>
            <p className="stock">Stock Disponoble {product.stock} </p>
            <ItemCount initial={1} stock ={product.stock} />
        </div>
    </div>
    )
}