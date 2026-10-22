<script setup>
import { computed } from "vue"
import { state, tambahFavorit } from "../state.js"
import { saring } from "../data.js"

const tampil = computed(() => saring(state.daftarProyek, state.kategoriAktif))
</script>

<template>
  <p v-if="state.memuat" class="status-form" role="status">Memuat data game...</p>
  <div class="table-wrap">
    <table id="tabel-game">
      <caption>Tabel Biodata Game</caption>
      <thead>
        <tr>
          <th scope="col">Tahun</th>
          <th scope="col">Nama Game</th>
          <th scope="col">Genre</th>
          <th scope="col">Rating</th>
          <th scope="col">Favorit</th>
        </tr>
      </thead>
      <tbody id="daftar-game">
        <tr v-for="game in tampil" :key="game.id">
          <th scope="row">{{ game.tahun }}</th>
          <td>{{ game.nama }}</td>
          <td>{{ game.genre }}</td>
          <td>{{ game.rating }}</td>
          <td>
            <button
              type="button"
              class="favorit"
              :aria-label="`Tandai favorit: ${game.nama}`"
              @click="tambahFavorit(game.id)"
            >{{ state.favorit.includes(game.id) ? "★" : "☆" }}</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <p v-if="state.galat" class="pesan-kosong">{{ state.galat }}</p>
  <p v-else-if="!state.memuat && tampil.length === 0" class="pesan-kosong">
    Belum ada game di genre ini. Coba pilih genre lain.
  </p>
</template>
