import React, { useState, useEffect } from "react";
import Header from "../Header/Header";
import FlightSearch from "../FlightSearch/FlightSearch";
import SearchForm from "../FlightSearch/SearchForm";
import Footer from "../Footer/Footer";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { Type, setDateAction, setTypeAction } from "../../redux/slices/rootSlice";

interface FlightSearchPageProps {
  type: string;
  setType: React.Dispatch<React.SetStateAction<string>>;
}

const FlightSearchPage: React.FC<FlightSearchPageProps> = ({
  updateSearchQuery, 
  inputValue, 
  setInputValue,
  getCurrentFormattedDate
}) => {
 
  const dispatch = useAppDispatch();
  const type = useAppSelector((state) => state.type);
  const date = useAppSelector((state) => state.date);

  const [inputSearchArray, setInputSearchArray] = useState<any[]>([]);
  const navigate = useNavigate();
  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const initialType = (queryParams.get("type") || "") as Type["type"];
    const initialDate = queryParams.get("date") || "";
    const initialInputValue = queryParams.get("value") || "";

    dispatch(setTypeAction(initialType));
    dispatch(setDateAction(initialDate));
    setInputValue(initialInputValue);
  }, []);

useEffect(()=>{
  if(type == "") return;
updateSearchQuery(navigate);
},[type,date,inputValue]);

  return (
    <>
      <Header />
      <FlightSearch
        setInputSearchArray={setInputSearchArray}
        inputSearchArray={inputSearchArray}
        inputValue={inputValue}
        setInputValue={setInputValue}
        updateSearchQuery={() => updateSearchQuery(navigate)}
      />
      <SearchForm
        inputSearchArray={inputSearchArray}
        getCurrentFormattedDate={getCurrentFormattedDate}
        updateSearchQuery={updateSearchQuery}
      />
      <Footer />
    </>
  );
};

export default FlightSearchPage;