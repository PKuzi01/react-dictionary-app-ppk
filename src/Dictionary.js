import React, { useState } from "react";
import axios from "axios";

import Results from "./Results";

import "./Dictionary.css"

function Dictionary() {
    let [keyword, setKeyword] = useState("");
    let [result, setResult] = useState(null);

    function handleSubmit(event) {
        //console.log(event.target.value);
        setKeyword(event.target.value);
    }

    function handleResponse(response) {
        //console.log(response.data);
        setResult(response.data);
    }

    function search(event) {
        event.preventDefault();
        
        const apiKey = `9a96e3865c186c9fbo4aaef0cdb0e0dt`;
        const apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
        axios.get(apiUrl).then(handleResponse);

    } 

    return (
            <div>
                <form onSubmit={search}>
                    <input type="search" placeholder="Look for a word" onChange={handleSubmit}/>
                </form>
                <div className="hint">
                    Suggested words: pineapple, sing, forest, that one word at the beginning of Akeelah and the Bee...
                </div>
                <Results results={result}/>
                
            </div>
        );
   
}

export default Dictionary;