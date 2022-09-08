import {createSignal,createEffect} from "solid-js"

let Loading = () => {
    let [textLoading,setTextLoading] = createSignal('')

    createEffect(()=>{
        setTextLoading('Loading ....')
    })
    return(     
        <>
            <section class="hero is-fullheight-with-navbar">
                <div class="hero-body is-flex is-justify-content-center is-align-items-center">
                    <p class="title is-size-1">
                        {textLoading()}
                    </p>
                </div>
            </section>
        </>
    )
}

export default Loading;