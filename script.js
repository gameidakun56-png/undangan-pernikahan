// Ambil nama tamu dari URL ?to=
const params = new URLSearchParams(window.location.search);
const guestName = params.get("to");

if (guestName) {
  document.getElementById("guest-name").innerText = guestName.replace(/\+/g, " ");
}

// Tombol buka undangan
document.getElementById("openInvitation").addEventListener("click", () => {
  // contoh pindah ke halaman utama
  window.location.href = "home.html";
});