import React, {useState} from 'react';
import {Star} from "./Star";

type PropsTypeRating={
    value:1|2|3|4|5
}

const Rating = (props:PropsTypeRating) => {

    return (
        <div>
            <Star selected={props.value>0}/>
            <Star selected={props.value>1}/>
            <Star selected={props.value>2}/>
            <Star selected={props.value>3}/>
            <Star selected={props.value>4}/>

        </div>
    );
};


export default Rating;