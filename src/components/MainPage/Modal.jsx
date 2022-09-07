import {createSignal,createEffect,Show} from "solid-js";

let Modal = (props) => {
    let signaturepads;
    let [isActive,setIsActive] = createSignal(false)
    let [notelpPengguna,setNoTelpPengguna] = createSignal(0)
    let [umurPengguna,setUmurPengguna] = createSignal(0)
    let [modalType,setModalType] = createSignal('')
    let [namaPengguna,setNamaPengguna] = createSignal('')
    let [tempatLahir,setTempatLahir] = createSignal('')
    let [pendidikanTerakhir,setPendidikanTerakhir] = createSignal('')
    let [jurusanPengguna,setJurusanPengguna] = createSignal('')
    let [universitasPengguna,setUniversitasPengguna] = createSignal('')
    let [emailPengguna,setEmailPengguna] = createSignal('')
    let [alamatPengguna,setAlamatPengguna] = createSignal('')
    let [namaPerusahaan,setNamaPerusahaan] = createSignal('')
    let [kotaPerusahaan,setKotaPerusahaan] = createSignal('')
    let [asalLowongan,setAsalLowongan] = createSignal('')
    let [posisiDilamar,setPosisiDilamar] = createSignal('')
    let [tanggalLahir,setTanggalLahir] = createSignal('')
    let [tanggalPembuatan,setTanggalPembuatan] = createSignal('')
    let [kotaPembuatan,setKotaPembuatan] = createSignal ('')

    let getTanggalDetail = (data,tag) => {
        let bulan = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"]
        let datee = new Date(data)
        let month = datee.getMonth()
        let tanggal = datee.getDate()
        let bulanfix = bulan[month]
        let year = datee.getFullYear()
        let newdata = tanggal + ' '+bulanfix+' '+year
        if(tag=='lahir'){
            setTanggalLahir(newdata)
        }else{
            setTanggalPembuatan(newdata)
        }
    }
    
    let lamaranKerja = async () => {
        let neew = signaturepads.toDataURL('image/png')
        await fetch('../src/components/Template/templatelamarankerja.html')
        .then(response=>{
            return response.text()
        })
        .then(respdata=>{
            let newdoc = respdata
            .replaceAll('{{nama_pengguna}}',namaPengguna())
            .replaceAll('{{tempat_lahir}}',tempatLahir())
            .replaceAll('{{umur}}',umurPengguna())
            .replaceAll('{{pendidikan}}',pendidikanTerakhir())
            .replaceAll('{{jurusan}}',jurusanPengguna())
            .replaceAll('{{universitas}}',universitasPengguna())
            .replaceAll('{{no_telp}}',notelpPengguna())
            .replaceAll('{{email}}',emailPengguna())
            .replaceAll('{{alamat}}',alamatPengguna())
            .replaceAll('{{kota_input}}',kotaPerusahaan())
            .replaceAll('{{nama_perusahaan}}',namaPerusahaan())
            .replaceAll('{{alamat}}',alamatPengguna())
            .replaceAll('{{lowongan}}',asalLowongan())
            .replaceAll('{{bagian_dilamar}}',posisiDilamar())
            .replaceAll('{{tanda_tangan}}',neew)
            .replaceAll('{{tgl_lahir}}',tanggalLahir())
            .replaceAll('{{tanggal_dibuat}}',tanggalPembuatan())
            .replaceAll('{{kota_pembuatan_surat}}',kotaPembuatan())

            let w = window.open()
            w.document.write(newdoc)
            setTimeout(function(){
                w.print()
                w.close()    
                props.fromChild(false)
            },500)
        })
    }

    let closeModal = () => {
       props.fromChild(false)
    }

    let cekIt = () => {
        console.log(props.fromParentType)
    }

    createEffect(()=>{
        if(props.fromParent){
            if(signaturepads==''|| signaturepads==null || signaturepads==undefined){
                console.log('skipped')
            }else{
                let signaturePad = new SignaturePad(signaturepads,{
                    backgroundColor: 'rgba(255, 255, 255, 0)',
                    penColor: 'rgb(0, 0, 0)'
                });
            }
        }
        setModalType(props.fromParentType)
        setIsActive(props.fromParent)
    })

    return (
        <div className={`modal ${isActive() ? "is-active" : ""}`}>
            <div class="modal-background "></div>
            <div class="modal-card">
                <header class="modal-card-head">
                    <p class="modal-card-title">{props.fromParentText}</p>
                    <button class="delete" aria-label="close" onClick={()=>closeModal()}></button>
                </header>
            <section class="modal-card-body">
                <Show when={modalType() == 'lamarkerja'}>
                    <div className="columns">
                        <div className="column is-flex is-align-items-center is-justify-content-center has-text-weight-bold">
                            DATA DIRI
                        </div>
                    </div>
                    <div className="columns">
                        <div className="column is-3 is-flex is-align-items-center">
                            Nama Anda
                        </div>
                        <div className="column is-flex is-align-items-center is-justify-content-center">
                            <input type="text"  className="input" onChange={(e)=>setNamaPengguna(e.target.value)}/>
                        </div>
                    </div>
                    <div className="columns">
                        <div className="column is-3 is-flex is-align-items-center">   
                            Tempat Lahir
                        </div>
                        <div className="column is-flex is-align-items-center is-justify-content-center">
                            <input type="text"  className="input" onChange={(e)=>setTempatLahir(e.target.value)}/>
                        </div>
                    </div>
                    <div className="columns">
                        <div className="column is-3 is-flex is-align-items-center">   
                            Tanggal Lahir
                        </div>
                        <div className="column is-flex is-align-items-center is-justify-content-center">
                            <input type="date"  className="input" onChange={(e)=>getTanggalDetail(e.target.value,'lahir')}/>
                        </div>
                    </div>
                    <div className="columns">
                        <div className="column is-3 is-flex is-align-items-center">
                            Umur Anda
                        </div>
                        <div className="column is-flex is-align-items-center is-justify-content-center">
                            <input type="number"  className="input" onChange={(e)=>setUmurPengguna(e.target.value)}/>
                        </div>
                    </div>
                    <div className="columns">
                        <div className="column is-3 is-flex is-align-items-center">
                            Pendidikan Terakhir
                        </div>
                        <div className="column is-flex is-align-items-center is-justify-content-center">
                            <input type="text"  className="input" onChange={(e)=>setPendidikanTerakhir(e.target.value)}/>
                        </div>
                    </div>
                    <div className="columns">
                        <div className="column is-3 is-flex is-align-items-center">
                            Jurusan
                        </div>
                        <div className="column is-flex is-align-items-center is-justify-content-center">
                            <input type="text"  className="input" onChange={(e)=>setJurusanPengguna(e.target.value)}/>
                        </div>
                    </div>
                    <div className="columns">
                        <div className="column is-3 is-flex is-align-items-center">
                            Universitas
                        </div>
                        <div className="column is-flex is-align-items-center is-justify-content-center">
                            <input type="text"  className="input" onChange={(e)=>setUniversitasPengguna(e.target.value)}/>
                        </div>
                    </div>
                    <div className="columns">
                        <div className="column is-3 is-flex is-align-items-center">
                            No Telp
                        </div>
                        <div className="column is-flex is-align-items-center is-justify-content-center">
                            <input type="number"  className="input" onChange={(e)=>setNoTelpPengguna(e.target.value)}/>
                        </div>
                    </div>
                    <div className="columns">
                        <div className="column is-3 is-flex is-align-items-center">
                            Email
                        </div>
                        <div className="column is-flex is-align-items-center is-justify-content-center">
                            <input type="email"  className="input" onChange={(e)=>setEmailPengguna(e.target.value)}/>
                        </div>
                    </div>
                    <div className="columns">
                        <div className="column is-3 is-flex is-align-items-center">
                            Alamat
                        </div>
                        <div className="column is-flex is-align-items-center is-justify-content-center">
                            <textarea className="textarea" onChange={(e)=>setAlamatPengguna(e.target.value)}></textarea>
                        </div>
                    </div>
                    <div className="columns">
                        <div className="column is-flex is-align-items-center is-justify-content-center has-text-weight-bold">
                            DATA PERUSAHAAN
                        </div>
                    </div>
                    <div className="columns">
                        <div className="column is-3 is-flex is-align-items-center">
                            Nama Perusahaan
                        </div>
                        <div className="column is-flex is-align-items-center is-justify-content-center">
                            <input type="text"  className="input" onChange={(e)=>setNamaPerusahaan(e.target.value)}/>
                        </div>
                    </div>
                    <div className="columns">
                        <div className="column is-3 is-flex is-align-items-center">
                            Kota Perusahaan
                        </div>
                        <div className="column is-flex is-align-items-center is-justify-content-center">
                            <input type="text"  className="input" onChange={(e)=>setKotaPerusahaan(e.target.value)}/>
                        </div>
                    </div>
                    <div className="columns">
                        <div className="column is-3 is-flex is-align-items-center">
                            Asal Lowongan
                        </div>
                        <div className="column is-flex is-align-items-center is-justify-content-center">
                            <input type="text"  className="input" onChange={(e)=>setAsalLowongan(e.target.value)}/>
                        </div>
                    </div>
                    <div className="columns">
                        <div className="column is-3 is-flex is-align-items-center">
                            Posisi
                        </div>
                        <div className="column is-flex is-align-items-center is-justify-content-center">
                            <input type="text"  className="input" onChange={(e)=>setPosisiDilamar(e.target.value)}/>
                        </div>
                    </div>
                </Show>
                <div className="columns">
                    <div className="column is-flex is-align-items-center is-justify-content-center has-text-weight-bold">
                    DATA PEMBUATAN SURAT
                    </div>
                </div>
                <div className="columns">
                    <div className="column is-3 is-flex is-align-items-center">
                        Kota Pembuatan Surat
                    </div>
                    <div className="column is-flex is-align-items-center is-justify-content-center">
                        <input type="text"  className="input" onChange={(e)=>setKotaPembuatan(e.target.value)}/>
                    </div>
                </div>
                <div className="columns">
                    <div className="column is-3 is-flex is-align-items-center">
                        Tanggal Pembuatan Surat
                    </div>
                    <div className="column is-flex is-align-items-center is-justify-content-center">
                        <input type="date"  className="input" onChange={(e)=>getTanggalDetail(e.target.value,'pembuatan')}/>
                    </div>
                </div>
                <div className="columns">
                    <div className="column is-3 is-flex is-align-items-center">
                        Tanda Tangan
                    </div>
                    <div className="column is-flex is-align-items-center is-justify-content-center" >
                        <canvas ref={signaturepads} id="cok" style={{'border':'thin solid lightgrey','border-radius':'5px'}}></canvas>
                    </div>
                </div>
            </section>
            <footer class="modal-card-foot">
           
            <Show
                when={modalType() == 'lamarkerja'}
            >
                <button class="button is-primary" onClick={()=>lamaranKerja()}>Cetak Lamaran Kerja</button>
            </Show>
            <Show
                when={modalType() == 'izinsakit'}
            >
                <button class="button is-primary" onClick={()=>suratSakit()}>Cetak Surat Sakit </button>
            </Show>
                {/* <button className="button is-primary" onClick={()=>cekIt()}>asa</button> */}
                <button class="button" onClick={()=>closeModal()}>Cancel</button>
            </footer>
            </div>
        </div>
    )
}

export default Modal;