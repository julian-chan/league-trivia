import React from 'react';
import { useHistory } from 'react-router-dom';
import './ConfirmEndGamePopup.css';

function ConfirmEndGamePopup(props) {
  let history = useHistory();

  const handleConfirmEndGameButtonClick = () => {
    props.handleClosePopup();
    history.push("/");
  }

  const handleGoBackButtonClick = () => {
    props.handleClosePopup();
  }

  return (
    <div className="ConfirmEndGamePopup">
      <div className="ConfirmEndGamePopupBox">
        <div className="ConfirmEndGamePopupText">
          Are you sure you want to end the game?
        </div>
        <button className="ConfirmEndGamePopupButton" onClick={handleConfirmEndGameButtonClick}>
          End Game
        </button>
        <button className="ConfirmEndGamePopupButton" onClick={handleGoBackButtonClick}>
          Go Back
        </button>
      </div>
    </div>
  )
}

export default ConfirmEndGamePopup;