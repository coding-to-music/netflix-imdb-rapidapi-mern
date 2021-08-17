import React from "react";
import './OverlayMovie.scss'
import {FaRegStar} from "react-icons/fa";
import PropTypes from "prop-types";
import OverlayButton from "./overlay_button/OverlayButton";


const OverlayMovie = (props) => {

    let genres = props.film.genre.map(genre => (
        <div key={genre.id}>{genre}</div>
    ))
    return (
        <div>
            <div className={'overlay-film'}>
                <div className={'overlay-film-cover'}>
                    <img className={'overlay-cover'} alt={'Film Cover'}
                         src={props.film.cover}/>
                </div>
                <div className={'overlay-film-information'}>
                    <div className={'overlay-main'}>
                        <div className={'overlay-title'}>{props.film.title}</div>
                        <div className={'overlay-rating'}>
                            <FaRegStar/>{props.film.rating}
                        </div>
                    </div>
                    <div className={'overlay-release-date'}>{props.film.releaseDate}</div>
                    <div className={'overlay-genre'}>
                        {genres}
                    </div>
                    <div className={'overlay-short-description'}>
                        {props.text}
                        {props.film.fullDescription}

                    </div>
                </div>
            </div>
            <OverlayButton text={props.text}/>
        </div>
    )
}

OverlayMovie.propTypes = {
    text: PropTypes.string,
    film: PropTypes.object,
    cover: PropTypes.string,
    title: PropTypes.string,
    rating: PropTypes.string,
    releaseDate: PropTypes.string,
    genre: PropTypes.array,
    fullDescription: PropTypes.string,
}


export default OverlayMovie;