import {createEffect,createSignal} from "solid-js"
import { A } from "@solidjs/router"

let About = () => {
    return(
        <div className="p-5">
            <div className="columns">
                <div className="column">
                    <article class="message is-warning">
                        <div class="message-header">
                            <h5 className="has-text-weight-bold">Warning</h5>
                        </div>
                        <div class="message-body">
                            <div className="content is-small">
                                <ul>
                                    <li>
                                        <h5 className="">Hati-hati dalam pengisian masukan user, dikarenakan bila berkas sudah pada proses cetak, semua data yang ada dalam masukan user akan dihapus.</h5>
                                    </li>
                                    <li>
                                        <h5 className="">Hati-hati ketika akan melakukan tanda tangan, dikarenakan form tanda tangan tidak bisa di reset untuk saat ini.</h5>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
            <article class="message is-danger">
                <div class="message-header">
                    <h5 className="has-text-weight-bold">Reminder</h5>
                </div>
                <div class="message-body">
                    <div className="content is-small">
                        <ul>
                            <li>
                                <h5> Aplikasi ini tidak menyimpan data pribadi anda satu huruf pun, tidak ada database yang digunakan pada aplikasi ini, murni data dari input user kemudian di reset.</h5>
                            </li>
                        </ul>
                    </div>
                </div>
            </article>
            <div className="columns">
                <div className="column">
                    <article class="message is-info">
                        <div class="message-header">
                            <h5 className="has-text-weight-bold">Tujuan Aplikasi</h5>
                        </div>
                        <div class="message-body has-text-weight-bold">
                            <div className="content is-small">
                                <ul>
                                    <li>
                                        <h5>Aplikasi ini ditujukan dengan maksud untuk mempermudah user dalam pembuatan surat-surat, seperti Surat Lamaran Kerja, Surat Izin Tidak Masuk Kerja, Surat Izin Sakit, Surat Resign, dll</h5>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
            <div className="columns">
                <div className="column">
                    <div className="box">
                        <div className="columns">
                            <div className="column is-2 is-flex is-align-items-center is-justify-content-center">
                                <img src="./hak.png" style={"height:100%,width:100%"} alt="hak_picture"/>
                            </div>
                            <div className="column">
                                <div className="columns">
                                   <div className="column">
                                        <div className="columns">
                                            <div className="column is-flex is-align-items-center is-justify-content-center has-text-centered-mobile has-text-weight-bold is-size-5">
                                                <h5 className="has-text-weight-bold">Developer</h5>
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
                                                <h5 className="has-text-weight-bold">Mail</h5>
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
                                                <h5 className="has-text-weight-bold">My Social</h5>
                                            </div>  
                                        </div>
                                        <div className="columns">
                                            <div className="column is-flex is-align-items-center is-justify-content-center has-text-centered-mobile">
                                                <A href="https://www.instagram.com/hilmaanadi/">
                                                    <figure class="image is-64x64">
                                                        <img src="./instagram.png" alt="instagram_picture"/>
                                                    </figure>
                                                </A>
                                            </div>
                                            <div className="column is-flex is-align-items-center is-justify-content-center has-text-centered-mobile">
                                                <A href="https://www.facebook.com/hilman.adi.9/">
                                                    <figure class="image is-64x64">
                                                        <img src="./facebook.png" alt="facebook_picture"/>
                                                    </figure>
                                                </A>
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