import {createEffect,createSignal} from "solid-js"

let About = () => {
    createEffect(()=>{

    })

    return(
        <div className="p-5">
            <div className="columns">
                <div className="column">
                    <article class="message is-warning">
                        <div class="message-header">
                            <h1><b>&#9888; WARNING  &#9888;</b></h1>
                        </div>
                        <div class="message-body">
                            <ol>
                                <li>
                                    <h2>Hati-hati dalam pengisian masukan user, dikarenakan bila berkas sudah pada proses cetak, semua data yang ada dalam masukan user akan dihapus.</h2>
                                </li>
                                <li>
                                    <h2>Hati-hati ketika akan melakukan tanda tangan, dikarenakan form tanda tangan tidak bisa di reset untuk saat ini.</h2>
                                </li>
                            </ol>
                        </div>
                    </article>
                </div>
            </div>
            <article class="message is-danger">
                <div class="message-header">
                    <h1><b>Reminder</b></h1>
                </div>
                <div class="message-body">
                    <ol>
                        <li>
                            <h2>Aplikasi ini tidak menyimpan data pribadi anda satu huruf pun, tidak ada database yang digunakan pada aplikasi ini, murni data dari input user kemudian di reset.</h2>
                        </li>
                    </ol>
                </div>
            </article>
            <div className="columns">
                <div className="column">
                    <article class="message is-info">
                        <div class="message-header">
                            <h1><b>Tujuan Aplikasi</b></h1>
                        </div>
                        <div class="message-body has-text-weight-bold">
                            <h2>Aplikasi ini ditujukan dengan maksud untuk mempermudah user dalam pembuatan surat-surat, seperti Surat Lamaran Kerja, Surat Izin Tidak Masuk Kerja, Surat Izin Sakit, Surat Resign, dll</h2>
                        </div>
                    </article>
                </div>
            </div>
            <div className="columns">
                <div className="column">
                    <div className="box">
                        <div className="columns">
                            <div className="column is-2 is-flex is-align-items-center is-justify-content-center">
                                <img src="./hak.png" style="height:100%,width:100%'"/>
                            </div>
                            <div className="column">
                                <div className="columns">
                                   <div className="column">
                                        <div className="columns">
                                            <div className="column is-flex is-align-items-center is-justify-content-center has-text-centered-mobile has-text-weight-bold is-size-5">
                                                <h1><b>Developer</b></h1>
                                            </div>
                                        </div>
                                        <div className="columns">
                                            <div className="column is-flex is-align-items-center is-justify-content-center">
                                                <h2>Hilman Adi K.</h2>
                                            </div>
                                        </div>
                                   </div>
                                </div>
                                <div className="columns">
                                    <div className="column">
                                        <div className="columns">
                                            <div className="column is-flex is-justify-content-center is-align-items-center has-text-centered-mobile has-text-weight-bold is-size-5">
                                                <h1><b>Mail</b></h1>
                                            </div>
                                        </div>
                                        <div className="columns">
                                            <div className="column is-flex is-align-items-center is-justify-content-center has-text-centered-mobile">
                                                <h2>hilmanadi1995@gmail.com</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="columns">
                                    <div className="column">
                                        <div className="columns">
                                            <div className="column is-flex is-justify-content-center is-align-items-center has-text-centered-mobile has-text-weight-bold is-size-5">                                                
                                                <h1><b>My Social</b></h1>
                                            </div>  
                                        </div>
                                        <div className="columns">
                                            <div className="column is-flex is-align-items-center is-justify-content-center has-text-centered-mobile">
                                                <a href="https://github.com/hilmanadi">
                                                    <figure class="image is-64x64">
                                                        <img src="./github.png"/>
                                                    </figure>
                                                </a>
                                            </div>
                                            <div className="column is-flex is-align-items-center is-justify-content-center has-text-centered-mobile">
                                                <a href="https://www.instagram.com/hilmaanadi/">
                                                    <figure class="image is-64x64">
                                                        <img src="./instagram.png"/>
                                                    </figure>
                                                </a>
                                            </div>
                                            <div className="column is-flex is-align-items-center is-justify-content-center has-text-centered-mobile">
                                                <a href="https://www.facebook.com/hilman.adi.9/">
                                                    <figure class="image is-64x64">
                                                        <img src="./facebook.png"/>
                                                    </figure>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;