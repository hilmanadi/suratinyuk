import {createSignal,createEffect} from "solid-js"
let Loading = () => {
    let [textLoading,setTextLoading] = createSignal('')

    createEffect(()=>{
        setTextLoading('Loading')
    })
    return(     
        <>
            <section class="hero is-link is-fullheight-with-navbar">
                <div class="hero-body">
                    <p class="title">
                        {textLoading()}
                    </p>
                </div>
            </section>
        </>
    )
}

export default Loading;