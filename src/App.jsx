import hero from "./assets/hero.jpeg";
import print1 from "./assets/print1.jpeg";
import print2 from "./assets/print2.jpeg";
import print3 from "./assets/print3.jpeg";
import print4 from "./assets/print4.jpeg";

function App() {
  return (
    <div style={{ background: "#0b0b0f", color: "white", minHeight: "100vh", fontFamily: "Arial", textAlign: "center" }}>
      <nav style={{ padding: "20px", display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap" }}>
        <a href="#services" style={{ color: "#4da3ff" }}>Services</a>
        <a href="#work" style={{ color: "#4da3ff" }}>Work</a>
        <a href="#quote" style={{ color: "#4da3ff" }}>Quote</a>
        <a href="#contact" style={{ color: "#4da3ff" }}>Contact</a>
      </nav>

      <section style={{ padding: "30px 20px" }}>
        <img src={hero} alt="Curly's 3D Lab Logo" style={{ width: "260px", maxWidth: "90%", marginBottom: "25px" }} />
        <h1 style={{ fontSize: "48px", margin: "0" }}>Curly's 3D Lab</h1>
        <p style={{ fontSize: "22px", color: "#4da3ff", margin: "10px 0" }}>
          Custom 3D Printing • Scanning • Design
        </p>
        <p style={{ fontSize: "18px" }}>Turning Ideas Into Reality</p>

        <a href="#quote">
          <button style={{ marginTop: "20px", padding: "15px 25px", fontSize: "18px", borderRadius: "10px", border: "none", background: "#4da3ff", color: "white" }}>
            Request a Quote
          </button>
        </a>
      </section>

      <section id="services" style={{ padding: "40px 20px" }}>
        <h2>Services</h2>
        <p>Custom 3D Prints</p>
        <p>3D Scanning</p>
        <p>Prototype Design</p>
        <p>Figurines & Collectibles</p>
        <p>Business Printing Solutions</p>
      </section>

      <section id="work" style={{ padding: "40px 20px" }}>
        <h2>Recent Work</h2>
        <div style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap" }}>
          {[print1, print2, print3, print4].map((img, i) => (
            <img key={i} src={img} alt={`3D print work ${i + 1}`} style={{ width: "220px", height: "220px", objectFit: "cover", borderRadius: "15px" }} />
          ))}
        </div>
      </section>

      <section id="quote" style={{ padding: "40px 20px" }}>
        <h2>Request a Quote</h2>
        <p>Tell me what you want made, scanned, designed, or printed.</p>
        <a href="mailto:patduran@curlys3dlabllc.com?subject=Quote Request for Curly's 3D Lab">
          <button style={{ padding: "15px 25px", fontSize: "18px", borderRadius: "10px", border: "none", background: "#4da3ff", color: "white" }}>
            Email Quote Request
          </button>
        </a>
      </section>

      <section id="contact" style={{ padding: "40px 20px" }}>
        <h2>Contact</h2>
        <p>
          <a href="tel:5057803826" style={{ color: "white" }}>Phone: 505-780-3826</a>
        </p>
        <p>
          <a href="mailto:patduran@curlys3dlabllc.com" style={{ color: "white" }}>
            Email: patduran@curlys3dlabllc.com
          </a>
        </p>
        <p>Albuquerque, New Mexico</p>
        <p>
          <a href="https://www.tiktok.com/@curlys3dlab" target="_blank" style={{ color: "#4da3ff" }}>
            TikTok: @curlys3dlab
          </a>
        </p>
      </section>
    </div>
  );
}

export default App;