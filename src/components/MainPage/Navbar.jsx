
import {createSignal,createEffect, For} from "solid-js"
let Navbar = (props) => {
  let [isActiveBurger,setIsActiveBurger] = createSignal(false)

  let listMenuNavbar = [
    {"menu" : "About","action":"about"},
    {"menu" : "List Surat"},
    {"menu" : "Konten","action":"content"},
    {"menu" : "Artikel","action":"article"}
  ]

  let listSubMenuNavbar = [
    {"menu" : "Pekerjaan","action":"listsuratpekerjaan"},
    {"menu" : "Sekolah","action":"listsuratsekolah"}
  ]

  let menuClick = (data) => {
    props.fromChild(data)
    setIsActiveBurger(false)
  }
  let activatedModal = () => {
    setIsActiveBurger(!isActiveBurger())
  }

  createEffect(()=>{

  })

  return (
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item has-text-weight-bold" onClick={()=>menuClick('mainpage')}>
          <img src="./suratinyuk.png" alt="suratinyuk_picture" /> SURAT-IN YUK!
        </a>
        <a role="button" class={`navbar-burger ${isActiveBurger() ? "is-active" : "" }`} aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" onClick={()=>activatedModal()}>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class={`navbar-menu ${isActiveBurger() ? "is-active": "" }`}>
        <div class="navbar-start">
          <For each={listMenuNavbar}>
            {(data,index)=>
            <Switch fallback={<p>Nothin Menu Here</p>}>
                <Match when={data.menu == "List Surat"} >
                  <div class="navbar-item has-dropdown is-hoverable has-text-weight-bold">
                    <a class="navbar-link">
                      {data.menu}
                    </a>
                    <div class="navbar-dropdown">
                      <For each={listSubMenuNavbar}>
                          {(dataa,indexx)=>
                            <a class="navbar-item has-text-weight-bold" onClick={()=>menuClick(dataa.action)}>
                              {dataa.menu}
                            </a>
                          }
                      </For>
                    </div>
                  </div>
                </Match>

                <Match when={data.menu != "List Surat"}>
                  <a class="navbar-item has-text-weight-bold" onClick={() => menuClick(data.action)}>
                    {data.menu}
                  </a>
                </Match>
            </Switch>
            }
          </For>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
