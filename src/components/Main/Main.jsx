import React from "react";
import NavTab from "../NavTab/NavTab";
import mainPhoto from "../../images/MainPhoto.jpg" 



const Main = () => {
  return (
    <div className="main">
        <NavTab />
        <img src={mainPhoto} className="mainPhoto" alt="Моя фотография" />
    </div>
  )
};

export default Main;