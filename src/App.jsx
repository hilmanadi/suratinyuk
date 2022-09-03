import { createEffect, createSignal, Switch, Match, lazy } from "solid-js";

import Navbar from "./components/MainPage/Navbar";

const About = lazy(async () => {
  return import("./components/About/About");
})

const ListSurat = lazy(async () => {
  return import("./components/ListSurat/ListSurat");
})

const MainPage = lazy(async () => {
  return import("./components/MainPage/MainPage");
})

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
