import React from "react";
import './OverlayMovie.scss'
import {FaRegStar} from "react-icons/fa";
import PropTypes from "prop-types";
import OverlayButton from "./overlay_button/OverlayButton";


const OverlayMovie = (props) => {

    return (
        <div>
            <div className={'overlay-film'}>
                <div className={'overlay-film-cover'}>
                    <img className={'overlay-cover'} alt={'Film Cover'}
                         src={props.movie.Poster}/>
                </div>
                <div className={'overlay-film-information'}>
                    <div className={'overlay-main'}>
                        <div className={'overlay-title'}>{props.movie.Title}</div>
                        <div className={'overlay-rating'}>
                            <FaRegStar/>{props.movie.imdbRating}
                        </div>
                    </div>
                    <div className={'overlay-release-date'}>{props.movie.Released}</div>
                    <div className={'overlay-info'}>
                        <div>{props.movie.Genre}</div>
                        <div>Director: {props.movie.Director}</div>
                        <div>Actors: {props.movie.Actors}</div>
                    </div>
                    <div className={'overlay-description'}>{props.movie.Plot}
                    </div>
                </div>
            </div>
            <OverlayButton text={props.text} id={props.movie.imdbID} changeList={props.changeList} />
        </div>
    )
}

OverlayMovie.propTypes = {
    text: PropTypes.string,
    movie: PropTypes.object,
    cover: PropTypes.string,
    title: PropTypes.string,
    rating: PropTypes.string,
    releaseDate: PropTypes.string,
    genre: PropTypes.array,
    fullDescription: PropTypes.string,
    changeList: PropTypes.func,
}


export default OverlayMovie;