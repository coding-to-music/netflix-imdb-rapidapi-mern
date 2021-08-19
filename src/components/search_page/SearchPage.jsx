import React from "react";
import './SearchPage.scss';
import Filters from "../main_page/movies_page/filter_line/Filters";
import Movie from "../main_page/movies_page/movie/Movie";


const SearchPage = () => {
    return(
        <div className={'search-wrapper'}>
            <div className={'search-page'}>
                <Filters minWidth={200}/>
                <div className={'search-movies'}>
                    <Movie/>
                </div>
            </div>
        </div>
    )
}


export default SearchPage;