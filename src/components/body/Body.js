import React from "react";
import "../../styles/body/body.css";
import Background from "./components/Background";
import Logo from "./components/Logo";

function Body() {
  return (
    <div className="Body">
      <Background />
      <Logo />
    </div>
  );
}

export default Body;
