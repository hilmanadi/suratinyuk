/* @refresh reload */
import { render } from 'solid-js/web';
import { lazy } from "solid-js";
import App from './App';
import {Router,Route,Routes} from "@solidjs/router";
import  './assets/css/bulma.min.css';

const WhatSuratinContent = lazy(async () =>{
    return import("./components/Konten/WhatSuratinContent");
})

const WhySuratinContent = lazy(async () => {
    return import("./components/Konten/WhySuratinContent")
})

const WhenSuratinContent = lazy(async () => {
    return import("./components/Konten/WhenSuratinContent")
})

const WhoSuratinContent = lazy(async () => {
    return import("./components/Konten/WhoSuratinContent")
})

const TutorialSuratinContent = lazy(async () => {
    return import("./components/Konten/TutorialSuratinContent")
})

render(
    () => 
        (
            <Router>
                <Routes>
                    <Route path="/" component={App}/>
                    <Route path="/whatsuratin" component={WhatSuratinContent}/>
                    <Route path="/whysuratin" component={WhySuratinContent}/>
                    <Route path="/whensuratin" component={WhenSuratinContent}/>
                    <Route path="/whosuratin" component={WhoSuratinContent}/>
                    <Route path="/tutorialsuratin" component={TutorialSuratinContent}/>
                </Routes>
            </Router>
        ),
        document.getElementById('root')
);
