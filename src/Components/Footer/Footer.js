import React from "react";

import "./footer.css";
import Logo from "../../images/MpireMediaM.png";

const Footer = () => {
  var date = new Date();
  var year = date.getFullYear();

  return (
    <div className="footer">
      <img src={Logo} alt="Logo" />
      <p>Copyright &copy; {year} Mpire Media LLC. All rights reserved.</p>
    </div>
  );
};

export default Footer;
