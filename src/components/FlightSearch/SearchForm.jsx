import React, { useState, useEffect } from "react";
import { getAirportData } from "../../api.js";

const SearchForm = ({
  type,
  setType,
  data,
  setData,
  inputSearchArray,
}) => {
  const formatNumber = (num) => {
    return num < 10 ? `0${num}` : num;
  };

  const [activeButton, setActiveButton] = useState("current");

  const handlePreviousDate = () => {
    setActiveButton("previous");
    setDate(getPreviousDate(currentDate));
  };

  const handleCurrentDate = () => {
    setActiveButton("current");
    setDate(currentDate);
  };

  const handleNextDate = () => {
    setActiveButton("next");
    setDate(getNextDate(currentDate));
  };

  const formatDate = (timestamp) => {
    if (timestamp === null) {
      return null;
    }
    const date = new Date(timestamp);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const getCurrentFormattedDate = () => {
    const today = new Date();
    const day = formatNumber(today.getDate());
    const month = formatNumber(today.getMonth() + 1);
    const year = today.getFullYear();
    return `${year}-${month}-${day}`;
  };

  const getPreviousDate = (date) => {
    const [year, month, day] = date.split("-").map(Number);
    const prevDate = new Date(year, month - 1, day);
    prevDate.setDate(prevDate.getDate() - 1);

    const prevDay = formatNumber(prevDate.getDate());
    const prevMonth = formatNumber(prevDate.getMonth() + 1);
    const prevYear = prevDate.getFullYear();
    return `${prevYear}-${prevMonth}-${prevDay}`;
  };

  const getNextDate = (date) => {
    const [year, month, day] = date.split("-").map(Number);
    const nextDate = new Date(year, month - 1, day);
    nextDate.setDate(nextDate.getDate() + 1);

    const nextDay = formatNumber(nextDate.getDate());
    const nextMonth = formatNumber(nextDate.getMonth() + 1);
    const nextYear = nextDate.getFullYear();
    return `${nextYear}-${nextMonth}-${nextDay}`;
  };

  let currentDate = getCurrentFormattedDate();
  const [date, setDate] = useState(getCurrentFormattedDate());
  const [currentDateIsAvailable, setCurrentDateIsAvailable] = useState(false);
  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const airportData = await getAirportData();
        setData(airportData);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, []);
  useEffect(() => {
    let availableDate = false;
    if (filteredData.length !== 0) {
      data.map((airport, index) => {
        if (filteredData.includes(index)) {
          if (type === airport.type) {
            availableDate = true;
          }
        }
      });
    }
    setCurrentDateIsAvailable(availableDate);
  });

  if (error) {
    return <div>Error: {error}</div>;
  }

  const isEqualDates = data.map((airport) => {
    const currentDate = date.toString();
    if (type === "DEPARTURE") {
      let formattedDate =
        formatDate(airport.departureDateExpected) ??
        formatDate(airport.departureDate);
      return formattedDate === currentDate;
    } else {
      let formattedDate =
        formatDate(airport.arrivalDateExpected) ??
        formatDate(airport.arrivalDate);
      return formattedDate === currentDate;
    }
  });

  const filteredData = isEqualDates
    .map((e, index) => (e ? index : null))
    .filter((index) => index !== null);

  useEffect(() => {
    if (type !== "ARRIVAL") {
      setType("DEPARTURE");
    }
  }, []);

  return (
    <div className="board__content">
      <div className="filter">
        <div className="filter__date-wrapper">
          <label
            htmlFor="filter-date-input"
            className="filter__date-input-label">
            <p>{date}</p>
            <input
              type="date"
              className="filter__date-input"
              id="filter-date-input"
              value={date}
              onChange={handleDateChange}
              onClick={() => setActiveButton("")}
            />
          </label>
          <div className="filter__date-buttons">
            <div
              className={`filter__date-button ${activeButton === "previous" ? "filter__date-button_current" : ""}`}
              onClick={handlePreviousDate}>
              <p>{getPreviousDate(currentDate)}</p>
              <p>ВЧОРА</p>
            </div>
            <div
              className={`filter__date-button ${activeButton === "current" ? "filter__date-button_current" : ""}`}
              onClick={handleCurrentDate}>
              <p>{currentDate}</p>
              <p>СЬОГОДНІ</p>
            </div>
            <div
              className={`filter__date-button ${activeButton === "next" ? "filter__date-button_current" : ""}`}
              onClick={handleNextDate}>
              <p>{getNextDate(currentDate)}</p>
              <p>ЗАВТРА</p>
            </div>
          </div>
        </div>
      </div>
      <div className="table">
      <ul className="airport-list">
  {(inputSearchArray.length > 0 ? inputSearchArray : data).map((airport) => {
    if(filteredData.includes(data.indexOf(airport))){
    if (
      (type === "DEPARTURE" && airport.type === "DEPARTURE") ||
      (type === "ARRIVAL" && airport.type === "ARRIVAL")
    ) {
      return (
        <li key={airport.id} className="airport-item">
          <img
            src={airport.airlineLogo}
            alt="logo"
            className="airport-item__logo"
          />
          <p className="airport-item__name">{airport.airlineName}</p>
          <p className="airport-item__city">
            Виліт з аеропорту {airport.departureCity}
          </p>
          <p className="airport-item__date">
            {formatDate(airport.departureDateExpected) === null
              ? formatDate(airport.departureDate)
              : formatDate(airport.departureDateExpected)}
          </p>
          <p className="airport-item__city">
            Приліт у аеропорт {airport.arrivalCity}
          </p>
          <p className="airport-item__date">
            {formatDate(airport.arrivalDateExpected) === null
              ? formatDate(airport.arrivalDate)
              : formatDate(airport.arrivalDateExpected)}
          </p>
          <p className="airport-item__code">{airport.codeShare}</p>
          <p className="airport-item__terminal">Термінал {airport.terminal}</p>
          <p className="airport-item__status">Статус {airport.status}</p>
          <p className="airport-item__type">{airport.type}</p>
        </li>
      );
    } else {
      return null;
    }}
  })}
</ul>


        {!currentDateIsAvailable && (
          <h1 className="no-flights">НЕМАЄ РЕЙСІВ</h1>
        )}
      </div>
    </div>
  );
};

export default SearchForm;
