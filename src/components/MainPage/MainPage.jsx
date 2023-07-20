import {createEffect,createSignal} from "solid-js"

let MainPage = () => {
    let [headerContent,setHeaderContent] = createSignal('SELAMAT DATANG') 
    let [bodyContent,setBodyContent] = createSignal('DI APLIKASI, SURAT-IN YUKS!!')
    let [footerContent,setFooterContent] = createSignal('Yuk mulai buat dan cetak suratmu disini !!')

    createEffect(()=>{

    })

    return(
        <>
            <section class="hero is-fullheight-with-navbar is-fluid">
                <div class="hero-body is-flex is-align-items-center is-justify-content-center" >
                    <div class="container is-fluid" >
                        <div className="columns">
                            <div className="column is-flex is-justify-content-center is-align-items-center">
                                <img src="./suratinyuk.png" alt="" />
                            </div>
                        </div>
                        <div className="columns" >
                            <div className="column">
                                <div className="columns">
                                    <div className="column is-flex is-align-items-center is-justify-content-center has-text-weight-bold is-size-1 has-text-centered-mobile">
                                        <h1><b>{headerContent}</b></h1>
                                    </div>
                                </div>
                                <div className="columns">
                                    <div className="column is-flex is-align-items-center is-justify-content-center has-text-weight-bold is-size-4">
                                        <h2><b>{bodyContent}</b></h2>
                                    </div>
                                </div>
                                <div className="columns">
                                    <div className="column is-flex is-align-items-center is-justify-content-center has-text-weight-bold">
                                        <h3><b>{footerContent}</b></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default MainPage;