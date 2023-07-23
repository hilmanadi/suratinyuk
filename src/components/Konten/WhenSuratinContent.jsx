import {Suspense, lazy} from "solid-js"
import NavbarContent from "../MainPage/NavbarContent"
import Loading from "../Loading/Loading";
const ContentPatterns = lazy(async () => {
    return import("./ContentPattern");
})
const WhenSuratinContent = () => {
    return(
        <>
            <Suspense fallback={<Loading/>}>
                <NavbarContent/>
                <ContentPatterns
                    fromParentType="whensuratin"
                    fromParentTitle="Kapan Harus Menggunakan Aplikasi Surat-in Yuk!"
                    fromParentContent="Anda dapat menggunakan aplikasi website Surat-in Yuk! ini kapan saja dan dimana saja dalam kondisi apapun selama server dari website ini masih hidup maka aplikasi dapat diakses kapanpun dan dimanapun"
                />
            </Suspense>
        </>
    )
}

export default WhenSuratinContent