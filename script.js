// ===============================
// NAMA TAMU
// ===============================
const params = new URLSearchParams(window.location.search);
const guestName = params.get("to");

if (guestName) {
  const guestEl = document.getElementById("guest-name");
  if (guestEl) {
    guestEl.innerText = guestName.replace(/\+/g, " ");
  }
}

// ===============================
// ELEMENT GLOBAL
// ===============================
const cover = document.getElementById("cover");
const sambutan = document.getElementById("sambutan");
const music = document.getElementById("bgMusic");
const toggle = document.getElementById("musicToggle");

// ===============================
// OPEN INVITATION
// ===============================
function openInvitation() {
  // buka scroll
  document.body.classList.remove("lock-scroll");

  // sembunyikan cover
  if (cover) cover.style.display = "none";

  // tampilkan isi undangan
  if (sambutan) sambutan.classList.remove("hidden");

  // play music
  if (music) {
    music.volume = 0.7;
    music.play().catch(() => {});
  }

  // tampilkan tombol musik
  if (toggle) toggle.classList.remove("hidden");
}

// ===============================
// COUNTDOWN
// ===============================
const targetDate = new Date("March 24, 2026 00:00:00").getTime();

setInterval(() => {
  const now = new Date().getTime();
  const distance = targetDate - now;
  if (distance < 0) return;

  document.getElementById("days").innerText =
    Math.floor(distance / (1000 * 60 * 60 * 24));
  document.getElementById("hours").innerText =
    Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  document.getElementById("minutes").innerText =
    Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  document.getElementById("seconds").innerText =
    Math.floor((distance % (1000 * 60)) / 1000);
}, 1000);

// ===============================
// MUSIC TOGGLE
// ===============================
if (toggle && music) {
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