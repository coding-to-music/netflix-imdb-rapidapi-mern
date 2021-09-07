import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {addFilmToList, changeListTC, getMoviesTC} from "../../redux/listsReducer";
import MainPage from "./MainPage";
import {AuthRedirect} from "../HOC/AuthRedirect";
import {compose} from "redux";
import {logoutTC} from "../../redux/profileReducer";

class MainPageContainer extends React.Component {

    componentDidMount() {
        this.props.getMoviesTC();
    }

    render() {
        return (
            <MainPage profile={this.props.profile} movies={this.props.movies}
                      changeList={this.props.changeList}
                      filters={this.props.filters} logout={this.props.logoutTC}/>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profileInfo.profile,
    movies: state.moviesLists.movies,
    filters: state.filters,
});

let mapDispatchToProps = (dispatch) => {
    return {
        changeList: (button, id) => {
            dispatch(changeListTC(button, id));
        },
        getMoviesTC: () => {
            dispatch(getMoviesTC());
        },
        addFilmToList,
        logoutTC: () => {
            dispatch(logoutTC());
        },
    }
}

MainPageContainer.propTypes = {
    profile: PropTypes.object,
    movies: PropTypes.array,
    changeList: PropTypes.func,
    filters: PropTypes.object,
    getMoviesTC: PropTypes.func,
    logoutTC: PropTypes.func,
}


export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    AuthRedirect)(MainPageContainer);
