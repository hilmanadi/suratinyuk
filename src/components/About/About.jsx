import {createEffect,createSignal} from "solid-js"

let About = () => {
    createEffect(()=>{

    })

    return(
        <>
            <form class="box is-flex is-justify-content-center is-align-items-center">
                Aplikasi ini dibuat bertujuan untuk pembuatan surat yang diperlukan sesuai dengan keperluan pengguna,
                ex : Surat Lamaran Kerja, Surat Sakit, etc
            </form>
        </>
    )
}

export default About;