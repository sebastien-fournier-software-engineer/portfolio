import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Robotics Engineer",
          "Software Architect",
          "Machine Learning Engineer",
          "Freelancer",
          "Open Source Contributor",
        ],
        autoStart: true,
        loop: true,
        delay: 40,
        deleteSpeed: 30,
      }}
    />
  );
}

export default Type;
