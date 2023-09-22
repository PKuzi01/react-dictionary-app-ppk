import React from "react";

function Example(props) {
    if (props.example) {
        return (
          <p><strong>Example:{" "}</strong>{props.example}</p>  
        )
    } else {
        return null;
    }
    
}

export default Example;