import React from "react";
import '../../styles/header.scss';

const Header = () => {
  return(
    <header className="header">
      <button className="header__logo">
        <img className="header__logo_img" src="http://localhost:8080/7059b488acdb71054d5d.png"/>
      </button>
      <nav className="header__navigation">
        <button className="header__navigation_item">Пасажирам</button>
        <button className="header__navigation_item">Послуги IEV</button>
        <button className="header__navigation_item">VIP</button>
        <button className="header__navigation_item">Партнерам</button>
        <button className="header__navigation_item">Пресцентр</button>
        <button className="header__navigation_item">ua</button>
      </nav>
    </header>
  );
};

export default Header;
