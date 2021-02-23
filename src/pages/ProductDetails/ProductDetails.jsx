import React, { useContext, useEffect } from 'react';
import './ProductDetails.css';
import { Carousel } from 'react-bootstrap';
import { productsContext } from '../../contexts/ProductsContext';
import { Link } from 'react-router-dom';
import backIcon from '../../assets/icons/details-icons/previous.svg'
import Fade from 'react-reveal/Fade';

const ProductDetails = (props) => {
    const { productDetails, getDetails } = useContext(productsContext);

    useEffect(() => {
        getDetails(props.match.params.id);
    }, []);

    return (
        <div className="details-section">
            <div className="container-project">
                <div className="details-section__inner">
                    <Fade left>
                        <Carousel className="carousel-inner">
                            <Carousel.Item className="carousel-item" interval={5000}>
                                <img
                                    className="d-block w-100 carousel-img"
                                    src={productDetails.image}
                                    alt="First slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item interval={5000}>
                                <img
                                    className="d-block w-100 carousel-img"
                                    src={productDetails.imageDetail}
                                    alt="Second slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item interval={5000}>
                                <img
                                    className="d-block w-100 carousel-img"
                                    src={productDetails.imageDetailExtra}
                                    alt="Third slide"
                                />
                            </Carousel.Item>
                        </Carousel>
                    </Fade>
                    <Fade top>
                        <div className="details-description">
                            <div className="details-description__title">{productDetails.title}</div>
                            <div className="details-description__inner">
                                <div className="detail-all">
                                    <p>LENGTH</p>
                                    <span>{productDetails.detailLength} m</span>
                                </div>
                                <div className="detail-all">
                                    <p>YEAR</p>
                                    <span>{productDetails.year}</span>
                                </div>
                                <div className="detail-all">
                                    <p>GUEST CABINS</p>
                                    <span>{productDetails.detailGuest}</span>
                                </div>
                                <div className="detail-all">
                                    <p>MAX SPEED</p>
                                    <span>{productDetails.speed} knots</span>
                                </div>
                            </div>
                            <div className="details-description__price">{productDetails.price} €</div>
                            <div className="details-description__end">
                                <span>ADD TO WISHLIST</span>
                                <span>ADD TO CART</span>
                            </div>
                        </div>
                    </Fade>
                </div>
                <div className="back-link">
                    <Link to="/products">
                        <img src={backIcon} className="back-icon" />  BACK
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default ProductDetails;