import React from "react";
import './SearchPage.scss';
import PropTypes from "prop-types";
import SearchMovie from "./search_movie/SearchMovie";




const SearchPage = (props) => {

    if (props.movies === undefined ){
        return (
            <div className={'search-wrapper'}>
                <div className={'search-page'}>
                    <div className={'no-matches'}>No matches found</div>
                </div>
            </div>
        )
    }

    let movieElement = props.movies.map(movie => (
        <SearchMovie key={movie.imdbID}  movie={movie} />));

    return(
        <div className={'search-wrapper'}>
            <div className={'search-page'}>
                {movieElement}
            </div>
        </div>
    )
}


SearchPage.propTypes ={
    movies:PropTypes.array,
}


export default SearchPage;