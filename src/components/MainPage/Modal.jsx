import {createSignal,createEffect,Show} from "solid-js";

let Modal = (props) => {
    let [isActive,setIsActive] = createSignal(false)
    let [modalType,setModalType] = createSignal('')

    let lamaranKerja = async () => {
        await fetch('../src/components/Template/templatelamarankerja.html')
        .then(response=>{
            return response.text()
        })
        .then(respdata=>{
            let newdoc = respdata.replaceAll('{{nama_perusahaan}}','anjeng')
            console.log(newdoc)
            let w = window.open();
            w.document.write(newdoc);
            w.print();
            w.close();
           props.fromChild(false)
        })
    }
    let closeModal = () => {
       props.fromChild(false)
    }
    let cekIt = () => {
        console.log(props.fromParentType)
    }
    createEffect(()=>{
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