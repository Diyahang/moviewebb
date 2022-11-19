import React from "react";
import Navbar from "../component/Navbar";
import Carousel from "../component/Carousel";
import ListMovie from "../component/ListMovie";
import Footer from "../component/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Carousel />
      <ListMovie />
      <Footer />
    </div>
  );
};

export default Home;
