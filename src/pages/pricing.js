const PricingPage = () => {
  const plans = [
    { title: "Basic Plan", price: "$10/month", features: ["Feature A", "Feature B", "Feature C"] },
    { title: "Premium Plan", price: "$20/month", features: ["Feature D", "Feature E", "Feature F"] },
    { title: "Pro Plan", price: "$50/month", features: ["Feature G", "Feature H", "Feature I"] },
  ];

  return (
    <div style={{ fontFamily: "Arial, sans-serif", color: "#333" }}>
      {/* Header Section */}
      <header
        style={{
          backgroundColor: "orange",
          color: "white",
          padding: "20px",
          textAlign: "center",
        }}
      >
        <h1 style={{ margin: 0, fontSize: "2.5rem" }}>Our Pricing Plans</h1>
        <p style={{ margin: "10px 0", fontSize: "1rem" }}>Choose a plan tailored for your success.</p>
      </header>

      {/* Main Section */}
      <main
        style={{
          padding: "40px",
          textAlign: "center",
          backgroundColor: "#ffffff",
        }}
      >
        <h2
          style={{
            color: "orange",
            fontSize: "2rem",
            marginBottom: "20px",
          }}
        >
          Affordable Pricing Options
        </h2>
        <p style={{ fontSize: "1.2rem", color: "#555", marginBottom: "30px" }}>
          Pick the perfect plan to meet your needs.
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "20px",
          }}
        >
          {plans.map((plan, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "lightblue",
                border: "1px solid #ddd",
                borderRadius: "8px",
                padding: "20px",
                width: "280px",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              }}
            >
              <h3 style={{ fontSize: "1.5rem", marginBottom: "10px", color: "#333" }}>
                {plan.title}
              </h3>
              <p
                style={{
                  fontSize: "1.25rem",
                  fontWeight: "bold",
                  color: "green",
                  marginBottom: "10px",
                }}
              >
                {plan.price}
              </p>
              <ul style={{ padding: 0, listStyleType: "none" }}>
                {plan.features.map((feature, idx) => (
                  <li
                    key={idx}
                    style={{
                      marginBottom: "5px",
                      color: "#555",
                    }}
                  >
                    ✓ {feature}
                  </li>
                ))}
              </ul>
              <button
                style={{
                  marginTop: "15px",
                  padding: "10px 20px",
                  backgroundColor: "orange",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Select Plan
              </button>
            </div>
          ))}
        </div>
      </main>

      {/* Footer Section */}
      <footer
        style={{
          backgroundColor: "orange",
          color: "white",
          textAlign: "center",
          padding: "10px",
          marginTop: "40px",
        }}
      >
        <p style={{ margin: 0 }}>© 2025 Your Company. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default PricingPage;
