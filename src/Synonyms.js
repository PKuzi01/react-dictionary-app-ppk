import React from "react";

function Synonyms(props){
    if (props.synonyms) {
        return (
            <div className="Synonyms">
                <strong>Synonyms:{" "}</strong>
                {props.synonyms.map(function (synonym, index) {
                    return <span key={index}>{synonym}. {" "}</span>;
                })}
            </div>
        );
    } else {
        return null;
    }
    
}

export default Synonyms;