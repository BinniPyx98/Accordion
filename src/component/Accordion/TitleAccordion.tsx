import React from "react";

type PropsTypeTitleAccordion ={
    title:string
    setCollapsed:(collaps:boolean)=>void
    collaps:boolean
}

export const TitleAccordion=(props:PropsTypeTitleAccordion)=>{
    const collapsHandler=()=>{
        props.setCollapsed(!props.collaps)
    }
    return(
        <div onClick={collapsHandler}>{props.title}</div>
    )
}