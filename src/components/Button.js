import React from "react";
import "../styles/Button.css";

function Button({text,isButtonClick, handlerClick}){
    return(
        <button className={ isButtonClick ? "buttonClick" : "buttonReset" } onClick={handlerClick}>
            {text}
        </button>
    )
}

export default Button;