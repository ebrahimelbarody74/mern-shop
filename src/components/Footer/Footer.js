import React from "react";
import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@material-ui/icons";

import "./Footer.scss"

function Footer() {
  return (
    <div className="footer">
      <div className="footer-box">
        <h3>Orico .</h3>
        <p>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don’t look even slightly believable.
        </p>
        <div className="footer-icons">
          <Facebook />
          <Instagram />
          <Twitter />
          <Pinterest />
        </div>
      </div>
      <div className="footer-box">
        <h4>Useful Links</h4>
        <div className="links">
          <ul>
            <li>Home</li>
            <li>Man Fashion</li>
            <li>Accessories</li>
            <li>Order Tracking</li>
            <li>Wishlist</li>
          </ul>
          <ul>
            <li>Cart</li>
            <li>Woman Fashion</li>
            <li>My Account</li>
            <li>Wishlist</li>
            <li>Terms</li>
          </ul>
        </div>
      </div>
      <div className="footer-box">
        <h3>Contact</h3>
        <ul className="contact">
          <li>
            <Room />
            622 Dixie Path , South Tobinchester 98336
          </li>
          <li>
            <Phone />
            +20 101 909 2115
          </li>
          <li>
            <MailOutline />
            ebrahimfrontend@gmail.com
          </li>
          <img src="https://i.ibb.co/Qfvn4z6/payment.png"/>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
