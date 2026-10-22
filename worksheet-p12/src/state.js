import { reactive } from "vue"

const KUNCI = "pabw-p11"
const VERSI = 2

export const state = reactive({
  daftarProyek: [],
  kategoriAktif: "semua",
  favorit: [],
  memuat: true, // keadaan memuat dari P10
  galat: "",    // keadaan gagal dari P10
  tema: "terang",
})

export function simpan(nilai) {
  const isi = { versi: VERSI, kategoriAktif: nilai.kategoriAktif, favorit: nilai.favorit }
  localStorage.setItem(KUNCI, JSON.stringify(isi))
}

export function muat() {
  try {
    const isi = JSON.parse(localStorage.getItem(KUNCI))
    if (isi?.versi !== VERSI) {
      localStorage.removeItem(KUNCI) // bentuk lama / kosong: buang
      return null
    }
    return isi
  } catch {
    localStorage.removeItem(KUNCI) // isi rusak: buang
    return null
  }
}

export function pulihkan(isi) {
  if (!isi) return // kunjungan pertama: nilai bawaan tetap
  state.kategoriAktif = isi.kategoriAktif ?? "semua"
  state.favorit = Array.isArray(isi.favorit) ? isi.favorit : []
}

export function isiProyek(daftar) {
  state.daftarProyek = daftar
}

export function pilihKategori(nilai) {
  state.kategoriAktif = nilai
}

export function tambahFavorit(id) {
  state.favorit = state.favorit.includes(id)
    ? state.favorit.filter((f) => f !== id)
    : [...state.favorit, id]
}

export function aturUlang() {
  localStorage.removeItem(KUNCI)
  state.kategoriAktif = "semua"
  state.favorit = []
}

// ===== tema gelap / terang =====
export function terapkanTema(tema) {
  state.tema = tema
  document.documentElement.dataset.tema = tema
}

export function gantiTema() {
  const berikutnya = state.tema === "gelap" ? "terang" : "gelap"
  localStorage.setItem("tema", berikutnya)
  terapkanTema(berikutnya)
}
