const nav = document.getElementById('navbar');

document.addEventListener('mousemove', (e) => {
  // If cursor is within 50px of the top
  if (e.clientY < 50) {
    nav.classList.add('visible');
  } else if (!nav.matches(':hover')) {
    // Only hide when cursor is out of nav too
    nav.classList.remove('visible');
  }
});

const nav = document.getElementById('navbar');
const toggle = document.getElementById('menu-toggle');

// Show/hide on click (for mobile & desktop)
toggle.addEventListener('click', () => {
  nav.classList.toggle('visible');
});

// Retain hover behavior on desktop
document.addEventListener('mousemove', e => {
  if (e.clientY < 50) nav.classList.add('visible');
  else if (!nav.matches(':hover')) nav.classList.remove('visible');
});
// scripts.js

// Grab references
const nav = document.getElementById('navbar');
const toggle = document.getElementById('menu-toggle');

// On click, add/remove the “visible” class
toggle.addEventListener('click', () => {
  nav.classList.toggle('visible');
});

document.addEventListener('DOMContentLoaded', () => {
  const nav = document.getElementById('navbar');
  const toggle = document.getElementById('menu-toggle');

  // 1) Click the arrow to toggle menu
  toggle.addEventListener('click', () => {
    nav.classList.toggle('visible');
  });

  // 2) Move mouse to top 50px to show; move away to hide
  document.addEventListener('mousemove', e => {
    if (e.clientY < 50) {
      nav.classList.add('visible');
    } else if (
      !nav.matches(':hover') &&    // only hide when neither nav
      !toggle.matches(':hover')    // nor toggle button is hovered
    ) {
      nav.classList.remove('visible');
    }
  });
});


// Subtle cursor parallax for the global fog (disabled if reduced-motion)
(() => {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) return;

  const root = document.documentElement;
  let mx = 0, my = 0;   // current
  let tx = 0, ty = 0;   // target
  const strength = 24;  // max px offset

  window.addEventListener('mousemove', (e) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    tx = (x - 0.5) * strength;
    ty = (y - 0.5) * strength;
  }, { passive: true });

  function tick(){
    // ease toward target for smoothness
    mx += (tx - mx) * 0.08;
    my += (ty - my) * 0.08;
    root.style.setProperty('--mx', mx.toFixed(2) + 'px');
    root.style.setProperty('--my', my.toFixed(2) + 'px');
    requestAnimationFrame(tick);
  }
  tick();
})();
