import React from "react";
import "./ProfilePageContainer.scss"
import ProfileInformation from "./profile_information/ProfilePage";
import MoviesPage from "./movies_page/MoviesPage";
import {Route} from "react-router-dom";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {changeListAC} from "../../redux/listsReducer";




class ProfilePageContainer extends React.Component {

    render() {
        return (
            <div className={'profile-page-wrapper'}>
                <ProfileInformation profile={this.props.profile}/>
                <div>
                    <Route path={'/profilePage/current'}
                           render={() => <MoviesPage text={'Current'} films={this.props.films} changeList={this.props.changeList} filters={this.props.filters}/>} />
                    <Route path={'/profilePage/planning'}
                           render={() => <MoviesPage text={'Planning'} films={this.props.films} changeList={this.props.changeList} filters={this.props.filters}/>}/>
                    <Route path={'/profilePage/completed'}
                           render={() => <MoviesPage text={'Completed'} films={this.props.films} changeList={this.props.changeList} filters={this.props.filters}/>}/>
                    <Route path={'/profilePage/paused'}
                           render={() => <MoviesPage text={'Paused'} films={this.props.films} changeList={this.props.changeList} filters={this.props.filters}/>}/>
                    <Route path={'/profilePage/dropped'}
                           render={() => <MoviesPage text={'Dropped'} films={this.props.films} changeList={this.props.changeList} filters={this.props.filters}/>}/>
                </div>
            </div>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profileInfo.profile,
    films: state.filmLists.films,
    filters: state.filters,
});

let mapDispatchToProps = (dispatch) => {
    return {
        changeList : (button,id) => {
            dispatch(changeListAC(button,id));
        }

    }
}

ProfilePageContainer.propTypes = {
    profile: PropTypes.object,
    films: PropTypes.array,
    changeList: PropTypes.func,
    filters: PropTypes.object,
}


export default connect(mapStateToProps,mapDispatchToProps)(ProfilePageContainer);