import React, { useEffect } from "react";
import "./aboutus.css";

const Aboutus = () => {
  useEffect(() => {}, []);

  return (
    <div className="aboutus" id="aboutus">
      <div className="aboutus-container">
        <div className="aboutuscontent">
          <h1>About The Founders</h1>
          <p>
            We are Brand Builders and entrepreneurs. We love challenging
            projects. We are convinced that any brand can win on any budget with
            the right strategy. We have a history of building profitable
            companies by leveraging the power of the digital media world. We've
            founded, built, and sold online businesses that generated over $1
            million within 12 months of creation with less than $10,000.
            <br />
            <br />
            Our life-changing moment was when we took it upon ourselves to start
            our digital marketing efforts through affiliate programs. We quickly
            discovered the money in marketing. We knew then that this is what we
            wanted to do for the rest of our lives. Our start in affiliate
            marketing made us who we are today as all our efforts were
            commission-based and self-funded. Our campaigns had to show
            profitability, or it was game over. Since then, We've had years of
            experience in agency, affiliate, eCom, and start-ups.
            <br />
            <br />
            Now, you can find us building some of the most memorable and
            strongest brands on the rise today. We've been a leading role behind
            over $400,000,000 in trackable sales, 400 million video ad views, 5
            million social shares, and 15k press features. Brands We’ve been
            working on have been featured in AdWeek, Forbes, Time, etc...
          </p>
        </div>
        <div className="aboutusimg"></div>
      </div>
    </div>
  );
};

export default Aboutus;
