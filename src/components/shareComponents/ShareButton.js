import React from "react";
import "../../stylesheets/layout/shareContent/shareButton.scss";

function ShareButton(props) {
  return (
    <button
      type="submit"
      className={`button__share ${props.buttonDisabled}`}
      onClick={props.SendData}
    >
      <i className="far fa-address-card"></i>
      Crear tarjeta
    </button>
  );
}

export default ShareButton;
