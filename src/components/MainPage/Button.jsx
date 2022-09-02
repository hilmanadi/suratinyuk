import {createEffect,createSignal} from "solid-js";

let Button = (props) => {
    
    createEffect(()=>{

    })
    
    return(
        <>
            <button class={`button ${props.buttonColour}`}></button>
        </>
    )
}

export default Button;