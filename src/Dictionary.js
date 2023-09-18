import React, { useState } from "react";

function Dictionary() {
    let [keyword, setKeyword] = useState("");
    function handleSubmit(event) {
        console.log(event.target.value);
        setKeyword(event.target.value);
    }

    function search(event) {
        event.preventDefault();
        alert(`Searching for the definition of ${keyword}...`);
    }

    return (
        <div>
            <form onSubmit={search}>
                <input type="search" autofocus={true} placeholder="Look for a word" onChange={handleSubmit}/>
            </form>
        </div>
    );
}

export default Dictionary;