import {createEffect,createSignal} from "solid-js"

let MainPage = () => {
    let [headerContent,setHeaderContent] = createSignal('SELAMAT DATANG') 
    let [bodyContent,setBodyContent] = createSignal('DI APLIKASI')
    let [footerContent,setFooterContent] = createSignal('SURATIN YUK!')

    createEffect(()=>{

    })

    return(
        <>
            <section class="hero is-fullheight-with-navbar is-fluid">
                <div class="hero-body is-flex is-align-items-center is-justify-content-center" >
                    <div class="container is-fluid" >
                        <div className="columns">
                            <div className="column is-flex is-justify-content-center is-align-items-center">
                                <img src="/src/assets/images/suratinyuk.png" alt="" />
                            </div>
                        </div>
                        <div className="columns" >
                            <div className="column">
                                <div className="columns">
                                    <div className="column is-flex is-align-items-center is-justify-content-center has-text-weight-bold is-size-3 has-text-centered-mobile">
                                        {headerContent}
                                    </div>
                                </div>
                                <div className="columns">
                                    <div className="column is-flex is-align-items-center is-justify-content-center has-text-weight-bold is-size-4">
                                        {bodyContent}
                                    </div>
                                </div>
                                <div className="columns">
                                    <div className="column is-flex is-align-items-center is-justify-content-center has-text-weight-bold is-size-5">
                                        {footerContent}
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