import {lazy} from "solid-js"
import NavbarContent from "../MainPage/NavbarContent"
import Loading from "../Loading/Loading"
const ContentPatterns = lazy(async () => {
    return import("./ContentPattern");
})
const WhatSuratinContent = () => {
    return(
        <>
            <Suspense fallback={<Loading/>}>
                <NavbarContent/>
                <ContentPatterns 
                    fromParentType={"whatsuratincontent"} 
                    fromParentTitle={"Apa Sih Aplikasi Surat-in Yuk! ?"} 
                    fromParentContent={"Aplikasi Surat-in Yuk! merupakan website yang digunakan untuk keperluan surat menyurat dalam kegiatan sehari hari, seperti contoh pada dunia kerja terdapat Surat ketika pekerja sedang sakit / izin, pada persekolahan terdapat Surat Izin Sakit atau Izin tidak Masuk sekolah"}
                />
            </Suspense>
        </>
    )
}

export default WhatSuratinContent