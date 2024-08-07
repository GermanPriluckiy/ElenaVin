import React from "react";
import { text1, text2, text3, text4 } from "../../utils/constants";
import Modal from "../Modal/Modal";

const Main = () => {
  const [isModalOpen, setIsModalPopupOpen] = React.useState(false);

  function handleModalOpenClick() {
    setIsModalPopupOpen(true);
  }

  return (
    <div className="main">
      <div className="main__container">
        <div className="main__container_block">
          <p className="main__container_description">{text1}</p>
          <button
            className="main__container_button"
            onClick={handleModalOpenClick}
            style={{
              backgroundImage: `url(${require("../../images/icon1.jpg")})`,
            }}
          />
        </div>
        <div className="main__container_block">
          <p className="main__container_description">{text2}</p>
          <button
            className="main__container_button"
            style={{
              backgroundImage: `url(${require("../../images/icon2.jpg")})`,
            }}
          />
        </div>
        <div className="main__container_block">
          <p className="main__container_description">{text3}</p>

          <button
            className="main__container_button"
            style={{
              backgroundImage: `url(${require("../../images/icon3.jpg")})`,
            }}
          />
        </div>
        <div className="main__container_block">
          <p className="main__container_description">{text4}</p>
          <button
            className="main__container_button"
            style={{
              backgroundImage: `url(${require("../../images/icon4.jpg")})`,
            }}
          />
        </div>
      </div>
      <Modal isModalOpen={isModalOpen} />
    </div>
  );
};

export default Main;
