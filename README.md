# Design Token Halaman List Game Favorit

Halaman ini dibuat untuk latihan PABW Pertemuan 4. Isi halaman berupa daftar game favorit, tabel informasi game, dan form untuk memberikan review game.

## Token yang saya tetapkan

### Warna

| Token             | Nilai     | Untuk apa                             |
| ----------------- | --------- | ------------------------------------- |
| `--color-primary` | `#1D3A8C` | tombol, tautan, dan elemen utama      |
| `--color-fg`      | `#0F172A` | warna teks utama                      |
| `--color-bg`      | `#F8FAFC` | latar halaman                         |
| `--color-surface` | `#FFFFFF` | latar section, kartu, dan input       |
| `--color-border`  | `#BFDBFE` | garis tabel, input, dan pemisah       |
| `--color-danger`  | `#B00020` | pesan kesalahan dan input tidak valid |
| `--color-focus`   | `#2563EB` | garis fokus keyboard                  |

### Jarak

| Token       | Nilai     | Untuk apa                  |
| ----------- | --------- | -------------------------- |
| `--space-1` | `0.25rem` | jarak paling rapat         |
| `--space-2` | `0.5rem`  | jarak label dan input      |
| `--space-3` | `0.75rem` | jarak tombol dan kontrol   |
| `--space-4` | `1rem`    | jarak antar elemen         |
| `--space-6` | `1.5rem`  | jarak antar bagian halaman |

### Ukuran dan Bentuk

| Token           | Nilai      | Untuk apa                               |
| --------------- | ---------- | --------------------------------------- |
| `--radius-md`   | `0.5rem`   | sudut input, tombol, kartu, dan section |
| `--radius-full` | `999px`    | bentuk penuh pada tombol tema           |
| `--text-sm`     | `0.875rem` | keterangan dan label                    |
| `--text-md`     | `1rem`     | teks isi                                |
| `--text-xl`     | `1.5rem`   | judul bagian                            |
| `--text-3xl`    | `2.25rem`  | judul halaman                           |

### Shadow

| Token        | Nilai                         | Untuk apa                       |
| ------------ | ----------------------------- | ------------------------------- |
| `--shadow-1` | `0 1px 3px rgb(0 0 0 / 0.10)` | bayangan pada kartu dan section |

## Struktur CSS

Proyek menggunakan beberapa file CSS:

1. **`tokens.css`** — menyimpan token warna, jarak, ukuran, radius, dan shadow.
2. **`base.css`** — mengatur tampilan dasar halaman, teks, gambar, dan form.
3. **`layout.css`** — mengatur struktur halaman, navigasi, section, kartu, tabel, form, dan footer.
4. **`komponen.css`** — mengatur tombol, form, validasi input, dan focus.
5. **`tema.css`** — mengatur tampilan tema gelap.

## Tema Gelap

Pada tema gelap, nilai token dapat diubah sesuai kebutuhan tampilan.

Contohnya:

```css
:root:has(#tema:checked) {
  --color-bg: #0F172A;
  --color-fg: #E2E8F0;
  --color-surface: #1E293B;
  --color-border: #334155;
  --color-primary: #7DA9F7;
  --color-danger: #FF8A8A;
  --color-focus: #FFC000;
}
```

Dengan cara ini, warna halaman dapat berubah ketika tema gelap digunakan tanpa harus mengubah setiap komponen satu per satu.

## Kriteria Selesai

Mengubah nilai `--color-primary` pada satu baris di `tokens.css` akan mengubah warna tombol, tautan, dan elemen utama yang menggunakan token tersebut.

Contohnya:

```css
--color-primary: #1D3A8C;
```

Jika diganti menjadi:

```css
--color-primary: #2563EB;
```

maka elemen yang menggunakan `--color-primary` akan berubah mengikuti warna tersebut.
