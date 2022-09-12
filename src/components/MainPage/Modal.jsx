import {createSignal,createEffect,Show} from "solid-js";
import { toast } from 'bulma-toast'

let Modal = (props) => {
    let signaturepads
    let lamaranset
    let [listSuratLamaran,setListSuratLamaran] = createSignal([])
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
    let [jabatanPengguna,setJabatanPengguna] = createSignal('')
    let [tglAwalSakit,setTglAwalSakit] = createSignal('')
    let [tglAkhirSakit,setTglAkhirSakit] = createSignal('')
    let [tglAwalIzin,setTglAwalIzin] = createSignal('')
    let [tglAkhirIzin,setTglAkhirIzin] = createSignal('')
    let [tglPengunduranDiri,setTglPengunduranDiri] = createSignal('')
    let [alasanIzin,setAlasanIzin] = createSignal('')

    let toasted  = (pesan) => {
        return toast({
            message: pesan,
            type: 'is-danger',
            dismissible: true,
            pauseOnHover: true,
        })
    }

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
        }else if(tag=='awalsakit'){
            setTglAwalSakit(newdata)
        }else if(tag=='akhirsakit'){
            setTglAkhirSakit(newdata)
        }else if(tag=='awalizin'){
            setTglAwalIzin(newdata)
        }else if(tag=='akhirizin'){
            setTglAkhirIzin(newdata)
        }else if(tag=='resign'){
            setTglPengunduranDiri(newdata)
        }else{
            setTanggalPembuatan(newdata)
        }
    }
    
    let addBerkas = (data) => {
        setListSuratLamaran([...listSuratLamaran(),data])
        lamaranset.value = ''
    }

    let delBerkas = (data) => {
        let temp = [...listSuratLamaran()]
        temp.splice(data,1)
        setListSuratLamaran(temp)
    }
    
    let lamaranKerja = async () => {
        if(namaPengguna()==''){
            toasted('Kolom Nama Pengguna Wajib Diisi')
        }
        else if(tempatLahir()==''){
            toasted('Kolom Tempat LahirWajib Diisi')
        }
        else if(tanggalLahir()==''){
            toasted('Kolom Tanggal LahirWajib Diisi')
        }
        else if(umurPengguna()==0){
            toasted('Kolom UmurWajib Diisi')
        }
        else if(pendidikanTerakhir()==''){
            toasted('Kolom PendidikanWajib Diisi')
        }   
        else if(jurusanPengguna()==''){
            toasted('Kolom JurusanWajib Diisi')
        }
        else if(universitasPengguna()==''){
            toasted('Kolom UniversitasWajib Diisi')
        }
        else if(notelpPengguna()==0){
            toasted('Kolom No TelpWajib Diisi')
        }
        else if(emailPengguna()==''){
            toasted('Kolom EmailWajib Diisi')
        }
        else if(alamatPengguna()==''){
            toasted('Kolom Alamat PenggunaWajib Diisi')
        }
        else if(listSuratLamaran().length==0){
            toasted('Jumlah Berkas Lamaran Harus Lebih Dari 1')
        }
        else if(namaPerusahaan()==''){
            toasted('Nama Perusahaan  Wajib Diisi')
        }
        else if(kotaPerusahaan()==''){
            toasted('Kota Perusahaan Wajib Diisi')
        }
        else if(asalLowongan()==''){
            toasted('Sumber Lowongan Wajib Diisi')
        }
        else if(posisiDilamar()==''){
            toasted('Posisi Dilamar Wajib Diisi')
        }
        else if(kotaPembuatan()==''){
            toasted('Kota Pembuatan Surat Wajib Diisi')
        }
        else if(tanggalPembuatan()==''){
            toasted('Tanggal Pembuatan Surat Wajib Diisi')
        }
        else{
            let neew = signaturepads.toDataURL('image/png')
            await fetch('../src/components/Template/templatelamarankerja.html')
            .then(response=>{
                return response.text()
            })
            .then(respdata=>{
                let temp = ''
    
                for(let i=0;i<listSuratLamaran().length;i++){
                    temp += '<li>'+listSuratLamaran()[i]+'</li>'
                }
    
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
                .replaceAll('{{list_data}}',temp)
    
                let w = window.open()
                w.document.write(newdoc)
                setTimeout(function(){
                    w.print()
                    w.close()    
                    closeModal()
                },500)
            })
        }
    }
    
    let reSign = async () => {
        if(namaPengguna()==''){
            toasted('Kolom Nama Wajib Diisi')
        }
        else if(jabatanPengguna()==''){
            toasted('Kolom Jabatan Wajib Diisi')
        }
        else if(posisiDilamar()==''){
            toasted('Kolom Posisi Wajib Diisi')
        }
        else if(namaPerusahaan()==''){
            toasted('Kolom Perusahaan Wajib Diisi')
        }
        else if(tempatLahir()==''){
            toasted('Kolom Tanggal Lahir Wajib Diisi')
        }
        else if(tanggalLahir()==''){
            toasted('Tanggal Akhir Wajib Diisi')
        }
        else if(namaPerusahaan()==''){
            toasted('Kota Pembuatan Wajib Diisi')
        }else if(tglPengunduranDiri()==''){
            toasted('Tanggal Pengunduran Diri Wajib Diisi')
        }
        else if(kotaPembuatan()==''){
            toasted('Kota Pembuatan Surat Wajib Diisi')
        }
        else if(tanggalPembuatan()==''){
            toasted('Tanggal Pembuatan Surat Wajib Diisi')
        }
        else{
            let neew = signaturepads.toDataURL('image/png')
            await fetch('../src/components/Template/templatesuratresign.html')
            .then(response=>{
                return response.text()
            })
            .then(respdata=>{
                let newdoc = respdata
                .replaceAll('{{nama_pengguna}}',namaPengguna())
                .replaceAll('{{bagian_dilamar}}',posisiDilamar())
                .replaceAll('{{jabatan_pengguna}}',jabatanPengguna())
                .replaceAll('{{nama_perusahaan}}',namaPerusahaan())
                .replaceAll('{{tanggal_pengunduran}}',tglPengunduranDiri())
                .replaceAll('{{kota_pembuatan_surat}}',kotaPembuatan())
                .replaceAll('{{tanggal_pembuatan_surat}}',tanggalPembuatan())
                .replaceAll('{{tempat_lahir}}',tempatLahir())
                .replaceAll('{{tanggal_lahir}}',tanggalLahir())
                .replaceAll('{{alamat}}',alamatPengguna())

                .replaceAll('{{tanda_tangan}}',neew)

                let w = window.open()
                w.document.write(newdoc)

                setTimeout(function(){
                    w.print()
                    w.close()    
                    closeModal()
                },500)
            })
        }
    }

    let suratSakit = async () => {
        if(namaPengguna()==''){
            toasted('Kolom Nama Pengguna Wajib Diisi')
        }else if(jabatanPengguna()==''){
            toasted('Kolom Jabatan Wajib Diisi')
        }else if(posisiDilamar()==''){
            toasted('Kolom Posisi Wajib Diisi')
        }else if(namaPerusahaan()==''){
            toasted('Kolom Perusahaan Wajib Diisi')
        }else if(tglAwalSakit()==''){
            toasted('Tanggal Awal Wajib Diisi')
        }else if(tglAkhirSakit()==''){
            toasted('Tanggal Akhir Wajib Diisi')
        }else if(kotaPembuatan()==''){
            toasted('Kota Pembuatan Wajib Diisi')
        }else if(tanggalPembuatan()==''){
            toasted('Tanggal Pembuatan Wajib Diisi')
        }else{
            let neew = signaturepads.toDataURL('image/png')
            await fetch('../src/components/Template/templatesuratsakit.html')
            .then(response=>{
                return response.text()
            })
            .then(respdata=>{
                let temptanggal = ''
                if(tglAwalSakit()==tglAkhirSakit()){                    
                    temptanggal = tglAwalSakit()
                }else{
                    temptanggal = tglAwalSakit() + ' - ' + tglAkhirSakit()
                }
                let newdoc = respdata
                .replaceAll('{{nama_pengguna}}',namaPengguna())
                .replaceAll('{{kota_pembuatan_surat}}',kotaPembuatan())
                .replaceAll('{{tanggal_dibuat}}',tanggalPembuatan())
                .replaceAll('{{tanggal_sakit}}',temptanggal)
                .replaceAll('{{bagian_dilamar}}',posisiDilamar())
                .replaceAll('{{jabatan_pengguna}}',jabatanPengguna())
                .replaceAll('{{nama_perusahaan}}',namaPerusahaan())
                .replaceAll('{{tanda_tangan}}',neew)

                let w = window.open()
                w.document.write(newdoc)

                setTimeout(function(){
                    w.print()
                    w.close()    
                    closeModal()
                },500)
            })
        }
    }

    let suratTidakMasukKerja = async () => {
        if(namaPengguna()==''){
            toasted('Kolom Nama Pengguna Wajib Diisi')
        }else if(jabatanPengguna()==''){
            toasted('Kolom Jabatan Wajib Diisi')
        }else if(posisiDilamar()==''){
            toasted('Kolom Posisi Wajib Diisi')
        }else if(namaPerusahaan()==''){
            toasted('Kolom Perusahaan Wajib Diisi')
        }else if(tglAwalIzin()==''){
            toasted('Tanggal Awal Izin Wajib Diisi')
        }else if(tglAkhirIzin()==''){
            toasted('Tanggal Akhir Izin Wajib Diisi')
        }else if(alasanIzin()==''){
            toasted('Alasan Izin Wajib Diisi')
        }else if(kotaPembuatan()==''){
            toasted('Kota Pembuatan Surat Wajib Diisi')
        }else if(tanggalPembuatan()==''){
            toasted('Tanggal Pembuatan Surat Wajib Diisi')
        }else{
            let neew = signaturepads.toDataURL('image/png')
            await fetch('../src/components/Template/templateizinkerja.html')
            .then(response=>{
                return response.text()
            })
            .then(respdata=>{
                let temptanggal = ''
                if(tglAwalIzin()==tglAkhirIzin()){                    
                    temptanggal = tglAwalIzin()
                }else{
                    temptanggal = tglAwalIzin() + ' - ' + tglAkhirIzin()
                }
                let newdoc = respdata
                .replaceAll('{{nama_pengguna}}',namaPengguna())
                .replaceAll('{{kota_pembuatan_surat}}',kotaPembuatan())
                .replaceAll('{{tanggal_dibuat}}',tanggalPembuatan())
                .replaceAll('{{tanggal_izin}}',temptanggal)
                .replaceAll('{{bagian_dilamar}}',posisiDilamar())
                .replaceAll('{{jabatan_pengguna}}',jabatanPengguna())
                .replaceAll('{{nama_perusahaan}}',namaPerusahaan())
                .replaceAll('{{alasan}}',alasanIzin())
                .replaceAll('{{tanda_tangan}}',neew)

                let w = window.open()
                w.document.write(newdoc)

                setTimeout(function(){
                    w.print()
                    w.close()    
                    closeModal()
                },500)
            })
        }
    }

    let closeModal = () => {
        setListSuratLamaran([])
        setNoTelpPengguna(0)
        setUmurPengguna(0)
        setModalType('')
        setNamaPengguna('')
        setTempatLahir('')
        setPendidikanTerakhir('')
        setJurusanPengguna('')
        setUniversitasPengguna('')
        setEmailPengguna('')
        setAlamatPengguna('')
        setNamaPerusahaan('')
        setKotaPerusahaan('')
        setAsalLowongan('')
        setPosisiDilamar('')
        setTanggalLahir('')
        setTanggalPembuatan('')
        setKotaPembuatan('')
        setJabatanPengguna('')
        setTglAwalSakit('')
        setTglAkhirSakit('')
        setTglAwalIzin('')
        setTglAkhirIzin('')
        props.fromChild(false)
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
                    <p class="modal-card-title has-text-weight-bold">{props.fromParentText}</p>
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

                    <Show when={listSuratLamaran().length<9}>
                        <div className="columns">
                            <div className="column is-3 is-flex is-align-items-center">
                                Berkas Lamaran
                            </div>
                            <div className="column is-flex is-align-items-center is-justify-content-center">
                                <input type="text" className="input" ref={lamaranset}/>
                            </div>
                            <div className="column">
                                <button className="button is-primary has-text-weight-bold" onClick={()=>addBerkas(lamaranset.value)}>
                                    Tambahkan Berkas
                                </button>
                            </div>
                        </div>
                    </Show>

                    <Show when={listSuratLamaran().length >0}>
                    <div className="columns">
                        <div className="column">
                            List Berkas Surat Lamaran
                        </div>
                        <div className="column">
                            <ul>
                                <For each={listSuratLamaran()}>{
                                    (sl,i)=>
                                    <li>
                                        <div className="columns">
                                            <div className="column is-3 is-flex is-align-items-center is-justify-content-center">
                                                {i()+1} {sl}
                                            </div>
                                            <div className="column">
                                                <a onClick={()=>delBerkas(i())}>Batal</a>
                                            </div>
                                        </div>
                                    </li>
                                }
                                </For>
                            </ul>
                        </div>
                    </div>
                    </Show>

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

                <Show when={modalType()=='izinsakit'}>
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
                            Jabatan Anda
                        </div>
                        <div className="column is-flex is-align-items-center is-justify-content-center">
                            <input type="text"  className="input" onChange={(e)=>setJabatanPengguna(e.target.value)}/>
                        </div>
                    </div>
                    <div className="columns">
                        <div className="column is-3 is-flex is-align-items-center">
                            Posisi Anda
                        </div>
                        <div className="column is-flex is-align-items-center is-justify-content-center">
                            <input type="text"  className="input" onChange={(e)=>setPosisiDilamar(e.target.value)}/>
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
                        <div className="column is-flex is-align-items-center is-justify-content-center has-text-weight-bold">
                            DATA DETAIL SURAT
                        </div>
                    </div>
                    <div className="columns">
                        <div className="column is-3 is-flex is-align-items-center">
                            Pengajuan Tanggal Sakit
                        </div>
                        <div className="column is-flex is-align-items-center is-justify-content-center">
                            <input type="date"  className="input" onChange={(e)=>getTanggalDetail(e.target.value,'awalsakit')}/>
                        </div>
                        <div className="column is-flex is-align-items-center is-justify-content-center">
                            -
                        </div>
                        <div className="column is-flex is-align-items-center is-justify-content-center">
                            <input type="date"  className="input" onChange={(e)=>getTanggalDetail(e.target.value,'akhirsakit')}/>
                        </div>
                    </div>
                </Show>

                <Show when={modalType()=='izintidakmasukkerja'}>
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
                            Jabatan Anda
                        </div>
                        <div className="column is-flex is-align-items-center is-justify-content-center">
                            <input type="text"  className="input" onChange={(e)=>setJabatanPengguna(e.target.value)}/>
                        </div>
                    </div>
                    <div className="columns">
                        <div className="column is-3 is-flex is-align-items-center">
                            Posisi Anda
                        </div>
                        <div className="column is-flex is-align-items-center is-justify-content-center">
                            <input type="text"  className="input" onChange={(e)=>setPosisiDilamar(e.target.value)}/>
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
                        <div className="column is-flex is-align-items-center is-justify-content-center has-text-weight-bold">
                            DATA DETAIL SURAT
                        </div>
                    </div>
                    <div className="columns">
                        <div className="column is-3 is-flex is-align-items-center">
                            Pengajuan Tanggal Izin
                        </div>
                        <div className="column is-flex is-align-items-center is-justify-content-center">
                            <input type="date"  className="input" onChange={(e)=>getTanggalDetail(e.target.value,'awalizin')}/>
                        </div>
                        <div className="column is-flex is-align-items-center is-justify-content-center">
                            -
                        </div>
                        <div className="column is-flex is-align-items-center is-justify-content-center">
                            <input type="date"  className="input" onChange={(e)=>getTanggalDetail(e.target.value,'akhirizin')}/>
                        </div>
                    </div>
                    <div className="columns">
                        <div className="column is-3 is-flex is-align-items-center">
                            Alasan
                        </div>
                        <div className="column is-flex is-align-items-center is-justify-content-center">
                            <textarea className="textarea" onChange={(e)=>setAlasanIzin(e.target.value)}></textarea>
                        </div>
                    </div>
                </Show>

                <Show when={modalType()=='resign'}>
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
                            Jabatan Anda
                        </div>
                        <div className="column is-flex is-align-items-center is-justify-content-center">
                            <input type="text"  className="input" onChange={(e)=>setJabatanPengguna(e.target.value)}/>
                        </div>
                    </div>
                    <div className="columns">
                        <div className="column is-3 is-flex is-align-items-center">
                            Posisi Anda
                        </div>
                        <div className="column is-flex is-align-items-center is-justify-content-center">
                            <input type="text"  className="input" onChange={(e)=>setPosisiDilamar(e.target.value)}/>
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
                        <div className="column is-flex is-align-items-center is-justify-content-center has-text-weight-bold">
                            DATA PENGUNDURAN DIRI
                        </div>
                    </div>
                    <div className="columns">
                        <div className="column is-3 is-flex is-align-items-center">
                            Tanggal Pengunduran Diri
                        </div>
                        <div className="column is-flex is-align-items-center is-justify-content-center">
                            <input type="date"  className="input" onChange={(e)=>getTanggalDetail(e.target.value,'resign')}/>
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
                        <input type="date"  className="input" onChange={(e)=>getTanggalDetail(e.target.value,'pembuatan')} />
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
                when={modalType() == 'resign'}
            >
                <button class="button is-primary has-text-weight-bold" onClick={()=>reSign()}>Cetak Lamaran Kerja</button>
            </Show>
            <Show
                when={modalType() == 'lamarkerja'}
            >
                <button class="button is-primary has-text-weight-bold" onClick={()=>lamaranKerja()}>Cetak Lamaran Kerja</button>
            </Show>
            <Show
                when={modalType() == 'izinsakit'}
            >
                <button class="button is-primary has-text-weight-bold" onClick={()=>suratSakit()}>Cetak Surat Sakit </button>
            </Show>
            <Show
                when={modalType() == 'izintidakmasukkerja'}
            >
                 <button class="button is-primary has-text-weight-bold" onClick={()=>suratTidakMasukKerja()}>Cetak Surat Tdk Masuk Kerja </button>
            </Show>
                <button class="button is-warning has-text-weight-bold" onClick={()=>closeModal()}>Cancel</button>
            </footer>
            </div>
        </div>
    )
}

export default Modal;