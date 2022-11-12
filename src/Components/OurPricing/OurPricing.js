import React from "react";
import "./ourpricing.css";

const OurPricing = (props) => {
  return (
    <div className="ourpricing-container">
      <div className="ourpricing">
        <h2 id="usvotherstitle" className="ourpricingtitle">
          TRANSPARENT PRICING
        </h2>
        <div className="pricingcontent">
          <div className="halfbox">
            <h2>Managed Ad Platforms</h2>
            <section>
              <p>Single Platform Ad Management (eg. Meta Ads)</p>
              <p className="hb-pricing">$3,000/Mo</p>
            </section>
            <section>
              <p>Two Ad Platforms Management (eg. Meta Ads and Google Ads)</p>
              <p className="hb-pricing">$5,000/Mo</p>
            </section>
            <section>
              <p>Additonal Managed Ad Platforms After Two</p>
              <p className="hb-pricing">$1,000/Mo</p>
            </section>
          </div>
          <div className="halfbox">
            <h2>Additional Services</h2>
            <section>
              <p>Account Audits</p>
              <p className="hb-pricing">Each Ad Account $500</p>
            </section>
            <section>
              <p>Campaign Buildout</p>
              <p className="hb-pricing">
                $3000 / full build + consulting = $4000
              </p>
            </section>
            <section>
              <p>Consulting</p>
              <p className="hb-pricing">(1hr/week) $250/hr</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurPricing;
