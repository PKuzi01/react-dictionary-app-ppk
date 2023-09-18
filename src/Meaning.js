import React from "react";

function Meaning(props) {
    console.log(props.meaning);
    return (
        <div>
            <h4>{props.meaning.partOfSpeech}</h4> 
            <p>{props.meaning.definition}</p>
        </div>
        
    );
}

export default Meaning;