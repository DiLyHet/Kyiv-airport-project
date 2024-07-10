import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/Pages/HomePage";
import FlightSearchPage from "./components/Pages/FlightSearchPage";

interface AppProps {}

const App: React.FC<AppProps> = () => {
  const [type, setType] = useState<string>("");

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage type={type} setType={setType} />} />
        <Route
          path="/flight_search"
          element={<FlightSearchPage type={type} setType={setType} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;