import { useState } from "react";
import hero from "./assets/hero.jpeg";
import print1 from "./assets/print1.jpeg";
import print2 from "./assets/print2.jpeg";
import print3 from "./assets/print3.jpeg";
import print4 from "./assets/print4.jpeg";

function App() {
  const [selectedImage, setSelectedImage] = useState(null);
  const galleryImages = [print1, print2, print3, print4];

  return (
    <div style={{ background: "linear-gradient(180deg, #05070d, #0b0b0f)", color: "white", minHeight: "100vh", fontFamily: "Arial", textAlign: "center" }}>
      <nav style={{ position: "sticky", top: 0, zIndex: 10, padding: "16px", display: "flex", justifyContent: "center", gap: "22px", flexWrap: "wrap", background: "rgba(5,7,13,0.9)", backdropFilter: "blur(8px)" }}>
        <a href="#services" style={{ color: "#60a5fa" }}>Services</a>
        <a href="#about" style={{ color: "#60a5fa" }}>About</a>
        <a href="#work" style={{ color: "#60a5fa" }}>Gallery</a>
        <a href="#reviews" style={{ color: "#60a5fa" }}>Reviews</a>
        <a href="#quote" style={{ color: "#60a5fa" }}>Quote</a>
      </nav>

      <section style={{ padding: "50px 20px" }}>
        <img src={hero} alt="Curly's 3D Lab Logo" style={{ width: "280px", maxWidth: "90%", marginBottom: "25px" }} />
        <h1 style={{ fontSize: "52px", margin: "0" }}>Curly's 3D Lab</h1>
        <p style={{ fontSize: "23px", color: "#60a5fa" }}>Custom 3D Printing • Scanning • Design</p>
        <p style={{ fontSize: "18px" }}>Turning Ideas Into Reality</p>
        <p style={{ color: "#93c5fd", fontWeight: "bold" }}>Locally Owned in Albuquerque, New Mexico</p>
        <a href="#quote">
          <button style={{ marginTop: "20px", padding: "15px 28px", fontSize: "18px", borderRadius: "12px", border: "none", background: "linear-gradient(135deg, #3b82f6, #60a5fa)", color: "white", boxShadow: "0 0 20px rgba(96,165,250,0.55)" }}>
            Request a Quote
          </button>
        </a>
      </section>

      <section id="about" style={{ padding: "60px 20px", maxWidth: "900px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "36px", color: "#60a5fa" }}>About Curly's 3D Lab</h2>
        <p style={{ fontSize: "18px", lineHeight: "1.8" }}>
          Curly's 3D Lab is a locally owned Albuquerque business specializing in custom 3D printing,
          3D scanning, prototype design, collectibles, and personalized creations.
        </p>
        <p style={{ fontSize: "18px", lineHeight: "1.8" }}>
          We help bring ideas to life through high-quality prints, creative design solutions,
          and fast turnaround times for both personal and business projects.
        </p>
        <p style={{ fontSize: "18px", lineHeight: "1.8" }}>
          Whether you need a custom figure, replacement part, business prototype, or production run,
          Curly's 3D Lab is focused on quality, creativity, and customer satisfaction.
        </p>
      </section>

      <section id="services" style={{ padding: "50px 20px" }}>
        <h2 style={{ fontSize: "34px", color: "#60a5fa" }}>Services</h2>
        <p>Custom 3D Prints</p>
        <p>3D Scanning</p>
        <p>Prototype Design</p>
        <p>Figurines & Collectibles</p>
        <p>Business Printing Solutions</p>
      </section>

      <section id="reviews" style={{ padding: "50px 20px" }}>
        <h2 style={{ color: "#60a5fa", fontSize: "34px" }}>Customer Reviews</h2>
        <div style={{ display: "flex", gap: "20px", justifyContent: "center", flexWrap: "wrap" }}>
          {[
            "Great quality prints and fast turnaround.",
            "Helped bring my idea to life exactly how I wanted.",
            "Professional, creative, and easy to work with."
          ].map((review, i) => (
            <div key={i} style={{ background: "#111827", padding: "22px", borderRadius: "18px", width: "270px", boxShadow: "0 0 18px rgba(96,165,250,0.18)" }}>
              <h3>⭐⭐⭐⭐⭐</h3>
              <p>{review}</p>
              <strong>- Local Customer</strong>
            </div>
          ))}
        </div>
      </section>

      <section id="work" style={{ padding: "50px 20px" }}>
        <h2 style={{ color: "#60a5fa", fontSize: "34px" }}>Project Gallery</h2>
        <p style={{ color: "#cbd5e1" }}>Click any image to view it larger.</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "20px", maxWidth: "1100px", margin: "0 auto" }}>
          {galleryImages.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`3D print project ${i + 1}`}
              onClick={() => setSelectedImage(img)}
              style={{ width: "100%", height: "230px", objectFit: "cover", borderRadius: "18px", cursor: "pointer", boxShadow: "0 0 20px rgba(96,165,250,0.25)" }}
            />
          ))}
        </div>
      </section>

      <section id="quote" style={{ padding: "50px 20px" }}>
        <h2 style={{ color: "#60a5fa", fontSize: "34px" }}>Request a Quote</h2>
        <p>Tell me what you want made, scanned, designed, or printed.</p>
        <p style={{ color: "#cbd5e1" }}>Send pictures, STL files, measurements, or project ideas by email.</p>
        <a href="mailto:patduran@curlys3dlabllc.com?subject=Quote Request for Curly's 3D Lab">
          <button style={{ padding: "15px 28px", fontSize: "18px", borderRadius: "12px", border: "none", background: "linear-gradient(135deg, #3b82f6, #60a5fa)", color: "white", boxShadow: "0 0 20px rgba(96,165,250,0.55)" }}>
            Email Quote Request
          </button>
        </a>
      </section>

      <footer style={{ padding: "40px 20px", borderTop: "1px solid #1f2937", marginTop: "40px" }}>
        <h2 style={{ color: "#60a5fa" }}>Curly's 3D Lab</h2>
        <p>Custom 3D Printing • Scanning • Design</p>
        <p>Albuquerque, New Mexico</p>
        <p><a href="tel:5057803826" style={{ color: "white" }}>📞 505-780-3826</a></p>
        <p><a href="mailto:patduran@curlys3dlabllc.com" style={{ color: "white" }}>✉️ patduran@curlys3dlabllc.com</a></p>
        <p><a href="https://www.tiktok.com/@curlys3dlab" target="_blank" style={{ color: "#60a5fa" }}>🎵 TikTok: @curlys3dlab</a></p>
        <p style={{ color: "#9ca3af", fontSize: "14px" }}>© 2026 Curly's 3D Lab LLC. All rights reserved.</p>
      </footer>

      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.88)", zIndex: 99, display: "flex", alignItems: "center", justifyContent: "center", padding: "20px" }}
        >
          <img src={selectedImage} alt="Large project view" style={{ maxWidth: "95%", maxHeight: "90%", borderRadius: "18px" }} />
        </div>
      )}
    </div>
  );
}

export default App;