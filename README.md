<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>FodiSys Portfolio</title>

<style>
/* GENERAL RESET */
* { margin: 0; padding: 0; box-sizing: border-box; font-family: Arial, sans-serif; }

body {
  display: flex;
  background: #0d0d0d;
  color: #e8e6e3;
}

/* SIDEBAR */
.sidebar {
  width: 250px;
  background: #121212;
  height: 100vh;
  padding: 40px 25px;
  position: fixed;
  left: 0;
  top: 0;
}

.sidebar h2 {
  font-size: 32px;
  color: #f1c40f;
  margin-bottom: 40px;
}

.sidebar a {
  display: block;
  text-decoration: none;
  color: #ffffff;
  font-size: 19px;
  margin: 15px 0;
  transition: 0.2s;
}

.sidebar a:hover {
  color: #f1c40f;
}

/* MAIN CONTENT */
.main {
  margin-left: 250px;
  padding: 40px;
  width: calc(100% - 250px);
}

/* HERO SECTION */
.hero {
  width: 100%;
  height: 250px;
  border-radius: 10px;
  background: url('https://images.unsplash.com/photo-1550239031-1c0a7c1a46c5?q=80&w=1600') center/cover;
  margin-bottom: 40px;
}

/* SECTION TITLES */
section h1, section h2 {
  margin-bottom: 12px;
  color: #f1c40f;
}

/* PARAGRAPHS */
section p {
  font-size: 18px;
  line-height: 1.6;
  margin-bottom: 18px;
}

/* ABOUT BOXES (3 across) */
.about-boxes {
  display: flex;
  gap: 20px;
  margin-top: 25px;
}

.about-box {
  flex: 1;
  background: #1b1b1b;
  padding: 20px;
  border-radius: 8px;
  border-left: 5px solid #f39c12;
}

.about-box h3 {
  font-size: 22px;
  color: #f39c12;
  margin-bottom: 10px;
}

.about-box p {
  font-size: 16px;
  color: #ddd;
  line-height: 1.6;
}

/* SERVICES */
ul {
  margin-left: 20px;
  margin-bottom: 25px;
}

li {
  margin: 8px 0;
  font-size: 17px;
}

/* SMOOTH SCROLL */
html {
  scroll-behavior: smooth;
}
</style>
</head>

<body>

<!-- SIDEBAR -->
<div class="sidebar">
  <h2>FodiSys</h2>
  <a href="#home">Home</a>
  <a href="#about">About Me</a>
  <a href="#services">Services</a>
  <a href="#contact">Contact</a>
</div>

<!-- MAIN PAGE -->
<div class="main">

  <!-- HERO -->
  <div class="hero" id="home"></div>

  <!-- ABOUT SECTION -->
  <section id="about">
    <h1>About Me</h1>
    <p>Welcome to my portfolio. I design, build, and perfect professional systems, websites, and digital products.</p>

    <div class="about-boxes">

      <div class="about-box">
        <h3>Experience</h3>
        <p>
          Over 8 years working on high-end systems, UI/UX design, business dashboards, 
          automation tools, and modern enterprise solutions.
        </p>
      </div>

      <div class="about-box">
        <h3>Philosophy</h3>
        <p>
          I believe in simplicity, clarity, and beautiful digital interfaces that 
          work smoothly and feel premium.
        </p>
      </div>

      <div class="about-box">
        <h3>Mission</h3>
        <p>
          My mission is to elevate brands and businesses through elite system design 
          and next-generation digital creativity.
        </p>
      </div>

    </div>
  </section>

  <!-- SERVICES -->
  <section id="services" style="margin-top: 50px;">
    <h2>Services</h2>
    <ul>
      <li>Professional Web Development</li>
      <li>Custom System Architecture</li>
      <li>Graphic & Brand Design</li>
      <li>Business Automation</li>
      <li>UI/UX and Motion Design</li>
    </ul>
  </section>

  <!-- CONTACT -->
  <section id="contact" style="margin-top: 50px;">
    <h2>Contact</h2>
    <p>Email: <strong>contact@fodisys.com</strong></p>
    <p>WhatsApp: <strong>+254 7XX XXX XXX</strong></p>
  </section>

</div>

</body>
</html>
