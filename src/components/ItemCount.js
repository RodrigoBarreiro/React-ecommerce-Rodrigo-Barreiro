import { useEffect, useState } from "react";


export const ItemCount = ({ stock, initial = 1 , onAdd }) => {
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
























/* 
export const ItemCount = () => {
    const [ counter , setCounter] = useState = (0)
    const suma = () => {
        return setCounter (counter + 1);
    };
    const resta = () => {
        if ( counter === 0){ 
            return counter;
        } else {
            return setCounter ( counter - 1);
        }
    };
    return (
        <div>
            <button onClick={suma}>+</button>
            <p>{counter}</p>
            <button onClick={resta}>-</button>
            <button>Añadir Al Carrito</button>
        </div>
    )
}  */






















/* export const ItemCount = () => {
    const [contador, setContador] = useState = (0);
    const suma = () => {
        return setContador (contador + 1);
    };
    const resta = () => {
        if (contador === 0){
            return contador;
        } else {
            return setContador (contador - 1);
        }
    };
    return (
        <div>
            <button onClick={suma}>+</button>
            <p>{contador}</p>
            <button onClick={resta}>-</button>
            <button>Añadir Al Carrito</button>
        </div>
    )
} */