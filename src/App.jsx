import hero from "./assets/hero.jpeg"
import print1 from "./assets/print1.jpeg"
import print2 from "./assets/print2.jpeg"
import print3 from "./assets/print3.jpeg"
import print4 from "./assets/print4.jpeg"
import timelapse1 from "./assets/timelapse1.MP4"
import timelapse2 from "./assets/timelapse2.MP4"

function App() {
  return (
    <div style={page}>
      <nav style={nav}>
        <a href="#services" style={navLink}>Services</a>
        <a href="#work" style={navLink}>Work</a>
        <a href="#videos" style={navLink}>Videos</a>
        <a href="#quote" style={navBlue}>Quote</a>
        <a href="#contact" style={navLink}>Contact</a>
      </nav>

      <img src={hero} alt="Curly's 3D Lab Logo" style={logo} />

      <h1 style={title}>Curly's 3D Lab</h1>
      <p style={subtitle}>Custom 3D Printing • Scanning • Design</p>
      <p style={tagline}>Turning Ideas Into Reality</p>

      <div style={buttonRow}>
        <a href="#quote" style={blueButton}>Request Quote</a>
        <a href="tel:5057803826" style={darkButton}>Call</a>
        <a href="mailto:patduran@curlys3dlabllc.com" style={darkButton}>Email</a>
        <a href="https://www.tiktok.com/@curlys3dlab" target="_blank" style={pinkButton}>TikTok</a>
      </div>

      <h2 id="services" style={sectionTitle}>Services</h2>
      <div style={services}>
        <p>Custom 3D Prints</p>
        <p>3D Scanning</p>
        <p>Prototype Design</p>
        <p>Figurines & Collectibles</p>
        <p>Business Printing Solutions</p>
      </div>

      <h2 id="work" style={sectionTitle}>Recent Work</h2>
      <div style={gallery}>
        <img src={print1} alt="3D print work 1" style={galleryImage} />
        <img src={print2} alt="3D print work 2" style={galleryImage} />
        <img src={print3} alt="3D print work 3" style={galleryImage} />
        <img src={print4} alt="3D print work 4" style={galleryImage} />
      </div>

      <h2 id="videos" style={sectionTitle}>Timelapse Videos</h2>
      <div style={videoGrid}>
        <video controls muted loop style={videoStyle}>
          <source src={timelapse1} type="video/mp4" />
        </video>

        <video controls muted loop style={videoStyle}>
          <source src={timelapse2} type="video/mp4" />
        </video>
      </div>

      <div id="quote" style={quoteBox}>
        <h2 style={sectionTitle}>Request a Quote</h2>

        <form
          action="mailto:patduran@curlys3dlabllc.com"
          method="post"
          encType="text/plain"
          style={form}
        >
          <input type="text" name="Name" placeholder="Your Name" style={input} />
          <input type="email" name="Email" placeholder="Your Email" style={input} />
          <input type="tel" name="Phone" placeholder="Your Phone Number" style={input} />
          <textarea name="Project" placeholder="Describe your project..." rows="6" style={input} />

          <button type="submit" style={blueButton}>
            Send Quote Request
          </button>
        </form>
      </div>

      <h2 id="contact" style={sectionTitle}>Contact</h2>
      <div style={contact}>
        <p>📞 <a href="tel:5057803826" style={link}>505-780-3826</a></p>
        <p>📧 <a href="mailto:patduran@curlys3dlabllc.com" style={link}>patduran@curlys3dlabllc.com</a></p>
        <p>🎵 <a href="https://www.tiktok.com/@curlys3dlab" target="_blank" style={link}>@curlys3dlab</a></p>
        <p>📍 Albuquerque, New Mexico</p>
      </div>
    </div>
  )
}

const page = {
  background: "#0b0b0f",
  color: "white",
  minHeight: "100vh",
  padding: "40px",
  fontFamily: "Arial",
  textAlign: "center"
}

const nav = {
  display: "flex",
  justifyContent: "center",
  gap: "25px",
  flexWrap: "wrap",
  marginBottom: "40px",
  fontWeight: "bold"
}

const navLink = {
  color: "white",
  textDecoration: "none"
}

const navBlue = {
  color: "#4da3ff",
  textDecoration: "none"
}

const logo = {
  width: "320px",
  maxWidth: "90%",
  marginBottom: "25px"
}

const title = {
  fontSize: "52px",
  marginBottom: "10px"
}

const subtitle = {
  fontSize: "24px",
  color: "#4da3ff"
}

const tagline = {
  fontSize: "20px",
  color: "#ccc"
}

const buttonRow = {
  display: "flex",
  justifyContent: "center",
  gap: "15px",
  flexWrap: "wrap",
  marginTop: "30px"
}

const blueButton = {
  background: "#4da3ff",
  color: "white",
  padding: "15px 30px",
  borderRadius: "12px",
  textDecoration: "none",
  fontWeight: "bold",
  border: "none",
  fontSize: "18px",
  cursor: "pointer"
}

const darkButton = {
  background: "#222",
  color: "white",
  padding: "15px 30px",
  borderRadius: "12px",
  textDecoration: "none",
  fontWeight: "bold"
}

const pinkButton = {
  background: "#ff0050",
  color: "white",
  padding: "15px 30px",
  borderRadius: "12px",
  textDecoration: "none",
  fontWeight: "bold"
}

const sectionTitle = {
  marginTop: "70px",
  fontSize: "38px"
}

const services = {
  fontSize: "22px",
  lineHeight: "1.8"
}

const gallery = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
  gap: "20px",
  maxWidth: "1000px",
  margin: "30px auto"
}

const galleryImage = {
  width: "100%",
  height: "260px",
  objectFit: "cover",
  borderRadius: "15px",
  border: "1px solid #333"
}

const videoGrid = {
  display: "flex",
  justifyContent: "center",
  gap: "20px",
  flexWrap: "wrap",
  marginTop: "30px"
}

const videoStyle = {
  width: "450px",
  maxWidth: "90%",
  borderRadius: "20px",
  border: "1px solid #333"
}

const quoteBox = {
  marginTop: "80px"
}

const form = {
  display: "flex",
  flexDirection: "column",
  gap: "15px",
  maxWidth: "500px",
  margin: "30px auto"
}

const input = {
  padding: "15px",
  borderRadius: "10px",
  border: "none",
  fontSize: "16px"
}

const contact = {
  fontSize: "22px",
  lineHeight: "2"
}

const link = {
  color: "#4da3ff"
}

export default App