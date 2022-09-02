import {createSignal,createEffect} from "solid-js";

let Modal = (props) => {
    let [isActive,setIsActive] = createSignal(false)

    let closeModal = () => {
       props.fromChild(false)
    }

    createEffect(()=>{
        setIsActive(props.fromParent)
    })

    return (
        <div className={`modal ${isActive() ? "is-active" : ""}`}>
            <div class="modal-background "></div>
            <div class="modal-card">
                <header class="modal-card-head">
                    <p class="modal-card-title">Modal title</p>
                    <button class="delete" aria-label="close" onClick={()=>closeModal()}></button>
                </header>
            <section class="modal-card-body">
            </section>
            <footer class="modal-card-foot">
            <Show
            when={props.fromParentType =='submit'}
            fallback={<button>Submit</button>}
            >
            </Show>
            <Show
            when={props.fromParentType == 'edit'}
            fallback={<button>Edit</button>}
            >
            </Show>
                <button class="button" onClick={()=>closeModal()}>Cancel</button>
            </footer>
            </div>
        </div>
    )
}

export default Modal;