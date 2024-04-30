import React from "react";
import logo from "../../images/logo2.jpg";

const Header = () => {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="Лого Сайта"/>
      <div className="header__info">
        <h1 className="header__info-name">Елена Виноградова</h1>
        <h2 className="header__info-description">Твое тело - твое тело, мое тело - мое тело.</h2>
      </div>
    </header>
  );
};

export default Header;
