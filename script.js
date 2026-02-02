// Nama tamu
const params = new URLSearchParams(window.location.search);
const guestName = params.get("to");
if (guestName) {
  document.getElementById("guest-name").innerText =
    guestName.replace(/\+/g, " ");
}

// OPEN INVITATION
function openInvitation() {
  document.getElementById("cover").style.display = "none";
  document.getElementById("home").classList.remove("hidden");

  // Musik
  const music = document.getElementById("bgMusic");
  music.volume = 0.7;
  music.play();

  document.getElementById("musicToggle").classList.remove("hidden");
}

// MUSIC TOGGLE
const toggle = document.getElementById("musicToggle");
const music = document.getElementById("bgMusic");

toggle.addEventListener("click", () => {
  if (music.paused) {
    music.play();
    toggle.innerText = "🔊";
  } else {
    music.pause();
    toggle.innerText = "🔇";
  }
});