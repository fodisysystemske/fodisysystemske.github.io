<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>FODISY SYSTEMS • Home Dashboard | AI, Automation, SaaS & Enterprise Tools</title>
<meta name="description" content="FODISY SYSTEMS provides futuristic software solutions: AI automation, SaaS templates, performance optimization, security tools, and enterprise-scale deployments. Explore demo-ready systems and business templates.">
<meta name="keywords" content="AI automation, SaaS templates, enterprise deployment, cloud infrastructure, cybersecurity tools, performance optimization, large-scale user management, troubleshooting, automation scripts, ready-made business systems">
<meta property="og:title" content="FODISY SYSTEMS • Home Dashboard">
<meta property="og:description" content="Explore futuristic software solutions: AI & automation engines, SaaS templates, cybersecurity compliance, and performance optimization systems.">
<meta property="og:type" content="website">
<meta property="og:url" content="https://YOURDOMAIN.github.io/home/">
<meta property="og:image" content="https://YOURDOMAIN.github.io/home/og-image.png">

<style>
/* BASE & LIGHT UI */
body {
    margin: 0;
    font-family: Arial, sans-serif;
    color: #0a0a0a;
    overflow-x: hidden;
    position: relative;
    background: #e6f7f7; /* light soft background */
}

/* CANVAS FULLSCREEN ANIMATION */
#bgCanvas {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
}

/* SIDEBAR */
.sidebar {
    width: 240px;
    min-height: 100vh;
    background: rgba(0, 30, 40, 0.9);
    position: fixed;
    left: 0;
    top: 0;
    padding: 25px 20px;
    box-shadow: 3px 0 12px rgba(0,0,0,0.3);
    overflow-y: auto;
    z-index: 10;
}
.sidebar h2 {
    color: #00e6e6;
    text-align: center;
    margin-bottom: 40px;
    font-size: 24px;
    letter-spacing: 1px;
}
.menu a {
    display: block;
    margin: 12px 0;
    padding: 12px;
    color: #e6f7f7;
    text-decoration: none;
    font-size: 17px;
    background: rgba(0, 90, 120, 0.6);
    border-left: 4px solid #00e6e6;
    transition: 0.3s;
    border-radius: 4px;
}
.menu a:hover {
    background: rgba(0, 180, 200, 0.8);
    transform: translateX(5px);
}

/* CONTENT */
.content {
    margin-left: 260px;
    padding: 20px 25px;
    max-width: calc(100% - 260px);
    position: relative;
    z-index: 5;
}

/* HERO */
.hero {
    background: rgba(245, 255, 255, 0.95);
    padding: 40px;
    border-radius: 16px;
    margin-bottom: 30px;
    box-shadow: 0 0 30px rgba(0, 230, 230, 0.5);
}
.hero h1 {
    color: #00e6e6;
    font-size: 32px;
    margin: 0 0 20px;
    text-shadow: 0 0 8px #00b3b3;
}
.hero p {
    font-size: 16px;
    line-height: 1.7;
    text-align: justify;
}

