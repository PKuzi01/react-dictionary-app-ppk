import React from "react";

function Antonyms(props) {
    if (props.antonyms) {
        return (
            <div className="Antonyms">
                <strong>Antonyms:{" "}</strong>
                {props.antonyms.map(function (antonyms, index) {
                    return <span key={index}>{antonyms}{" "}</span>
                })}
            </div>
        );
    } else {
        return null;
    }
    
}

export default Antonyms;
