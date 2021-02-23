import React from 'react'
import './Footer.css'
import InstagramIcon from '@material-ui/icons/Instagram';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import TwitterIcon from '@material-ui/icons/Twitter';

const Footer = () => {
    return (
        <footer className="py-3">
        <div className="copy-bottom-txt text-center py-3">
           <h3>Get the latest from Navi Blue</h3>
           <p> 
              © 2021 .Navi Blue, All Rights Reserved | Design by Fan4
           </p>
        </div>
        <div className="social-icons mt-lg-3 mt-2 text-center">
           <ul style={{display: 'flex', flexWrap: 'wrap'}}>
              <li style={{marginLeft: '15px', fontSize: '20px'}}>Home</li>
              <li style={{marginLeft: '15px', fontSize: '20px'}}>Our Yachts</li>
              <li style={{marginLeft: '15px', fontSize: '20px'}}>About us</li>
              <li style={{marginLeft: '15px', fontSize: '20px'}}>Contacts</li>
              <li style={{marginLeft: '15px', fontSize: '20px'}}>Bokonbaevo st., Kyrgyzstan, Registered in Bishkek no: 16720700</li>
           </ul>
        </div>
        <div className="social-icons mt-lg-3 mt-2 text-center">
           <ul>
              <li><a href="#"><InstagramIcon color="primary"/></a></li>
              <li><a href="#"><AlternateEmailIcon color="primary"/></a></li>
              <li><a href="#"><TwitterIcon color="primary"/></a></li>
           </ul>
        </div>
   </footer>
    )
}

export default Footer