/* TOPIC BUTTONS */
.topic-buttons {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    margin: 20px 0;
}
.topic-buttons button {
    background: linear-gradient(135deg, #00e6e6, #00b3b3);
    color: #fff;
    padding: 14px 22px;
    border: none;
    border-radius: 12px;
    cursor: pointer;
    font-size: 16px;
    transition: transform 0.3s, box-shadow 0.3s;
    position: relative;
    overflow: hidden;
}
.topic-buttons button:hover {
    transform: translateY(-3px) scale(1.05);
    box-shadow: 0 6px 20px rgba(0,230,230,0.5);
}

/* MODAL PREVIEW */
.modal-overlay {
    display: none;
    position: fixed;
    top:0;
    left:0;
    width: 100%;
    height: 100%;
    background: rgba(10,10,10,0.7);
    z-index: 50;
    justify-content: center;
    align-items: center;
}
.modal {
    background: #f0f8f8;
    width: 350px;
    max-height: 80vh;
    overflow-y: auto;
    padding: 20px;
    border-radius: 12px;
    box-shadow: 0 0 20px rgba(0,230,230,0.4);
    position: relative;
}
.modal h3 {
    color: #00b3b3;
    margin-top: 0;
}
.modal p {
    color: #0a0a0a;
    line-height: 1.5;
}
.modal .close-btn {
    position: absolute;
    top: 10px;
    right: 12px;
    cursor: pointer;
    font-size: 20px;
    color: #00b3b3;
}

/* RESPONSIVE MOBILE */
@media screen and (max-width: 768px) {
    .sidebar { width: 160px; padding: 20px 10px; }
    .sidebar h2 { font-size: 18px; }
    .menu a { font-size: 12px; padding: 8px 10px; margin: 6px 0; }
    .content { margin-left: 160px; padding: 10px; max-width: calc(100% - 160px); }
    .hero { padding: 25px 15px; }
    .hero h1 { font-size: 24px; }
    .hero p { font-size: 14px; line-height: 1.4; }
    .topic-buttons button { flex: 1 1 100%; font-size: 14px; padding: 12px; }
    .modal { width: 90%; max-height: 70vh; padding: 15px; }
}

/* READ MORE BUTTON */
.read-more-btn {
    margin-top: 20px;
    padding: 12px 20px;
    background: #00e6e6;
    color: #0a0a0a;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-weight: bold;
    transition: 0.3s;
}
.read-more-btn:hover {
    background: #00b3b3;
}

</style>

<!-- CANVAS -->
<canvas id="bgCanvas"></canvas>

<!-- SIDEBAR -->
<div class="sidebar">
    <h2>FODISY SYSTEMS</h2>
    <div class="menu">
        <a href="../home/index.html">Home / Dashboard</a>
        <a href="../ai-automation/index.html">AI & Automation Engines</a>
        <a href="../performance-seo/index.html">Performance & SEO Systems</a>
        <a href="../saas-systems/index.html">Ready-Made Business Systems</a>
        <a href="../templates-market/index.html">Templates & Market Tools</a>
        <a href="../troubleshooting/index.html">Troubleshoot Library & Instant Fix</a>
        <a href="../cybersecurity/index.html">Cybersecurity Compliance & Risk Tools</a>
        <a href="../connect/index.html">Contact & Consultation</a>
    </div>
</div>

<!-- CONTENT -->
<div class="content">
    <div class="hero">
        <h1>Welcome to FODISY SYSTEMS</h1>
        <p>Explore futuristic software solutions for entrepreneurs, enterprises, and innovators. Click any topic below to preview demos or learn more about our ready-made systems and automation engines.</p>

        <!-- Topic Buttons -->
        <div class="topic-buttons">
            <button data-title="AI Bots" data-text="Explore AI-powered bots for business automation and lead generation.">AI Bots</button>
            <button data-title="Business Automation" data-text="Automate workflows, emails, and processes across your business seamlessly.">Business Automation</button>
            <button data-title="Lead Gen Engines" data-text="Lead generation systems that capture and qualify potential clients automatically.">Lead Gen Engines</button>
            <button data-title="WhatsApp & Telegram Bots" data-text="Instant messaging bots to streamline communication and engagement.">Messaging Bots</button>
            <button data-title="Email Automation" data-text="Automate personalized email campaigns to reach and convert customers.">Email Automation</button>
        </div>
    </div>
</div>

<!-- MODAL -->
<div class="modal-overlay">
    <div class="modal">
        <span class="close-btn">&times;</span>
        <h3 class="modal-title"></h3>
        <p class="modal-text"></p>
        <button class="read-more-btn">Read More</button>
    </div>
</div>

<script>
/* CANVAS PARTICLES */
const canvas = document.getElementById('bgCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const particles = [];
for(let i=0;i<80;i++){
    particles.push({x: Math.random()*canvas.width, y: Math.random()*canvas.height, vx:(Math.random()-0.5)*1.2, vy:(Math.random()-0.5)*1.2, size: Math.random()*3+1});
}
function draw(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    for(let i=0;i<particles.length;i++){
        for(let j=i+1;j<particles.length;j++){
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const dist = Math.sqrt(dx*dx+dy*dy);
            if(dist<120){
                ctx.beginPath();
                ctx.strokeStyle = 'rgba(0,230,230,'+(1-dist/120)+')';
                ctx.moveTo(particles[i].x,particles[i].y);
                ctx.lineTo(particles[j].x,particles[j].y);
                ctx.stroke();
            }
        }
    }
    for(let i=0;i<particles.length;i++){
        let p = particles[i];
        ctx.beginPath();
        ctx.fillStyle='rgba(0,230,230,0.8)';
        ctx.arc(p.x,p.y,p.size,0,Math.PI*2);
        ctx.fill();
        p.x+=p.vx; p.y+=p.vy;
        if(p.x<0||p.x>canvas.width)p.vx*=-1;
        if(p.y<0||p.y>canvas.height)p.vy*=-1;
    }
    requestAnimationFrame(draw);
}
draw();
window.addEventListener('resize',()=>{canvas.width=window.innerWidth;canvas.height=window.innerHeight});

/* MODAL LOGIC */
const modalOverlay = document.querySelector('.modal-overlay');
const modal = document.querySelector('.modal');
const modalTitle = modal.querySelector('.modal-title');
const modalText = modal.querySelector('.modal-text');
const readMoreBtn = modal.querySelector('.read-more-btn');

document.querySelectorAll('.topic-buttons button').forEach(btn=>{
    btn.addEventListener('click', ()=>{
        modalOverlay.style.display='flex';
        modalTitle.textContent = btn.dataset.title;
        modalText.textContent = btn.dataset.text;
        readMoreBtn.onclick = ()=>{
            const urlTitle = btn.dataset.title.toLowerCase().replace(/\s+/g,'-');
            window.location.href = /ai-automation/${urlTitle}/index.html;
        }
    });
});
modalOverlay.addEventListener('click', e=>{
    if(e.target===modalOverlay||e.target.classList.contains('close-btn')){
        modalOverlay.style.display='none';
    }
});
</script>
