import React from "react";
import "./MoviesPage.scss"

const MoviesPage = (props) => {
    return(
        <div className={'movies'}>
            {/* eslint-disable-next-line react/prop-types */}
            {props.text}
        </div>
    )
}

export default MoviesPage;