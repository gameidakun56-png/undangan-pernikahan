// NAMA TAMU
const params = new URLSearchParams(window.location.search);
const guestName = params.get("to");
if (guestName) {
  document.getElementById("guest-name").innerText =
    guestName.replace(/\+/g, " ");
}

// OPEN INVITATION
function openInvitation() {
  // buka scroll
  document.body.classList.remove("lock-scroll");

  // sembunyikan cover
  document.getElementById("cover").style.display = "none";

  // tampilkan home
  
<script>
const targetDate = new Date("March 24, 2026 00:00:00").getTime();

setInterval(() => {
  const now = new Date().getTime();
  const distance = targetDate - now;

  document.getElementById("days").innerText = Math.floor(distance / (1000 * 60 * 60 * 24));
  document.getElementById("hours").innerText = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  document.getElementById("minutes").innerText = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  document.getElementById("seconds").innerText = Math.floor((distance % (1000 * 60)) / 1000);
}, 1000);
</script>

  // PLAY MUSIC
  const music = document.getElementById("bgMusic");
  if (music) {
    music.volume = 0.7;
    music.play().catch(() => {});
  }

  // tampilkan tombol musik
  const toggle = document.getElementById("musicToggle");
  if (toggle) toggle.classList.remove("hidden");
}

// MUSIC TOGGLE
const music = document.getElementById("bgMusic");
const toggle = document.getElementById("musicToggle");

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