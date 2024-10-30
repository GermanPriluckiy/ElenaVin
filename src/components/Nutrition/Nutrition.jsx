import React from "react";
import { nutrition } from "../../utils/constants";

const Nutrition = () => {
  return (
    <div className="nutrition">
      <ul className="nutrition__list">
        {nutrition.listTitle}
        <li className="nutrition__list_item">{nutrition.listItem1}</li>
        <li className="nutrition__list_item">{nutrition.listItem2}</li>
        <li className="nutrition__list_item">{nutrition.listItem3}</li>
        <li className="nutrition__list_item">{nutrition.listItem4}</li>
        <li className="nutrition__list_item">{nutrition.listItem5}</li>
        <li className="nutrition__list_item">{nutrition.listItem6}</li>
      </ul>
    </div>
  );
};

export default Nutrition;
