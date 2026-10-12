
const wadah = document.querySelector("#daftar-game");
const tabel = wadah.closest("table");
const barisFilter = document.querySelector("#filter");
const pesanKosong = document.querySelector("#pesan-kosong");
const form = document.querySelector("#form-review");
const tombolSimpan = document.querySelector("#tombol-simpan");


function buatBaris(game) {
  const tr = document.createElement("tr");
  const tahun = document.createElement("th");
  tahun.scope = "row";
  tahun.textContent = game.tahun;

  const nama = document.createElement("td");
  nama.textContent = game.nama;
  const genre = document.createElement("td");
  genre.textContent = game.genre;
  const rating = document.createElement("td");
  rating.textContent = game.rating;

  tr.append(tahun, nama, genre, rating);
  return tr;
}

function render(daftar) {
  wadah.textContent = ""; // kosongkan dulu
  tabel.hidden = daftar.length === 0;
  pesanKosong.hidden = daftar.length > 0;
  daftar.forEach((game) => wadah.append(buatBaris(game)));
}


barisFilter.addEventListener("click", (event) => {
  const tombol = event.target.closest("button");
  if (!tombol) return;

  pilihanAktif = tombol.dataset.kategori;
  barisFilter.querySelectorAll("button").forEach((t) => {
    t.classList.toggle("aktif", t === tombol);
  });

  render(daftarGame.filter((g) => pilihanAktif === "semua" || g.genre === pilihanAktif));
});


render(daftarGame);
