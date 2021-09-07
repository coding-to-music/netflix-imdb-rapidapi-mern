import React from "react";
import "./MoviesPage.scss"
import Movie from "./movie/Movie";
import PropTypes from 'prop-types';


const MoviesPage = (props) => {
    let movieElement = props.movies.map(movie => (
        <Movie key={movie.imdbID} text={props.text} movie={movie} changeList={props.changeList}/>));

    return (
        <div className={'movies'}>
            {movieElement}
        </div>
    )
}

MoviesPage.propTypes = {
    text: PropTypes.string,
    movies: PropTypes.array,
    changeList: PropTypes.func,
    filters: PropTypes.object,
}


export default MoviesPage;