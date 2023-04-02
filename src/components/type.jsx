import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter  className="text-sky-500 md:text-xl mb-3 font-medium"
      options={{
        strings: [
          "Systems Administrator",
          "Audio Engineer",
          "Front End Developer",
          "Artist",
          "Musician",
          "Nerd"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 30,
      }}
    />
  );
}

export default Type;