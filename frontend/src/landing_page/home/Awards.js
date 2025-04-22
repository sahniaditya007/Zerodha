import React from "react";

function Awards() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6 p-5">
          <img src="media/images/largestBroker.svg" alt="Crypto Trading Platform Illustration" />
        </div>
        <div className="col-6 p-5 mt-5">
          <h1>Leading Crypto Trading Platform</h1>
          <p className="mb-5">
          Risk-managed portfolio bot with stop-loss, take-profit, and smart diversification for consistent growth.
          </p>
          <div className="row">
            <div className="col-6">
              <ul>
                <li>
                  <p>Spot Trading</p>
                </li>
                <li>
                  <p>Futures & Derivatives</p>
                </li>
                <li>
                  <p>Automated Trading Bots</p>
                </li>
              </ul>
            </div>
            <div className="col-6">
              <ul>
                <li>
                  <p>Portfolio Management</p>
                </li>
                <li>
                  <p>Technical Analysis Tools</p>
                </li>
                <li>
                  <p>Market Sentiment Analysis</p>
                </li>
              </ul>
            </div>
          </div>
          <img src="media/images/pressLogos.png" alt="Press and Media Logos" style={{ width: "90%" }} />
        </div>
      </div>
    </div>
  );
}

export default Awards;
