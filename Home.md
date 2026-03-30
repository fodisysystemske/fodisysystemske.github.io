<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta name="description" content="FODISY SYSTEMS offers expert solutions for enterprise deployment, API integration, security, scaling high-traffic applications, cloud infrastructure, and troubleshooting complex systems." />
<meta name="keywords" content="Enterprise software, Deployment, API integration, System security, Cloud architecture, Scalability, Debugging, Logistics systems, Large-scale user management" />
<title>FODISY SYSTEMS • Home Dashboard</title>

<style>
body {
    margin: 0;
    font-family: Arial, sans-serif;
    overflow-x: hidden;
    color: #d6ffd6;
    background: #0a0020; /* fallback dark background */
}

/* Canvas Background */
#bgCanvas {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
}

/* Sidebar styles */
.sidebar {
    width: 220px;
    min-height: 100vh;
    background: rgba(40, 0, 70, 0.92);
    position: fixed;
    left: 0;
    top: 0;
    padding: 25px 20px;
    box-shadow: 3px 0 12px rgba(0,0,0,0.6);
    overflow-y: auto;
    z-index: 10;
}
.sidebar h2 {
    color: #9b59ff;
    text-align: center;
    margin-bottom: 40px;
    font-size: 16px;
    letter-spacing: 1px;
}
.menu a {
    display: block;
    margin: 12px 0;
    padding: 12px;
    color: #d6ffd6;
    text-decoration: none;
    font-size: 14px;
    background: rgba(70, 0, 120, 0.6);
    border-left: 4px solid #7dff7d;
    transition: 0.3s;
    border-radius: 4px;
}
.menu a:hover {
    background: rgba(120, 0, 200, 0.8);
    transform: translateX(5px);
}

/* Main content styles */
.content {
    margin-left: 240px; /* width of sidebar + some space */
    padding: 20px 25px;
    max-width: 1050px;
}

/* HERO SECTION */
.hero {
    background: rgba(15, 0, 30, 0.9);
    padding: 40px;
    border-radius: 16px;
    margin-bottom: 30px;
    box-shadow: 0 0 30px rgba(120, 0, 255, 0.6);
}
.hero h1 {
    color: #7dff7d;
    font-size: 32px;
    margin: 0 0 20px;
    text-shadow: 0 0 10px #00ff88;
}
.hero p {
    font-size: 14px;
    line-height: 1.7;
    text-align: justify;
}

/* Read More Button & Content */
#moreContent {
    display: none;
    overflow: hidden;
    transition: max-height 1s ease;
    margin-top: 15px;
}
.read-more-btn {
    margin-top: 20px;
    padding: 12px 20px;
    background: #7dff7d;
    color: #0a0020;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-weight: bold;
    transition: 0.3s;
}
.read-more-btn:hover {
    background: #aaffaa;
}

/* FEATURE BOXES */
.box {
    background: rgba(25, 0, 45, 0.88);
    padding: 28px;
    border-radius: 14px;
    margin-bottom: 25px;
    box-shadow: 0 0 18px rgba(100, 0, 200, 0.5);
}
.box h3 {
    color: #9b59ff;
    margin-top: 0;
    font-size: 24px;
}
.box p {
    font-size: 14px;
    line-height: 1.7;
    text-align: justify;
}

/* Responsive styles for small screens */
@media screen and (max-width: 768px) {
    .sidebar {
        width: 100%;
        height: auto;
        position: fixed;
        top: 0;
        left: 0;
        padding: 15px 10px;
        z-index: 10;
    }
    .sidebar h2 { font-size: 10px; }
    .menu a { font-size: 10px; padding: 10px; margin: 8px 0; }
    .content { margin-left: 0; padding: 15px 10px; max-width: 95vw; }
    .hero { width: 100%; padding: 20px; }
    .hero h1 { font-size: 22px; }
    .hero p, .box p { font-size: 10px; line-height: 1.5; }
}
</style>
</head>
<body>

<!-- Canvas for polygon background -->
<canvas id="bgCanvas"></canvas>

