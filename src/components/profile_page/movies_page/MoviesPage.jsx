import React from "react";
import "./MoviesPage.scss"
import Filters from "./filter_line/Filters";
import Movie from "./movie/Movie";
import PropTypes from 'prop-types';


const MoviesPage = (props) => {

    let movieElement = props.film.map(film =>(
        <Movie key={film.id} text={props.text} film={film}/>));

    return (
        <div className={'movies'}>
            <Filters minWidth={150}/>
            {movieElement}
        </div>
    )
}

MoviesPage.propTypes = {
    text: PropTypes.string,
    film: PropTypes.object,
}


export default MoviesPage;