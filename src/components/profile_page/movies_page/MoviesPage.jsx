import React from "react";
import "./MoviesPage.scss"
import Filters from "./filter_line/Filters";
import Movie from "./movie/Movie";

const MoviesPage = (props) => {
    return(
        <div className={'movies'}>
            <Filters/>
            {/* eslint-disable-next-line react/prop-types */}
            <Movie text={props.text}/>
        </div>
    )
}

export default MoviesPage;