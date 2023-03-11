import React from "react";

import { categories } from "../../data";

import "./Categories.scss";
import { Link } from "react-router-dom";

function Categories() {
  return (
    <div className="categories">
      {categories.map((e) => (
        <Link to={`/products/${e.cat}`}>
          <div className="categoryItems">
            <img src={e.img}></img>
            <div className="category-info">
              <h3>{e.title}</h3>
              <button>SHOP NOW</button>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Categories;
