import React, { useReducer } from 'react';
import axios from 'axios';
import { API_PRODUCTS } from '../helpers/constants';

export const productsContext = React.createContext();

const INIT_STATE = {
    products: [],
    editModalFormStatus: false,
    editProduct: null,
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
        case "EDIT_PRODUCT": return {
            ...state,
            editProduct: action.payload
        } 
        default: return state;
    }
}

const ProductsContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE);

    //Забираем данные с инпутов и помещаем в базу
    const setProductData = async (newProduct) => {
        console.log(newProduct)
        await axios.post(API_PRODUCTS, newProduct)
        getProductData();
    }

    // Получаем актуальные данные из базы, для отображения
    const getProductData = async () => {
        const { data }  = await axios(API_PRODUCTS);
        dispatch({
            type: "GET_PRODUCT_DATA",
            payload: data
        })
    }    

    // Удаляем данные из базы
    const deleteProduct = async (productId) => {
        await axios.delete(`${API_PRODUCTS}/${productId}`);
        getProductData();
    }

    //Получаем id по клику на ссылку Learn more
    // const getDetails = async (productId) => {
    //     const { data } = await axios(`${API_PRODUCTS}/${productId}`);
    //     dispatch({
    //         type: "GET_PRODUCT_DETAILS",
    //         payload: data
    //     })
    // }

    // Открываем модальное окно для редактирования
    const openEditFormModal = () =>{
        dispatch({
            type: "OPEN_EDIT_FORM_MODAL",
        })
    }

    // Получаем id по клику на кнопку редактирования и вытаскиваем нужный объект
    const getEditId = async (productId) => {
        const { data } = await axios(`${API_PRODUCTS}/${productId}`);
        dispatch({
            type: "EDIT_PRODUCT",
            payload: data
        })
    }

    // Получаем отредактированный объект и помещаем в базу данных
    const editedProductData = async (editedItem) => {
        await axios.patch(`${API_PRODUCTS}/${editedItem.id}`, editedItem)
        getProductData();

        dispatch({
            type: "CLOSE_EDIT_FORM_MODAL"
        })
    }

     //Получаем товар для отображения в новинках
    // const getLatestData = async () => {
    //     const { data } = await axios(API_PRODUCTS);
    //     const newItem = data.filter(item => {
    //         if(item?.latest) {
    //             return item;
    //         }
    //     })
    //     dispatch ({
    //         type: "GET_LATEST",
    //         payload: newItem
    //     })
    // }    

    return (
        <productsContext.Provider value={{
            products: state.products,
            editModalFormStatus: state.editModalFormStatus,
            editProduct: state. editProduct,
            setProductData,
            getProductData,
            deleteProduct,
            openEditFormModal,
            getEditId,
            editedProductData
        }}>
            {children}
        </productsContext.Provider>
    )
}

export default ProductsContextProvider;