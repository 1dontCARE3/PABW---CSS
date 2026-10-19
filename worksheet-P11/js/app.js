import { ambilProyek } from './api.js';
import { isiProyek, pulihkan, muat } from './state.js';
import { tampilkanGalat, aturMemuat, terapkanTema } from './dom.js';
import { pasangPendengar } from './events.js';

const temaSistem = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'gelap' : 'terang';

async function mulai() {
  terapkanTema(localStorage.getItem('tema') ?? temaSistem);
  pulihkan(muat());                 // pilihan terakhir, atau nilai bawaan
  pasangPendengar();
  aturMemuat(true);
  try {
    isiProyek(await ambilProyek()); // isiProyek memanggil render(state)
  } catch (galat) {
    tampilkanGalat('Data game gagal dimuat. Periksa koneksi, lalu muat ulang halaman.');
    console.error(galat.message);
  } finally {
    aturMemuat(false);
  }
}

mulai();
