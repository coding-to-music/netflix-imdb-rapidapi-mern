import React from "react";
import {connect} from "react-redux";
import {searchMoviesByIDTC} from "../../../../redux/listsReducer";
import OverlaySearchMovie from "./OverlaySearchMovie";
import PropTypes from "prop-types";
import Preloader from "../../../common/preloader/Preloader";


class OverlaySearchMovieContainer extends React.Component{


    componentDidMount() {
        this.props.searchMoviesByIDTC(this.props.id)
    }

    render() {
        if (this.props.id === this.props.fullMovie.imdbID){
            return (
                <OverlaySearchMovie movie={this.props.fullMovie} />
            );
        }else return <Preloader/>

    }
}

let mapStateToProps = (state) => ({
    fullMovie:state.moviesLists.searchMovie
})


let mapDispatchToProps = (dispatch) => {
    return {
        searchMoviesByIDTC: (id) => {
            dispatch(searchMoviesByIDTC(id));
        },
    }
}


OverlaySearchMovieContainer.propTypes = {
    fullMovie:PropTypes.object,
    searchMoviesByIDTC:PropTypes.func,
    id:PropTypes.string
}

export default connect(mapStateToProps,mapDispatchToProps)(OverlaySearchMovieContainer)