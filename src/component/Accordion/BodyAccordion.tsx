import React from "react";

type AccordionItems={
    title:string
    id:number
}

type PropsType={
    items:AccordionItems[]
}
export const BodyAccordion:React.FC<PropsType>=({items})=>{

    const mapItems=items.map(item=> <div key={item.id}>{item.title}</div>)

    return(
        <div>

            {mapItems}

        </div>
    )
}