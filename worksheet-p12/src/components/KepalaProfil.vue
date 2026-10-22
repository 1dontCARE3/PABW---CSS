<script setup>
import { state, gantiTema } from "../state.js"
import { buatPerkenalan } from "../data.js"

const props = defineProps({
  profil: { type: Object, required: true },
})
</script>

<template>
  <header :title="buatPerkenalan(props.profil)">
    <div class="navbar">
      <h1>List Game Favorit</h1>
      <nav aria-label="Navigasi utama">
        <ul>
          <li><a href="#bagian-1">Game Favorit</a></li>
          <li><a href="#bagian-2">Daftar Game</a></li>
          <li><a href="#bagian-3">Review Game</a></li>
        </ul>
      </nav>
      <button
        type="button"
        class="tombol-tema"
        :aria-pressed="String(state.tema === gelap)"
        @click="gantiTema"
      >{{ state.tema === "gelap" ? "Tema terang" : "Tema gelap" }}</button>
    </div>
  </header>
</template>
