const PricingPage = () => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px", textAlign: "center" }}>
      <h1 style={{ fontSize: "36px", color: "#2c3e50", marginBottom: "20px" }}>Our Pricing Plans</h1>
      <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
        {/* Basic Plan */}
        <div
          style={{
            border: "1px solid #ccc",
            borderRadius: "8px",
            padding: "20px",
            width: "200px",
            backgroundColor: "#f9f9f9",
          }}
        >
          <h2 style={{ fontSize: "24px", color: "#34495e" }}>Basic Plan</h2>
          <p style={{ fontSize: "18px", color: "#7f8c8d" }}>$10/month</p>
        </div>

        {/* Premium Plan */}
        <div
          style={{
            border: "1px solid #ccc",
            borderRadius: "8px",
            padding: "20px",
            width: "200px",
            backgroundColor: "#f9f9f9",
          }}
        >
          <h2 style={{ fontSize: "24px", color: "#34495e" }}>Premium Plan</h2>
          <p style={{ fontSize: "18px", color: "#7f8c8d" }}>$20/month</p>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
