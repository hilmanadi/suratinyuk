import { A } from "@solidjs/router";

const Article  = () => {
    return(
        <>
            <div className="container p-3">
                <div className="columns">
                    <div className="column p-3 p-3 is-flex is-align-items-center is-justify-content-center">
                        <h1 className="title is-1">Daftar Artikel</h1>
                    </div>
                </div>
                <div className="columns">
                    <div className="column p-3 p-3 is-flex is-align-items-center is-justify-content-center">
                        <p className="mt-3">
                            <A href="/suratdigital">Penjelasan tentang Surat Digital</A>
                        </p>
                    </div>
                </div>
                <div className="columns">
                    <div className="column p-3 p-3 is-flex is-align-items-center is-justify-content-center">
                        <p className="mt-3">
                            <A href="/tandatangandigital">Apa itu Tanda Tangan Digital?</A>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Article