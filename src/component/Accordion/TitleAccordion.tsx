import React from "react";

type PropsTypeTitleAccordion ={
    title:string
    setCollapsed:(collaps:boolean)=>void
    collaps:boolean
    onClick:()=>void
}

export const TitleAccordion=(props:PropsTypeTitleAccordion)=>{

    return(
        <div onClick={props.onClick}>{props.title}</div>
    )
}