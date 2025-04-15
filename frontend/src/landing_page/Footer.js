import React from "react";

function Footer() {
  return (
    <footer style={{ backgroundColor: "rgb(250, 250, 250)" }}>
      <div className="container border-top mt-5">
        <div className="row mt-5">
          <div className="col">
            <h3 className="text-primary">CryptoPilot</h3>
            <p>
              &copy; 2020 - 2024, CryptoPilot Trading Ltd. All rights reserved.
            </p>
          </div>
          <div className="col">
            <p>Company</p>
            <a href="" style={{ textDecoration: 'none', color: 'inherit', display: 'block', marginBottom: '8px' }}>About</a>
            <a href="" style={{ textDecoration: 'none', color: 'inherit', display: 'block', marginBottom: '8px' }}>Products</a>
            <a href="" style={{ textDecoration: 'none', color: 'inherit', display: 'block', marginBottom: '8px' }}>Pricing</a>
            <a href="" style={{ textDecoration: 'none', color: 'inherit', display: 'block', marginBottom: '8px' }}>Referral programme</a>
            <a href="" style={{ textDecoration: 'none', color: 'inherit', display: 'block', marginBottom: '8px' }}>Careers</a>
            <a href="" style={{ textDecoration: 'none', color: 'inherit', display: 'block', marginBottom: '8px' }}>CryptoPilot.tech</a>
            <a href="" style={{ textDecoration: 'none', color: 'inherit', display: 'block', marginBottom: '8px' }}>Press & media</a>
            <a href="" style={{ textDecoration: 'none', color: 'inherit', display: 'block', marginBottom: '8px' }}>CryptoPilot cares (CSR)</a>
          </div>
          <div className="col">
            <p>Support</p>
            <a href="" style={{ textDecoration: 'none', color: 'inherit', display: 'block', marginBottom: '8px' }}>Contact</a>
            <a href="" style={{ textDecoration: 'none', color: 'inherit', display: 'block', marginBottom: '8px' }}>Support portal</a>
            <a href="" style={{ textDecoration: 'none', color: 'inherit', display: 'block', marginBottom: '8px' }}>CryptoPilot blog</a>
            <a href="" style={{ textDecoration: 'none', color: 'inherit', display: 'block', marginBottom: '8px' }}>List of charges</a>
            <a href="" style={{ textDecoration: 'none', color: 'inherit', display: 'block', marginBottom: '8px' }}>Downloads & resources</a>
          </div>
          <div className="col">
            <p>Account</p>
            <a href="" style={{ textDecoration: 'none', color: 'inherit', display: 'block', marginBottom: '8px' }}>Open an account</a>
            <a href="" style={{ textDecoration: 'none', color: 'inherit', display: 'block', marginBottom: '8px' }}>Fund transfer</a>
            <a href="" style={{ textDecoration: 'none', color: 'inherit', display: 'block', marginBottom: '8px' }}>60 day challenge</a>
          </div>
        </div>
        <div className="mt-5 text-muted" style={{ fontSize: "14px" }}>
          <p>
            CryptoPilot Trading Ltd. is a registered cryptocurrency trading platform. 
            For any complaints please write to support@cryptopilot.com. 
            Please ensure you carefully read the Risk Disclosure Document before trading.
          </p>
          <p>
            Investments in cryptocurrency markets are subject to market risks; read
            all the related documents carefully before investing.
          </p>
          <p>
            "Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your trading platform. Receive
            information of your transactions directly from Exchange on your
            mobile/email at the end of the day. Issued in the interest of
            investors."
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
