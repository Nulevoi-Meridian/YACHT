import React from 'react';
import './ShoppingCartProducts.css';

const ShoppingCartProducts = () => {

    return (
        <div className="cart-main">
            <div className="container-project">
                <div className="cart__title">
                    <h2>YOUR SHOPPING CART</h2>
                </div>
                <div className="cart__inner">
                    <div className="cart__start">
                        <img src="https://www.superyachtsmonaco.com/app/uploads/2020/09/JCB13687-1-2000x1333.jpg" alt="" width="100%" />
                    </div>
                    <div className="details-description__inner">
                                <div className="detail-all">
                                    <p>LENGTH</p>
                                    {/* <span>{productDetails.detailLength} m</span> */}
                                </div>
                                <div className="detail-all">
                                    <p>YEAR</p>
                                    {/* <span>{productDetails.year}</span> */}
                                </div>
                                <div className="detail-all">
                                    <p>GUEST CABINS</p>
                                    {/* <span>{productDetails.detailGuest}</span> */}
                                </div>
                                <div className="detail-all">
                                    <p></p>
                                    {/* <span>{productDetails.speed} knots</span> */}
                                </div>
                            </div>
                </div>
            </div>
        </div>
    );
};

export default ShoppingCartProducts;