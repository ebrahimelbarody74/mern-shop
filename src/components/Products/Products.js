// import React, { useEffect, useState } from "react";
// import { popularProducts } from "../../data";
// import axios from "axios";
// import {
//   FavoriteBorderOutlined,
//   SearchOutlined,
//   ShoppingCartOutlined,
// } from "@material-ui/icons";

// import "./Products.scss";
// import { Link } from "react-router-dom";
// function Products({ filters, params, products, filteredProducts }) {
//   console.log(products);

//   // useEffect(() => {
//   //   params &&
//   //     setFilteredProducts(
//   //       products.filter((item) =>
//   //         Object.entries(filters).every(([key, value]) =>
//   //           item[key].includes(value)
//   //         )
//   //       )
//   //     );
//   //     console.log("ewrwer");
//   // }, [products, params, filters]);
//   // console.log("cat" ,params);

//   return (
//     <div className="products">
//       {filteredProducts
//         ? filteredProducts.map((p) => (
//             <Link to={`/product/${p.id}`}>
//               <div className="product">
//                 <div className="gray">
//                   <div className="product-info">
//                     <ShoppingCartOutlined />
//                     <SearchOutlined />
//                     <FavoriteBorderOutlined />
//                   </div>
//                 </div>
//                 <div className="oricle"></div>
//                 <img src={p.img} />
//               </div>
//             </Link>
//           ))
//         : products &&
//           products.map((p) => (
//             <Link to={`/product/${p.id}`}>
//               <div className="product">
//                 <div className="gray">
//                   <div className="product-info">
//                     <ShoppingCartOutlined />
//                     <SearchOutlined />
//                     <FavoriteBorderOutlined />
//                   </div>
//                 </div>
//                 <div className="oricle"></div>
//                 <img src={p.img} />
//               </div>
//             </Link>
//           ))}
//     </div>
//   );
// }

// export default Products;

import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";

import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Products.scss";

const Products = ({ cat, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          cat ? `/api/products?category=${cat}` : "/api/products"
        );
        setProducts(res.data);
      } catch (err) {}
    };
    getProducts();
  }, [cat]);

  useEffect(() => {
    cat &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, cat, filters]);

  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);

  return (
    <div className="products">
      {cat
        ? filteredProducts.map((p) => (
            <Link to={`/product/${p._id}`}>
              <div className="product">
                <div className="gray">
                  <div className="product-info">
                    <ShoppingCartOutlined />
                    <SearchOutlined />
                    <FavoriteBorderOutlined />
                  </div>
                </div>
                <div className="oricle"></div>
                <img src={p.img} />
              </div>
            </Link>
          ))
        : products.slice(0, 8).map((p) => (
            <Link to={`/product/${p._id}`}>
              <div className="product">
                <div className="gray">
                  <div className="product-info">
                    <ShoppingCartOutlined />
                    <SearchOutlined />
                    <FavoriteBorderOutlined />
                  </div>
                </div>
                <div className="oricle"></div>
                <img src={p.img} />
              </div>
            </Link>
          ))}
    </div>
  );
};

export default Products;
