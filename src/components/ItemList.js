import { Item } from "./Item";

export const ItemList = ({ items }) => {
    return (
        <div className="conjunto_articulos" >
            {items.map ((element) => {
                return (
                    <Item key={element.Nombre} element = {element}/>
                )  
            })}
        </div>
    )
}