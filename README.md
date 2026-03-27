<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>FodiSys System</title>
  <style>
    /* Reset some defaults */
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Arial', sans-serif;
    }

    body {
      display: flex;
      min-height: 100vh;
      background-color: #121212;
      color: #eee;
    }

    /* Sidebar */
    .sidebar {
      width: 250px;
      background-color: #1f1f1f;
      padding: 30px;
      display: flex;
      flex-direction: column;
      gap: 20px;
    }

    .sidebar h2 {
      color: #f39c12;
      font-size: 28px;
    }

    .sidebar a {
      color: #eee;
      text-decoration: none;
      font-size: 18px;
      padding: 6px 0;
      transition: 0.2s;
    }

    .sidebar a:hover {
      color: #f39c12;
    }

    /* Main content */
    .main {
      flex-grow: 1;
      padding: 40px;
      background-color: #181818;
      overflow-x: hidden;
    }

    .main img {
      width: 100%;
      max-width: 800px;
      border-radius: 10px;
      margin-bottom: 30px;
    }

    .main h1 {
      font-size: 38px;
      margin-bottom: 20px;
      color: #f1c40f;
    }

    .main h2 {
      font-size: 28px;
      margin-top: 30px;
      margin-bottom: 15px;
      color: #f39c12;
    }

    .main p, .main ul {
      font-size: 18px;
      line-height: 1.6;
      margin-bottom: 20px;
    }

    .main ul li {
      margin-left: 20px;
      list-style-type: square;
    }

    /* Responsive */
    @media (max-width: 768px) {
      body {
        flex-direction: column;
      }
      .sidebar {
        width: 100%;
        flex-direction: row;
        overflow-x: auto;
        gap: 15px;
      }
      .sidebar h2 {
        font-size: 20px;
      }
      .sidebar a {
        font-size: 16px;
      }
    }
  </style>
</head>
<body>

  <div class="sidebar">
    <h2>FodiSys</h2>
    <a href="#home">Home</a>
    <a href="#about">About</a>
    <a href="#services">Services</a>
    <a href="#portfolio">Portfolio</a>
    <a href="#contact">Contact</a>
  </div>

  <div class="main">
    <img src="https://i.postimg.cc/MTy3wRVR/Whats-App-Image-2026-03-27-at-18-16-44.jpg" alt="Hero Image">

    <h1 id="home">Welcome to FodiSys System</h1>
    <p>We build professional systems and software solutions exactly like the design you see above.</p>

    <h2 id="about">About Us</h2>
    <p>FodiSys Systems specializes in professional web systems, development, automation, and IT solutions. Our designs are modern, creative, and fully responsive.</p>

    <h2 id="services">Services</h2>
    <ul>
      <li>Web Development</li>
      <li>Graphic Design</li>
      <li>Branding</li>
      <li>Systems Architecture</li>
    </ul>

    <h2 id="portfolio">Portfolio</h2>
    <p>Check out our latest works – professional system designs, UI/UX, and real world IT solutions.</p>

    <h2 id="contact">Contact</h2>
    <p>Email: <strong>contact@fodisysystems.com</strong><br>
       WhatsApp: <strong>+254 7XX XXX XXX</strong>
    </p>
  </div>

</body>
</html>
