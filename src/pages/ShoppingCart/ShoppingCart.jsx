import React from 'react';
import './ShoppingCart.css'
import Icon from '@material-ui/core/Icon'


const ShoppingCart = () => {



    return (
        <div className='main'>
            <div className='form_cart'>
                <img item xs={6} sm={3} src="https://www.superyachtsmonaco.com/app/uploads/2020/09/JCB13687-1-2000x1333.jpg" alt="" />
                <div>
                    <p>title</p>
                    <p>year</p>
                    <p>price</p>
                </div>
            </div>
            <div className='form_cart'>
                <img item xs={6} sm={3} src="https://www.superyachtsmonaco.com/app/uploads/2020/09/JCB13687-1-2000x1333.jpg" alt="" />
                <div>
                    <p>title</p>
                    <p>year</p>
                    <p>price</p>
                </div>
            </div>
            <div className='form_cart'>
                <img item xs={6} sm={3} src="https://www.superyachtsmonaco.com/app/uploads/2020/09/JCB13687-1-2000x1333.jpg" alt="" />
                <div>
                    <p>title</p>
                    <p>year</p>
                    <p>price</p>
                </div>
            </div>
            <div className='shopping_cart'>
                <h2>Total:</h2>
                <button>To order</button>
            </div>
        </div>



    );
};

export default ShoppingCart;