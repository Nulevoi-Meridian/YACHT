import React from 'react'
import './CentralSection.css'
import Main1Img from '../../assets/Images/main1.jpg'
import MainImg  from '../../assets/Images/main.jpg'
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';
import CarouselHome from './CarouselHome'
import { Link } from 'react-router-dom'


const CentralSection = ()=>{
    return (
        <>
            <div className='container body'>
                    <div className='body-img'>
                        <img src={Main1Img}/>
                    </div>
                <div className='desc'>
                        <h1>BUY A YACHT</h1>
        
                    <span>Take a look at the superyachts on our website or get in touch with your requirements. If you don’t see your perfect yacht, let us know: we’ll move mountains to find her.</span>
                    <Link to='/products'>
                        <a>BROWSE YACHTS FOR SALE</a>
                    </Link>
                </div>
            </div>
            <div className='container body'>
                <div className='desc'>
                    <h1>CHARTER A YACHT</h1>
                    <span>We’ll help you plan the ultimate charter. Get some inspiration by looking through our charter yachts and tell us what your dream charter looks like. We’ll do the rest.</span>
                    <a href=''>FIND A LUXURY CHARTER YACHT</a>
                </div>
                <div className='body-img'>
                    <img src={MainImg}/>
                </div>
            </div>
        <CarouselHome/>
        </>
    )
}

export default CentralSection;