import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {changeListAC, getMoviesTC} from "../../redux/listsReducer";
import MainPage from "./MainPage";

class MainPageContainer extends React.Component {

    componentDidMount() {
        this.props.getMoviesTC();
    }

    render() {
        return (
            <MainPage profile={this.props.profile} movies={this.props.movies}
                      changeList={this.props.changeList}
                      filters={this.props.filters}/>
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
            dispatch(changeListAC(button, id));
        },
        getMoviesTC: () => {
            dispatch(getMoviesTC());
        },
    }
}

MainPageContainer.propTypes = {
    profile: PropTypes.object,
    movies: PropTypes.array,
    changeList: PropTypes.func,
    filters: PropTypes.object,
    getMoviesTC:PropTypes.func
}


export default connect(mapStateToProps, mapDispatchToProps)(MainPageContainer);