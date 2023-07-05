import {createEffect,createSignal} from "solid-js"
import Modal from "../MainPage/Modal";
import ModalPreview from "../MainPage/ModalPreview";

let ListSuratPekerjaan = () => {
    let [modalIsActive,setModalIsActive] = createSignal(false)
    let [modalPreviewIsActive,setModalPreviewIsActive] = createSignal(false)
    let [modalType,setModalType] = createSignal('')
    let [modalText,setModalText] = createSignal('')

    let listItem = [
        {"name":"SURAT LAMARAN KERJA","action":"lamarkerja"},
        {"name":"SURAT IZIN SAKIT KERJA","action":"izinsakitkerja"},
        {"name":"SURAT IZIN TIDAK MASUK KERJA","action":"izintidakmasukkerja"},
        {"name":"SURAT RESIGN KERJA","action":"resign"},
    ]

    let previewImage = (data)=>{
        setModalPreviewIsActive(true)
        setModalType(data.action)
    }

    let getModal = (data) => {
        setModalIsActive(true)
        setModalType(data.action)
        setModalText(data.name)
    }

    createEffect(()=>{
    })
    return (
        <>  
            <Modal fromParent={modalIsActive()} fromChild={setModalIsActive} fromParentType={modalType()} fromParentText={modalText()}></Modal>
            <Show when={modalPreviewIsActive()}>
                <ModalPreview fromParent={modalPreviewIsActive()} fromParentType={modalType()} fromChildPreview={setModalPreviewIsActive}></ModalPreview>
            </Show>
            <section class="hero is-fullheight-with-navbar is-fluid">
                    <div class="hero-body is-flex is-align-items-center is-justify-content-center" >
                        <div class="container is-fluid p-5" style={{'height':'67.5vh','overflow-y':'auto','border':'solid 3.5px black','border-radius':'7.5px'}} >
                        <For each={listItem}>
                            {(data,index)=>
                                <div class="card mb-2 mt-2">
                                    <div class="card-content">
                                        <div className="columns">
                                            <div className="column is-flex is-align-items-center is-justify-content-center has-text-weight-bold">
                                                {data.name}
                                            </div>
                                        </div>
                                    </div>
                                    <footer class="card-footer">
                                        <p class="card-footer-item has-text-centered-mobile">
                                            <button class="button is-warning has-text-weight-bold" onClick={(e)=>{
                                                getModal(data)
                                            }}>
                                                Edit
                                            </button>
                                            <button className="button is-link has-text-weight-bold ml-1" onClick={(e)=>{
                                                previewImage(data)
                                            }}>
                                                Contoh
                                            </button>
                                        </p>
                                    </footer>
                                </div>
                            }
                        </For>                    
                        </div>
                    </div>
            </section>
        </>
    ) 
}

export default ListSuratPekerjaan