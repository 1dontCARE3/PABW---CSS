// js/dom.js: seluruh sentuhan ke halaman
import { saring } from './data.js';

const wadah = document.querySelector('#daftar-game');
const pesanKosong = document.querySelector('#pesan-kosong');
const muatEl = document.querySelector('#muat');
const barisFilter = document.querySelector('#filter');
const tombolTema = document.querySelector('#tombol-tema');

function buatBaris(game, favorit) {
  const tr = document.createElement('tr');

  const tahun = document.createElement('th');
  tahun.scope = 'row';
  tahun.textContent = game.tahun;

  const nama = document.createElement('td');
  nama.textContent = game.nama;

  const genre = document.createElement('td');
  genre.textContent = game.genre;

  const rating = document.createElement('td');
  rating.textContent = game.rating;

  const tdFav = document.createElement('td');
  const tombol = document.createElement('button');
  tombol.type = 'button';
  tombol.className = 'favorit';
  tombol.dataset.id = game.id;
  tombol.textContent = favorit.includes(game.id) ? '★' : '☆';
  tombol.setAttribute('aria-label', 'Tandai favorit: ' + game.nama);
  tdFav.append(tombol);

  tr.append(tahun, nama, genre, rating, tdFav);
  return tr;
}

function tandaiTombolAktif(state) {
  barisFilter.querySelectorAll('button').forEach((tombol) => {
    tombol.classList.toggle('aktif', tombol.dataset.kategori === state.kategoriAktif);
  });
}

export function render(state) {
  wadah.textContent = '';                                    // 1. kosongkan
  tandaiTombolAktif(state);
  const tampil = saring(state.daftarProyek, state.kategoriAktif);
  if (tampil.length === 0) {                                 // 2. keadaan kosong
    pesanKosong.textContent = 'Belum ada game di genre ini. Coba pilih genre lain.';
    pesanKosong.hidden = false;
    return;
  }
  pesanKosong.hidden = true;
  tampil.forEach((game) => wadah.append(buatBaris(game, state.favorit))); // 3. isi ulang
}

export function aturMemuat(aktif) {
  muatEl.hidden = !aktif;
}

export function tampilkanGalat(pesan) {
  wadah.textContent = '';
  pesanKosong.textContent = pesan;
  pesanKosong.hidden = false;
}

// ===== tema gelap / terang =====
export function terapkanTema(tema) {
  const gelap = tema === 'gelap';
  document.documentElement.dataset.tema = tema;
  tombolTema.textContent = gelap ? 'Tema terang' : 'Tema gelap';
  tombolTema.setAttribute('aria-pressed', String(gelap));
}

export function temaSekarang() {
  return document.documentElement.dataset.tema;
}
