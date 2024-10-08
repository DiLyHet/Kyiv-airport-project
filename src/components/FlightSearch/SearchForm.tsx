import React, { useState, useEffect } from "react";
import { getAirportData } from "../../gateways";
import Image from "../../../public/images/CalendarIcon.svg";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { setDataAction, setDateAction } from "../../redux/slices/rootSlice";
import { getCurrentFormattedDate } from "../../utils";

interface SearchFormProps { }

const SearchForm: React.FC<SearchFormProps> = () => {

  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.data);
  const type = useAppSelector((state) => state.type);
  const date = useAppSelector((state) => state.date);
  const inputSearchArray = useAppSelector((state) => state.inputSearchArray);

  const [activeButton, setActiveButton] = useState("current");
  const [currentDateIsAvailable, setCurrentDateIsAvailable] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const airportData = await getAirportData();
        dispatch(setDataAction(airportData));
      } catch (error) {
        console.error("Failed to receive data from server");
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    let availableDate = false;
    if (data.length !== 0) {
      data.forEach((airport) => {
        const formattedDate =
          type === "DEPARTURE"
            ? formatDate(airport.departureDateExpected) ??
            formatDate(airport.departureDate)
            : formatDate(airport.arrivalDateExpected) ??
            formatDate(airport.arrivalDate);

        if (formattedDate === date && airport.type === type) {
          availableDate = true;
        }
      });
    }
    setCurrentDateIsAvailable(availableDate);
  }, [data, type, date]);

  const currentDate = getCurrentFormattedDate();

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setDateAction(e.target.value));
    console.log(date);
  };

  const handlePreviousDate = () => {
    setActiveButton("previous");
    dispatch(setDateAction(getPreviousDate(currentDate)));
  };

  const handleCurrentDate = () => {
    setActiveButton("current");
    dispatch(setDateAction(currentDate));
  };

  const handleNextDate = () => {
    setActiveButton("next");
    dispatch(setDateAction(getNextDate(currentDate)));
  };

  const formatNumber = (num: number): string => {
    return num < 10 ? `0${num}` : num.toString();
  };

  const formatDate = (timestamp: number | null) => {
    if (timestamp === null) {
      return null;
    }
    const dateObj = new Date(timestamp);
    const year = dateObj.getFullYear();
    const month = String(dateObj.getMonth() + 1).padStart(2, "0");
    const day = String(dateObj.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const getPreviousDate = (currentDate: string) => {
    const [year, month, day] = currentDate.split("-").map(Number);
    const prevDate = new Date(year, month - 1, day);
    prevDate.setDate(prevDate.getDate() - 1);

    const prevDay = formatNumber(prevDate.getDate());
    const prevMonth = formatNumber(prevDate.getMonth() + 1);
    const prevYear = prevDate.getFullYear();
    return `${prevYear}-${prevMonth}-${prevDay}`;
  };

  const getNextDate = (currentDate: string) => {
    const [year, month, day] = currentDate.split("-").map(Number);
    const nextDate = new Date(year, month - 1, day);
    nextDate.setDate(nextDate.getDate() + 1);

    const nextDay = formatNumber(nextDate.getDate());
    const nextMonth = formatNumber(nextDate.getMonth() + 1);
    const nextYear = nextDate.getFullYear();
    return `${nextYear}-${nextMonth}-${nextDay}`;
  };

  return (
    <div className="board__content">
      <div className="filter">
        <div className="filter__date-wrapper">
          <label
            htmlFor="filter-date-input"
            className="filter__date-input-label"
          >
            <p>{date}</p>
            <input
              type="date"
              className="filter__date-input"
              style={{ backgroundImage: `url(${Image})` }}
              id="filter-date-input"
              value={date}
              onChange={handleDateChange}
              onClick={() => setActiveButton("")}
            />
          </label>
          <div className="filter__date-buttons">
            <div
              className={`filter__date-button ${activeButton === "previous" ? "filter__date-button_current" : ""}`}
              onClick={handlePreviousDate}
            >
              <p>{getPreviousDate(currentDate)}</p>
              <p>ВЧОРА</p>
            </div>
            <div
              className={`filter__date-button ${activeButton === "current" ? "filter__date-button_current" : ""}`}
              onClick={handleCurrentDate}
            >
              <p>{currentDate}</p>
              <p>СЬОГОДНІ</p>
            </div>
            <div
              className={`filter__date-button ${activeButton === "next" ? "filter__date-button_current" : ""}`}
              onClick={handleNextDate}
            >
              <p>{getNextDate(currentDate)}</p>
              <p>ЗАВТРА</p>
            </div>
          </div>
        </div>
      </div>
      <div className="table">
        <ul className="airport-list">
          {(inputSearchArray.length > 0 ? inputSearchArray : data).map(
            (airport) => {
              const formattedDate =
                type === "DEPARTURE"
                  ? formatDate(airport.departureDateExpected) ??
                  formatDate(airport.departureDate)
                  : formatDate(airport.arrivalDateExpected) ??
                  formatDate(airport.arrivalDate);

              if (formattedDate === date && airport.type === type) {
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
                    <p className="airport-item__date">{formattedDate}</p>
                    <p className="airport-item__city">
                      Приліт у аеропорт {airport.arrivalCity}
                    </p>
                    <p className="airport-item__date">{formattedDate}</p>
                    <p className="airport-item__code">{airport.codeShare}</p>
                    <p className="airport-item__terminal">
                      Термінал {airport.terminal}
                    </p>
                    <p className="airport-item__status">
                      Статус {airport.status}
                    </p>
                    <p className="airport-item__type">{airport.type}</p>
                  </li>
                );
              } else {
                return null;
              }
            },
          )}
        </ul>
        {!currentDateIsAvailable && (
          <h1 className="no-flights">НЕМАЄ РЕЙСІВ</h1>
        )}
      </div>
    </div>
  );
};

export default SearchForm;