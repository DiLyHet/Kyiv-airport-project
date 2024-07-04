import React, { useState } from "react";
import Header from "../Header/Header";
import FlightSearch from "../FlightSearch/FlightSearch";
import SearchForm from "../FlightSearch/SearchForm";
import Footer from "../Footer/Footer";

const FlightSearchPage = () => {
  const [type, setType] = useState("DEPARTURE");

  return (
    <>
      <Header />
      <FlightSearch type={type} setType={setType} />
      <SearchForm type={type} />
      <Footer />
    </>
  );
};

export default FlightSearchPage;
