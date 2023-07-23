// import { render } from 'solid-js/web';
import { onMount } from "solid-js";
const AdComponent = () => {
    onMount(async () =>{
        (window.adsbygoogle = window.adsbygoogle || []).push({});
    });

    return(
        <ins className="adsbygoogle"
            style={{'display':'block'}}
            data-ad-client="ca-pub-4775368641709276"
            data-ad-slot="8292244055"
            data-ad-format="auto"
            data-full-width-responsive="true"/>
    );
};

export default AdComponent