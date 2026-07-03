let yesBtn = document.getElementById('yesBtn');
let noBtn = document.getElementById('noBtn');
let message = document.getElementById('message');
let card = document.querySelector('.card');

let noCounter = 0;

function moveNoButton() {
    if (!noBtn) return;
    noCounter++;

    const btnRect = noBtn.getBoundingClientRect();
    const padding = 15;
    const maxLeft = Math.max(0, window.innerWidth - btnRect.width - padding);
    const maxTop = Math.max(0, window.innerHeight - btnRect.height - padding);
    const left = Math.random() * maxLeft + padding;
    const top = Math.random() * maxTop + padding;

    noBtn.style.position = 'fixed';
    noBtn.style.left = `${left}px`;
    noBtn.style.top = `${top}px`;
    noBtn.style.zIndex = '999';

    if (noCounter === 1) {
        message.textContent = "Aww, don't be shy! 😢";
    } else if (noCounter === 2) {
        message.textContent = "Come on, you know you want to say yes! 😘";
    } else if (noCounter === 3) {
        message.textContent = "I promise, it will be fun! 😍";
    } else if (noCounter === 4) {
        message.textContent = "You're making me nervous! 😅";
    } else {
        message.textContent = "There's no need to be scared, I just want to be with you! 🥰";

    }
}

noBtn.addEventListener('mouseenter', moveNoButton);
noBtn.addEventListener('click', moveNoButton);
noBtn.addEventListener('touchstart', moveNoButton, { passive: true });

yesBtn.addEventListener('click', function() {
    document.querySelector('.card').innerHTML = `
     <h1>Yay! I\'m so happy! 😍💕</h1>
    <p>Thank you for saying yes! I can\'t wait to spend the rest of my life with you! 🥰</p>
    <p>Let's make beautiful memories together! 💖</p>
    <p>Love you forever and always! 💕</p>
    <p>Kindly click the button below to send a reply message! 💌</p>
    <a href="https://wa.me/233543177911?text=Hello%20handsome.%20said%20yes%20to%20your%20proposal%20.%20Let's%27s%20hang out." target="_blank" rel="noopener noreferrer">
        <button>Send Reply</button>
    </a>
    `;
})

