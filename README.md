# HMI Cabang Garut

![HMI Cabang Garut](public/img/logohmiputih.png)

**Website Resmi Himpunan Mahasiswa Islam Cabang Garut**

Platform digital modern yang dirancang untuk menjadi pusat informasi, administrasi, dan publikasi kegiatan HMI Cabang Garut. Dibangun menggunakan teknologi web terkini untuk performa, estetika, dan kemudahan penggunaan.

---

## 🚀 Fitur Utama

### 🌍 Halaman Publik
- **Beranda Interaktif**: Menampilkan highlight berita terkini, agenda kegiatan, dan profil singkat organisasi.
- **Profil Organisasi**: Informasi lengkap mengenai sejarah, visi misi, struktur kepengurusan, dan lembaga kekaryaan.
- **Pusat Informasi**: Terintegrasi dengan fitur **Berita**, **Event**, dan **Training** (LK 1, LK 2, dll).
- **Galeri Dokumentasi**: Dokumentasi visual kegiatan dengan tampilan modern (Lightbox).
- **Desain Responsif**: Tampilan yang optimal di berbagai perangkat (Desktop, Tablet, & Mobile).

### 🛠️ Admin Dashboard (CMS)
Sistem manajemen konten terpadu untuk pengurus:
- **Manajemen Berita**: Buat, edit, dan hapus artikel berita.
- **Manajemen Event & Training**: Kelola jadwal dan informasi kegiatan perkaderan.
- **Manajemen Pengurus**: Database struktur kepengurusan yang dinamis.
- **Manajemen LPP**: Kelola data Lembaga Pengembangan Profesi.
- **Autentikasi Aman**: Login area khusus administrator.

---

## 🛠️ Teknologi yang Digunakan

Proyek ini dibangun menggunakan **Modern Tech Stack** untuk menjamin kecepatan dan skalabilitas:

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Library UI**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Database & Auth**: [Supabase](https://supabase.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Deployment**: [Netlify](https://www.netlify.com/)

---

## 📂 Struktur Proyek

```bash
hmicabanggarut/
├── docs/               # Dokumentasi tambahan (Panduan Supabase)
├── public/             # Aset statis (Gambar, Icon)
├── src/
│   ├── app/            # App Router (Pages & Layouts)
│   │   ├── (admin)/    # Route Group untuk Admin Dashboard
│   │   ├── (public)/   # Route Group untuk Halaman Publik
│   │   └── api/        # API Routes (jika ada)
│   ├── components/     # Komponen UI Reusable
│   │   ├── layout/     # Navbar, Footer, Sidebar
│   │   └── ui/         # Button, Card, Input, dll
│   └── lib/            # Utilitas & Konfigurasi (Supabase Client)
└── ...
```

---

## 🚀 Cara Menjalankan (Local Development)

Ikuti langkah-langkah berikut untuk menjalankan proyek di komputer lokal Anda:

### 1. Prasyarat
Pastikan Anda telah menginstal:
- [Node.js](https://nodejs.org/) (versi terbaru disarankan)
- Git

### 2. Clone Repository
```bash
git clone https://github.com/MuhammadFahmiFaisal/hmicabanggarut.git
cd hmicabanggarut
```

### 3. Instal Dependencies
```bash
npm install
```

### 4. Konfigurasi Environment Variable
Buat file `.env.local` di direktori root dan tambahkan konfigurasi Supabase Anda:
```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 5. Jalankan Server Development
```bash
npm run dev
```
Buka [http://localhost:3000](http://localhost:3000) di browser Anda.

---

## 🤝 Kontribusi

Kontribusi sangat diterima! Jika Anda ingin memperbaiki bug atau menambahkan fitur baru:

1.  Fork repository ini.
2.  Buat branch fitur baru (`git checkout -b fitur-keren`).
3.  Commit perubahan Anda (`git commit -m 'Menambahkan fitur keren'`).
4.  Push ke branch tersebut (`git push origin fitur-keren`).
5.  Buat Pull Request.

---

## 📜 Lisensi

Hak Cipta © 2024-2025 **HMI Cabang Garut**.

Dibuat dengan 💚 untuk Yakusa.
