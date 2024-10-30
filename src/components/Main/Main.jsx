import React from "react";
import { text1, text2, text3, text4 } from "../../utils/constants";
import { Link, useLocation } from "react-router-dom";
import trainOffline from "../../images/trainOffline.jpg";
import trainOnline from "../../images/trainOnline.jpg";
import nutrition from "../../images/nutrition.jpg";
import aboutMe from "../../images/aboutMe.jpg";

const Main = () => {
  return (
    <div className="main">
      <div className="main__container">
        <div className="main__container_block">
          <p className="main__container_description">{text1}</p>
          <img
            className="main__container_image"
            src={trainOffline}
            alt="Фотография занятий в зале"
          />
          {/* <div className="main__container_image" /> */}
          <Link to="/offline">
            <button
              className="main__container_button"
              style={{
                backgroundImage: `url(${require("../../images/icon1.jpg")})`,
              }}
            />
          </Link>
        </div>
        <div className="main__container_block">
          <p className="main__container_description">{text2}</p>
          <img
            className="main__container_image"
            src={trainOnline}
            alt="Фотография занятий онлайн"
          />
          <Link to="/online">
            <button
              className="main__container_button"
              style={{
                backgroundImage: `url(${require("../../images/icon2.jpg")})`,
              }}
            />
          </Link>
        </div>
        <div className="main__container_block">
          <p className="main__container_description">{text3}</p>
          <img
            className="main__container_image"
            src={nutrition}
            alt="Фотография питания"
          />
          <Link to="/nutrition">
            <button
              className="main__container_button"
              style={{
                backgroundImage: `url(${require("../../images/icon3.jpg")})`,
              }}
            />
          </Link>
        </div>
        <div className="main__container_block">
          <p className="main__container_description">{text4}</p>
          <img
            className="main__container_image"
            src={aboutMe}
            alt="Фотография меня"
          />
          <Link to="/aboutme">
            <button
              className="main__container_button"
              style={{
                backgroundImage: `url(${require("../../images/icon4.jpg")})`,
              }}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Main;
