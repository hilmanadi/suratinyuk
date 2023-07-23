import {createEffect,createSignal} from "solid-js"

let ModalPreview = (props) => {
    let [isActive,setIsActive] = createSignal(false)
    let [imagePath,setImagePath] = createSignal('')

    let closeModal = () => {
        props.fromChildPreview(false)
    }
    createEffect(()=>{
        setIsActive(props.fromParent)
        setImagePath('./'+props.fromParentType+'.PNG')
    })
    return (
        <>
        <div className={`modal ${isActive() ? "is-active":""}`}>
            <div class="modal-background"></div>
            <div class="modal-content">
                <p class="image is-square">
                    <img src={imagePath()} alt="contoh_picture"/>
                </p>
            </div>
            <button class="modal-close is-large" aria-label="close" onClick={(e)=>closeModal()}></button>
        </div>
        </>
    )
}

export default ModalPreview;