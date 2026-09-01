# MYWATCH — Elegance on Your Wrist

**MYWATCH** adalah aplikasi web showcase dan katalog jam tangan pintar (*smartwatch concept*) yang mengusung prinsip estetika minimalis Jepang. Dibangun dengan kombinasi Laravel, Inertia.js, React, Tailwind CSS, dan Framer Motion untuk menghadirkan pengalaman antarmuka yang bersih, cepat, dan responsif.

---

## 🌟 Fitur Utama

- **Minimalist Aesthetic Design**: Desain modern bernuansa monokrom dengan tipografi presisi.
- **Dynamic Collection & Product Details**: Menampilkan daftar produk dari database dengan halaman detail dinamis (`/watch/{slug}`).
- **Interactive Hero Slider**: Animasi pergantian foto latar belakang otomatis dan transisi halus menggunakan Framer Motion.
- **Persistent Dark Mode**: Pengaturan tema Terang/Gelap yang tersimpan secara lokal (`localStorage`) dan sinkron dengan preferensi sistem OS.
- **Fully Responsive Navigation**: Navigasi desktop dan mobile drawer menu dengan animasi transisi yang mulus.
- **Creator & Design Vision Page**: Halaman *About* yang menceritakan visi desain serta profil pengembang.

---

## 🛠️ Tech Stack

- **Backend**: [Laravel 10](https://laravel.com/) (PHP)
- **Frontend**: [React 18](https://react.dev/) via [Inertia.js](https://inertiajs.com/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animation**: [Framer Motion](https://www.framer.com/motion/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Database**: MySQL / SQLite (Eloquent ORM & Seeders)

---

## 🚀 Panduan Instalasi & Menjalankan Project

### Prasyarat
- PHP >= 8.1
- Composer
- Node.js & NPM
- MySQL / MariaDB (atau SQLite)

### Langkah Instalasi

1. **Clone repositori**
   ```bash
   git clone https://github.com/Novazeb/mywatch.git
   cd mywatch
   ```

2. **Install dependensi PHP**
   ```bash
   composer install
   ```

3. **Install dependensi JavaScript**
   ```bash
   npm install
   ```

4. **Konfigurasi Environment**
   ```bash
   cp .env.example .env
   php artisan key:generate
   ```
   *Sesuaikan konfigurasi database (`DB_DATABASE`, `DB_USERNAME`, `DB_PASSWORD`) pada file `.env`.*

5. **Jalankan Migrasi & Database Seeder**
   ```bash
   php artisan migrate --seed
   ```

6. **Jalankan Server Pengembangan**
   - Terminal 1 (Laravel backend):
     ```bash
     php artisan serve
     ```
   - Terminal 2 (Vite frontend):
     ```bash
     npm run dev
     ```

7. Buka browser di `http://localhost:8000` atau URL virtual host Laragon Anda.

---

## 📁 Struktur Direktori Utama

```
mywatch/
├── app/
│   ├── Models/
│   │   └── Watch.php              # Model Eloquent untuk produk jam
├── database/
│   ├── migrations/                # Skema tabel database
│   └── seeders/WatchSeeder.php    # Data awal katalog jam tangan
├── resources/
│   ├── js/
│   │   ├── Components/            # Komponen modular (Footer, Buttons, dll.)
│   │   ├── Layouts/               # MainLayout dengan dark mode & navbar
│   │   └── Pages/                 # Halaman React (Welcome, WatchDetail, About, Products)
│   └── css/app.css                # Konfigurasi Tailwind & custom scrollbar
└── routes/
    └── web.php                    # Rute Inertia web
```

---

## 👤 Pengembang

**Nova Zebua (S.Kom)**
- Instagram: [@zebua_1011](https://www.instagram.com/zebua_1011)
- WhatsApp: [+62 812-1893-9696](https://wa.me/6281218939696)
- GitHub: [Novazeb](https://github.com/Novazeb)

---

## 📄 Lisensi

Project ini dirilis di bawah lisensi [MIT License](LICENSE).
