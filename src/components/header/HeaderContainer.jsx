import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {searchMoviesTC} from "../../redux/listsReducer";


class HeaderContainer extends React.Component {

    render() {
        return (
            <Header profile={this.props.profile} searchMovies={this.props.searchMoviesTC}/>
        )
    }
}


let mapStateToProps = (state) => ({
    profile: state.profileInfo.profile

})

let mapDispatchToProps = (dispatch) => {
    return {
        searchMoviesTC: (title) => {
            dispatch(searchMoviesTC(title));
        },
    }
}

HeaderContainer.propTypes = {
    profile: PropTypes.object,
    searchMoviesTC: PropTypes.func,
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)