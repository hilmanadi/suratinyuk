import {createEffect,createSignal} from "solid-js"
import Modal from "../MainPage/Modal";

let ListSurat = () => {
    let [modalIsActive,setModalIsActive] = createSignal(false)
    let [modalType,setModalType] = createSignal('')

    let modalClickListSurat = () => {
        setModalIsActive(true)
        setModalType('submit')
    }
    createEffect(()=>{
        console.log('list surat page')
    })
    return (
        <>
        <Modal fromParent={modalIsActive()} fromChild={setModalIsActive} fromParentType={modalType()}></Modal>
            <div>
                ini page list surat
            </div>
        <button onClick={()=>modalClickListSurat()}>
            testing modal
        </button>
        </>
    ) 
}

export default ListSurat