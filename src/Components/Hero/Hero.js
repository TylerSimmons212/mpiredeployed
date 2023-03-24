import React from "react";
import Button from "@material-ui/core/Button";
import YouTube from "react-youtube";
import thumbnail from "../../images/mpire_thumbnail.png"

import "./hero.css";

const Hero = (props) => {
  console.log(thumbnail)
  return (
    <div className="hero">
      <div className="hero-content">
        <h2>WE ARE AN ELITE GROUP OF MARKETERS BEHIND $400M+ IN ADS.</h2>
        <p>
          With so many problems in traditional ad agency models, we decided to
          disrupt the industry with a game changing solution.
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
      <div className="video">
        <YouTube videoId="5vMne4Jc0WM" thumbnail={thumbnail} width="100%" height="auto" />
      </div>
    </div>
  );
};

export default Hero;