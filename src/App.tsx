import React, { useEffect, useState } from "react";
import { BrowserRouter, NavigateFunction, Route, Routes } from "react-router-dom";
import HomePage from "./components/Pages/HomePage";
import FlightSearchPage from "./components/Pages/FlightSearchPage";

interface AppProps {
}

const App: React.FC<AppProps> = () => {
  const getCurrentFormattedDate = () => {
    const today = new Date();
    const formatNumber = (num: number) => (num < 10 ? `0${num}` : num);
    const day = formatNumber(today.getDate());
    const month = formatNumber(today.getMonth() + 1);
    const year = today.getFullYear();
    return `${year}-${month}-${day}`;
  };
  const [type, setType] = useState<string>("");
  const [date, setDate] = useState<string>(getCurrentFormattedDate());
  const [inputValue, setInputValue] = useState<string>("");

    const updateSearchQuery = (navigation: NavigateFunction) => {
      const searchParams = new URLSearchParams();
      if (type) {
        searchParams.set('type', type);
      }
      if (date) {
        searchParams.set('date', date);
      }
      if (inputValue) {
        searchParams.set('inputValue', inputValue);
      }
      navigation(`/flight_search?${searchParams.toString()}`);
    }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage type={type} setType={setType} updateSearchQuery={updateSearchQuery} date={date} setDate={setDate} inputValue={inputValue} setInputValue={setInputValue} />} />
        <Route
          path="/flight_search"
          element={<FlightSearchPage type={type} setType={setType} updateSearchQuery={updateSearchQuery} date={date} setDate={setDate} inputValue={inputValue} setInputValue={setInputValue} getCurrentFormattedDate={getCurrentFormattedDate} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;