import React, { useEffect } from "react";
import Header from "../Header/Header";
import FlightSearch from "../FlightSearch/FlightSearch";
import Announcement from "../Announcement/Announcement";
import News from "../News/News";
import Footer from "../Footer/Footer";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { useAppSelector } from "../../redux/store";

interface UpdateSearchQuery {
  (navigation: NavigateFunction): void;
}

interface HomePageProps {
  updateSearchQuery: UpdateSearchQuery;
}

const HomePage: React.FC<HomePageProps> = ({ updateSearchQuery }) => {
  const navigate = useNavigate();
  const type = useAppSelector((state) => state.type);
  useEffect(() => {
    if (type == "") return;
    updateSearchQuery(navigate);
  }, [type, updateSearchQuery]);

  return (
    <>
      <Header />
      <FlightSearch />
      <Announcement />
      <News />
      <Footer />
    </>
  );
};

export default HomePage;
