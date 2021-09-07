import React from "react";
import {connect} from "react-redux";
import {addFilmToList, getMoviesTC, searchMoviesByIDTC} from "../../../../redux/listsReducer";
import OverlaySearchMovie from "./OverlaySearchMovie";
import PropTypes from "prop-types";
import Preloader from "../../../common/preloader/Preloader";


class OverlaySearchMovieContainer extends React.Component{

    componentDidMount() {
        this.props.searchMoviesByIDTC(this.props.id)
        this.props.getMoviesTC();
    }


    render() {
        if (this.props.id === this.props.fullMovie.imdbID){
            return (
                <OverlaySearchMovie movie={this.props.fullMovie} addFilmToList={this.props.addFilmToList} movies={this.props.movies}  />
            );
        }else return <Preloader/>
    }
}

let mapStateToProps = (state) => ({
    fullMovie:state.moviesLists.searchMovie,
    movies:state.moviesLists.movies
})


let mapDispatchToProps = (dispatch) => {
    return {
        searchMoviesByIDTC: (id) => {
            dispatch(searchMoviesByIDTC(id));
        },
        getMoviesTC: () => {
            dispatch(getMoviesTC());
        },
        addFilmToList: (film) => {
            dispatch(addFilmToList(film));
        },
    }
}


OverlaySearchMovieContainer.propTypes = {
    fullMovie:PropTypes.object,
    searchMoviesByIDTC:PropTypes.func,
    id:PropTypes.string,
    addFilmToList:PropTypes.func,
    getMoviesTC:PropTypes.func,
    movies:PropTypes.array
}

export default connect(mapStateToProps,mapDispatchToProps)(OverlaySearchMovieContainer)