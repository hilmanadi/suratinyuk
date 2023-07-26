import { createEffect,createSignal } from "solid-js";
import {A} from "@solidjs/router";

let Content = () =>{
    return(
        <>
        <div className="container p-3">
            <div className="columns">
                <div className="column p-3 p-3 is-flex is-align-items-center is-justify-content-center">
                    <h1 className="title is-1">Daftar Konten</h1>
                </div>
            </div>
            <div className="columns">
                <div className="column is-full p-3 is-flex is-align-items-center is-justify-content-center">
                    <A href="/whatsuratin">Apa Itu Surat-in Yuk?</A>
                </div>
            </div>
            <div className="columns">
                <div className="column is-full p-3 is-flex is-align-items-center is-justify-content-center">
                    <A href="/whysuratin">Kenapa Harus Surat-in Yuk?</A>    
                </div>
            </div>
            <div className="columns">
                <div className="column is-full p-3 is-flex is-align-items-center is-justify-content-center">
                    <A href="/whensuratin">Kapan Harus Menggunakan Surat-in Yuk?</A>
                </div>
            </div>
            <div className="columns">
                <div className="column is-full p-3 is-flex is-align-items-center is-justify-content-center">
                    <A href="/whosuratin">Siapa Pengguna Surat-in Yuk?</A>
                </div>
            </div>
        </div>
        </>
        // <div className="columns">
        //     <div className="column is-full p-3 is-flex is-align-items-center is-justify-content-center">
        //         <div className="content p-3">
        //         <h1 className="title">Surat</h1>
        //             &emsp;&emsp;&emsp; Surat adalah bentuk komunikasi tertulis yang dikirim melalui pos atau jasa kurir untuk menyampaikan pesan, informasi, atau dokumen antara pihak yang terlibat. Surat dapat berupa surat resmi, surat pribadi, surat bisnis, atau surat promosi, dan dapat ditujukan kepada individu, perusahaan, atau institusi.
        //             Seiring dengan kemajuan teknologi, komunikasi elektronik seperti email, pesan instan, dan media sosial telah mengambil peran yang dominan dalam berkomunikasi secara cepat dan efisien. Namun, surat tetap memiliki nilai dan kegunaannya yang khas dalam beberapa konteks, antara lain:
        //             Keaslian dan Kepercayaan:
        //             Surat fisik memberikan bukti fisik yang dapat dipercaya atas pesan atau dokumen yang dikirimkan. Surat dapat memberikan keyakinan kepada penerima bahwa pesan tersebut memang berasal dari sumber yang sah dan tidak dimanipulasi. Dalam konteks bisnis, surat juga dapat memberikan legitimasi yang kuat ketika berurusan dengan pihak eksternal atau dalam pengajuan dokumen resmi.
        //             Sentuhan Personal:
        //             Surat pribadi atau surat dengan tangan dapat memberikan sentuhan pribadi yang sulit dicapai melalui komunikasi elektronik. Melalui surat, seseorang dapat mengekspresikan emosi, perasaan, atau perhatian secara lebih mendalam. Hal ini terutama berlaku dalam situasi seperti pernikahan, ucapan belasungkawa, atau ungkapan cinta. Surat pribadi ini dapat dijaga sebagai kenang-kenangan dan mengandung nilai sentimental yang tinggi.
        //             Kedalaman dan Refleksi:
        //             Surat memungkinkan penulis untuk merenung, merencanakan, dan menyampaikan pesan secara lebih terstruktur. Dalam surat, seseorang memiliki waktu untuk berpikir lebih dalam tentang topik yang akan ditulis, merangkai kata-kata dengan hati-hati, dan menyampaikan argumen atau ide dengan lebih detail. Hal ini memungkinkan penulis dan penerima surat untuk terlibat dalam komunikasi yang lebih dalam dan bermakna.
        //             Kepentingan Historis dan Budaya:
        //             Surat telah menjadi bagian penting dalam sejarah manusia. Surat-surat bersejarah dari tokoh terkenal seperti penulis, politisi, atau tokoh agama memberikan pemahaman yang mendalam tentang periode waktu dan kehidupan mereka. Selain itu, dalam beberapa budaya, tradisi menulis surat atau bertukar surat masih dijaga sebagai bagian dari warisan budaya dan nilai-nilai sosial.
        //             Meskipun surat memiliki nilai dan kegunaan yang khas, perlu diingat bahwa dalam situasi yang membutuhkan komunikasi cepat dan efisien, metode komunikasi elektronik sering menjadi pilihan yang lebih praktis. Surat pun bisa dikombinasikan dengan komunikasi digital untuk mencapai efek yang optimal dalam berbagai konteks komunikasi.

        //         <h2>Macam Macam Surat</h2>
        //         <p>Ada berbagai macam surat yang umum digunakan dalam berbagai situasi dan konteks. Berikut adalah beberapa contoh macam-macam surat yang sering digunakan:</p>

        //         <h3> Surat Resmi</h3>

        //         <li>Surat Permohonan</li>
        //         <li>Surat Undangan</li>
        //         <li>Surat Pemberitahuan</li>
        //         <li>Surat Pernyataan</li>
        //         <li>Surat Pengajuan</li>
                
        //         <h3>Surat Bisnis</h3>

        //         <li>Surat Penawaran</li>
        //         <li>Surat Pesanan</li>
        //         <li>Surat Kontrak</li>
        //         <li>Surat Permintaan Pembayaran</li>
        //         <li>Surat Perjanjian Kerjasama</li>
                
        //         <h3>Surat Pribadi</h3>

        //         <li>Surat Cinta</li>
        //         <li>Surat Ucapan Selamat</li>
        //         <li>Surat Permintaan Maaf</li>
        //         <li>Surat Undangan Pribadi</li>
        //         <li>Surat Pengakuan</li>
        //         <h3>Surat Panggilan</h3>

        //         <li>Surat Panggilan Sidang</li>
        //         <li>Surat Panggilan Tes atau Wawancara</li>
        //         <li>Surat Panggilan Orang Tua dari Sekolah</li>
        //         <h3>Surat Izin</h3>

        //         <li>Surat Izin Tidak Masuk Sekolah/Kerja</li>
        //         <li>Surat Izin Cuti</li>
        //         <li>Surat Izin Mengemudi</li>
        //         <li>Surat Izin Memasang Iklan</li>
        //         <h3>Surat Pengunduran Diri</h3>

        //         <li>Surat Pengunduran Diri dari Pekerjaan</li>
        //         <li>Surat Pengunduran Diri dari Organisasi atau Klub</li>
        //         <h3>Surat Pengaduan</h3>

        //         <li>Surat Pengaduan kepada Perusahaan/Instansi</li>
        //         <li>Surat Pengaduan kepada Penyedia Layanan</li>
        //         <h3>Surat Riwayat Hidup (Curriculum Vitae/CV)</h3>

        //         <li>Surat Lamaran Kerja</li>
        //         <li>Surat Pengajuan Beasiswa</li>
        //         <li>Surat Pengajuan Pembiayaan</li>
        //         <h3>Surat Perjanjian</h3>

        //         <li>Surat Perjanjian Jual Beli</li>
        //         <li>Surat Perjanjian Sewa Menyewa</li>
        //         <li>Surat Perjanjian Kerjasama Bisnis</li>
        //         <h3>Surat Promosi</h3>

        //         <li>Surat Penawaran Diskon</li>
        //         <li>Surat Pemberitahuan Promosi Produk/Event</li>
        //         <p>Itu hanyalah beberapa contoh umum dari berbagai macam surat yang ada. Penting untuk memahami konteks dan tujuan surat untuk menghasilkan komunikasi yang efektif.    </p>
        //         </div>
                
        //     </div>
        // </div>
    )
}
export default Content