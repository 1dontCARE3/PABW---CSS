<script setup>
import { onMounted, watch } from "vue"
import { state, simpan, muat, pulihkan, isiProyek, terapkanTema } from "./state.js"
import { ambilProyek } from "./api.js"
import { profil } from "./data.js"
import KepalaProfil from "./components/KepalaProfil.vue"
import TombolFilter from "./components/TombolFilter.vue"
import DaftarProyek from "./components/DaftarProyek.vue"
import FormKontak from "./components/FormKontak.vue"

const temaSistem = window.matchMedia("(prefers-color-scheme: dark)").matches ? "gelap" : "terang"

onMounted(async () => {
  terapkanTema(localStorage.getItem("tema") ?? temaSistem)
  pulihkan(muat())                // pilihan terakhir dari localStorage
  try {
    isiProyek(await ambilProyek()) // data/proyek.json
  } catch (galat) {
    state.galat = "Data game gagal dimuat. Periksa koneksi, lalu muat ulang halaman."
  } finally {
    state.memuat = false
  }
})

watch(state, (nilai) => simpan(nilai), { deep: true })
</script>

<template>
  <div class="page">
    <KepalaProfil :profil="profil" />

    <div class="isi">
      <aside class="sidebar">
        <h2>Tentang</h2>
        <nav class="menu-samping" aria-label="Menu samping">
          <ul>
            <li><a href="#bagian-1">List Game Favorit</a></li>
            <li><a href="#bagian-2">Daftar Game</a></li>
            <li><a href="#bagian-3">Review Game</a></li>
          </ul>
        </nav>
        <p class="deskripsi">Halaman ini berisi daftar game yang saya sukai dan sering dimainkan, lengkap dengan informasi genre, platform, dan alasan saya menyukai game tersebut.</p>
      </aside>

      <main>
        <section id="bagian-1">
          <h2>List Game Favorit</h2>
          <div class="galeri">
            <article class="kartu">
              <figure class="kartu__isi">
                <img src="/ML.webp" alt="Gambar Mobile Legends" loading="lazy">
                <figcaption>Mobile Legends adalah salah satu game favorit saya karena membuat kita berpikir untuk membuat strategi yang kokoh agar bisa menang.</figcaption>
              </figure>
              <div class="kartu__label"><span class="label">MOBA</span><span class="label">Mobile</span></div>
              <div class="kartu__kaki"><span class="kartu__judul">Mobile Legends · 2016</span><a class="tombol" href="#bagian-2">Lihat data</a></div>
            </article>
            <article class="kartu">
              <figure class="kartu__isi">
                <img src="/roblox.webp" alt="Gambar Roblox" loading="lazy">
                <figcaption>Roblox adalah game yang sering saya mainkan pada waktu luang karena memiliki gameplay yang menyenangkan dan dapat dimainkan bersama teman.</figcaption>
              </figure>
              <div class="kartu__label"><span class="label">RPG</span><span class="label">Multiplayer</span></div>
              <div class="kartu__kaki"><span class="kartu__judul">Roblox · 2020</span><a class="tombol" href="#bagian-2">Lihat data</a></div>
            </article>
          </div>
        </section>

        <section id="bagian-2">
          <h2>Daftar Game</h2>
          <TombolFilter />
          <DaftarProyek />
        </section>

        <section id="bagian-3">
          <h2>Review Game</h2>
          <FormKontak />
        </section>
      </main>
    </div>

    <footer>
      <p>{{ profil.nama }} · {{ profil.nim }} · 2026</p>
    </footer>
  </div>
</template>
