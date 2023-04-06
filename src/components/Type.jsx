import React from "react";
import Typewriter from "typewriter-effect";
import { styles } from "../styles";

function Type() {
  return (
    <Typewriter  
      options={{
        strings: [
          "Systems Administrator",
          "Audio Engineer",
          "Front End Developer",
          "Artist",
          "Musician",
          "Nerd"
        ],
				skipAddStyles: true,
        autoStart: true,
        loop: true,
        deleteSpeed: 20,
      }}
    />
  );
}

export default Type;