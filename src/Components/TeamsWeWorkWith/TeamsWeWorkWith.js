import React from "react";
import creatably from "../../images/teamslogos/creatablylogo.png";
import filmlaab from "../../images/teamslogos/filmlaab.png";
import sipstudios from "../../images/teamslogos/sipostudioslogo.png";
import studiio from "../../images/teamslogos/STUDIIO.png";

import "./teams.css";

const Teams = () => {
  return (
    <div className="teams">
      <div className="teams-content">
        <h2>CREATIVE TEAMS WE WORK WITH</h2>
        <div class="container">
          <div class="wrapper" id="creatably">
            <img src={creatably} alt="Creatably" />
          </div>
          <div class="wrapper" id="studiio">
            <img src={studiio} alt="STUDIIO" />
          </div>
          <div class="wrapper" id="filmlaab">
            <img src={filmlaab} alt="Film Laab" />
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
