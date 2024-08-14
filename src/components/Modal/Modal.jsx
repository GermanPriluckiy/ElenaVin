import React from "react";
import { aboutMe } from "../../utils/constants";

const Modal = ({ isModalOpen, onClose, isMe, aboutTraining }) => {
  return (
    <div className={`modal  ${isModalOpen ? "modal_opened" : ""} `}>
      <div className="modal__container">
        <button
          className="modal__button-close"
          type="button"
          onClick={onClose}
        ></button>
        {isMe ? (
          <>
            <h1 className="modal__title">{aboutMe.title}</h1>
            <p className="modal__subtitle">{aboutMe.subtitle}</p>
            <ul className="modal__list">
              {aboutMe.listTitle}
              <li className="modal__list_item">{aboutMe.listItem1}</li>
              <li className="modal__list_item">{aboutMe.listItem2}</li>
              <li className="modal__list_item">{aboutMe.listItem3}</li>
              <li className="modal__list_item">{aboutMe.listItem4}</li>
              <li className="modal__list_item">{aboutMe.listItem5}</li>
            </ul>
            <ul className="modal__list">
              {aboutMe.listTitle1}
              <li className="modal__list_item">{aboutMe.listItem6}</li>
            </ul>
          </>
        ) : (
          <ul className="modal__list">
            {aboutTraining.listTitle}
            <li className="modal__list_item">{aboutMe.listItem1}</li>
            <li className="modal__list_item">{aboutMe.listItem2}</li>
            <li className="modal__list_item">{aboutMe.listItem3}</li>
            <li className="modal__list_item">{aboutMe.listItem4}</li>
            <li className="modal__list_item">{aboutMe.listItem5}</li>
            <li className="modal__list_item">{aboutMe.listItem6}</li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Modal;
