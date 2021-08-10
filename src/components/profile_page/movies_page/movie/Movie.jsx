import React from "react";
import './Movie.scss'


const Movie = (props) => {
    return(
        <div>
            {/* eslint-disable-next-line react/prop-types */}
            {props.text}
        </div>
    )
}


export default Movie;