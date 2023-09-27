import React from "react";
import "./Photos.css"

function Photos(props) {
    console.log(props.photos);
    if(props.photos) {
        return (
            <div className="Photos">
                    {props.photos.map(function (photo, index) {
                        return (
                            <a href={photo.src.original} target="_blank" rel="noreferrer" key={index}>
                                    <img className="img-fluid" alt="img" src={photo.src.landscape} />
                            </a>
                        ) 
                    })};
            </div>
        );
    } else {
        return null;
    }
    
}

export default Photos;