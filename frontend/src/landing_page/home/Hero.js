import React from "react";

function Hero() {
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <img
          src="media/images/homeHero.png"
          alt="Hero Image"
          className="mb-5"
        />
        <h1 className="mt-5">Automate Your Crypto Trading</h1>
        <p>
          Experience the future of cryptocurrency trading with our AI-powered bots. Maximize your profits with automated, data-driven trading strategies.
        </p>
        <button
          className="p-2 btn btn-primary fs-5 mb-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Start Trading
        </button>
      </div>
    </div>
  );
}

export default Hero;
