import React, {useState} from 'react';
import './App.css';
import Rating from "./component/Reting/Rating";
import Accordion from "./component/Accordion/Accordion";


function App() {
    return (

        <div className="App">
<Accordion title={"Title"}/>
            <Rating value={3}/>

        </div>
    );
}

export default App;
