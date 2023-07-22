import { createEffect, createSignal, Switch, Match, lazy } from "solid-js";

import Navbar from "./components/MainPage/Navbar";
import Loading from "./components/Loading/Loading";

const About = lazy(async () => {
  return import("./components/About/About");
})

const Content = lazy(async () =>{
  return import("./components/Konten/Content")
})

const ListSuratPekerjaan = lazy(async () => {
  return import("./components/ListSurat/ListSuratPekerjaan");
})

const ListSuratSekolah = lazy(async () => {
  return import("./components/ListSurat/ListSuratSekolah");
})

const MainPage = lazy(async () => {
  return import("./components/MainPage/MainPage");
})

let App = () => {
  let [listPages,setListPages] = createSignal('')

  createEffect(()=>{
  },[])

  return (
    <>
    <Navbar fromChild={setListPages}></Navbar>
    <Suspense fallback={<Loading/>}>
      <Switch fallback={<MainPage/>}>
        <Match when={listPages()=='about'} >
          <About/>
        </Match>
        <Match when={listPages()=='listsuratpekerjaan'}>
          <ListSuratPekerjaan/>
        </Match>
        <Match when={listPages()=='listsuratsekolah'}>
          <ListSuratSekolah/>
        </Match>
        <Match when={listPages()=='mainpage'}>
          <MainPage/>
        </Match>
        <Match when={listPages()=='content'}>
          <Content/>
        </Match>
      </Switch>
    </Suspense>
    </>
  );
}

export default App;
