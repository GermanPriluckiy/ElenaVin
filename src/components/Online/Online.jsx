import React from "react";
import { personalOnline } from "../../utils/constants";

const Online = () => {
  return (
    <div className="online">
      <ul className="online__list">
        {personalOnline.listTitle}
        <li className="online__list_item">{personalOnline.listItem1}</li>
        <li className="online__list_item">{personalOnline.listItem2}</li>
        <li className="online__list_item">{personalOnline.listItem3}</li>
        <li className="online__list_item">{personalOnline.listItem4}</li>
        <li className="online__list_item">{personalOnline.listItem5}</li>
        <li className="online__list_item">{personalOnline.listItem6}</li>
      </ul>
    </div>
  );
};

export default Online;
