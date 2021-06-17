import React, {useState} from 'react';
import './App.css';
import Rating from "./component/Reting/Rating";
import Accordion from "./component/Accordion/Accordion";

export type RatingType=0|1|2|3|4|5

function App() {
    let [ratingValue,setRatingValue]=useState<RatingType>(0)
    return (

        <div className="App">
<Accordion title={"Title"}/>
            <Rating ratingValue={ratingValue} onClick={(value)=>setRatingValue(value)}/>

        </div>
    );
}

export default App;
