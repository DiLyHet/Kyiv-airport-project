import React, { useState, useEffect } from "react";
import Header from "../Header/Header";
import FlightSearch from "../FlightSearch/FlightSearch";
import SearchForm from "../FlightSearch/SearchForm";
import Footer from "../Footer/Footer";
import { useNavigate } from "react-router-dom";

interface FlightSearchPageProps {
  type: string;
  setType: React.Dispatch<React.SetStateAction<string>>;
}

const FlightSearchPage: React.FC<FlightSearchPageProps> = ({
  type,
  setType,
  updateSearchQuery, 
  date, 
  setDate, 
  inputValue, 
  setInputValue,
  getCurrentFormattedDate
}) => {
 

  const [inputSearchArray, setInputSearchArray] = useState<any[]>([]);
  const [data, setData] = useState<any[]>([]);
  const navigate = useNavigate();
  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const initialType = queryParams.get("type") || "";
    const initialDate = queryParams.get("date") || "";
    const initialInputValue = queryParams.get("value") || "";

    setType(initialType);
    setDate(initialDate);
    setInputValue(initialInputValue);
  }, []);



  return (
    <>
      <Header />
      <FlightSearch
        type={type}
        setType={setType}
        data={data}
        setInputSearchArray={setInputSearchArray}
        inputSearchArray={inputSearchArray}
        date={date}
        setDate={setDate}
        inputValue={inputValue}
        setInputValue={setInputValue}
        updateSearchQuery={() => updateSearchQuery(navigate)}
      />
      <SearchForm
        type={type}
        setType={setType}
        data={data}
        setData={setData}
        inputSearchArray={inputSearchArray}
        date={date}
        setDate={setDate}
        getCurrentFormattedDate={getCurrentFormattedDate}
        updateSearchQuery={updateSearchQuery}
      />
      <Footer />
    </>
  );
};

export default FlightSearchPage;