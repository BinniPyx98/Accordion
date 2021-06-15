import React from "react";


type PropsTypeStar={
    selected:boolean
}

export const Star=(props:PropsTypeStar)=>{
    return(
        <span>{props.selected?<b>Star</b>:"Star"}</span>
    )
}