import React from "react";
import Header from "../Header/Header";
import FlightSearch from "../FlightSearch/FlightSearch";
import Announcement from "../Announcement/Announcement";
import News from "../News/News";
import Footer from "../Footer/Footer";

const HomePage = ({ type, setType }) => {
  return (
    <>
      <Header />
      <FlightSearch type={type} setType={setType} />
      <Announcement />
      <News />
      <Footer />
    </>
  );
};

export default HomePage;
