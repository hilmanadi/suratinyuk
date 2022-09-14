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
                            <p>&#9888; WARNING  &#9888;</p>
                        </div>
                        <div class="message-body">
                            <ol>
                                <li>
                                    Hati-hati dalam pengisian masukan user, dikarenakan bila berkas sudah pada proses cetak, semua data yang ada dalam masukan user akan dihapus.
                                </li>
                                <li>
                                    Hati-hati ketika akan melakukan tanda tangan, dikarenakan form tanda tangan tidak bisa di reset untuk saat ini.
                                </li>
                            </ol>
                        </div>
                    </article>
                </div>
            </div>
            <article class="message is-danger">
                <div class="message-header">
                    <p>Reminder</p>
                </div>
                <div class="message-body">
                    <ol>
                        <li>
                            Aplikasi ini tidak menyimpan data pribadi anda satu huruf pun, tidak ada database yang digunakan pada aplikasi ini, murni data dari input user kemudian di reset.
                        </li>
                    </ol>
                </div>
            </article>
            <div className="columns">
                <div className="column">
                    <article class="message is-info">
                        <div class="message-header">
                            <p>Tujuan Aplikasi</p>
                        </div>
                        <div class="message-body has-text-weight-bold">
                            <p>Aplikasi ini ditujukan dengan maksud untuk mempermudah user dalam pembuatan surat-surat, seperti Surat Lamaran Kerja, Surat Izin Tidak Masuk Kerja, Surat Izin Sakit, Surat Resign, dll</p>
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
                                                Developer
                                            </div>
                                        </div>
                                        <div className="columns">
                                            <div className="column is-flex is-align-items-center is-justify-content-center">
                                                Hilman Adi K.
                                            </div>
                                        </div>
                                   </div>
                                </div>
                                <div className="columns">
                                    <div className="column">
                                        <div className="columns">
                                            <div className="column is-flex is-justify-content-center is-align-items-center has-text-centered-mobile has-text-weight-bold is-size-5">
                                                Mail
                                            </div>
                                        </div>
                                        <div className="columns">
                                            <div className="column is-flex is-align-items-center is-justify-content-center has-text-centered-mobile">
                                                hilmanadi1995@gmail.com
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="columns">
                                    <div className="column">
                                        <div className="columns">
                                            <div className="column is-flex is-justify-content-center is-align-items-center has-text-centered-mobile has-text-weight-bold is-size-5">                                                
                                                My Social
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