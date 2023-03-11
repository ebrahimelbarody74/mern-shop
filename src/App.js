import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Slider from "./components/Slider/Slider";
import Categories from "./components/Categories/Categories";
import Products from "./components/Products/Products";
import Newsletter from "./components/Newsletter/Newsletter";
import Footer from "./components/Footer/Footer";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart/Cart";
import Product from "./Pages/Product/Product";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import ProductList from "./Pages/ProductList/ProductList";
import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";

function App() {
  const user = useSelector((state) => state.user.currentUser);
  console.log(user);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/products/:category" element={<ProductList />} />
        <Route path="/login" element={user ? <Home /> : <Login />} />
        <Route path="/register" element={user ? <Home /> : <Register />} />
      </Routes>
    </div>
  );
}

export default App;
