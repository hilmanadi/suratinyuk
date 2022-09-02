import { createEffect, createSignal, Switch, Match } from "solid-js";

import Navbar from "./components/MainPage/Navbar";
import About from "./components/About/About";
import ListSurat from "./components/ListSurat/ListSurat";
import MainPage from "./components/MainPage/MainPage";

function App() {
  let [listPages,setListPages] = createSignal('')

  createEffect(()=>{
  },[])

  return (
    <>
    <Navbar fromChild={setListPages}></Navbar>
    <Switch fallback={<MainPage/>}>
      <Match when={listPages()=='about'} >
        <About/>
      </Match>
      <Match when={listPages()=='listsurat'}>
        <ListSurat/>
      </Match>
      <Match when={listPages()=='mainpage'}>
        <MainPage/>
      </Match>
    </Switch>
    </>
  );
}

export default App;
