<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>FodiSy Systems</title>

<style>

/* RESET */
* {
  margin: 0; padding: 0; box-sizing: border-box;
  font-family: Arial, sans-serif;
}

body {
  display: flex;
  background: #0a0014;
  color: #e4e4e4;
  min-height: 100vh;
  overflow-x: hidden;
}

/* GLOBAL COLORS */
:root {
  --primary: #9b4dff;      /* Neon Purple */
  --accent: #3dff93;       /* Neon Green */
  --dark: #0a0014;
  --box-bg: #150021;
}

/* NETWORK BACKGROUND */
body::before {
  content: "";
  position: fixed;
  inset: 0;
  background: url('https://cdn.wallpapersafari.com/45/28/Jm9d7B.png');
  background-size: cover;
  background-repeat: no-repeat;
  opacity: 0.08;
  z-index: -1;
}

/* SIDEBAR */
.sidebar {
  width: 250px;
  background: #110017;
  height: 100vh;
  padding: 40px 25px;
  position: fixed;
  left: 0;
  top: 0;
  border-right: 1px solid #2a0050;
}

.sidebar h2 {
  font-size: 32px;
  color: var(--primary);
  margin-bottom: 40px;
}

.sidebar a {
  display: block;
  text-decoration: none;
  color: #fff;
  font-size: 19px;
  margin: 18px 0;
  transition: 0.25s;
}

.sidebar a:hover {
  color: var(--accent);
  padding-left: 8px;
}

/* MAIN */
.main {
  margin-left: 250px;
  padding: 40px;
  width: calc(100% - 250px);
}

/* HERO */
.hero {
  width: 100%;
  height: 250px;
  border-radius: 12px;
  background: url("https://wallpapers.com/images/hd/blue-connections-linkedin-cover-717dweuzdc11zpwu.jpg") center/cover;
  margin-bottom: 45px;
  border: 2px solid var(--primary);
  box-shadow: 0 0 25px rgba(155,77,255,0.4);
}

/* SECTION HEADINGS */
section h1, section h2 {
  margin-bottom: 12px;
  color: var(--accent);
  font-weight: bold;
}

/* PARAGRAPHS */
section p {
  font-size: 18px;
  line-height: 1.7;
  margin-bottom: 20px;
}

/* ABOUT BOXES */
.about-boxes {
  display: flex;
  gap: 20px;
  margin-top: 25px;
}

.about-box {
  flex: 1;
  background: var(--box-bg);
  padding: 20px;
  border-radius: 10px;
  min-height: 160px;
  border-left: 5px solid var(--primary);
  box-shadow: 0 0 15px rgba(155,77,255,0.2);
}

.about-box h3 {
  font-size: 21px;
  color: var(--primary);
  margin-bottom: 10px;
}

/* SERVICES LIST */
ul {
  margin-left: 20px;
  margin-bottom: 25px;
}

li {
  margin: 8px 0;
  font-size: 17px;
}

/* SMOOTH SCROLL */
html { scroll-behavior: smooth; }
</style>

</head>
<body>


<!-- SIDEBAR -->
<div class="sidebar">
  <h2>FodiSy</h2>
  <a href="#home">Home</a>
  <a href="#about">About Me</a>
  <a href="#services">Services</a>
  <a href="#why">Why FodiSy</a>
  <a href="#contact">Contact</a>
</div>


<!-- MAIN CONTENT -->
<div class="main">

  <!-- HERO -->
  <div class="hero" id="home"></div>


  <!-- ABOUT SECTION -->
  <section id="about">
    <h1>About FodiSy Systems</h1>

    <p>
      FodiSy Systems is a next-generation digital engineering outfit specializing in
      advanced system architecture, professional UI/UX, enterprise tools,
      and high-performance web applications.  
    </p>

    <p>
      We design modern, sleek, powerful interfaces with an emphasis on speed,
      visual identity, stability, and premium user experience.
    </p>

    <div class="about-boxes">

      <div class="about-box">
        <h3>Who We Are</h3>
        <p>
          A creative technology brand blending design, engineering, and strategy —
          producing world-class digital experiences.
        </p>
      </div>

      <div class="about-box">
        <h3>Our Identity</h3>
        <p>
          Neon-infused futuristic design, sharp animations, clean UI, and
          engineering discipline define our digital personality.
        </p>
      </div>

      <div class="about-box">
        <h3>Our Direction</h3>
        <p>
          We build forward-thinking platforms for businesses preparing to scale
          into the next wave of automation and digital transformation.
        </p>
      </div>

    </div>
  </section>


  <!-- SERVICES -->
  <section id="services" style="margin-top: 50px;">
    <h2>What We Build</h2>

    <ul>
      <li>Enterprise dashboards & management systems</li>
      <li>Fast modern websites with premium UI</li>
      <li>Automation & workflow optimization tools</li>
      <li>Graphic & motion brand identity</li>
      <li>API-driven business platforms</li>
      <li>Secure authentication & cloud setups</li>
    </ul>
  </section>



  <!-- WHY FODISY -->
  <section id="why" style="margin-top: 50px;">
    <h2>Why Choose FodiSy</h2>

    <p>
      FodiSy Systems combines creativity and engineering.  
      Every project is built with:
    </p>

    <ul>
      <li><strong>Precision:</strong> Clean, sharp code.</li>
      <li><strong>Performance:</strong> Fast loading, optimized systems.</li>
      <li><strong>Identity:</strong> Strong visual branding.</li>
      <li><strong>Scalability:</strong> Tools designed to grow over time.</li>
      <li><strong>Longevity:</strong> Systems built to last.</li>
    </ul>
  </section>


  <!-- CONTACT -->
  <section id="contact" style="margin-top: 50px;">
    <h2>Contact</h2>
    <p>Email: <strong>support@fodisy.com</strong></p>
    <p>WhatsApp: <strong>+254 7XX XXX XXX</strong></p>
  </section>

</div>

</body>
</html>
