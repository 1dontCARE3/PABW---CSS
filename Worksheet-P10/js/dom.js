const wadah = document.querySelector('#daftar-game');
const pesanKosong = document.querySelector('#pesan-kosong');
const muatEl = document.querySelector('#muat');
const barisFilter = document.querySelector('#filter');

function buatBaris(game) {
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

  tr.append(tahun, nama, genre, rating);
  return tr;
}

export function render(daftar) {
  wadah.textContent = '';
  if (daftar.length === 0) {
    pesanKosong.textContent = 'Belum ada data.';
    pesanKosong.hidden = false;
    return;
  }
  pesanKosong.hidden = true;
  daftar.forEach((game) => wadah.append(buatBaris(game)));
}

export function aturMemuat(aktif) {
  muatEl.hidden = !aktif;
}

export function tampilkanGalat(pesan) {
  wadah.textContent = '';
  pesanKosong.textContent = pesan;
  pesanKosong.hidden = false;
}

export function pasangFilter(daftar) {
  barisFilter.addEventListener('click', (event) => {
    const tombol = event.target.closest('button');
    if (!tombol) return;
    barisFilter.querySelectorAll('button').forEach((b) => b.classList.remove('aktif'));
    tombol.classList.add('aktif');
    const genre = tombol.dataset.kategori;
    render(daftar.filter((g) => genre === 'semua' || g.genre === genre));
  });
}