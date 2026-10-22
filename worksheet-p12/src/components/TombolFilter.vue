<script setup>
import { state, pilihKategori, aturUlang } from "../state.js"

const kategori = ["semua", "MOBA", "RPG", "FPS", "PC", "Puzzle"]
</script>

<template>
  <div id="filter" class="baris-filter" role="group" aria-label="Filter genre">
    <button
      v-for="k in kategori"
      :key="k"
      type="button"
      :class="{ aktif: state.kategoriAktif === k }"
      @click="pilihKategori(k)"
    >{{ k === "semua" ? "Semua" : k }}</button>
    <button type="button" class="sekunder" @click="aturUlang">Atur ulang</button>
  </div>
</template>
