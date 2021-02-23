import React, { useContext, useEffect } from 'react';
import './ProductsSection.css';
import { productsContext } from '../../contexts/ProductsContext';
import { Link } from 'react-router-dom';
import Flip from 'react-reveal/Flip';
const ProductsSection = () => {
    const { 
        products, 
        getProductData,
        getProductForCart
     } = useContext(productsContext);

    useEffect(() => {
        getProductData();
    }, []);

    return (
        <div className="product-section">
            <div className="container-project">
                <div className="product-section__inner">
                    {products.map(item => (
                    <Flip right key={item.id}>
                        <div className="product-section__item">
                            <div className="item-image">
                                <img src={item.image} alt="" width="100%" height="auto" />
                            </div>
                            <div className="item-description">
                                <div className="item-title">{item.title}</div>
                                <div className="item-year">Year: {item.year}</div>
                                <div className="item-speed">Max speed: {item.speed} knots</div>
                                <div className="item-price">{item.price} €</div>
                                <Link to={`details/${item.id}`}><div className="item-details">More Info</div></Link>
                            </div>
                            <div className="item-end">
                                <div 
                                onClick={() => getProductForCart(item.id)}
                                className="item-cart">Add to Cart</div>
                                <div className="item-wishlist">Wishlist</div>
                            </div>
                        </div>
                    </Flip>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductsSection;