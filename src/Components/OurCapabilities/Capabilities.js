import React, { useEffect } from "react";

import "./capabilities.css";

const Capabilities = (props) => {
  useEffect(() => {}, []);

  const handleCardsHover = (e) => {
    for (const card of document.getElementsByClassName("card")) {
      const rect = card.getBoundingClientRect(),
        x = e.clientX - rect.left,
        y = e.clientY - rect.top;

      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    }
  };
  return (
    <div className="capabilities" id="capabilities">
      <h1>Our Capabilities</h1>
      <div className="capabilities-section">
        <h2 style={{ color: "#ECF0F1" }}>Ad Buying</h2>
        <p style={{ color: "#ECF0F1" }}>
          Our core strength is in multi platform ad buying. Below are a list of
          platforms we have ran ads for our clients on.
        </p>
        <div className="icons">
          <div id="cards" onMouseOver={handleCardsHover}>
            <div className="card">
              <div className="card-content">
                <div className="card-image">
                  <i class="fab fa-facebook"></i>
                </div>
                <div className="card-info-wrapper">
                  <div className="card-info">
                    <div className="card-info-title">
                      <p>Facebook</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-content">
                <div className="card-image">
                  <i class="fab fa-instagram"></i>
                </div>
                <div className="card-info-wrapper">
                  <div className="card-info">
                    <div className="card-info-title">
                      <p>Instagram</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-content">
                <div className="card-image">
                  <i class="fab fa-google"></i>
                </div>
                <div className="card-info-wrapper">
                  <div className="card-info">
                    <div className="card-info-title">
                      <p>Google</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-content">
                <div className="card-image">
                  <i class="fab fa-youtube"></i>
                </div>
                <div className="card-info-wrapper">
                  <div className="card-info">
                    <div className="card-info-title">
                      <p>Youtube</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-content">
                <div className="card-image">
                  <i class="fab fa-linkedin"></i>
                </div>
                <div className="card-info-wrapper">
                  <div className="card-info">
                    <div className="card-info-title">
                      <p>LinkedIn</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-content">
                <div className="card-image">
                  <i class="fab fa-snapchat"></i>
                </div>
                <div className="card-info-wrapper">
                  <div className="card-info">
                    <div className="card-info-title">
                      <p>SnapChat</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-content">
                <div className="card-image">
                  <i class="fab fa-tiktok"></i>
                </div>
                <div className="card-info-wrapper">
                  <div className="card-info">
                    <div className="card-info-title">
                      <p>Tik Tok</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-content">
                <div className="card-image">
                  <i class="fab fa-pinterest"></i>
                </div>
                <div className="card-info-wrapper">
                  <div className="card-info">
                    <div className="card-info-title">
                      <p>Pinterest</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="capabilities-section">
        <h2 style={{ color: "#ECF0F1" }}>Our Strengths</h2>
        <p style={{ color: "#ECF0F1" }}>
          We've been doing ad buying & marketing strategy long enough to know
          what does & doesn't work. We will help you with the following:
        </p>
        <div className="icons our-strengths">
          <div className="icon">
            <i class="fas fa-bullhorn"></i>
            <p>Market & Content Strategy</p>
          </div>
          <div className="icon">
            <i class="fas fa-hashtag"></i>
            <p>Social Media Marketing Plan Development</p>
          </div>
          <div className="icon">
            <i class="fas fa-code-branch"></i>
            <p>Creative Development Strategy</p>
          </div>
          <div className="icon">
            <i class="fas fa-wifi"></i>
            <p>Website UX/UI Optimization</p>
          </div>
          <div className="icon">
            <i class="far fa-chart-bar"></i>
            <p>Tracking/Analytics</p>
          </div>
          <div className="icon">
            <i class="fab fa-bandcamp"></i>
            <p>Brand Development Strategy</p>
          </div>
          <div className="icon">
            <i class="fas fa-comments"></i>
            <p>SMS Subscription & Promotional Advertising</p>
          </div>
          <div className="icon">
            <i class="fas fa-filter"></i>
            <p>Full Funnel Advertising Development Strategy</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Capabilities;
