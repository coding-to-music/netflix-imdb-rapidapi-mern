import React from "react";
import "./MoviesPage.scss"
import Filters from "./filter_line/Filters";
import Movie from "./movie/Movie";
import PropTypes from 'prop-types';


const MoviesPage = (props) => {

    let movieElement = props.films.map(film =>(
        <Movie key={film.id} text={props.text} film={film} changeList={props.changeList}/>));

    return (
        <div className={'movies'}>
            <Filters minWidth={150} filters={props.filters}/>
            {movieElement}
        </div>
    )
}

MoviesPage.propTypes = {
    text: PropTypes.string,
    films: PropTypes.array,
    changeList:PropTypes.func,
    filters:PropTypes.object
}


export default MoviesPage;