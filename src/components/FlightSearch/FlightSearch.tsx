import React from "react";
import { Link } from "react-router-dom";
import Image from "../../images/Main.jpg";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { setInputSearchArrayAction, setInputValueAction, setTypeAction } from "../../redux/slices/rootSlice";


interface FlightSearchProps { }

const FlightSearch: React.FC<FlightSearchProps> = () => {

  const dispatch = useAppDispatch();
  const type = useAppSelector((state) => state.type);
  const data = useAppSelector((state) => state.data);
  const inputValue = useAppSelector((state) => state.inputValue);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setInputValueAction(e.target.value));
  };

  const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (type !== "ARRIVAL") {
      dispatch(setTypeAction("DEPARTURE"));
    }

    const matchingAirports = data.filter((airport) => {
      const upperInputValue = inputValue.toUpperCase();
      return (
        inputValue &&
        airport.codeShare &&
        airport.departureCity &&
        airport.arrivalCity &&
        (upperInputValue === airport.codeShare.toUpperCase() ||
          upperInputValue === airport.departureCity.toUpperCase() ||
          upperInputValue === airport.arrivalCity.toUpperCase())
      );
    });

    dispatch(setInputSearchArrayAction(matchingAirports));
  };

  return (
    <section
      className="flight-search"
      style={{ backgroundImage: `url(${Image})` }}
    >
      <h2 className="flight-search__title">ПОШУК РЕЙСУ</h2>
      <form className="flight-search__form">
        <div className="flight-search__form_icon-holder">
          <svg
            className="flight-search__form_icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            fill="#888888"
          >
            <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
          </svg>
          <input
            type="text"
            className="flight-search__form_input"
            placeholder="Номер рейсу або місто"
            value={inputValue}
            onChange={handleInputChange}
          />
        </div>

        <Link className="submit-btn__text" to={"/flight_search"}>
          <button
            type="submit"
            className="flight-search__form_submit-btn"
            onClick={handleSubmit}
          >
            ЗНАЙТИ
          </button>
        </Link>
      </form>
      <div className="flight-search__buttons">
        <button
          className={`flight-search__btn flight-search__btn_all-departures ${type === "DEPARTURE" ? "flight-search__btn_current" : ""
            }`}
          onClick={() => {
            dispatch(setTypeAction("DEPARTURE"))
          }}
        >
          <div className="flight-search__btn_icon">
            <svg
              width="40px"
              height="28px"
              viewBox="0 0 48 33.6"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M43.8940167,20.2848496 C43.7061583,19.5138567 43.2150547,18.8513283 42.531998,18.4474045 C41.8489414,18.0434806 41.031764,17.9323603 40.2656518,18.1392252 L29.793485,21.013722 L16.1868667,8 L12.3815328,9.02981973 L20.5461037,23.5412796 L10.7478188,26.2328084 L6.85949946,23.1183536 L4,23.9072155 L7.5893717,30.3060954 L9.10710602,32.9956246 L12.2585544,32.1257769 L22.7297214,29.2522799 L31.3082198,26.9046908 L41.7833862,24.0271945 C43.3808131,23.5527844 44.3144732,21.8973179 43.8940167,20.2848496 Z"
                fill="#1eb7ee"
                transform="translate(23.997341, 20.497812) rotate(-4.012171) translate(-23.997341, -20.497812)"
              />
            </svg>
          </div>
          <span className="flight-search__btn_text">ВИЛІТ УСІ РЕЙСИ</span>
        </button>
        <button
          className={`flight-search__btn flight-search__btn_all-arrivals ${type === "ARRIVAL" ? "flight-search__btn_current" : ""
            }`}
          onClick={() => {
            dispatch(setTypeAction("ARRIVAL"));
          }}
        >
          <span className="flight-search__btn_text">ПРИЛІТ УСІ РЕЙСИ</span>
          <div className="flight-search__btn_icon">
            <svg
              width="40px"
              height="28px"
              viewBox="0 0 48 33.6"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M43.8940167,20.2848496 C43.7061583,19.5138567 43.2150547,18.8513283 42.531998,18.4474045 C41.8489414,18.0434806 41.031764,17.9323603 40.2656518,18.1392252 L29.793485,21.013722 L16.1868667,8 L12.3815328,9.02981973 L20.5461037,23.5412796 L10.7478188,26.2328084 L6.85949946,23.1183536 L4,23.9072155 L7.5893717,30.3060954 L9.10710602,32.9956246 L12.2585544,32.1257769 L22.7297214,29.2522799 L31.3082198,26.9046908 L41.7833862,24.0271945 C43.3808131,23.5527844 44.3144732,21.8973179 43.8940167,20.2848496 Z"
                fill="#1eb7ee"
                transform="translate(23.997341, 20.497812) rotate(27.974730) translate(-23.997341, -20.497812)"
              />
            </svg>
          </div>
        </button>
      </div>
    </section>
  );
};

export default FlightSearch;