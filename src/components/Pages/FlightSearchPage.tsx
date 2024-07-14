import React, { useEffect } from "react";
import Header from "../Header/Header";
import FlightSearch from "../FlightSearch/FlightSearch";
import SearchForm from "../FlightSearch/SearchForm";
import Footer from "../Footer/Footer";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { Type, setDateAction, setTypeAction, setInputValueAction } from "../../redux/slices/rootSlice";


interface UpdateSearchQuery {
  (navigation: NavigateFunction): void;
}

interface FlightSearchPageProps {
  updateSearchQuery: UpdateSearchQuery;
}

const FlightSearchPage: React.FC<FlightSearchPageProps> = ({
  updateSearchQuery,
}) => {

  const dispatch = useAppDispatch();
  const type = useAppSelector((state) => state.type);
  const date = useAppSelector((state) => state.date);
  const inputValue = useAppSelector((state) => state.inputValue);

  const navigate = useNavigate();
  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const initialType = (queryParams.get("type") || "") as Type["type"];
    const initialDate = queryParams.get("date") || "";
    const initialInputValue = queryParams.get("value") || "";

    dispatch(setTypeAction(initialType));
    dispatch(setDateAction(initialDate));
    dispatch(setInputValueAction(initialInputValue));
  }, []);

  useEffect(() => {
    if (type == "") return;
    updateSearchQuery(navigate);
  }, [type, date, inputValue]);

  return (
    <>
      <Header />
      <FlightSearch />
      <SearchForm />
      <Footer />
    </>
  );
};

export default FlightSearchPage;