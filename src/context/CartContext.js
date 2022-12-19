import { createContext, useState } from "react";

export const CartContext = createContext ()
export const CartContextProvider = ( {children} ) => {

    const [cart, setCart] = useState ([])

    const addToCart = (element) => {
        if (isInCart(element) ){

            let newArray = cart.map (( product ) => {
                if (product.Id === element.Id){
                    let newProduct ={
                        ...product,
                        quantity: product.quantity + element.quantity
                    }
                    return newProduct
                }else {
                    return product
                }
            })

            setCart (newArray)

        } else {
            setCart ( [...cart , element] )
        }
    }

    const isInCart = (item) => {
        return cart.some ( elemento => elemento.Id === item.Id)
    }

    const clearCart = () => {

        setCart ( [] )
    }

    const data = { 
        cart,
        addToCart,
        clearCart
    }

    return (
        <CartContext.Provider value={ data }> 
            {children}
        </CartContext.Provider>
    )
}
