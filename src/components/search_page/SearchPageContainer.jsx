import React from 'react'
import SearchPage from "./SearchPage";
import {connect} from "react-redux";
import PropTypes from "prop-types";


class SearchPageContainer extends React.Component {
    render() {
        return (
            <SearchPage filters={this.props.filters} movies={this.props.movies}/>
        )
    }
}


let mapStateToProps = (state) => ({
    filters: state.filters,
    movies: state.moviesLists.searchMovies,
})


SearchPageContainer.propTypes = {
    filters: PropTypes.object,
    searchMoviesByIDTC: PropTypes.func,
    movies: PropTypes.array,
    fullMovie: PropTypes.object,
}


export default connect(mapStateToProps)(SearchPageContainer);