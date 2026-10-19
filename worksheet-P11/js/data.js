export const profil = {
  nama: "Hilmy Qabus",
  nim: "25523111",
  peran: "Mahasiswa Informatika",
  keahlian: ["HTML", "CSS", "JavaScript"],
};

export function buatPerkenalan({ nama, peran }) {
  return `${nama} — ${peran}`;
}

export const formatKeahlian = (daftar) => daftar.join(" · ");

export function saring(daftar, kategori) {
  return daftar.filter((g) => kategori === "semua" || g.genre === kategori);
}
