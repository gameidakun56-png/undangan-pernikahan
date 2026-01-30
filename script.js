function bukaUndangan(){
  document.getElementById('cover').style.display='none';
  document.getElementById('page2').style.display='block';
  document.getElementById('page2').scrollIntoView({behavior:'smooth'});
}

// COUNTDOWN
const target = new Date("May 12, 2026 08:00:00").getTime();

setInterval(()=>{
  const now = new Date().getTime();
  const diff = target - now;

  const hari = Math.floor(diff / (1000*60*60*24));
  const jam  = Math.floor((diff%(1000*60*60*24))/(1000*60*60));
  const menit = Math.floor((diff%(1000*60*60))/(1000*60));

  document.getElementById('countdown').innerHTML =
    `${hari} Hari • ${jam} Jam • ${menit} Menit`;
},1000);

// COPY REKENING
function copyRekening(no){
  navigator.clipboard.writeText(no);
  alert('Nomor rekening berhasil disalin');
}