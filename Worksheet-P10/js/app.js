import { ambilProyek } from './api.js';
import { render, pasangFilter, aturMemuat, tampilkanGalat } from './dom.js';

const profil = {
  nama: "Hilmy Qabus",
  nim: "25523111",
  peran: "Mahasiswa Informatika",
  keahlian: ["HTML", "CSS", "JavaScript"],
};


function buatPerkenalan({ nama, peran }) {
  return `${nama} — ${peran}`;
}


// ===== Mode gelap / terang =
const tombolTema = document.querySelector("#tombol-tema");
const temaTersimpan = localStorage.getItem("tema");

function terapkanTema(tema) {
  const gelap = tema === "gelap";
  document.documentElement.dataset.tema = tema;
  tombolTema.textContent = gelap ? "Tema terang" : "Tema gelap";
  tombolTema.setAttribute("aria-pressed", String(gelap));
}

const temaSistem = window.matchMedia("(prefers-color-scheme: dark)").matches
  ? "gelap"
  : "terang";

terapkanTema(temaTersimpan ?? temaSistem);

tombolTema.addEventListener("click", () => {
  const berikutnya = document.documentElement.dataset.tema === "gelap" ? "terang" : "gelap";
  localStorage.setItem("tema", berikutnya);
  terapkanTema(berikutnya);
});


async function muat() {
  aturMemuat(true);
  try {
    const daftar = await ambilProyek();
    console.log('Data game:', daftar);
    pasangFilter(daftar);
    render(daftar);
  } catch (galat) {
    tampilkanGalat('Data game gagal dimuat. Periksa koneksi, lalu muat ulang halaman.');
    console.error(galat.message);
  } finally {
    aturMemuat(false);
  }
}

muat();