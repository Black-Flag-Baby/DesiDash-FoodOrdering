import React from "react";
import "../Footer/Footer.css";
import { assets } from "../../assets/asset";
const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="content">
        <div className="content_left">
          <img src={assets.f1} alt="logo" />
          <div className="footer-text">
          <p>
            Embrace each moment with a heart full of curiosity and a mind open
            to possibilities. May your journey be filled with joy, learning, and
            meaningful connections. Remember, you are capable of achieving
            anything you set your mind to. Keep shining bright!
          </p>
            
          </div>
          
          <div className="social-media">
            <img src={assets.f8} alt="instagram" />
            <img src={assets.f9} alt="facebook" />
            <img src={assets.f10} alt="Twitter" />
          </div>
        </div>
        <div className="content_center">
          <h4>Company</h4>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="content_right">
          <h4>GET IN TOUCH</h4>
          <ul>
            <li>+91 9876543210</li>
            <li>desidash78@gmail.com</li>
            <li>123, Main Street,New Delhi</li>
          </ul>
        </div>
      </div>
      <hr/>
      <div className="copyright-content">
      <p className="copy-right">
        Copyright© 2024 Your Food Delivery Service. All rights reserved.
      </p>

      </div>
      
    </div>
  );
};

export default Footer;
