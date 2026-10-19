import { pilihKategori, tambahFavorit, aturUlang } from './state.js';
import { terapkanTema, temaSekarang } from './dom.js';

export function pasangPendengar() {
  document.querySelector('#filter').addEventListener('click', (event) => {
    const tombol = event.target.closest('button');
    if (!tombol) return;
    pilihKategori(tombol.dataset.kategori);
  });

  document.querySelector('#daftar-game').addEventListener('click', (event) => {
    const tombol = event.target.closest('.favorit');
    if (!tombol) return;
    tambahFavorit(Number(tombol.dataset.id));
  });

  document.querySelector('#atur-ulang').addEventListener('click', aturUlang);

  document.querySelector('#tombol-tema').addEventListener('click', () => {
    const berikutnya = temaSekarang() === 'gelap' ? 'terang' : 'gelap';
    localStorage.setItem('tema', berikutnya);
    terapkanTema(berikutnya);
  });
}
