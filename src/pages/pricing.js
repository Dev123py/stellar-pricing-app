const PricingPage = () => {
  return (
    //Setting up the Pricing Page structure and styles
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px", textAlign: "center" }}>
      <h1>Our Pricing Plans</h1>
      <p>Choose a plan that fits your needs and budget.</p>

      <div style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap" }}>
        {[
          //Setting 3 main plans on page
          { title: "Basic Plan", price: "$10/month" },
          { title: "Premium Plan", price: "$20/month" },
          { title: "Pro Plan", price: "$50/month" },
        ].map((plan, index) => (
          <div
            key={index}
            style={{
              //Setting up values and defining page value
              border: "1px solid #ddd",
              borderRadius: "10px",
              padding: "10px",
              width: "200px",
              backgroundColor: "#fff",
            }}
            //Setting up Button clicking
          >
            <h2>{plan.title}</h2>
            <p>{plan.price}</p>
            <button style={{ padding: "5px 10px", backgroundColor: "#007bff", color: "#fff" }}>
              Select
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingPage;
