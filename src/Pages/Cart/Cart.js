import React from "react";
import Announcement from "../../components/Announcement/Announcement";
import Navbar from "../../components/Navbar/Navbar";

import "./Cart.scss";
import Footer from "../../components/Footer/Footer";
import { useDispatch, useSelector } from "react-redux";

function Cart() {
  const cart = useSelector((state) => state.cart);
  console.log(cart);

  return (
    <div className="cart">
      <Navbar />
      <Announcement />
      <h4>YOUR BAG</h4>
      <div className="cart-link">
        <button>CONTINUE SHOPPING</button>
        <div className="cart-info">
          <a href="#">Shopping Bag({cart.product.length})</a>
          <a href="#">Your Wishlist (0)</a>
        </div>
        <button>CHECKOUT NOW</button>
      </div>
      <div className="cart-row">
        <div className="cart-product">
          {cart.product.map((e) => (
            <div className="cart-box" key={e._id}>
              <img src={e.img} />
              <ul className="cart-info">
                <li>
                  <span>Product</span>:{e.title}
                </li>
                <li>
                  <span>ID</span>:{e._id}
                </li>
                <li>
                  <span>price</span>:{e.price * e.count}
                </li>
                <li>
                  <span>Size</span> : {e.size}
                </li>
              </ul>
              <div className="cart-price">
                <div className="event">
                  <button>-</button>
                  <span>{e.count}</span>
                  <button>+</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="cart-total">
          <div className="order">
            <h3>ORDER SUMMARY</h3>
            <ul>
              <li>
                Subtotal <span>$ 80</span>
              </li>
              <li>
                Subtotal <span>$ 80</span>
              </li>
              <li>
                Subtotal <span>$ 80</span>
              </li>
              <li>
                Total <span>$ {cart.price}</span>
              </li>
              <button>CHECKOUT NOW</button>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Cart;
