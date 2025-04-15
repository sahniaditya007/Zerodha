import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 mb-5">
        <h1 className="fs-2 text-center">
        Revolutionizing Crypto Trading: Smart Bots, 
          <br />
          Seamless Automation, and Profitable Outcomes.
        </h1>
      </div>

      <div
        className="row p-5 mt-5 border-top text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-6 p-5">
          <p>
          At CryptoPilot, we specialize in developing advanced crypto trading bots that help traders maximize profits and reduce risks. Our bots are designed to work 24/7, providing an efficient and hands-off trading experience.
          </p>
          <p>
          Our mission is to make crypto trading more accessible and profitable for everyone, whether you're a beginner or an experienced trader. We focus on providing reliable, secure, and customizable bots that cater to each trader’s unique needs.
          </p>
          <p>
          With a team of experienced developers and crypto experts, we ensure that our bots are powered by the latest technology and best practices in the industry. We prioritize security and guarantee the safety of your funds with encrypted API connections.
          </p>
        </div>
        <div className="col-6 p-5">
          <p>
          Customer satisfaction is our top priority. We offer dedicated 24/7 support to assist you with any questions or concerns, ensuring you have a smooth and successful trading experience.
          
           <p>
           We believe in continuous innovation, and our bots are constantly updated with the latest market strategies. This ensures that our users can stay ahead in the fast-paced world of cryptocurrency trading. We provide flexible subscription plans to cater to traders of all levels and ensure they have the tools they need to succeed.
           </p>

           <p>
           At CryptoPilot, we understand the importance of transparency and trust. That's why our bots are fully transparent, giving you access to performance metrics, trade history, and other vital data to track their effectiveness. We're committed to empowering traders with the tools they need to achieve their financial goals.
           </p>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
