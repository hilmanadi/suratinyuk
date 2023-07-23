import {createSignal,createEffect,} from "solid-js"

const ContentPatterns = (props) => {
    let [typeContent,setTypeContent] = createSignal("")
    let [titleContent,setTitleContent] = createSignal("")
    let [fillContent,setFillContent] = createSignal("")

    createEffect(()=>{
        setTypeContent(props.fromParentType)
        setTitleContent(props.fromParentTitle)
        setFillContent(props.fromParentContent)
    },[])

    return(
        <>
            <div className="container ">
                <div className="columns">
                    <div className="column is-full is-flex is-align-items-center is-justify-content-center">
                        <figure class="image is-128x128">
                            <img src="/suratinyuk.png" alt="suratinyuk_picture"/>
                        </figure>
                    </div>
                </div>
                <div className="columns">
                    <div className="column is-full is-flex is-align-items-center is-justify-content-center">
                        <h3 className="title is-3">Selamat Datang</h3>
                    </div>
                </div>
                <div className="columns">
                    <div className="column is-full is-flex is-align-items-center is-justify-content-center">
                        <h4 className="title is-4">Di Aplikasi Surat-in Yuk!</h4>
                    </div>
                </div>
                <div className="columns p-3">
                    <div className="column">
                        <h5 className="title is-5">{titleContent}</h5>
                        <p>{fillContent}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContentPatterns