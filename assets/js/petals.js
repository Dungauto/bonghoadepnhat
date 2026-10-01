/**
 * Falling Rose & Cherry Blossom Petals Canvas Physics Engine
 * Author: Dung Automation
 */

let petalsCanvas, petalsCtx;
let petals = [];
let petalCount = 45;
let windSpeed = 0;
let isBlossomStorm = false;

// Confetti Particle System
let confettiCanvas, confettiCtx;
let confettiParticles = [];

function initPetalsCanvas() {
  petalsCanvas = document.getElementById("petals-canvas");
  if (!petalsCanvas) return;
  petalsCtx = petalsCanvas.getContext("2d");
  resizePetalsCanvas();
  window.addEventListener("resize", resizePetalsCanvas);

  for (let i = 0; i < petalCount; i++) {
    petals.push(createPetal());
  }
  requestAnimationFrame(renderPetals);
}

function resizePetalsCanvas() {
  if (!petalsCanvas) return;
  petalsCanvas.width = window.innerWidth;
  petalsCanvas.height = window.innerHeight;
}

function createPetal() {
  const colors = [
    { r: 255, g: 107, b: 139 }, // Rose Pink
    { r: 255, g: 182, b: 193 }, // Light Pink
    { r: 230, g: 57, b: 70 },   // Deep Rose
    { r: 255, g: 194, b: 209 }, // Blush Pink
    { r: 255, g: 229, b: 236 }  // Soft White-Pink
  ];
  const color = colors[Math.floor(Math.random() * colors.length)];

  return {
    x: Math.random() * (petalsCanvas ? petalsCanvas.width : window.innerWidth),
    y: Math.random() * (petalsCanvas ? petalsCanvas.height : window.innerHeight),
    size: Math.random() * 12 + 10,
    speedY: Math.random() * 1.4 + 0.8,
    speedX: Math.random() * 0.8 - 0.4,
    rotation: Math.random() * Math.PI * 2,
    rotSpeed: Math.random() * 0.03 - 0.015,
    flip: Math.random() * Math.PI,
    flipSpeed: Math.random() * 0.04 + 0.02,
    color: color,
    opacity: Math.random() * 0.5 + 0.5
  };
}

function renderPetals() {
  petalsCtx.clearRect(0, 0, petalsCanvas.width, petalsCanvas.height);

  for (let i = 0; i < petals.length; i++) {
    let p = petals[i];
    p.y += p.speedY * (isBlossomStorm ? 2.5 : 1);
    p.x += (p.speedX + windSpeed) * (isBlossomStorm ? 2 : 1);
    p.rotation += p.rotSpeed;
    p.flip += p.flipSpeed;

    if (p.y > petalsCanvas.height + 20) {
      p.y = -20;
      p.x = Math.random() * petalsCanvas.width;
    }
    if (p.x > petalsCanvas.width + 20) p.x = -20;
    if (p.x < -20) p.x = petalsCanvas.width + 20;

    petalsCtx.save();
    petalsCtx.translate(p.x, p.y);
    petalsCtx.rotate(p.rotation);
    petalsCtx.scale(Math.sin(p.flip), 1);

    // Draw realistic heart-shaped curved petal
    petalsCtx.beginPath();
    petalsCtx.moveTo(0, 0);
    petalsCtx.bezierCurveTo(p.size / 2, -p.size / 2, p.size, 0, 0, p.size);
    petalsCtx.bezierCurveTo(-p.size, 0, -p.size / 2, -p.size / 2, 0, 0);

    petalsCtx.fillStyle = `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, ${p.opacity})`;
    petalsCtx.fill();
    petalsCtx.restore();
  }

  requestAnimationFrame(renderPetals);
}

function togglePetalStorm() {
  isBlossomStorm = !isBlossomStorm;
  const btn = document.getElementById("btn-storm");
  if (btn) btn.style.color = isBlossomStorm ? "var(--rose-red)" : "var(--deep-wine)";
  if (typeof showToast === "function") {
    showToast(isBlossomStorm ? "Mưa cánh hoa hồng đã bật! 🌸✨" : "Cánh hoa rơi dịu êm 🌸");
  }
}

/**
 * Petal Burst on Gift Open
 */
function initConfettiCanvas() {
  confettiCanvas = document.getElementById("confetti-canvas");
  if (!confettiCanvas) return;
  confettiCtx = confettiCanvas.getContext("2d");
  resizeConfettiCanvas();
  window.addEventListener("resize", resizeConfettiCanvas);
  requestAnimationFrame(renderConfetti);
}

function resizeConfettiCanvas() {
  if (!confettiCanvas) return;
  confettiCanvas.width = window.innerWidth;
  confettiCanvas.height = window.innerHeight;
}

function firePetalBurst(startX, startY) {
  const colors = ["#ff758c", "#ff7eb3", "#ffb3c1", "#e63946", "#f9bc60", "#ffffff"];
  const x = startX || window.innerWidth / 2;
  const y = startY || window.innerHeight * 0.5;

  for (let i = 0; i < 70; i++) {
    confettiParticles.push({
      x: x,
      y: y,
      vx: (Math.random() - 0.5) * 16,
      vy: (Math.random() - 0.7) * 18,
      size: Math.random() * 10 + 6,
      color: colors[Math.floor(Math.random() * colors.length)],
      rotation: Math.random() * 360,
      rotSpeed: (Math.random() - 0.5) * 10,
      gravity: 0.35,
      life: 1,
      decay: Math.random() * 0.015 + 0.01
    });
  }
}

function renderConfetti() {
  confettiCtx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
  for (let i = confettiParticles.length - 1; i >= 0; i--) {
    const p = confettiParticles[i];
    p.x += p.vx;
    p.y += p.vy;
    p.vy += p.gravity;
    p.rotation += p.rotSpeed;
    p.life -= p.decay;

    if (p.life <= 0) {
      confettiParticles.splice(i, 1);
      continue;
    }

    confettiCtx.save();
    confettiCtx.translate(p.x, p.y);
    confettiCtx.rotate((p.rotation * Math.PI) / 180);
    confettiCtx.globalAlpha = p.life;
    confettiCtx.fillStyle = p.color;

    // Petal ellipse
    confettiCtx.beginPath();
    confettiCtx.ellipse(0, 0, p.size / 2, p.size, 0, 0, Math.PI * 2);
    confettiCtx.fill();
    confettiCtx.restore();
  }
  requestAnimationFrame(renderConfetti);
}

// Mouse wind interaction
window.addEventListener("mousemove", (e) => {
  windSpeed = (e.clientX / window.innerWidth - 0.5) * 1.8;
});
