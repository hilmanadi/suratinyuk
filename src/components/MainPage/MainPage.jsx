import {createEffect,createSignal} from "solid-js"

let MainPage = () => {
    let [headerContent,setHeaderContent] = createSignal('SELAMAT DATANG DI APLIKASI') 
    let [bodyContent,setBodyContent] = createSignal('SURATIN YUK')
    createEffect(()=>{

    })

    return(
        <>
            <section class="hero is-link is-fullheight-with-navbar is-fluid">
                <div class="hero-body is-flex is-align-items-center is-justify-content-center" >
                    <div class="container is-fluid has-background-danger" >
                        <div className="columns" >
                            <div className="column">
                                <div className="columns">
                                    <div className="column is-flex is-align-items-center is-justify-content-center has-text-weight-bold">
                                        {headerContent}
                                    </div>
                                </div>
                                <div className="columns">
                                    <div className="column is-flex is-align-items-center is-justify-content-center has-text-weight-bold">
                                        {bodyContent}
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