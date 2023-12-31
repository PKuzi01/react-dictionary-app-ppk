import React from "react";
import Synonyms from "./Synonyms";
import Example from "./Example";
import "./Meaning.css"

function Meaning(props) {
    //console.log(props.meaning);
    return (
        <div className="Meaning">
            <h3>{props.meaning.partOfSpeech}</h3> 
            <p><strong>Definition:</strong> {props.meaning.definition}</p>
            <Example example={props.meaning.example} /> 
            <Synonyms synonyms={props.meaning.synonyms} />
        </div>
        
    );
}

export default Meaning;