import React from "react";

import "./animations.css";
import "./Fonts.css";

import NextPage from "./NextPage";
import NextPage1 from "./NextPage1";
import NextPage2 from "./NextPage2";
import Whatsapp from "./whats-app-logo.png";
import Navbar from "./Navbar";
import Sliding from "./Sliding";
import Footer from "./Footer";
const Home = () => {
  const openWhatsApp = () => {
    window.open("https://wa.me/9811628680", "_blank");
  };

  return (
    <div className="pb-5 background">
      <div className="">
        <Navbar />

        <div className="container mt-5">
          <NextPage />
        </div>

        <div className="container mt-5">
          <NextPage1 />
        </div>
        <div className="container mt-5">
          <NextPage2 />
        </div>
        <div className="container mt-5">
          <Sliding />
        </div>
        <div className="container mt-5">
          <Footer />
        </div>
      </div>
      {/* WhatsApp logo in the right bottom corner */}
      <div className="whatsapp-logo whatsapp-bg-animation" onClick={openWhatsApp}>
        <img
          src={Whatsapp} // replace with your WhatsApp logo image
          alt="WhatsApp Logo"
          className="whatsapp-logo-img" // Apply a class for styling
        />
      </div>
    </div>
  );
};

export default Home;
