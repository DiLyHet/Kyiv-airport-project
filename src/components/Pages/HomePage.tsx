import React, { useState } from "react";
import Header from "../Header/Header";
import FlightSearch from "../FlightSearch/FlightSearch";
import Announcement from "../Announcement/Announcement";
import News from "../News/News";
import Footer from "../Footer/Footer";

interface HomePageProps {
  type: string;
  setType: React.Dispatch<React.SetStateAction<string>>;
}

const HomePage: React.FC<HomePageProps> = ({ type, setType, updateSearchQuery, date, setDate, inputValue, setInputValue }) => {
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
        updateSearchQuery={updateSearchQuery}
        date={date}
        setDate={setDate}
        inputValue={inputValue}
        setInputValue={setInputValue}
      />
      <Announcement />
      <News />
      <Footer />
    </>
  );
};

export default HomePage;
