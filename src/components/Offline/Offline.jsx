import React from "react";
import { personalGym } from "../../utils/constants";

const Offline = () => {
  return (
    <div className="offline">
      <ul className="offline__list">
        {personalGym.listTitle}
        <li className="offline__list_item">{personalGym.listItem1}</li>
        <li className="offline__list_item">{personalGym.listItem2}</li>
        <li className="offline__list_item">{personalGym.listItem3}</li>
        <li className="offline__list_item">{personalGym.listItem4}</li>
        <li className="offline__list_item">{personalGym.listItem5}</li>
        <li className="offline__list_item">{personalGym.listItem6}</li>
      </ul>
    </div>
  );
};

export default Offline;
