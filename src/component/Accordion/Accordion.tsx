import React, {useState} from 'react';
import {TitleAccordion} from "./TitleAccordion";
import {BodyAccordion} from "./BodyAccordion";

type PropsTypeAccordion={
    title:string
}

const Accordion = (props:PropsTypeAccordion) => {
    let [collaps,setCollaps]=useState(true)

    return (
        <div>
            <TitleAccordion title={"Title"} setCollapsed={setCollaps} collaps={collaps} onClick={()=>setCollaps(!collaps)}/>
            {!collaps&&<BodyAccordion />}
        </div>
    );
};

export default Accordion;