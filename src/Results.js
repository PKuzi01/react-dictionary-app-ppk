import React from "react";
import Meaning from "./Meaning";

import "./Results.css"

function Results(props) {
    //console.log(props.results);

    if (props.results) {
        return (
            <div className="Results">
                <h2>{props.results.word}</h2>
                <h3><em>{props.results.phonetic}</em></h3>
                {props.results.meanings.map(function(meaning, index) {
                   return (
                    <div key={index}>
                        <Meaning meaning={meaning} />
                    </div>
                   );
                })}
            </div>
        );
    } else {
        return null;
    }
    
    
}

export default Results;