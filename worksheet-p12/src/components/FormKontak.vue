<script setup>
import { ref, reactive } from "vue"

const nama = ref("")
const tahun = ref("")
const rating = ref("")
const status = ref("")
const galat = reactive({ nama: false, tahun: false, rating: false })

function kirim() {
  galat.nama = nama.value.trim() === ""
  galat.tahun = !(tahun.value >= 1970 && tahun.value <= 2026)
  galat.rating = !(rating.value >= 1 && rating.value <= 100)
  if (galat.nama || galat.tahun || galat.rating) {
    status.value = "Periksa kembali isian yang bertanda galat."
    return
  }
  status.value = `Review "${nama.value.trim()}" tersimpan.`
}

function reset() {
  nama.value = ""
  tahun.value = ""
  rating.value = ""
  status.value = ""
  galat.nama = galat.tahun = galat.rating = false
}
</script>

<template>
  <form id="form-review" novalidate @submit.prevent="kirim" @reset.prevent="reset">
    <div class="form-kolom">
      <label for="nama-game">Nama Game</label>
      <input type="text" id="nama-game" name="nama-game" v-model="nama" required>
      <span class="pesan-galat" v-if="galat.nama">Nama game wajib diisi.</span>
    </div>
    <div class="form-kolom">
      <label for="tahun">Tahun Rilis</label>
      <input type="number" id="tahun" name="tahun" min="1970" max="2026" v-model="tahun" required>
      <span class="pesan-galat" v-if="galat.tahun">Tahun rilis harus diisi dengan benar.</span>
    </div>
    <div class="form-kolom">
      <label for="rating">Rating</label>
      <input type="number" id="rating" name="rating" min="1" max="100" v-model="rating" required>
      <span class="pesan-galat" v-if="galat.rating">Rating harus berada antara 1 sampai 100.</span>
    </div>
    <div class="baris-tombol">
      <button type="submit" id="tombol-simpan">Simpan</button>
      <button type="reset" class="sekunder">Reset</button>
    </div>
  </form>
  <p id="status-form" class="status-form" role="status">{{ status }}</p>
</template>
