import React, { useContext, useEffect, useReducer, useState } from 'react';
import { productsContext } from './ProductsContext';

export const shoppingCartContext = React.createContext();

const ShoppingCartContextProvider = ({ children }) => {

    const { cartProducts } = useContext(productsContext);
    console.log(cartProducts)

    useEffect(() => {
        if (!localStorage.getItem('cartProducts')) {
            localStorage.setItem('cartProducts', '[]');
        }
        if (cartProducts) {
            const cart = JSON.parse(localStorage.getItem('cartProducts'));
            cart.push(cartProducts)
            localStorage.setItem('cartProducts', JSON.stringify(cart))
        }
    }, [cartProducts])

    
    return (
        <shoppingCartContext.Provider value={{
        }}>
            {children}
        </shoppingCartContext.Provider>
    )
}

export default ShoppingCartContextProvider;