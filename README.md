# HMI Cabang Garut - Official Web Platform

<div align="center">
  <img src="public/img/logohmiputih.png" alt="Logo HMI Cabang Garut" width="150" />
  
  <h1>Himpunan Mahasiswa Islam Cabang Garut</h1>
  
  <p>
    <strong>Platform Digital Terintegrasi untuk Perkaderan dan Informasi</strong>
  </p>

  <h3>
    <a href="https://hmicabanggarut.or.id">🌐 Kunjungi Website Resmi: hmicabanggarut.or.id</a>
  </h3>

  <p>
    <a href="https://nextjs.org">
      <img src="https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js" alt="Next.js" />
    </a>
    <a href="https://react.dev">
      <img src="https://img.shields.io/badge/React-19-blue?style=flat-square&logo=react" alt="React" />
    </a>
    <a href="https://tailwindcss.com">
      <img src="https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=flat-square&logo=tailwind-css" alt="Tailwind CSS" />
    </a>
    <a href="https://supabase.com">
      <img src="https://img.shields.io/badge/Supabase-Database-3ECF8E?style=flat-square&logo=supabase" alt="Supabase" />
    </a>
  </p>
</div>

---

## 📖 Tentang Proyek

Website resmi **HMI Cabang Garut** adalah platform digital modern yang dirancang untuk menjadi pusat informasi, administrasi, dan publikasi kegiatan. Dibangun dengan teknologi web terkini, platform ini bertujuan untuk mempermudah akses informasi bagi kader dan masyarakat umum, serta mengefisienkan manajemen organisasi.

Visi kami adalah mewujudkan digitalisasi organisasi yang **responsif**, **transparan**, dan **profesional**.

---

## ✨ Fitur Utama

### 🌍 Halaman Publik (Kader & Umum)
*   **Beranda Interaktif**: Highlight berita terkini, agenda kegiatan, dan sekilas info organisasi.
*   **Profil Organisasi**: Sejarah, Visi Misi, Struktur Pengurus, dan Lembaga Kekaryaan.
*   **Pusat Informasi**: Terintegrasi dengan modul **Berita**, **Event**, dan **Training** (LK 1, LK 2, SC, dll).
*   **Galeri Digital**: Dokumentasi kegiatan dengan tampilan lightbox yang elegan.
*   **Mobile-First Design**: Tampilan yang optimal di smartphone, tablet, maupun desktop.

### 🛠️ Admin Dashboard (CMS)
Sistem manajemen konten terpusat untuk pengurus cabang:
*   **Manajemen Konten**: Buat, edit, dan publikasikan artikel berita dengan mudah.
*   **Manajemen Event & Training**: Kelola jadwal, pendaftaran, dan informasi perkaderan.
*   **Database Pengurus**: Manajemen data struktur kepengurusan yang dinamis.
*   **Manajemen Anggota**: Integrasi data kader (Database Anggota).
*   **Keamanan Terjamin**: Sistem autentikasi admin yang aman menggunakan Supabase Auth.

---

## 🛠️ Teknologi

Proyek ini dibangun menggunakan **Modern Tech Stack** untuk performa tinggi dan skalabilitas:

| Kategori | Teknologi |
| :--- | :--- |
| **Framework** | [Next.js 16 (App Router)](https://nextjs.org/) |
| **Language** | JavaScript / React 19 |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) |
| **Database** | [Supabase](https://supabase.com/) (PostgreSQL) |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **Deployment** | [Netlify](https://www.netlify.com/) |

---

## 📂 Struktur Direktori

```bash
hmicabanggarut/
├── 📂 docs/               # Dokumentasi Teknis & SQL Schema
├── 📂 public/             # Aset Statis (Gambar, Icon, Logo)
├── 📂 src/
│   ├── 📂 app/            # Next.js App Router
│   │   ├── (admin)/       # Halaman khusus Admin (Protected Routes)
│   │   ├── (public)/      # Halaman Publik
│   │   └── api/           # API Endpoints
│   ├── 📂 components/     # Komponen UI Modular
│   │   ├── layout/        # Navbar, Footer, Sidebar
│   │   └── ui/            # Reusable UI Elements (Button, Card, Input)
│   └── 📂 lib/            # Utilitas & Konfigurasi (Supabase Client)
└── ...
```

---

## 🚀 Memulai Pengembangan (Local Development)

Ikuti langkah ini untuk menjalankan proyek di komputer lokal Anda:

### 1. Clone Repository
```bash
git clone https://github.com/muhammadfahmifaisal014/hmi-cabang-garut.git
cd hmicabanggarut
```

### 2. Instal Dependencies
Pastikan Node.js sudah terinstal.
```bash
npm install
```

### 3. Konfigurasi Environment
Buat file `.env.local` di root folder dan isi dengan kredensial Supabase Anda:
```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 4. Jalankan Server
```bash
npm run dev
```
Buka [http://localhost:3000](http://localhost:3000) di browser Anda.

---

## 🤝 Kontribusi

Kami sangat terbuka untuk kontribusi! Jika Anda ingin membantu mengembangkan platform ini:

1.  **Fork** repository ini.
2.  Buat **Branch** baru untuk fitur Anda (`git checkout -b fitur-baru`).
3.  **Commit** perubahan Anda (`git commit -m 'Menambahkan fitur baru'`).
4.  **Push** ke branch Anda (`git push origin fitur-baru`).
5.  Buat **Pull Request** di GitHub.

---

## 📜 Lisensi

Hak Cipta © 2025 **HMI Cabang Garut**. Semua Hak Dilindungi.

---

<div align="center">
  <p>Dibuat dengan 💚 untuk Yakusa (Yakin Usaha Sampai)</p>
</div>
