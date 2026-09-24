# PABW---CSS
# Design Token Halaman List Game Favorit

Halaman ini dibuat untuk latihan PABW Pertemuan 4. Isi halaman berupa daftar game favorit, tabel informasi game, dan form untuk memberikan review game.

## Token yang saya tetapkan

### Warna

| Token             | Nilai                         | Untuk apa                             |
| ----------------- | ----------------------------- | ------------------------------------- |
| `--color-primary` | `var(--blue-700)` / `#1D3A8C` | tombol, tautan, dan elemen utama      |
| `--color-fg`      | `var(--gray-900)` / `#0F172A` | warna teks utama                      |
| `--color-bg`      | `var(--gray-50)` / `#F8FAFC`  | latar halaman                         |
| `--color-surface` | `var(--white)` / `#FFFFFF`    | latar section, kartu, dan input       |
| `--color-border`  | `#BFDBFE`                     | garis tabel, input, dan pemisah       |
| `--color-danger`  | `#B00020`                     | pesan kesalahan dan input tidak valid |
| `--color-focus`   | `var(--blue-500)` / `#2563EB` | garis fokus keyboard                  |

### Token Warna Primitif

| Token        | Nilai     | Untuk apa            |
| ------------ | --------- | -------------------- |
| `--blue-700` | `#1D3A8C` | warna biru utama     |
| `--blue-500` | `#2563EB` | warna fokus          |
| `--blue-300` | `#93C5FD` | warna biru pendukung |
| `--gray-50`  | `#F8FAFC` | warna latar terang   |
| `--gray-900` | `#0F172A` | warna teks gelap     |
| `--white`    | `#FFFFFF` | warna permukaan      |

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
| `--radius-md`   | `0.5rem`   | sudut section, kartu, input, dan tombol |
| `--radius-full` | `999px`    | bentuk tombol tema                      |
| `--text-sm`     | `0.875rem` | keterangan dan label                    |
| `--text-md`     | `1rem`     | teks isi                                |
| `--text-xl`     | `1.5rem`   | judul bagian                            |
| `--text-3xl`    | `2.25rem`  | judul halaman                           |

### Token Komponen dan Layout

| Token           | Nilai                         | Untuk apa                  |
| --------------- | ----------------------------- | -------------------------- |
| `--card-pad`    | `var(--space-4)`              | padding pada kartu game    |
| `--section-gap` | `var(--space-6)`              | jarak antar section        |
| `--shadow-1`    | `0 1px 3px rgb(0 0 0 / 0.10)` | bayangan section dan kartu |

## Struktur CSS

Proyek menggunakan beberapa lapisan CSS agar kode lebih mudah dirawat:

1. **`tokens.css`** — menyimpan token warna, jarak, ukuran, radius, dan shadow.
2. **`base.css`** — mengatur reset, font, warna dasar, heading, gambar, dan elemen form.
3. **`layout.css`** — mengatur struktur header, navigasi, section, kartu game, tabel, form, dan footer.
4. **`komponen.css`** — mengatur komponen form, tombol, validasi input, focus, dan tombol tema.
5. **`tema.css`** — mengatur tema gelap berdasarkan sistem dan pilihan tema manual.

## Tema Gelap

Pada `tema.css`, token semantik dapat diubah untuk menyesuaikan tampilan tema gelap.

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

Dengan menggunakan token semantik, komponen tidak perlu diubah satu per satu ketika tema halaman berubah.

## Kriteria Selesai

Mengubah nilai `--color-primary` pada satu tempat di `tokens.css` akan mengubah warna tombol dan tautan yang menggunakan token tersebut.

Contohnya:

```css
--color-primary: var(--blue-700);
```

Jika nilai tersebut diganti dengan warna lain, elemen yang menggunakan `var(--color-primary)` akan mengikuti perubahan tersebut.

Hal ini membuat desain lebih konsisten dan memudahkan pemeliharaan kode karena warna tidak perlu diubah satu per satu pada setiap komponen.
