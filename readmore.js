// readmore.js
const readMoreBtn = document.getElementById('readMoreBtn');
const fullText = document.getElementById('fullText');

readMoreBtn.addEventListener('click', () => {
    if (fullText.style.display === 'none') {
        fullText.style.display = 'block';
        readMoreBtn.textContent = 'Get this as a Manual PDF';
        readMoreBtn.dataset.pdf = 'true';
    } else if (readMoreBtn.dataset.pdf === 'true') {
        window.open('https://payhip.com/yourmanuallink', '_blank');
    }
});
