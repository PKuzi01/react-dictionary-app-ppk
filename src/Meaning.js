import React from "react";
import Synonyms from "./Synonyms";
import Antonyms from "./Antonyms";
import Example from "./Example";

function Meaning(props) {
    //console.log(props.meaning);
    return (
        <div>
            <h4>{props.meaning.partOfSpeech}</h4> 
            <p><strong>Definition:</strong> {props.meaning.definition}</p>
            <Example example={props.meaning.example} /> 
            <Synonyms synonyms={props.meaning.synonyms} />
            <br />
            <Antonyms antonyms={props.meaning.antonyms} />
        </div>
        
    );
}

export default Meaning;