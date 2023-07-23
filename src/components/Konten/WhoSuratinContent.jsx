import NavbarContent from "../MainPage/NavbarContent"
import ContentPatterns from "./ContentPattern"
const WhenSuratinContent = () => {
    return(
        <>
            <NavbarContent/>
            <ContentPatterns 
                fromParentType="whosuratin" 
                fromParentTitle="Siapa Pengguna Surat-in Yuk!" 
                fromParentContent="Untuk saat ini aplikasi Surat-in Yuk! dapat digunakan untuk karyawan dan orang tua sekolah, namun kedepannya lebih banyak lagi pilihan surat yang akan hadir di aplikasi website ini, untuk saran surat apa yang harus di suguhkan kepada anda, anda dapat mengirim email yang tertera pada menu About pada aplikasi website Surat-in Yuk!"
            />
        </>
    )
}

export default WhenSuratinContent