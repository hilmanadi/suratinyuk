
import {createSignal,createEffect, For} from "solid-js"
let Navbar = (props) => {

  let [isActiveBurger,setIsActiveBurger] = createSignal(false)

  let listMenuNavbar = [
    {"menu" : "About","action":"about"},
    {"menu" : "List Surat","action":"listsurat"}
  ]
  let menuClick = (data) => {
    props.fromChild(data)
    setIsActiveBurger(false)
  }
  let activatedModal = () => {
    setIsActiveBurger(!isActiveBurger())
  }

  createEffect(()=>{
    console.log('navbar')
  })

  return (
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item has-text-weight-bold" onClick={()=>menuClick('mainpage')}>
          <img src="./suratinyuk.png" alt="" /> SURATIN YUK!
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
              <a class="navbar-item has-text-weight-bold" onClick={() => menuClick(data.action)}>
                {data.menu}
              </a>
            }
          </For>           
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
