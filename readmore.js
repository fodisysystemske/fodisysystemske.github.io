function toggleReadMore() {
    const content = document.querySelector('.read-more-content'); 
    const btn = document.querySelector('.read-more-btn');

    // 1️⃣ First click → Expand
    if (!btn.dataset.expanded) {
        content.style.maxHeight = content.scrollHeight + "px";
        btn.textContent = "Get this as a Manual PDF";
        btn.dataset.expanded = "true";   // mark as expanded
        return;
    }

    // 2️⃣ Second click → Go to Payhip
    if (btn.dataset.expanded === "true") {
        window.open("https://payhip.com/YOUR-MANUAL-LINK", "_blank");
    }
}
