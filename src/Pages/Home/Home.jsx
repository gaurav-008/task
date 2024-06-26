import React from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Livedrop from "../../Components/Livedrop/Livedrop";
import "./Home.css";
import Banner from "../../Components/Banner/Banner";
import MiniBanner from "../../Components/MiniBanner/MiniBanner";
import FeaturedBoxContainer from "../../Components/FeaturedBoxContainer/FeaturedBoxContainer";
import Navbar from "../../Components/Navbar/Navbar";
import ChatBox from "../../Components/Chatbox/ChatBox";
import Footer from "../../Components/Footer/Footer";
import Deliveries from "../../Components/Deliveries/Deliveries";
import LatestBattles from "../../Components/LatestBattles/LatestBattles";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Sidebar />
        <div className="middle">
          <Livedrop />
          <div className="banner-container">
            <Banner /> <MiniBanner />
          </div>
          <FeaturedBoxContainer />
          <LatestBattles/>
          <Deliveries/>
          <Footer />
        </div>
        <div className="chat-box">
          <ChatBox />
        </div>
      </div>
    </>
  );
};

export default Home;
