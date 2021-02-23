import React from 'react'
// import MainVideo from '../../assets/MainVideo/videoplayback1.mp4'
import './MainPage.css'
import { Link } from 'react-router-dom'
import CentralSection from '../../components/Body/CentralSection'

const MainPage = () =>{
    return(
        <div>
        <div style={{display: 'flex', marginTop: '0', textAlign: 'center', justifyContent: 'center'}}>
            {/* <video  playsInline="playsinline" autoPlay="autoplay" muted="muted" loop="loop">
                <source src={MainVideo} type="video/mp4" />
            </video>   */}
            <div className='main'>
                <h1 className='h1'>Enjoy the comfort
                <Link to='/products'>
                    <button className="btn1 fourth">BUY A YACHT</button>
                </Link>
                </h1>
            </div>
            <div className='span'>
                <span>"There is no better tool or equipment <br/> you can have on board than a well-trained crew.” —Larry Pardey</span>
            </div>
        </div>
        <CentralSection/>
        </div>
    )
}

export default MainPage