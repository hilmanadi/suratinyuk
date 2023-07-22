import {A} from "@solidjs/router";

let NavbarContent = () => {
    return (
        <>
            <nav class="navbar" role="navigation" aria-label="main navigation">
                <div class="navbar-brand">
                    <A class="navbar-item has-text-weight-bold" href="/">
                        <img src="./suratinyuk.png" alt="" /> SURAT-IN YUK! Content !
                    </A>
                </div>
            </nav>
        </>
    )
}

export default NavbarContent