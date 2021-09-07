import React from 'react'
import SearchPage from "./SearchPage";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {AuthRedirect} from "../HOC/AuthRedirect";
import {compose} from "redux";


class SearchPageContainer extends React.Component {
    render() {
        return (
            <SearchPage movies={this.props.movies}/>
        )
    }
}


let mapStateToProps = (state) => ({
    movies: state.moviesLists.searchMovies,
})


SearchPageContainer.propTypes = {
    movies: PropTypes.array,
}


export default compose(
    connect(mapStateToProps), AuthRedirect)(SearchPageContainer);