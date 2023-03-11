// import React, { useEffect, useState } from "react";
// import Navbar from "../../components/Navbar/Navbar";
// import Announcement from "../../components/Announcement/Announcement";
// import Products from "../../components/Products/Products";
// import Newsletter from "../../components/Newsletter/Newsletter";
// import Footer from "../../components/Footer/Footer";
// import "./ProductList.scss";
// import { json, useLocation, useParams } from "react-router-dom";
// import axios from "axios";

// function ProductList() {
//   const [filters, setFilters] = useState({});
//   const [sort, setSort] = useState("newest");

//   const params = useParams().category;
//   console.log("params", params.category);
//   // console.log(cat);
//   const handelFilters = (e) => {
//     const value = e.target.value;
//     setFilters({
//       ...filters,
//       [e.target.name]: value,
//     });
//   };

//   const [products, setProducts] = useState(
//     JSON.parse(localStorage.getItem("products"))
//   );
//   const [size, setSize] = useState();
//   const [filteredProducts, setFilteredProducts] = useState();
//   useEffect(() => {
//     const getProducts = async () => {
//       try {
//         const res = await axios.get(
//           `/api/products?category=${params}` || `/api/products`
//         );
//         // console.log(res.data);
//         // return res;
//         setProducts(res.data);
//         localStorage.setItem("products", JSON.stringify(res.data));
//       } catch (err) {
//         console.log(err);
//       }
//     };
//     getProducts();
//   }, []);

//   console.log("products", products);

//   const handelSize = (e) => {
//     setFilteredProducts(products);
//     let productClone = [...products];
//     let newProduct = productClone.filter(
//       (p) => p.size.indexOf(e.target.value) != -1
//     );
//     setFilteredProducts(newProduct);
//     // }
//   };

//   const handelColor = (e) => {
//     setFilteredProducts(filteredProducts);
//     setSize(e.target.value);
//     let productClone = [...products];
//     let newProduct = productClone.filter(
//       (p) => p.color.indexOf(e.target.value) != -1
//     );
//     setFilteredProducts(newProduct);
//   };

//   useEffect(() => {
//     if (sort === "newest") {
//       setFilteredProducts((prev) =>
//         [...prev].sort((a, b) => a.createdAt - b.createdAt)
//       );
//     } else if (sort === "asc") {
//       setFilteredProducts((prev) =>
//         [...prev].sort((a, b) => a.price - b.price)
//       );
//     } else {
//       setFilteredProducts((prev) =>
//         [...prev].sort((a, b) => b.price - a.price)
//       );
//     }
//   }, [sort]);
//   return (
//     <div className="productList">
//       <Navbar />
//       <Announcement />
//       <div className="filter">
//         <div className="left">
//           Filter Products:
//           <select name="color" onChange={handelColor}>
//             <option disabled>color</option>
//             <option value="white">white</option>
//             <option value="black">black</option>
//             <option value="red">red</option>
//             <option value="blue">blue</option>
//             <option value="yellow">yellow</option>
//           </select>
//           <select name="size" onChange={handelSize}>
//             <option disabled>Size</option>
//             <option value="XS">XS</option>
//             <option value="S">S</option>
//             <option value="M">M</option>
//             <option value="L">L</option>
//             <option value="XL">XL</option>
//           </select>
//         </div>
//         <div className="right">
//           Sort Products:
//           <select onChange={(e) => setSort(e.target.value)}>
//             <option value="Newest">Newest</option>
//             <option value="asc">Price(asc)</option>
//             <option value="desc">Price(desc)</option>
//           </select>
//         </div>
//       </div>
//       <Products
//         params={params.category}
//         products={products}
//         filters={filters}
//         filteredProducts={filteredProducts}
//       />
//       <Newsletter />
//       <Footer />
//     </div>
//   );
// }

// export default ProductList;



import { useLocation } from "react-router";
import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Announcement from "../../components/Announcement/Announcement";
import Products from "../../components/Products/Products";
import Newsletter from "../../components/Newsletter/Newsletter";
import Footer from "../../components/Footer/Footer";
import "./ProductList.scss"


const ProductList = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };

  return (
        <div className="productList">
          <Navbar />
          <Announcement />
          <div className="filter">
            <div className="left">
              Filter Products:
              <select name="color" onChange={handleFilters}>
                <option disabled>color</option>
                <option value="white">white</option>
                <option value="black">black</option>
                <option value="red">red</option>
                <option value="blue">blue</option>
                <option value="yellow">yellow</option>
              </select>
              <select name="size" onChange={handleFilters}>
                <option disabled>Size</option>
                <option value="XS">XS</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
              </select>
            </div>
            <div className="right">
              Sort Products:
              <select onChange={(e) => setSort(e.target.value)}>
                <option value="Newest">Newest</option>
                <option value="asc">Price(asc)</option>
                <option value="desc">Price(desc)</option>
              </select>
            </div>
          </div>
          <Products
            cat={cat}
            filters={filters}
            sort={sort}
          />
          <Newsletter />
          <Footer />
        </div>
      );
};

export default ProductList;
