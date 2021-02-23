import React, { useContext, useEffect, useReducer, useState } from 'react';
import { productsContext } from './ProductsContext';

export const shoppingCartContext = React.createContext();

// const INIT_STATE = {
//     products: [],
//     editModalFormStatus: false,
//     editProduct: null,
//     productDetails: [],
//     cartProducts: []
// }

// const reducer = (state = INIT_STATE, action) => {
//     switch (action.type) {
//         case "GET_PRODUCT_DATA": return {
//             ...state,
//             products: action.payload
//         }
//         case "OPEN_EDIT_FORM_MODAL": return {
//             ...state,
//             editModalFormStatus: true
//         }
//         case "CLOSE_EDIT_FORM_MODAL": return {
//             ...state,
//             editModalFormStatus: false
//         }
//         case "EDIT_PRODUCT": return {
//             ...state,
//             editProduct: action.payload
//         }       
//         case "GET_PRODUCT_DETAILS": return {
//             ...state,
//             productDetails: action.payload
//         }
//         case "GET_PRODUCT__FOR__CART": return {
//             ...state,
//             cartProducts: action.payload
//         }
//         default: return state;
//     }
// }

const ShoppingCartContextProvider = ({ children }) => {

    const { cartProducts } = useContext(productsContext);

  

    // const setItemToLocalStorage = (products) => {
    //     const cartItems = JSON.parse(localStorage.getItem('cartProducts'));
    //     cartItems.push(products)
        
    //     localStorage.setItem('cartProducts', JSON.stringify(cartItems))

    //     if (!localStorage.getItem('cartProducts')) {
    //         localStorage.setItem('cartProducts', '[]');
    //         const newData = JSON.parse(localStorage.getItem('person-data'));
    //     }
    // }
    // setItemToLocalStorage(cartProducts);
    

    //Помещаем данные из формы в localStorage
    // function setItemToStorage (item) {
    //     const dataStorage = JSON.parse(localStorage.getItem('person-data'));
    //     dataStorage.push(item);

    //     localStorage.setItem('person-data', JSON.stringify(dataStorage));
    // }

    //Отображаем данные из localStorage на страцице
    // function render() {
    //     if(!localStorage.getItem('person-data')) {
    //         localStorage.setItem('person-data', '[]');
    //     }

    //     const newData = JSON.parse(localStorage.getItem('person-data'));
    //     mainContact.innerHTML = '';

    //     newData.forEach(item => {
    //         const contactItem = document.createElement('div');
    //         mainContact.append(contactItem);
    //         contactItem.innerHTML = `<span>${item[0]}<br></span><span>${item[1]}<br></span>${item[2]}<button class="btn-delete"><img src="./img/delete.svg"></button><button id="edit">Редактировать контакт</button>`;
    //     });
    // }




    // const [state, dispatch] = useReducer(reducer, INIT_STATE);

    // const setProductData = async (newProduct) => {
    //     console.log(newProduct)
    //     await axios.post(API_PRODUCTS, newProduct)
    //     getProductData();
    // }

    // const getProductData = async () => {
    //     const { data }  = await axios(API_PRODUCTS);
    //     dispatch({
    //         type: "GET_PRODUCT_DATA",
    //         payload: data
    //     })
    // }    

    return (
        <shoppingCartContext.Provider value={{
        }}>
            {children}
        </shoppingCartContext.Provider>
    )
}

export default ShoppingCartContextProvider;