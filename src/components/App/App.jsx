import "./App.css";
import React from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Modal from "../Modal/Modal";

function App() {

  const [isModalOpen, setIsModalPopupOpen] =
    React.useState(false);

    function handleModalOpenClick() {
      setIsModalPopupOpen(true);
    }
  return (
    <div className="App">
      <Header />
      <Main 
      onClick={handleModalOpenClick}/>
      <Modal 
      isModalOpen={isModalOpen}/>
    </div>
  );
}

export default App;
