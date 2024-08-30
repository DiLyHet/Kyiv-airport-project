import React from "react";
import "./header.scss";
import WhiteLogo from "../../images/Logo.png";

const Header: React.FC = () => {
  return (
    <header className="header">
      <button className="header__logo">
        <img className="header__logo_img" src={WhiteLogo} alt="Logo" />
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
