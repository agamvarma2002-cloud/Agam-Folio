// Matrix background animation
const matrixBg = document.querySelector('.matrix-bg');
const canvas = document.createElement('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
matrixBg.appendChild(canvas);
const ctx = canvas.getContext('2d');

const cols = Math.floor(canvas.width / 18);
const chars = '01#@$%&*ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const drops = Array(cols).fill(1);

function drawMatrix() {
  ctx.fillStyle = 'rgba(18,18,18,0.13)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.font = '16px monospace';
  for (let i = 0; i < drops.length; i++) {
    const text = chars[Math.floor(Math.random() * chars.length)];
    ctx.fillStyle = Math.random() > 0.7 ? '#00ff86' : '#00ffe7';
    ctx.shadowBlur = 8;
    ctx.shadowColor = ctx.fillStyle;
    ctx.fillText(text, i * 18, drops[i] * 18);

    if (drops[i] * 18 > canvas.height && Math.random() > 0.99) {
      drops[i] = 0;
    }
    drops[i]++;
  }
}
setInterval(drawMatrix, 55);

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

// Contact form handler (not connected to backend)
document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  document.getElementById('form-msg').textContent = 'Thank you for reaching out! (Form not yet connected)';
  this.reset();
});

// Sticky navbar active link highlight
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').includes(current)) {
      link.classList.add('active');
    }
  });
});