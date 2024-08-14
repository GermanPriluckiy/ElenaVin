import React from "react";
import { text1, text2, text3, text4 } from "../../utils/constants";
import Modal from "../Modal/Modal";
import { personalGym, personalOnline, nutrition } from "../../utils/constants";

const Main = () => {
  const [isModalOpen, setIsModalPopupOpen] = React.useState(false);
  const [isAboutMe, setIsAboutMe] = React.useState(false);
  const [aboutTraining, setAboutTraining] = React.useState({});

  function handlePersonalGymModalOpenClick() {
    setAboutTraining(personalGym);
    handleModalOpenClick();
  }

  function handlePersonalOnlineModalOpenClick() {
    setAboutTraining(personalOnline);
    handleModalOpenClick();
  }

  function handleNutritionModalOpenClick() {
    setAboutTraining(nutrition);
    handleModalOpenClick();
  }

  function handleModalOpenClick() {
    setIsModalPopupOpen(true);
  }
  
  function handleAboutMeModalOpenClick() {
    setIsModalPopupOpen(true);
    setIsAboutMe(true);
  }

  function handleModalCloseClick() {
    setIsModalPopupOpen(false);
    setIsAboutMe(false);
    setAboutTraining({});
  }


  return (
    <div className="main">
      <div className="main__container">
        <div className="main__container_block">
          <p className="main__container_description">{text1}</p>
          <button
            className="main__container_button"
            onClick={handlePersonalGymModalOpenClick}
            style={{
              backgroundImage: `url(${require("../../images/icon1.jpg")})`,
            }}
          />
        </div>
        <div className="main__container_block">
          <p className="main__container_description">{text2}</p>
          <button
            className="main__container_button"
            onClick={handlePersonalOnlineModalOpenClick}
            style={{
              backgroundImage: `url(${require("../../images/icon2.jpg")})`,
            }}
          />
        </div>
        <div className="main__container_block">
          <p className="main__container_description">{text3}</p>

          <button
            className="main__container_button"
            onClick={handleNutritionModalOpenClick}
            style={{
              backgroundImage: `url(${require("../../images/icon3.jpg")})`,
            }}
          />
        </div>
        <div className="main__container_block">
          <p className="main__container_description">{text4}</p>
          <button
            className="main__container_button"
            onClick={handleAboutMeModalOpenClick}
            style={{
              backgroundImage: `url(${require("../../images/icon4.jpg")})`,
            }}
          />
        </div>
      </div>
      <Modal isModalOpen={isModalOpen} onClose={handleModalCloseClick} isMe={isAboutMe} aboutTraining={aboutTraining}/>
    </div>
  );
};

export default Main;
