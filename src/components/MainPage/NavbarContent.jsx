import {createSignal,createEffect} from "solid-js"
import {A} from "@solidjs/router";

let NavbarContent = (props) => {
    let [headerSubtitle,setHeaderSubtitle] = createSignal("")

    createEffect(()=>{
        setHeaderSubtitle(props.fromParentType)
    },[])

    return (
        <>
            <nav class="navbar" role="navigation" aria-label="main navigation">
                <div class="navbar-brand">
                    <A class="navbar-item has-text-weight-bold" href="/">
                        <img src="./suratinyuk.png" alt="" /> SURAT-IN YUK! {headerSubtitle()}
                    </A>
                </div>
            </nav>
        </>
    )
}

export default NavbarContent