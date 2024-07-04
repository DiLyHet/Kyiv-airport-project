import React, { useState } from "react";
import Header from "../Header/Header";
import FlightSearch from "../FlightSearch/FlightSearch";
import SearchForm from "../FlightSearch/SearchForm";
import Footer from "../Footer/Footer";

const FlightSearchPage = ({ type, setType }) => {
  
  const [inputSearchArray, setInputSearchArray] = useState([]);
  const [data, setData] = useState([]);

  return (
    <>
      <Header />
      <FlightSearch type={type} setType={setType} data={data} setInputSearchArray={setInputSearchArray} inputSearchArray={inputSearchArray} />
      <SearchForm type={type} setType={setType} data={data} setData={setData} inputSearchArray={inputSearchArray} />
      <Footer />
    </>
  );
};

export default FlightSearchPage;
