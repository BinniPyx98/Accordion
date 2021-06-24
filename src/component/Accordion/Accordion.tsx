import React, {useState} from 'react';

import {BodyAccordion} from "./BodyAccordion";

type PropsTypeAccordion={
    title:string
}



const Accordion = (props:PropsTypeAccordion) => {
    let [collaps,setCollaps]=useState(true)

    const changeCollaps=()=>{
        setCollaps(!collaps)
    }

    return (
        <div>
            <div onClick={changeCollaps}>{props.title}</div>
            {!collaps&&<BodyAccordion items={[{title:"1",id:1},{title:"2",id:2},{title:"3",id:3}]}/>}
        </div>
    );
};

export default Accordion;