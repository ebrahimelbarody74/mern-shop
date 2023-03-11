import React, { useEffect, useState } from "react";
import "./Product.scss";
import Navbar from "../../components/Navbar/Navbar";
import Announcement from "../../components/Announcement/Announcement";
import Newsletter from "../../components/Newsletter/Newsletter";
import Footer from "../../components/Footer/Footer";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axois from "axios";
import { addToCart, decrease, increase } from "../../store/slices/cartSlice";
function Product() {
  const location = useLocation();
  let id = location.pathname.split("/")[2];

  const carts = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  console.log(carts.product[0]);

  const [product, setProduct] = useState("");
  const [count, setCount] = useState(1);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await axois.get("/api/products/find/" + id);
        setProduct(res.data);
      } catch {}
    };
    getProduct();
  }, [id]);

  const handelCount = (e) => {
    if (e == "inc") {
      setCount(count + 1);
    } else if (e == "dec") {
      count > 1 && setCount(count - 1);
    }
  };
  console.log("size =>", size );

  return (
    <>
      <Navbar />
      <Announcement />
      <div className="product-page">
        <img src={product.img} />
        <div className="product-page-info">
          <h3>{product.title}</h3>
          <p>{product.desc}</p>
          <span>$ 20</span>
          <div className="product-page-color">
            <span>color</span>
            <select onChange={(e) => setSize(e.target.value)}>
              <option disabled selected>size</option>
              {product &&
                product.size.map((e) => <option value={e}>{e}</option>)}
            </select>
            <div className="event">
              <button onClick={() => handelCount("dec")}>-</button>
              <span>{count}</span>
              <button onClick={() => handelCount("inc")}>+</button>
            </div>
            <button
              onClick={() => dispatch(addToCart({ ...product, count, size }))}
            >
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </>
  );
}

export default Product;
