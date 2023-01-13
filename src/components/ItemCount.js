import { useEffect, useState } from "react";


export const ItemCount = ({ stock, initial = 0 , onAdd }) => {
const [counter, setCounter] = useState(initial)

    useEffect (() => {
        setCounter (initial)
    } ,[initial] )

    const sumar = () => {
    if (counter < stock) {
        return setCounter(counter + 1)
        }
    }

    const restar = () => {
        if (counter > 1) {
            return setCounter(counter - 1)
        }
    }

    return (
        <div className="counter">
            <button className="btn_sumar" onClick={sumar}>+</button>
            <h2>{counter}</h2>
            <button className="btn_restar" onClick={restar}>-</button>
            <button className="btn_agregar_carrito" onClick={() => onAdd(counter)}>agregar al carrito</button>
        </div>
        )
    }