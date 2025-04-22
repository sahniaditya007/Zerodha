import React, { useState } from "react";

function Pricing() {
  const [loading, setLoading] = useState(false);

  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  const handlePayment = async (plan) => {
    setLoading(true);
    try {
      // Load Razorpay script
      const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");
      if (!res) {
        alert("Razorpay SDK failed to load. Are you online?");
        setLoading(false);
        return;
      }

      // Create order data
      const amount = plan === "basic" ? 1999 : plan === "pro" ? 4999 : 9999;
      const options = {
        key: "rzp_test_1DP5mmOlF5G5ag", // Test API Key
        amount: amount * 100, // Amount in paise
        currency: "INR",
        name: "CryptoPilot",
        description: `${plan} Plan Subscription`,
        image: "https://example.com/your_logo.png",
        order_id: "", // Leave empty for test mode
        handler: function (response) {
          alert("Payment successful! Payment ID: " + response.razorpay_payment_id);
          // Here you would typically verify the payment on your backend
        },
        prefill: {
          name: "Test User",
          email: "test@example.com",
          contact: "9999999999"
        },
        theme: {
          color: "#3399cc"
        }
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    } catch (error) {
      console.error("Error:", error);
      alert("Error processing payment. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-12 text-center mb-5">
          <h1 className="mb-3 fs-2">Choose Your Trading Plan</h1>
          <p className="text-muted">
            Select the perfect plan for your crypto trading needs. All plans include 24/7 support and regular updates.
          </p>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-4 mb-4">
          <div className="card h-100 border-0 shadow">
            <div className="card-body p-4">
              <h3 className="card-title text-center mb-4">Basic</h3>
              <h2 className="text-center mb-4">₹1,999<span className="text-muted fs-6">/month</span></h2>
              <ul className="list-unstyled mb-4">
                <li className="mb-3"><i className="fas fa-check text-success me-2"></i>1 Trading Bot</li>
                <li className="mb-3"><i className="fas fa-check text-success me-2"></i>Basic Strategies</li>
                <li className="mb-3"><i className="fas fa-check text-success me-2"></i>Email Support</li>
                <li className="mb-3"><i className="fas fa-check text-success me-2"></i>Basic Analytics</li>
              </ul>
              <button
                className="btn btn-primary w-100"
                onClick={() => handlePayment("basic")}
                disabled={loading}
              >
                {loading ? "Processing..." : "Get Started"}
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card h-100 border-0 shadow">
            <div className="card-body p-4">
              <div className="text-center mb-3">
                <span className="badge bg-primary">Most Popular</span>
              </div>
              <h3 className="card-title text-center mb-4">Pro</h3>
              <h2 className="text-center mb-4">₹4,999<span className="text-muted fs-6">/month</span></h2>
              <ul className="list-unstyled mb-4">
                <li className="mb-3"><i className="fas fa-check text-success me-2"></i>3 Trading Bots</li>
                <li className="mb-3"><i className="fas fa-check text-success me-2"></i>Advanced Strategies</li>
                <li className="mb-3"><i className="fas fa-check text-success me-2"></i>Priority Support</li>
                <li className="mb-3"><i className="fas fa-check text-success me-2"></i>Advanced Analytics</li>
                <li className="mb-3"><i className="fas fa-check text-success me-2"></i>Custom Indicators</li>
              </ul>
              <button 
                className="btn btn-primary w-100"
                onClick={() => handlePayment("pro")}
                disabled={loading}
              >
                {loading ? "Processing..." : "Get Started"}
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card h-100 border-0 shadow">
            <div className="card-body p-4">
              <h3 className="card-title text-center mb-4">Enterprise</h3>
              <h2 className="text-center mb-4">₹9,999<span className="text-muted fs-6">/month</span></h2>
              <ul className="list-unstyled mb-4">
                <li className="mb-3"><i className="fas fa-check text-success me-2"></i>Unlimited Bots</li>
                <li className="mb-3"><i className="fas fa-check text-success me-2"></i>Custom Strategies</li>
                <li className="mb-3"><i className="fas fa-check text-success me-2"></i>24/7 Dedicated Support</li>
                <li className="mb-3"><i className="fas fa-check text-success me-2"></i>Full Analytics Suite</li>
                <li className="mb-3"><i className="fas fa-check text-success me-2"></i>API Access</li>
                <li className="mb-3"><i className="fas fa-check text-success me-2"></i>White Label Option</li>
              </ul>
              <button 
                className="btn btn-primary w-100"
                onClick={() => handlePayment("enterprise")}
                disabled={loading}
              >
                {loading ? "Processing..." : "Get Started"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
