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
            <h2>Full Service Ad Management</h2>
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
              <p>Campaign Structure Buildout</p>
              <p className="hb-pricing">
                $2000 for Google & $1000 for Meta
              </p>
            </section>
            <section>
              <p>We Need Help</p>
              <p className="hb-pricing">$1500/Mo | 3 month contract with limited services we can discuss</p>
            </section>
            <section>
              <p>Business Manager Clean Up</p>
              <p className="hb-pricing">$1000 per platform</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurPricing;
