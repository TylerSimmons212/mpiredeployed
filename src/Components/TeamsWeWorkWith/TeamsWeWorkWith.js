import React from "react";
import "./teams.css";

const Teams = () => {
  return (
    <div className="teams">
      <div className="teams-content">
        <h2>CREATIVE TEAMS WE WORK WITH</h2>
        <div class="container">
          <div class="wrapper" id="creatably">
            <img src="https://mpiremedia.nyc3.cdn.digitaloceanspaces.com/creative_teams%2Fcreatablylogo.png" alt="Creatably" />
          </div>
          <div class="wrapper" id="filmlaab">
            <img src="https://mpiremedia.nyc3.cdn.digitaloceanspaces.com/creative_teams%2Ffilmlaab.png" alt="Film Laab" />
          </div>
          <div class="wrapper" id="sipo">
            <img src="https://mpiremedia.nyc3.cdn.digitaloceanspaces.com/creative_teams%2Fsipostudioslogo.png" alt="Sipo Studios" />
          </div>
          <div class="wrapper" id="studiio">
            <img src="https://mpiremedia.nyc3.cdn.digitaloceanspaces.com/creative_teams%2FSTUDIIO.png" alt="STUDIIO" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teams;
