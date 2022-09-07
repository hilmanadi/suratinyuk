import {createEffect,createSignal} from "solid-js"
import Modal from "../MainPage/Modal";
import { toast } from 'bulma-toast';

let ListSurat = () => {
    let [modalIsActive,setModalIsActive] = createSignal(false)
    let [modalType,setModalType] = createSignal('')
    let [inputData,setInputData] = createSignal('')
    let [modalText,setModalText] = createSignal('')

    let listItem = [
        {"name":"SURAT LAMARAN KERJA","action":"lamarkerja"},
        {"name":"SURAT IZIN SAKIT","action":"izinsakit"},
    ]

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

            <section class="hero is-link is-fullheight-with-navbar is-fluid">
                    <div class="hero-body is-flex is-align-items-center is-justify-content-center" >
                        <div class="container is-fluid has-background-danger" style={{'height':'67.5vh','overflow-y':'auto'}} >
                        <For each={listItem}>
                            {(data,index)=>
                                <div class="card mb-1 mt-1">
                                    <div class="card-content">
                                        <div className="columns">
                                            <div className="column is-flex is-align-items-center is-justify-content-center has-text-weight-bold">
                                                {data.name}
                                            </div>
                                        </div>
                                    </div>
                                    <footer class="card-footer">
                                        <p class="card-footer-item">
                                            <button class="button is-warning" onClick={(e)=>{
                                                getModal(data)
                                            }}>
                                                Edit
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

export default ListSurat