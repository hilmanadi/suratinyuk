import NavbarContent from "../MainPage/NavbarContent"
import ContentPatterns from "./ContentPattern"
const WhatSuratinContent = () => {
    return(
        <>
            <NavbarContent/>
            <ContentPatterns 
                fromParentType={"whatsuratincontent"} 
                fromParentTitle={"Apa Sih Aplikasi Surat-in Yuk! ?"} 
                fromParentContent={"Aplikasi Surat-in Yuk! merupakan website yang digunakan untuk keperluan surat menyurat dalam kegiatan sehari hari, seperti contoh pada dunia kerja terdapat Surat ketika pekerja sedang sakit / izin, pada persekolahan terdapat Surat Izin Sakit atau Izin tidak Masuk sekolah"}
            />
            {/* <div className="container ">
                <div className="columns">
                    <div className="column is-full is-flex is-align-items-center is-justify-content-center">
                        <figure class="image is-128x128">
                            <img src="/suratinyuk.png"/>
                        </figure>
                    </div>
                </div>
                <div className="columns">
                    <div className="column is-full is-flex is-align-items-center is-justify-content-center">
                        <h3 className="title is-3">Selamat Datang</h3>
                    </div>
                </div>
                <div className="columns">
                    <div className="column is-full is-flex is-align-items-center is-justify-content-center">
                        <h4 className="title is-4">Di Aplikasi Surat-in Yuk!</h4>
                    </div>
                </div>
                <div className="columns p-3">
                    <div className="column">
                        <h5 className="title is-5">Apa Sih Aplikasi Surat-in Yuk! ?</h5>
                        <p>Aplikasi Surat-in Yuk! merupakan website yang digunakan untuk keperluan surat menyurat dalam kegiatan sehari hari, seperti contoh pada dunia kerja terdapat Surat ketika pekerja sedang sakit / izin, pada persekolahan terdapat Surat Izin Sakit atau Izin tidak Masuk sekolah</p>
                    </div>
                </div>
            </div> */}
        </>
    )
}

export default WhatSuratinContent