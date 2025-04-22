import React, { useState } from "react";
import { Card, Row, Col, Button } from "react-bootstrap";

function ProductsPage() {
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

  const handlePayment = async (botName, amount) => {
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
      const options = {
        key: "rzp_test_1DP5mmOlF5G5ag", // Test API Key
        amount: amount * 100, // Amount in paise
        currency: "USD",
        name: "CryptoPilot",
        description: `${botName} Subscription`,
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
          color: "#387ED1"
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
      <h1 className="text-center mb-5">Our Crypto Trading Bots</h1>
      <Row className="g-4">
        <Col md={4}>
          <Card className="h-100 shadow-sm" style={{ borderColor: "#387ED1" }}>
            <Card.Header className="bg-primary text-white text-center py-3">
              <h3>Sentibot</h3>
            </Card.Header>
            <Card.Body className="d-flex flex-column">
              <Card.Title className="text-center mb-3">$49/month</Card.Title>
              <Card.Text className="flex-grow-1">
                Automatically follows market trends to maximize profits. Uses advanced algorithms to identify trend reversals and entry/exit points.
              </Card.Text>
              <div className="mt-3">
                <ul className="list-unstyled">
                  <li className="mb-2">✓ 24/7 automated trading</li>
                  <li className="mb-2">✓ Real-time market analysis</li>
                  <li className="mb-2">✓ Customizable risk parameters</li>
                  <li className="mb-2">✓ Detailed performance reports</li>
                </ul>
              </div>
              <Button 
                variant="primary" 
                className="mt-auto"
                onClick={() => handlePayment("Sentibot", 49)}
                disabled={loading}
              >
                {loading ? "Processing..." : "Get Started"}
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="h-100 shadow-sm" style={{ borderColor: "#387ED1" }}>
            <Card.Header className="bg-primary text-white text-center py-3">
              <h3>Arbitrage Bot</h3>
            </Card.Header>
            <Card.Body className="d-flex flex-column">
              <Card.Title className="text-center mb-3">$79/month</Card.Title>
              <Card.Text className="flex-grow-1">
                Exploits price differences across multiple exchanges to generate risk-free profits. Monitors over 20 exchanges simultaneously.
              </Card.Text>
              <div className="mt-3">
                <ul className="list-unstyled">
                  <li className="mb-2">✓ Multi-exchange monitoring</li>
                  <li className="mb-2">✓ Instant execution</li>
                  <li className="mb-2">✓ Low-risk strategy</li>
                  <li className="mb-2">✓ Profit tracking dashboard</li>
                </ul>
              </div>
              <Button 
                variant="primary" 
                className="mt-auto"
                onClick={() => handlePayment("Arbitrage Bot", 79)}
                disabled={loading}
              >
                {loading ? "Processing..." : "Get Started"}
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="h-100 shadow-sm" style={{ borderColor: "#387ED1" }}>
            <Card.Header className="bg-primary text-white text-center py-3">
              <h3>Smart Portfolio Bot</h3>
            </Card.Header>
            <Card.Body className="d-flex flex-column">
              <Card.Title className="text-center mb-3">$99/month</Card.Title>
              <Card.Text className="flex-grow-1">
                Manages your entire crypto portfolio with AI-driven rebalancing and risk management. Adapts to market conditions automatically.
              </Card.Text>
              <div className="mt-3">
                <ul className="list-unstyled">
                  <li className="mb-2">✓ AI-powered portfolio management</li>
                  <li className="mb-2">✓ Automatic rebalancing</li>
                  <li className="mb-2">✓ Risk-adjusted returns</li>
                  <li className="mb-2">✓ Tax optimization</li>
                </ul>
              </div>
              <Button 
                variant="primary" 
                className="mt-auto"
                onClick={() => handlePayment("Smart Portfolio Bot", 99)}
                disabled={loading}
              >
                {loading ? "Processing..." : "Get Started"}
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default ProductsPage;
