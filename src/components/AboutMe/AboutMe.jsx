import React from "react";
import { aboutMe } from "../../utils/constants";

const AboutMe = () => {
  return (
    <div className="aboutMe">
      <p1 className="aboutMe__title">{aboutMe.title}</p1>
      <p2 className="aboutMe__subtitle">{aboutMe.subtitle}</p2>
      <ul className="aboutMe__list">
        {aboutMe.listTitle}

        <li className="aboutMe__list_item">{aboutMe.listItem1}</li>
        <li className="aboutMe__list_item">{aboutMe.listItem2}</li>
        <li className="aboutMe__list_item">{aboutMe.listItem3}</li>
        <li className="aboutMe__list_item">{aboutMe.listItem4}</li>
        <li className="aboutMe__list_item">{aboutMe.listItem5}</li>
      </ul>
      <ul className="aboutMe__list">
        {aboutMe.listTitle1}

        <li className="aboutMe__list_item">{aboutMe.listItem6}</li>
      </ul>
    </div>
  );
};

export default AboutMe;
