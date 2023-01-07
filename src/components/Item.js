import { Link } from "react-router-dom"



export const Item = ({element}) => {
    return (
        <div className = "articulo">
            <img className="articulo_img" src= {element.img} alt=""/>
            <div className="articulo_content">
                <h2 className="titulo_art">{element.Nombre}</h2>
                <p className="texto_art">{element.Descripcion}</p>
                <p className="precio_art"> ${element.precio}</p>
                <Link to= {`/item/${element.id}`}className="mas_art">Ver mas</Link>
                <p className="stock">Stock Disponible {element.stock}</p>
                {/* <ItemCount initial={1} stock= {element.stock}  /> */}
            </div>
        </div> 
    )
}