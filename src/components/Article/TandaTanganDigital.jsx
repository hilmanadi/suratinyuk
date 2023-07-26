import NavbarContent from "../MainPage/NavbarContent"
import Loading from "../Loading/Loading"

const TandaTanganDigital = () => {
    return(
        <>
            <Suspense fallback={<Loading/>}>
                <NavbarContent fromParentType="Artikel"></NavbarContent>
                <div className="container p-3">
                    <h1 className="title is-1">Tanda Tangan Digital</h1>
                    <p className="mt-3">
                        Tanda tangan elektronik, juga dikenal sebagai tanda tangan digital, adalah metode yang digunakan untuk menandai atau mengesahkan dokumen, pesan, atau transaksi secara elektronik. Tanda tangan ini berbeda dengan tanda tangan fisik yang biasanya dilakukan dengan pena atau pensil di atas kertas. Tanda tangan elektronik digunakan dalam lingkungan digital untuk memberikan keabsahan dan otoritas pada dokumen atau pesan yang ditandatangani.
                    </p>
                    <p className="mt-3">
                        Proses tanda tangan elektronik melibatkan penggunaan teknologi dan kriptografi untuk memastikan integritas, keaslian, dan non-repudiasi (artinya pengguna yang telah menandatangani tidak dapat menyangkal tanda tangan itu sendiri).
                    </p>
                    <p className="mt-3">
                        Berikut adalah beberapa cara umum untuk menerapkan tanda tangan elektronik:
                    </p>
                    <ol>
                        <li>
                            <p className="has-text-weight-bold">
                                Tanda Tangan Digital
                            </p>
                            <p>
                                Ini melibatkan penggunaan teknologi kriptografi, seperti kunci publik dan kunci pribadi, untuk membuat tanda tangan unik yang terhubung dengan dokumen atau pesan. Tanda tangan digital ini membuktikan keaslian dokumen dan dapat diverifikasi oleh pihak ketiga.
                            </p>
                        </li>
                        <li>
                            <p className="has-text-weight-bold">
                                PIN atau Kata Sandi
                            </p>
                            <p>
                                Dalam beberapa kasus, tanda tangan elektronik dapat berupa PIN atau kata sandi yang hanya diketahui oleh pemilik akun atau pengguna yang sah.
                            </p>
                        </li>
                        <li>
                            <p className="has-text-weight-bold">
                                Tanda Tangan Berbasis Gambar
                            </p>
                            <p>
                                Tanda tangan elektronik juga bisa berupa gambar tanda tangan fisik yang diimpor ke dalam dokumen elektronik.
                            </p>
                        </li>
                        <li>
                            <p className="has-text-weight-bold">
                                Biometrik
                            </p>
                            <p>
                            Penggunaan tanda tangan berbasis biometrik, seperti tanda tangan dengan stylus pada perangkat layar sentuh atau pengenalan sidik jari, juga dapat dianggap sebagai tanda tangan elektronik.
                            </p>
                        </li>
                    </ol>
                    <p className="mt-3">
                        Tanda tangan elektronik telah banyak digunakan dalam berbagai aspek kehidupan modern, termasuk bisnis, keuangan, perjanjian kontrak, dan komunikasi online. Legalitas tanda tangan elektronik bervariasi berdasarkan negara dan yurisdiksi, dengan banyak negara yang mengatur dan mengakui tanda tangan elektronik melalui undang-undang dan peraturan khusus.
                    </p>
                </div>
                </Suspense>
        </>
    )
}

export default TandaTanganDigital