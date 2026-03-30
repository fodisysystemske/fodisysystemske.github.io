// Extend all existing Read More buttons
document.querySelectorAll('.readmore-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const content = btn.previousElementSibling; // assumes content <p> or <div> is just before button

        // First click: expand content
        if (content.style.maxHeight === '' || content.style.maxHeight === '0px') {
            content.style.maxHeight = content.scrollHeight + 'px'; // expand
            btn.textContent = 'Get this as a Manual PDF';
            btn.dataset.pdf = 'true';
        } 
        // Second click: redirect to Payhip
        else if (btn.dataset.pdf === 'true') {
            window.open('https://payhip.com/yourmanuallink', '_blank');
        }
    });
});
