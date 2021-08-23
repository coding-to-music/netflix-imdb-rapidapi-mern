import React from "react";
import {FaRegStar} from "react-icons/fa";
import PropTypes from "prop-types";
import './OverlaySearchMovie.scss'
import OverlaySearchButton from "./overlay_search_button/OverlaySearchButton";


const OverlayMovie = (props) => {
    return (
        <div>
            <div className={'search-overlay-film'}>
                <div className={'search-overlay-film-cover'}>
                    <img className={'search-overlay-cover'} alt={'Film Cover'}
                         src={props.movie.Poster}/>
                </div>
                <div className={'search-overlay-film-information'}>
                    <div className={'search-overlay-main'}>
                        <div className={'search-overlay-title'}>{props.movie.Title}</div>
                        <div className={'search-overlay-rating'}>
                            <FaRegStar/>{props.movie.imdbRating}
                        </div>
                    </div>
                    <div className={'search-overlay-release-date'}>{props.movie.Released}</div>
                    <div className={'search-overlay-info'}>
                        <div>{props.movie.Genre}</div>
                        <div>Director: {props.movie.Director}</div>
                        <div>Actors: {props.movie.Actors}</div>
                    </div>
                    <div className={'search-overlay-description'}>{props.movie.Plot}</div>
                </div>
            </div>
            <OverlaySearchButton/>
        </div>
    )
}

OverlayMovie.propTypes = {
    movie: PropTypes.object,
    Poster: PropTypes.string,
    Title: PropTypes.string,
    imdbRating: PropTypes.string,
    Released: PropTypes.string,
    Genre: PropTypes.array,
    Plot: PropTypes.string,
    Director: PropTypes.string,
    Actors: PropTypes.string,
}


export default OverlayMovie;