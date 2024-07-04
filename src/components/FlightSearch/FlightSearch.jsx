import React from "react";
import { Link } from "react-router-dom";

const FlightSearch = ({ type, setType }) => {
  return (
    <section className="flight-search">
      <h2 className="flight-search__title">ПОШУК РЕЙСУ</h2>
      <form className="flight-search__form">
        <div className="flight-search__form_icon-holder">
          <svg
            className="flight-search__form_icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            fill="#888888">
            <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
          </svg>
          <input
            type="text"
            className="flight-search__form_input"
            placeholder="Номер рейсу або місто"
          />
        </div>

        <Link className="submit-btn__text" to={"/flight_search"}>
          <button type="submit" className="flight-search__form_submit-btn">
            ЗНАЙТИ
          </button>
        </Link>
      </form>
      <div className="flight-search__buttons">
        <Link
          className={`flight-search__btn flight-search__btn_all-departures ${type === "DEPARTURE" ? 'flight-search__btn_current' : ''}`}
          to={"/flight_search"}
          onClick={() => setType("DEPARTURE")}>
          <div className="flight-search__btn_icon">
            <svg
              data-v-8030a4ea=""
              width="40px"
              height="28px"
              viewBox="0 0 40 28"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink">
              <defs data-v-8030a4ea=""></defs>
              <g
                data-v-8030a4ea=""
                id="idPage-1"
                stroke="none"
                strokeWidth="1"
                fill="none"
                fillRule="evenodd">
                <g
                  data-v-8030a4ea=""
                  id="idGroup"
                  transform="translate(-4.000000, -7.000000)">
                  <g data-v-8030a4ea="" id="idPath-402"></g>
                  <path
                    data-v-8030a4ea=""
                    d="M43.8940167,20.2848496 C43.7061583,19.5138567 43.2150547,18.8513283 42.531998,18.4474045 C41.8489414,18.0434806 41.031764,17.9323603 40.2656518,18.1392252 L29.793485,21.013722 L16.1868667,8 L12.3815328,9.02981973 L20.5461037,23.5412796 L10.7478188,26.2328084 L6.85949946,23.1183536 L4,23.9072155 L7.5893717,30.3060954 L9.10710602,32.9956246 L12.2585544,32.1257769 L22.7297214,29.2522799 L31.3082198,26.9046908 L41.7833862,24.0271945 C43.3808131,23.5527844 44.3144732,21.8973179 43.8940167,20.2848496 Z"
                    id="idPath_402"
                    fill="#1eb7ee"
                    fillRule="nonzero"
                    transform="translate(23.997341, 20.497812) rotate(-4.012171) translate(-23.997341, -20.497812) "></path>
                </g>
              </g>
            </svg>
          </div>
          <span className="flight-search__btn_text">ВИЛІТ УСІ РЕЙСИ</span>
        </Link>
        <Link
          className={`flight-search__btn flight-search__btn_all-arrivals ${type === "ARRIVAL" ? 'flight-search__btn_current' : ''}`}
          to={"/flight_search"}
          onClick={() => setType("ARRIVAL")}>
          <span className="flight-search__btn_text">ПРИЛІТ УСІ РЕЙСИ</span>
          <div className="flight-search__btn_icon">
            <svg
              data-v-8030a4ea=""
              width="40px"
              height="28px"
              viewBox="0 0 40 28"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink">
              <defs data-v-8030a4ea=""></defs>
              <g
                data-v-8030a4ea=""
                id="idPage-1"
                stroke="none"
                strokeWidth="1"
                fill="none"
                fillRule="evenodd">
                <g
                  data-v-8030a4ea=""
                  id="idGroup"
                  transform="translate(-4.000000, -7.000000)">
                  <g data-v-8030a4ea="" id="idPath-402"></g>
                  <path
                    data-v-8030a4ea=""
                    d="M43.8940167,20.2848496 C43.7061583,19.5138567 43.2150547,18.8513283 42.531998,18.4474045 C41.8489414,18.0434806 41.031764,17.9323603 40.2656518,18.1392252 L29.793485,21.013722 L16.1868667,8 L12.3815328,9.02981973 L20.5461037,23.5412796 L10.7478188,26.2328084 L6.85949946,23.1183536 L4,23.9072155 L7.5893717,30.3060954 L9.10710602,32.9956246 L12.2585544,32.1257769 L22.7297214,29.2522799 L31.3082198,26.9046908 L41.7833862,24.0271945 C43.3808131,23.5527844 44.3144732,21.8973179 43.8940167,20.2848496 Z"
                    id="idPath_402"
                    fill="#1eb7ee"
                    fillRule="nonzero"
                    transform="translate(23.997341, 20.497812) rotate(27.974730) translate(-23.997341, -20.497812) "></path>
                </g>
              </g>
            </svg>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default FlightSearch;
