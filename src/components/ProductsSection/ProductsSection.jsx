import React, { useContext, useEffect } from 'react';
import './ProductsSection.css';
import { productsContext } from '../../contexts/ProductsContext';

const ProductsSection = () => {
    const { products, getProductData } = useContext(productsContext);
    console.log(products)

    useEffect(() => {
        getProductData();
    }, []);

    return (
        <div className="product-section">
            <div className="container">
                <div className="product-section__inner">
                    {products.map(item => (
                        <div key={item.id} className="product-section__item">
                            <div className="item-image">
                                <img src={item.image} alt="" width="100%" height="auto" />
                            </div>
                            <div className="item-description">
                                <div className="item-title">{item.title}</div>
                                <div className="item-year">Year: {item.year}</div>
                                <div className="item-speed">Max speed: {item.speed}</div>
                                <div className="item-price">{item.price} €</div>
                                <div className="item-details">More Info</div>
                            </div>
                            <div className="item-end">
                                <div className="item-cart">Add to Cart</div>
                                <div className="item-wishlist">Wishlist</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductsSection;