import React from "react";
import { Link } from "react-router-dom";

function Stats() {
  return (
    <div className="container p-3">
      <div className="row p-5">
        <div className="col-6 p-5">
          <h1 className="fs-2 mb-5">Trade with Confidence</h1>
          <h2 className="fs-4">Secure & Reliable</h2>
          <p className="text-muted">
            Join over 100,000+ traders who trust our platform with their cryptocurrency investments, managing over $1B+ in trading volume.
          </p>
          <h2 className="fs-4">Advanced Trading Tools</h2>
          <p className="text-muted">
            Access cutting-edge trading bots, real-time market analysis, and customizable strategies without any hidden fees or gimmicks.
          </p>
          <h2 className="fs-4">Complete Crypto Ecosystem</h2>
          <p className="text-muted">
            A comprehensive platform offering everything from automated trading to portfolio management, all designed for crypto enthusiasts.
          </p>
          <h2 className="fs-4">Smart Trading Features</h2>
          <p className="text-muted">
            With features like risk management, portfolio rebalancing, and market sentiment analysis, we help you make smarter trading decisions.
          </p>
        </div>
        <div className="col-6 p-5">
          <img src="media/images/ecosystem.png" style={{ width: "90%" }} />
          <div className="text-center">
            <Link to="/landing_page/products" className="mx-5" style={{ textDecoration: "none" }}>
              Explore Trading Bots{" "}
              <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </Link>
            <a href="" style={{ textDecoration: "none" }}>
              Try Demo Trading{" "}
              <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
