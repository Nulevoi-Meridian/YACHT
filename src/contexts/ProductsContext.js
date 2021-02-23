import React, { useReducer } from 'react';
import axios from 'axios';
import { API_PRODUCTS } from '../helpers/constants';

export const productsContext = React.createContext();

const INIT_STATE = {
    products: [],
    editModalFormStatus: false,
    editProduct: null,
    productDetails: [],
    cartProducts: null
}

const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case "GET_PRODUCT_DATA": return {
            ...state,
            products: action.payload
        }
        case "OPEN_EDIT_FORM_MODAL": return {
            ...state,
            editModalFormStatus: true
        }
        case "CLOSE_EDIT_FORM_MODAL": return {
            ...state,
            editModalFormStatus: false
        }
        case "EDIT_PRODUCT": return {
            ...state,
            editProduct: action.payload
        }       
        case "GET_PRODUCT_DETAILS": return {
            ...state,
            productDetails: action.payload
        }
        case "GET_PRODUCT__FOR__CART": return {
            ...state,
            cartProducts: action.payload
        }
        default: return state;
    }
}

const ProductsContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE);

    const setProductData = async (newProduct) => {
        console.log(newProduct)
        await axios.post(API_PRODUCTS, newProduct)
        getProductData();
    }

    const getProductData = async () => {
        const { data }  = await axios(API_PRODUCTS);
        dispatch({
            type: "GET_PRODUCT_DATA",
            payload: data
        })
    }    

    const deleteProduct = async (productId) => {
        await axios.delete(`${API_PRODUCTS}/${productId}`);
        getProductData();
    }

    const getDetails = async (productId) => {
        const { data } = await axios(`${API_PRODUCTS}/${productId}`);
        dispatch({
            type: "GET_PRODUCT_DETAILS",
            payload: data
        })
    }

    const openEditFormModal = () =>{
        dispatch({
            type: "OPEN_EDIT_FORM_MODAL",
        })
    }

    const getEditId = async (productId) => {
        const { data } = await axios(`${API_PRODUCTS}/${productId}`);
        dispatch({
            type: "EDIT_PRODUCT",
            payload: data
        })
    }

    const editedProductData = async (editedItem) => {
        await axios.patch(`${API_PRODUCTS}/${editedItem.id}`, editedItem)
        getProductData();

        dispatch({
            type: "CLOSE_EDIT_FORM_MODAL"
        })
    }

    const getProductForCart = async (productId) => {
        const { data } = await axios(`${API_PRODUCTS}/${productId}`);
        console.log(data)
        dispatch({
            type: "GET_PRODUCT__FOR__CART",
            payload: data
        })
    }

    return (
        <productsContext.Provider value={{
            products: state.products,
            editModalFormStatus: state.editModalFormStatus,
            editProduct: state. editProduct,
            productDetails: state.productDetails,
            cartProducts: state.cartProducts,
            setProductData,
            getProductData,
            deleteProduct,
            openEditFormModal,
            getEditId,
            editedProductData,
            getDetails,
            getProductForCart
        }}>
            {children}
        </productsContext.Provider>
    )
}

export default ProductsContextProvider;