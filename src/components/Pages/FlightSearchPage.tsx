import React, { useState } from "react";
import Header from "../Header/Header";
import FlightSearch from "../FlightSearch/FlightSearch";
import SearchForm from "../FlightSearch/SearchForm";
import Footer from "../Footer/Footer";

interface FlightSearchPageProps {
  type: string;
  setType: React.Dispatch<React.SetStateAction<string>>;
}

const FlightSearchPage: React.FC<FlightSearchPageProps> = ({
  type,
  setType,
}) => {
  const [inputSearchArray, setInputSearchArray] = useState<any[]>([]);
  const [data, setData] = useState<any[]>([]);

  return (
    <>
      <Header />
      <FlightSearch
        type={type}
        setType={setType}
        data={data}
        setInputSearchArray={setInputSearchArray}
        inputSearchArray={inputSearchArray}
      />
      <SearchForm
        type={type}
        setType={setType}
        data={data}
        setData={setData}
        inputSearchArray={inputSearchArray}
      />
      <Footer />
    </>
  );
};

export default FlightSearchPage;