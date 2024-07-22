import React from "react";

const Modal = ({isModalOpen}) => {
    return(
        <div className={`modal  ${
            isModalOpen ? "modal_opened" : ""
          } `}>
            <div className="modal__container"></div>
        </div>
    )
}

export default Modal;