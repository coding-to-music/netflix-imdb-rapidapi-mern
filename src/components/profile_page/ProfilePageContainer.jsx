import React from "react";
import "./ProfilePageContainer.scss"
import ProfileInformation from "./profile_information/ProfilePage";
import MoviesPage from "./movies_page/MoviesPage";
import {Route} from "react-router-dom";
import {connect} from "react-redux";
import PropTypes from "prop-types";




class ProfilePageContainer extends React.Component {

    render() {
        return (
            <div className={'profile-page-wrapper'}>
                <ProfileInformation profile={this.props.profile}/>
                <div>
                    <Route path={'/profilePage/current'}
                           render={() => <MoviesPage text={'Current'} film={this.props.film}/>}/>
                    <Route path={'/profilePage/planning'}
                           render={() => <MoviesPage text={'Planning'} film={this.props.film}/>}/>
                    <Route path={'/profilePage/completed'}
                           render={() => <MoviesPage text={'Completed'} film={this.props.film}/>}/>
                    <Route path={'/profilePage/paused'}
                           render={() => <MoviesPage text={'Paused'} film={this.props.film}/>}/>
                    <Route path={'/profilePage/dropped'}
                           render={() => <MoviesPage text={'Dropped'} film={this.props.film}/>}/>
                </div>
            </div>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profileInfo.profile,
    film: state.filmLists.films
});

ProfilePageContainer.propTypes = {
    profile: PropTypes.object,
    film: PropTypes.object,
}


export default connect(mapStateToProps)(ProfilePageContainer);