import React, { useState } from "react";
import axios from "axios";

function Dictionary() {
    let [keyword, setKeyword] = useState("");
    function handleSubmit(event) {
        console.log(event.target.value);
        setKeyword(event.target.value);
    }

    function handleResponse(response) {
        console.log(response.data[0]);
    }

    function search(event) {
        event.preventDefault();
        alert(`Searching for the definition of ${keyword}...`);
        
        const apiKey = `9a96e3865c186c9fbo4aaef0cdb0e0dt`;
        const apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
        axios.get(apiUrl).then(handleResponse);
    } 

    return (
        <div>
            <form onSubmit={search}>
                <input type="search" placeholder="Look for a word" onChange={handleSubmit}/>
            </form>
        </div>
    );
}

export default Dictionary;