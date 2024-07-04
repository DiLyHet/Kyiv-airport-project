import React, { useState, useEffect } from "react";
import { getAirportData } from "../../api";

interface Airport {
  id: number;
  airlineName: string;
  airlineLogo: string;
  departureCity: string;
  departureDate: number;
  departureDateExpected: number | null;
  arrivalCity: string;
  arrivalDate: number;
  arrivalDateExpected: number | null;
  codeShare: string;
  terminal: string;
  status: string;
  type: string;
}

interface SearchFormProps {
  type: string;
  setType: (type: string) => void;
  data: Airport[];
  setData: (data: Airport[]) => void;
  inputSearchArray: Airport[];
}

const SearchForm: React.FC<SearchFormProps> = ({
  type,
  setType,
  data,
  setData,
  inputSearchArray,
}) => {
  const getCurrentFormattedDate = () => {
    const today = new Date();
    const formatNumber = (num: number) => (num < 10 ? `0${num}` : num);
    const day = formatNumber(today.getDate());
    const month = formatNumber(today.getMonth() + 1);
    const year = today.getFullYear();
    return `${year}-${month}-${day}`;
  };

  const [activeButton, setActiveButton] = useState("current");
  const [date, setDate] = useState<string>(getCurrentFormattedDate());
  const [currentDateIsAvailable, setCurrentDateIsAvailable] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const airportData = await getAirportData();
        setData(airportData);
      } catch (error) {
        console.error('Failed to receive data from server');
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
            ? formatDate(airport.departureDateExpected) ?? formatDate(airport.departureDate)
            : formatDate(airport.arrivalDateExpected) ?? formatDate(airport.arrivalDate);

        if (formattedDate === date && airport.type === type) {
          availableDate = true;
        }
      });
    }
    setCurrentDateIsAvailable(availableDate);
  }, [data, type, date]);

  let currentDate = getCurrentFormattedDate();

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value);
  };

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
          <label htmlFor="filter-date-input" className="filter__date-input-label">
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
          {(inputSearchArray.length > 0 ? inputSearchArray : data).map((airport) => {
            const formattedDate =
              type === "DEPARTURE"
                ? formatDate(airport.departureDateExpected) ?? formatDate(airport.departureDate)
                : formatDate(airport.arrivalDateExpected) ?? formatDate(airport.arrivalDate);

            if (formattedDate === date && airport.type === type) {
              return (
                <li key={airport.id} className="airport-item">
                  <img src={airport.airlineLogo} alt="logo" className="airport-item__logo" />
                  <p className="airport-item__name">{airport.airlineName}</p>
                  <p className="airport-item__city">Виліт з аеропорту {airport.departureCity}</p>
                  <p className="airport-item__date">{formattedDate}</p>
                  <p className="airport-item__city">Приліт у аеропорт {airport.arrivalCity}</p>
                  <p className="airport-item__date">{formattedDate}</p>
                  <p className="airport-item__code">{airport.codeShare}</p>
                  <p className="airport-item__terminal">Термінал {airport.terminal}</p>
                  <p className="airport-item__status">Статус {airport.status}</p>
                  <p className="airport-item__type">{airport.type}</p>
                </li>
              );
            } else {
              return null;
            }
          })}
        </ul>
        {!currentDateIsAvailable && <h1 className="no-flights">НЕМАЄ РЕЙСІВ</h1>}
      </div>
    </div>
  );
};

export default SearchForm;
