import React from "react";

function Education() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6">
          <img src="media/images/education.svg" style={{ width: "70%" }} />
        </div>
        <div className="col-6">
          <h1 className="mb-3 fs-2">Crypto Trading Education</h1>
          <p>
            Crypto Academy, your comprehensive guide to cryptocurrency trading, from blockchain basics to advanced trading strategies and technical analysis.
          </p>
          <a href="" style={{ textDecoration: "none" }}>
            Crypto Academy <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
          <p className="mt-5">
            Trading Community, a vibrant platform where crypto traders share insights, strategies, and market analysis to help you make informed decisions.
          </p>
          <a href="" style={{ textDecoration: "none" }}>
            Join Community <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;
