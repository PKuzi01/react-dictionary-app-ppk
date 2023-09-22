import React from "react";

function Example(props) {
    if (props.example) {
        return (
          <p><strong>Example:{" "}</strong><em>{props.example}</em></p>  
        )
    } else {
        return null;
    }
    
}

export default Example;