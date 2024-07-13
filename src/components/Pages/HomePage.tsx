import React, { useState, useEffect } from "react";
import Header from "../Header/Header";
import FlightSearch from "../FlightSearch/FlightSearch";
import Announcement from "../Announcement/Announcement";
import News from "../News/News";
import Footer from "../Footer/Footer";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../redux/store";

interface HomePageProps {
  type: string;
  setType: React.Dispatch<React.SetStateAction<string>>;
}

const HomePage: React.FC<HomePageProps> = ({ updateSearchQuery, inputValue, setInputValue }) => {
  const [inputSearchArray, setInputSearchArray] = useState<any[]>([]);
  const navigate = useNavigate();
  const type = useAppSelector((state) => state.type);
  useEffect(()=>{
    if(type == "") return;
    updateSearchQuery(navigate);
    },[type, updateSearchQuery]);
  return (
    <>
      <Header />
      <FlightSearch
        setInputSearchArray={setInputSearchArray}
        inputSearchArray={inputSearchArray}
        updateSearchQuery={updateSearchQuery}
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
