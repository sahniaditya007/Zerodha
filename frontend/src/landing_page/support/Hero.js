import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="p-5 " id="supportWrapper">
        <h4>Support Portal</h4>
        <a href="">Track Tickets</a>
      </div>
      <div className="row p-5 m-3">
        <div className="col-6 p-3">
          <h1 className="fs-3">
            Search for an answer or browse help topics to create a ticket
          </h1>
          <input placeholder="Eg. how to set up trading bot" />
          <br />
          <a href="">Track account setup</a>
          <a href="">Track API integration</a>
          <a href="">Bot performance</a>
          <a href="">User manual</a>
        </div>
        <div className="col-6 p-3">
          <h1 className="fs-3">Featured</h1>
          <ol>
            <li>
              <a href="">Latest Bot Performance Updates - January 2024</a>
            </li>
            <li>
              <a href="">New Trading Strategies & Indicators</a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
