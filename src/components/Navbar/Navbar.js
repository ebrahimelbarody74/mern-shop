import React from "react";
import { Badge } from "@material-ui/core";
import { ShoppingCartOutlined } from "@material-ui/icons";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/slices/userSlice";

function Navbar() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  return (
    <div className="navbar">
      <div className="left">
        <select className="lang">
          <option value="EN">EN</option>
          <option value="AR">AR</option>
        </select>
        <input type="text" placeholder="Search" name="search" />
      </div>
      <div className="logo">
        <Link to="/">
          <h1>Orico .</h1>
        </Link>
      </div>
      <div className="right">
        <Link to="/register">REGISTER</Link>
        <Link to="/login">SIGN IN</Link>
        <Link onClick={() => dispatch(logout())}>Log OUT</Link>
        <Link to="/cart">
          <Badge badgeContent={cart.product.length} color="primary">
            <ShoppingCartOutlined />
          </Badge>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
