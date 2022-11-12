import React from "react";
import chamber from "../../images/teamslogos/chambermedialogo.png";
import creatably from "../../images/teamslogos/creatablylogo.png";
import filmlaab from "../../images/teamslogos/filmlaab.png";
import matixlabs from "../../images/teamslogos/matixlabslogo.png";
import revi from "../../images/teamslogos/revilogo.png";
import sipstudios from "../../images/teamslogos/sipostudioslogo.png";

import "./teams.css";

const Teams = () => {
  return (
    <div className="teams">
      <div className="teams-content">
        <h2>CREATIVE TEAMS WE WORK WITH</h2>
        <div class="container">
          <div class="wrapper" id="chamber">
            <img src={chamber} alt="Chamber Media" />
          </div>
          <div class="wrapper" id="creatably">
            <img src={creatably} alt="Creatably" />
          </div>
          <div class="wrapper" id="filmlaab">
            <img src={filmlaab} alt="Film Laab" />
          </div>
          <div class="wrapper" id="matix">
            <img src={matixlabs} alt="Matix Labs" />
          </div>
          <div class="wrapper" id="revi">
            <img src={revi} alt="Revi" />
          </div>
          <div class="wrapper" id="sipo">
            <img src={sipstudios} alt="Sipo Studios" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teams;