<!-- SIDEBAR -->
<div class="sidebar">
    <h2>FODISY SYSTEMS</h2>
    <div class="menu">
        <a href="index.html">Home / Dashboard</a>
        <a href="enterprise-deployment.html">Enterprise Deployment</a>
        <a href="api-integration.html">API Integration & Automation</a>
        <a href="security-compliance.html">Security & Compliance</a>
        <a href="performance-scalability.html">Performance & Scalability</a>
        <a href="cloud-infrastructure.html">Cloud & Infrastructure</a>
        <a href="troubleshooting.html">Troubleshooting & Debugging</a>
        <a href="shipping-delivery.html">Shipping & Delivery Systems</a>
        <a href="user-management.html">Large-Scale User Management</a>
        <a href="documentation.html">Documentation & Walkthroughs</a>
        <a href="connect-with-me.html">Connect with Me</a>
    </div>
</div>

<!-- CONTENT -->
<div class="content">

<div class="hero">
    <h1>Welcome to FODISY SYSTEMS</h1>
    <p>
        FODISY SYSTEMS is the trusted hub for entrepreneurs, enterprises, and innovators seeking mastery over modern software systems. From high-scale deployments, secure API integrations, to cloud architecture and enterprise-grade automation, FODISY provides solutions for complex, mission-critical software environments.
    </p>
    <p>
        Our approach combines multi-stack programming expertise, modern DevOps practices, and real-world troubleshooting experience to deliver systems that not only perform but excel. Every pipeline, every integration, and every cloud deployment is crafted for resilience, speed, and user satisfaction.
    </p>
    <div id="moreContent">
        <p>
            Beyond core development, FODISY specializes in large-scale user management, advanced security compliance, enterprise shipping and logistics systems, and performance optimization under high load.
        </p>
        <p>
            For readers seeking full detailed walkthroughs, support this work to access complete guides.
        </p>
    </div>
    <button class="read-more-btn" onclick="toggleReadMore()">Read More</button>
</div>

<div class="box">
    <h3>💠 Core Services</h3>
    <p>Enterprise deployment, API automation, performance tuning, cloud architecture, security compliance, large-scale user management, and shipping/logistics systems.</p>
</div>

<div class="box">
    <h3>⚙ Key Modules & Tools</h3>
    <p>
        ✔ CI/CD Pipelines<br>
        ✔ Docker & Kubernetes Orchestration<br>
        ✔ API Gateway & Integration Layer<br>
        ✔ Secure Authentication & RBAC<br>
        ✔ Real-time Data Streaming<br>
        ✔ Audit & Compliance Tracking
    </p>
</div>

<div class="box">
    <h3>🔒 Security & Reliability</h3>
    <p>Encrypted endpoints, audit-first logging, strict role-based access, modern hashing standards, minimal latency, high concurrency, GitHub-based deployment workflows.</p>
</div>

<div class="box">
    <h3>📞 Consultation & Support</h3>
    <p>Engage FODISY for direct troubleshooting, deployment assistance, or optimization consulting. Premium services cater to high-value clients who demand speed, reliability, and global scalability.</p>
</div>

</div>

<script>
// Read More toggle
function toggleReadMore() {
    const more = document.getElementById("moreContent");
    const btn = document.querySelector(".read-more-btn");
    if (!more.style.display || more.style.display === "none") {
        more.style.display = "block";
        btn.textContent = "Support This Work";
    } else {
        window.location.href = "https://payhip.com/YOUR-LINK-HERE";
    }
}

// Polygon/Particle Background
const canvas = document.getElementById('bgCanvas');
const ctx = canvas.getContext('2d');
let w = canvas.width = window.innerWidth;
let h = canvas.height = window.innerHeight;

const polygons = [];
const polygonCount = Math.floor((w*h)/8000);

for(let i=0;i<polygonCount;i++){
    polygons.push({
        x: Math.random()*w,
        y: Math.random()*h,
        vx: (Math.random()-0.5)*0.6,
        vy: (Math.random()-0.5)*0.6,
        size: Math.random()*3+1,
        color: hsla(${Math.random()*360}, 80%, 60%, 0.8)
    });
}

function draw(){
    ctx.clearRect(0,0,w,h);
    polygons.forEach(p=>{
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(p.x+p.size*2, p.y+p.size);
        ctx.lineTo(p.x+p.size, p.y+p.size*2);
        ctx.closePath();
        ctx.fillStyle=p.color;
        ctx.fill();
        p.x+=p.vx; p.y+=p.vy;
        if(p.x> w) p.x=0;
        if(p.x<0) p.x=w;
        if(p.y> h) p.y=0;
        if(p.y<0) p.y=h;
    });
    requestAnimationFrame(draw);
}
draw();

window.addEventListener('resize',()=>{
    w=canvas.width=window.innerWidth;
    h=canvas.height=window.innerHeight;
});
</script>

</body>
</html>
