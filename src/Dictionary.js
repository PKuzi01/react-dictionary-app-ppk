import React, { useState } from "react";
import axios from "axios";

import Results from "./Results";

import "./Dictionary.css"

function Dictionary(props) {
    let [keyword, setKeyword] = useState(props.defaultKeyword);
    let [result, setResult] = useState(null);
    let [loaded, setLoaded] = useState(false);

    function handleKeywordChange(event) {
        //console.log(event.target.value);
        setKeyword(event.target.value);
    }

    function handleResponse(response) {
        //console.log(response.data);
        setResult(response.data);
    }

    function search() {
        const apiKey = `9a96e3865c186c9fbo4aaef0cdb0e0dt`;
        const apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
        axios.get(apiUrl).then(handleResponse);
    }

    function handleSubmit(event) {
        event.preventDefault();
        search();
    } 

    function load() {
        setLoaded(true);
        search();
    }

    if (loaded) {
        return (
            <div>
                <form onSubmit={handleSubmit}>
                    <input type="search" placeholder="Look for a word" onChange={handleKeywordChange} defaultValue={props.defaultKeyword}/>
                </form>
                <div className="hint">
                    Suggested words: pineapple, sing, forest, that one word at the beginning of Akeelah and the Bee...
                </div>
                <Results results={result}/>
            </div>
        );
    } else {
      load();
      return "Loading..."  
    }
}

export default Dictionary;