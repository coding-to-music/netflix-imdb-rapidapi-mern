import React from "react";
import "./ProfilePage.scss"
import ProfileInformation from "./profile_information/ProfileInformation";
import MoviesPage from "./movies_page/MoviesPage";
import {Route} from "react-router-dom";


const ProfilePage = () => {
    return (
        <div className={'profile-page-wrapper'}>
            <ProfileInformation/>
            <div>
                <Route path={'/profilePage/current'}
                       render={() => <MoviesPage text={'Current'}/>}/>
                <Route path={'/profilePage/planning'}
                       render={() => <MoviesPage text={'Planning'}/>}/>
                <Route path={'/profilePage/completed'}
                       render={() => <MoviesPage text={'Completed'}/>}/>
                <Route path={'/profilePage/paused'}
                       render={() => <MoviesPage text={'Paused'}/>}/>
                <Route path={'/profilePage/dropped'}
                       render={() => <MoviesPage text={'Dropped'}/>}/>
            </div>
        </div>
    )
}

export default ProfilePage;