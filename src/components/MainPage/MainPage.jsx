import {createEffect,createSignal} from "solid-js"

let MainPage = () => {
    let [headerContent,setHeaderContent] = createSignal('SELAMAT DATANG') 
    let [bodyContent,setBodyContent] = createSignal('DI APLIKASI, SURAT-IN YUK!')
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
                                <figure class="image is-128x128">
                                    <img src="/suratinyuk.png"/>
                                </figure>
                            </div>
                        </div>
                        <div className="columns" >
                            <div className="column">
                                <div className="columns">
                                    <div className="column is-flex is-align-items-center is-justify-content-center has-text-weight-bold is-size-1 has-text-centered-mobile">
                                        <h3 className="title is-3">{headerContent}</h3>
                                    </div>
                                </div>
                                <div className="columns">
                                    <div className="column is-flex is-align-items-center is-justify-content-center has-text-weight-bold is-size-4">
                                        <h4 className="title is-4">{bodyContent}</h4>
                                    </div>
                                </div>
                                <div className="columns">
                                    <div className="column is-flex is-align-items-center is-justify-content-center has-text-weight-bold">
                                        <h5 className="title is-5">{footerContent}</h5>
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