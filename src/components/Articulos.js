
export const Articulos = ( {img, titulo, content, precio}) => {

    return (
        <article className = "articulo">
            <img className="articulo_img" src= {img} alt=""/>
            <div className="articulo_content">
                <h2 className="titulo_art">{titulo}</h2>
                <p className="texto_art">{content}</p>
                <p className="precio_art">{precio}</p>
            </div>
        </article>
    )
}