import React from "react";
import Button from "@material-ui/core/Button";

import "./hero.css";

const Hero = (props) => {

  return (
    <div className="hero">
      <h2>
        WE ARE AN ELITE GROUP OF MARKETERS BEHIND $400M+ IN ADS WHO LOVE SCALING
        BRANDS.
      </h2>
      <p>
        With so many problems in traditional ad agency models, we decided to
        distrupt the industry with a game changing solution.
      </p>
      <div className="contactbtn">
        <Button
          variant="contained"
          onClick={() => {
            props.setForm(true);
          }}
          className="contactbtntxt2"
        >
          LETS CHAT
        </Button>
      </div>
    </div>
  );
};

export default Hero;
