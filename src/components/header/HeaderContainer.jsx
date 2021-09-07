import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {searchMoviesTC} from "../../redux/listsReducer";
import {authMeTC, handleLoginGoogleTC} from "../../redux/profileReducer";


class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.authMeTC();
    }

    render() {
        return (
            <Header profile={this.props.profile} searchMovies={this.props.searchMoviesTC}
                    handleLogin={this.props.handleLoginGoogleTC} isAuth={this.props.isAuth}/>
        )
    }
}


let mapStateToProps = (state) => ({
    profile: state.profileInfo.profile,
    isAuth: state.profileInfo.isAuth

})

let mapDispatchToProps = (dispatch) => {
    return {
        searchMoviesTC: (title) => {
            dispatch(searchMoviesTC(title));
        },
        handleLoginGoogleTC: (googleData) => {
            dispatch(handleLoginGoogleTC(googleData));
        },
        authMeTC: () => {
            dispatch(authMeTC());
        }
    }
}

HeaderContainer.propTypes = {
    profile: PropTypes.object,
    searchMoviesTC: PropTypes.func,
    handleLoginGoogleTC: PropTypes.func,
    authMeTC: PropTypes.func,
    isAuth: PropTypes.bool

}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)