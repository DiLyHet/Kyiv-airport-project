import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/Pages/HomePage";
import FlightSearchPage from "./components/Pages/FlightSearchPage";

const App = () => {

  const [type, setType] = useState("");

  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<HomePage type={type} setType={setType} />} />
        <Route path={"/flight_search"} element={<FlightSearchPage type={type} setType={setType} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
