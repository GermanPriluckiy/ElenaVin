import React from "react";

const Header = () => {
  return (
    <header className="header">
      <div className="header__links">
        <a href="почта" target="_blank" rel="noreferrer">
        <div
          className="header__links_button"
          style={{
            backgroundImage: `url(${require("../../images/mailLink.png")})`,
          }}
        />
        </a>
        <a href="почта" target="_blank" rel="noreferrer">
        <div
          className="header__links_button"
          style={{
            backgroundImage: `url(${require("../../images/phoneLink.png")})`,
          }}
        />
        </a>
        <a href="https://vk.com/ponomarenko92" target="_blank" rel="noreferrer">
        <div
          className="header__links_button"
          style={{
            backgroundImage: `url(${require("../../images/vkLink.png")})`,
          }}
        />
        </a>
        <a href="https://t.me/+YzbEMeV3FOpmYmMy" target="_blank" rel="noreferrer">
        <div
          className="header__links_button"
          style={{
            backgroundImage: `url(${require("../../images/tgLink.jpg")})`,
          }}
        />
        </a>
      </div>
    </header>
  );
};

export default Header;
