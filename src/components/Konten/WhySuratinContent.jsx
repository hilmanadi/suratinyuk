import {createSignal,createEffect,} from "solid-js"
import NavbarContent from "../MainPage/NavbarContent"
import ContentPatterns from "./ContentPattern"

const WhySuratinContent = () => {
    return(
        <>
            <NavbarContent/>
            <ContentPatterns
                fromParentType="whysuratin"
                fromParentTitle="Kenapa Harus Memakai Surat-in Yuk!"
                fromParentContent="Pada aplikasi Surat-in Yuk! terdapat beberapa keunggulan seperti, tidak ada database yang dipakai pada aplikasi website ini automatis tidak ada data anda yang disimpan pada aplikasi website ini, kedua terdapat tanda tangan digital pada aplikasi pembuatan surat ini, proses cetak dapat memilih langsung ke printer atau pdf seusai keinginan pengguna."
            />
            
        </>
    )
}

export default WhySuratinContent