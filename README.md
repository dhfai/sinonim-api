# Sinonim API

Sinonim API adalah layanan RESTful yang memungkinkan pengguna untuk mencari sinonim kata dalam bahasa Indonesia. API ini dibangun menggunakan NestJS dan TypeORM, dengan koneksi ke database MySQL.

## Fitur

- **Lihat Semua Sinonim**: Melihat daftar semua sinonim yang tersedia.
- **Cari Sinonim**: Mengambil sinonim untuk kata tertentu.


## Prerequisites

Sebelum memulai, pastikan Anda memiliki:

- [Node.js](https://nodejs.org) (versi LTS terbaru)
- [MySQL](https://www.mysql.com) (atau MariaDB)

## Instalasi

1. **Clone Repository**

   ```bash
   git clone https://github.com/dhfai/sinonim-api.git
   cd sinonim-api
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Konfigurasi Environment**

   Salin file `.env.example` menjadi `.env` dan sesuaikan dengan konfigurasi database Anda:

   ```bash
   cp .env.example .env
   ```

   Edit file `.env`:

   ```env
   DB_HOST=localhost
   DB_PORT=3306
   DB_USERNAME=root
   DB_PASSWORD=yourpassword
   DB_NAME=sinonim_db
   ```

4. **Jalankan Aplikasi**

   ```bash
   npm run start
   ```

   Aplikasi akan berjalan di [http://localhost:3000](http://localhost:3000).

## API Endpoint

### 1. **Get All Sinonim**

   - **URL**: `/sinonim`
   - **Method**: `GET`
   - **Response**:

     ```json
     [
       {
         "id": 1,
         "kata": "mengaras",
         "tag": "v",
         "sinonim": ["hingga ke", "mencapai", "mencecah", "menjejak", "menyentuh", "sampai ke"]
       },
       ...
     ]
     ```

### 2. **Get Sinonim By Kata**

   - **URL**: `/sinonim/kata/:kata` (contoh: `/sinonim/kata/mengaras`)
   - **Method**: `GET`
   - **Response**:

     ```json
     {
       "id": 1,
       "kata": "mengaras",
       "tag": "v",
       "sinonim": "hingga ke, mencapai, mencecah, menjejak, menyentuh, sampai ke"
      }
      ```

### 3. **Get Sinonim Tertentu**

   - **URL**: `/sinonim/spesfik/:sinonim` (contoh: `/sinonim/spesifik/mencapai`)
   - **Method**: `GET`
   - **Response**:

     ```json
      {
        "id": 1,
        "kata": "mengaras",
        "tag": "",
        "sinonim": "hingga ke, mencapai, mencecah, menjejak, menyentuh, sampai ke"
      },
      {
        "id": 4896,
        "kata": "mendekat",
        "tag": "",
        "sinonim": "memepet, melekati, merapat, mencapai, mendatangi, menjelang"
      },
      ...
     ```

## Dokumentasi API

Untuk dokumentasi lebih lanjut dan penggunaan API, kunjungi [http://localhost:8890/](http://localhost:8890/) setelah menjalankan aplikasi.


## Contributing

Jika Anda ingin berkontribusi pada proyek ini, harap baca [CONTRIBUTING.md](CONTRIBUTING.md) untuk panduan.

## Lisensi

Distributed under the MIT License. See [LICENSE](LICENSE) for more information.

## Kontak

- **Nama**: [DHIA DHAIFULLAH]
- **Email**: [105841108621@student.unismuh.ac.id]
- **GitHub**: [https://github.com/dhfai](https://github.com/dhfai)