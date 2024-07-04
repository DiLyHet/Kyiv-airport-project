import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/Pages/HomePage";
import FlightSearchPage from "./components/Pages/FlightSearchPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<HomePage />} />
        <Route path={"/flight_search"} element={<FlightSearchPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
