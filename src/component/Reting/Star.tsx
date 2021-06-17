import React from "react";


type PropsTypeStar = {
    selected: boolean
    value: 1|2|3|4|5
    onClick:(value:1|2|3|4|5)=>void
}

export const Star = (props: PropsTypeStar) => {

    return (
      <span onClick={()=>props.onClick(props.value)}>{props.selected ? <b>Star</b> : "Star"}</span>
    )
}