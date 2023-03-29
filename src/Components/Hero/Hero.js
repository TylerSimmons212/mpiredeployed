import React from "react";
import Button from "@material-ui/core/Button";
import YouTube from "react-youtube";
import thumbnail from "../../images/mpire_thumbnail.png"

import "./hero.css";

const Hero = (props) => {
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
        
        <video src="https://mpiremedia.nyc3.digitaloceanspaces.com/MpireVideo.mp4" controls poster={thumbnail} width="100%" height="auto" style={{ maxWidth: '560px' }} />
      </div>
    </div>
  );
};

export default Hero;
