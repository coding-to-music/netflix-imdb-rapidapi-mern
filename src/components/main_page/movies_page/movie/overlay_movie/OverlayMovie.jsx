import React from "react";
import './OverlayMovie.scss'
import {FaRegStar} from "react-icons/fa";
import PropTypes from "prop-types";
import OverlayButton from "./overlay_button/OverlayButton";


const OverlayMovie = (props) => {
    let genres = props.movie.genre.map(genre => (
        <div key={genre}>{genre}</div>
    ))
    return (
        <div>
            <div className={'overlay-film'}>
                <div className={'overlay-film-cover'}>
                    <img className={'overlay-cover'} alt={'Film Cover'}
                         src={props.movie.cover}/>
                </div>
                <div className={'overlay-film-information'}>
                    <div className={'overlay-main'}>
                        <div className={'overlay-title'}>{props.movie.title}</div>
                        <div className={'overlay-rating'}>
                            <FaRegStar/>{props.movie.rating}
                        </div>
                    </div>
                    <div className={'overlay-release-date'}>{props.movie.releaseDate}</div>
                    <div className={'overlay-genre'}>
                        {genres}
                    </div>
                    <div className={'overlay-short-description'}>
                        {props.movie.fullDescription}
                    </div>
                </div>
            </div>
            <OverlayButton text={props.text} id={props.movie.id} changeList={props.changeList}/>
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
    changeList: PropTypes.func
}


export default OverlayMovie;