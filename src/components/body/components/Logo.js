import React from "react";
import "../../../styles/body/body.css";
// import pineapple from "../../../styles/body/pineapple_text.png";
import pineapple from "../../../styles/body/pineapple1.png";
import pineappleText from "../../../styles/body/pineapple2.png";

function Logo() {
  return (
    <div className="Logo">
      <img src={pineapple} alt="АНАНАСОВАЯ МЕЧТА" className="pineapple-image" />
      <img
        src={pineappleText}
        alt="АНАНАСОВАЯ МЕЧТА"
        className="pineapple-text"
      />
    </div>
  );
}

export default Logo;
