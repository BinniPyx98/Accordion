import React, {useState} from 'react';
import { RatingType } from '../../App';
import {Star} from "./Star";

type PropsTypeRating = {
    ratingValue:RatingType
    onClick:(value:1|2|3|4|5)=>void
}


const Rating = (props: PropsTypeRating) => {


    return (
        <div>
            <Star selected={props.ratingValue > 0} value={1} onClick={props.onClick}/>
            <Star selected={props.ratingValue > 1} value={2} onClick={props.onClick}/>
            <Star selected={props.ratingValue > 2} value={3} onClick={props.onClick}/>
            <Star selected={props.ratingValue > 3} value={4} onClick={props.onClick}/>
            <Star selected={props.ratingValue > 4} value={5} onClick={props.onClick}/>


        </div>
    );
};


export default Rating;