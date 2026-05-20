function App() {
  return (
    <div
      style={{
        backgroundColor: "#0d0d0d",
        color: "white",
        minHeight: "100vh",
        fontFamily: "Arial",
        padding: "40px",
      }}
    >
      <h1 style={{ fontSize: "48px", marginBottom: "10px" }}>
        Curly's 3D Lab
      </h1>

      <p style={{ fontSize: "20px", color: "#b3b3b3" }}>
        Custom 3D Printing • Scanning • Design
      </p>

      <div style={{ marginTop: "50px" }}>
        <h2>Services</h2>
        <ul>
          <li>Custom 3D Prints</li>
          <li>3D Scanning</li>
          <li>Prototype Design</li>
          <li>Personalized Items</li>
        </ul>
      </div>

      <div style={{ marginTop: "50px" }}>
        <h2>Contact</h2>
        <p>Email: patduran@curlys3dlabllc.com</p>
      </div>
    </div>
  );
}

export default App;