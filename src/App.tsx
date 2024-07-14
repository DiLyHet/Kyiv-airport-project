import React, { useCallback } from "react";
import { BrowserRouter, NavigateFunction, Route, Routes } from "react-router-dom";
import HomePage from "./components/Pages/HomePage";
import FlightSearchPage from "./components/Pages/FlightSearchPage";
import { useAppSelector } from "./redux/store";

interface AppProps { }

const App: React.FC<AppProps> = () => {

  const type = useAppSelector((state) => state.type);
  const date = useAppSelector((state) => state.date);
  const inputValue = useAppSelector((state) => state.inputValue);

  const updateSearchQuery = useCallback((navigation: NavigateFunction) => {
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
  }, [type, date, inputValue])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage updateSearchQuery={updateSearchQuery} />} />
        <Route
          path="/flight_search"
          element={<FlightSearchPage updateSearchQuery={updateSearchQuery} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;