import React from "react";
import './SearchPage.scss';
import PropTypes from "prop-types";
import SearchMovie from "./search_movie/SearchMovie";
import SearchFilters from "./search_filter_line/SearchFilters";




const SearchPage = (props) => {

    if (props.movies === undefined ){
        return (
            <div className={'search-wrapper'}>
                <div className={'search-page'}>
                    <SearchFilters minWidth={200} filters={props.filters} />
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
                <SearchFilters minWidth={200} filters={props.filters} />
                {movieElement}
            </div>
        </div>
    )
}


SearchPage.propTypes ={
    filters: PropTypes.object,
    movies:PropTypes.array,
    searchByID: PropTypes.func,
}


export default SearchPage;