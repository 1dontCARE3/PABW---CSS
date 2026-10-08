const profil = {
  nama: "Hilmy Qabus",
  nim: "25523111",
  peran: "Mahasiswa Informatika",
  keahlian: ["HTML", "CSS", "JavaScript"],
};


const daftarGame = [
  { nama: "Mobile Legends", tahun: 2016, genre: "MOBA", rating: 99, favorit: true },
  { nama: "Minecraft", tahun: 2011, genre: "PC", rating: 95, favorit: false },
  { nama: "Roblox", tahun: 2020, genre: "RPG", rating: 96, favorit: true },
  { nama: "PUBG", tahun: 2017, genre: "FPS", rating: 90, favorit: false },
];


function buatPerkenalan({ nama, peran }) {
  return `${nama} — ${peran}`;
}

const formatKeahlian = (daftar = []) => daftar.join(" · ");

const jumlahGame = daftarGame.length;
let pilihanAktif = "semua";

console.log(buatPerkenalan(profil));
console.log(`Keahlian: ${formatKeahlian(profil.keahlian)}`);
console.log(`Jumlah game: ${jumlahGame}`);
console.log(`Pilihan aktif: ${pilihanAktif}`);

const namaGame = daftarGame.map((game) => game.nama);
const gameFavorit = daftarGame.filter((game) => game.favorit);
const gamePUBG = daftarGame.find((game) => game.nama === "PUBG");

console.table(profil.keahlian);
console.table(daftarGame);
console.table(gameFavorit);
console.log("Nama game:", namaGame);
console.log("Game PUBG:", gamePUBG);


const gameTerurut = [...daftarGame].sort((a, b) => b.rating - a.rating);
console.table(gameTerurut);

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
