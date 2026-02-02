// PROTEKSI AKSES HOME
if (window.location.pathname.includes("home.html")) {
  const opened = sessionStorage.getItem("openedInvitation");
  if (!opened) {
    window.location.href = "index.html";
  }
}

// Ambil nama tamu dari URL ?to=
const params = new URLSearchParams(window.location.search);
const guestName = params.get("to");

if (guestName) {
  document.getElementById("guest-name").innerText = guestName.replace(/\+/g, " ");
}

// Tombol buka undangan
function openInvitation() {
  sessionStorage.setItem("openedInvitation", "true");
  window.location.href = "home.html";
}

// simple scroll reveal
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fade-up");
    }
  });
});

document.querySelectorAll(".content").forEach(el => {
  observer.observe(el);
});

const music = document.getElementById("bgMusic");
const toggle = document.getElementById("musicToggle");

if (music) {
  music.volume = 0.7;
  music.play().catch(() => {});
}

if (toggle) {
  toggle.addEventListener("click", () => {
    if (music.paused) {
      music.play();
      toggle.innerText = "🔊";
    } else {
      music.pause();
      toggle.innerText = "🔇";
    }
  });
}