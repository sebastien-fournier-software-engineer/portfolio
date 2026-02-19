import React from "react";
import logo from "../../Assets/logo.png";

function Pre(props) {
  return (
    <div id={props.load ? "preloader" : "preloader-none"}>
      {props.load && (
        <img src={logo} alt="Loading..." className="preloader-logo" />
      )}
    </div>
  );
}

export default Pre;
