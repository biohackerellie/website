import React from "react";
import Typewriter from "typewriter-effect";
import { styles } from "../styles";

function Type() {
  return (
  <Typewriter
    options={{
      delay: 75
    }}
    onInit={(typewriter) => {
      typewriter.typeString('Systems Administrator, <br /> Audio Engineer, <br /> Front End Developer, <br /> Artist, <br /> Musician, <br /> Nerd. <br />')

        .pauseFor(2500)
      typewriter.typeString('<br/>Scroll down for more info.')
        .start();
    }}
  />
  );
}

export default Type;

"Systems Administrator, <br /> Audio Engineer, <br /> Front End Developer, <br /> Artist, <br /> Musician <br /> Nerd"