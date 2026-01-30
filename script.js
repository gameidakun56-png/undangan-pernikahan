const chat = document.getElementById("chat");
const buttonArea = document.getElementById("buttonArea");

const params = new URLSearchParams(window.location.search);
const guest = params.get("to") || "Tamu Undangan";

let step = 0;

const messages = [
  "💍 <b>The Wedding Of</b>",
  "<b>Khoiril & Aisyah</b>",
  `Kepada Yth.<br><b>${guest}</b>`,
  "Dengan penuh kebahagiaan kami mengundang Anda untuk hadir pada acara pernikahan kami.",
  "📅 Ahad, 20 April 2026<br>⏰ 08.00 WIB<br>📍 Kediaman Mempelai Wanita",
  "Merupakan suatu kehormatan bagi kami apabila Anda berkenan hadir dan memberikan doa restu 🤍"
];

function addBubble(text, type = "bot") {
  const div = document.createElement("div");
  div.className = `bubble ${type}`;
  div.innerHTML = text;
  chat.appendChild(div);
  chat.scrollTop = chat.scrollHeight;
}

function showTyping(callback) {
  const typing = document.createElement("div");
  typing.className = "bubble bot typing";
  typing.innerText = "sedang mengetik...";
  chat.appendChild(typing);
  chat.scrollTop = chat.scrollHeight;

  setTimeout(() => {
    typing.remove();
    callback();
  }, 900);
}

function nextMessage() {
  if (step < messages.length) {
    showTyping(() => {
      addBubble(messages[step]);
      step++;
    });
  } else {
    buttonArea.innerHTML = `
      <a href="https://wa.me/6281234567890" target="_blank">
        <button>💬 Konfirmasi Kehadiran</button>
      </a>
    `;
  }
}