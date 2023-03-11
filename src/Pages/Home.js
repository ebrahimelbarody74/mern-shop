import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Categories from "../components/Categories/Categories";
import Products from "../components/Products/Products";
import Newsletter from "../components/Newsletter/Newsletter";
import Footer from "../components/Footer/Footer";
import Announcement from "../components/Announcement/Announcement";
import Slider from "../components/Slider/Slider";

function Home() {
  return (
    <div className="home">
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default Home;
