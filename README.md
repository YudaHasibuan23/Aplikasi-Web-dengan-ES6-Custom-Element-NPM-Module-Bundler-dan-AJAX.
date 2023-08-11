# Layar Bioskop

**Layar Bioskop** -  merupakan aplikasi yang menampilkan daftar film menggunakan API https://developers.themoviedb.org. Dibuat untuk memenuhi syarat kelulusan kelas [Belajar Fundamental Front-End Web Developer](https://www.dicoding.com/academies/163) di Dicoding Academy


<br clear="both">

<div align="center">
   
</div>

<br clear="both">

## Feature :

* **Menampilkan Daftar Film**,
Anda dapat melihat daftar film yang terhubung dengan API TMDB.

* **Cari Film**,
Jangan khawatir ketika ada banyak nya film yang tersedia dan anda ingin mencari film yang anda inginkan, anda cukup ketik keyworrd dari judul film tersebut di form cari yang sudah disediakan lalu klik tombol cari.

* **Responsibilitas Tampilan**,
Tampilan web app sudah responsif dari berbagai ukuran layar mulai dari mobile, tablet, laptop ataupun dekstop.

<br clear="both">

## Kriteria Submission :

- [x] Menggunakan standar _ES6 sintaks_ dalam menuliskan kode _JavaScript_ pada proyek yang dibuat.
- [x] Menerapkan _custom element_.
- [x] Menggunakan _Webpack_ sebagai module bundler (tahap produksi).
- [x] Memanfaatkan _Webpack_ sebagai _environment_ dalam pengembangan proyek (tahap _development_).
- [x] Memanfaatkan API dengan menggunakan konsep _AJAX_ dalam menampilkan data yang dinamis pada aplikasi yang dibuat.

<br clear="both">

## Built With
- [Webpack](https://webpack.js.org/)
- [jQuery](https://jquery.com/)
- [HTML](https://www.w3schools.com/html/)
- [Bootstrap](https://getbootstrap.com/)
- [JS](https://www.javascript.com/)

<br clear="both">

## Development vs Build Production

*Webpack config* untuk *development* dibuat agar dapat dengan cepat me-reload saat terjadi perubahan pada suatu file, sehingga tidak semua plugin, loader, dan fitur disertakan di dalam konfigurasi tersebut. Untuk melihat susunan konfigurasi yang digunakan, silahkan lihat tabel di bawah ini :

### Loader dan Plugin

| Loader/Plugin              | Development | Production |
| -------------------------- | :---------: | :--------: |
| `HtmlWebpackPlugin`        | ✔          | ✔          |
| `css-loader`               | ✔          | ✔          |
| `style-loader`             | ✔          | ❌          |
| `regenarator-runtime`      | ❌          | ✔          |
| `babel-loader`             | ❌          | ✔          |
| `bootstrap                 | ❌          | ✔          |
| `HtmlWebpackInjectPreload` | ❌          | ✔          |
| `jquery`                   | ❌          | ✔          |

<br clear="both">

## API List

This project uses several endpoints from TheMovieDB API. Here is the endpoint list :
|Description| Items|
|--|--|
| Index Page | [Upcoming Movies](https://developers.themoviedb.org/3/movies/get-upcoming), [Now Playing Movies](https://developers.themoviedb.org/3/movies/get-now-playing), [Top Rated Movies](https://developers.themoviedb.org/3/movies/get-top-rated-movies), [Movie Details](https://developers.themoviedb.org/3/movies/get-movie-details)|
|Details Page|[Movie Details](https://developers.themoviedb.org/3/movies/get-movie-details), [Movie Credits](https://developers.themoviedb.org/3/movies/get-movie-credits)|
|Browse Page|[Search Movie](https://developers.themoviedb.org/3/search/search-movies), [Upcoming Movies](https://developers.themoviedb.org/3/movies/get-upcoming), [Now Playing Movies](https://developers.themoviedb.org/3/movies/get-now-playing), [Top Rated Movies](https://developers.themoviedb.org/3/movies/get-top-rated-movies)|
|Movie Image| [TheMovieDB Image](https://developers.themoviedb.org/3/getting-started/images)

<br clear="both">

## Getting Started

*Untuk memulai, Install npm lalu jalankan beberapa perintah di bawah ini untuk memulainya, folder dist akan dibuat setelah itu.*

1. Clone this repository
   
   `git clone https://github.com/Ardywsptr/AWSMovies_Submission-Fundamental-Front-End-Web-Developer/.git`

    `cd AWSMovies_Submission-Fundamental-Front-End-Web-Developer`
   
2. Install NPM
   
   `npm install`
   
   > Pastikan koneksi internet anda stabil sehingga tidak ada resiko gagal install.

3. Build untuk distribusi production

   `npm run build`
   
4. Starting development server

   `npm run start-dev`

   > Untuk memastikan development berjalan dengan baik pastikan cache pada browser anda sudah dibersihkan.

<br clear="both">

## 📃 Keterangan

Repositori ini adalah submission dari Dicoding untuk kelas Belajar Fundamental Front-End Web Development. Kelas ini memiliki submission yang harus diselesaikan untuk mendapatkan sertifikat. Isi dari repositori ini merupakan bagian final yang mencakup kriteria yang dibutuhkan.

> **_PERINGATAN: Jadikan repo ini sebagai rujukan/referensi._**
>
> - Sesuai dengan terms of use di Dicoding, submission kelas Dicoding Academy haruslah hasil karya Anda sendiri.
>
> - Kode yang didapatkan dari sumber lain (website, buku, forum, GitHub, dan lain-lain) hanya digunakan sebagai referensi. Tingkat kesamaannya tidak boleh lebih dari 70%.

<br clear="both">
<br clear="both">

