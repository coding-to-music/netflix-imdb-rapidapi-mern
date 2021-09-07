import React from 'react'
import './MainPage.scss'
import {Route} from "react-router-dom";
import MoviesPage from "./movies_page/MoviesPage";
import PropTypes from "prop-types";
import ProfilePage from "./profile_information/ProfilePage";


const MainPage = (props) => {
    return (
        <div className={'profile-page-wrapper'}>
            <ProfilePage profile={props.profile} logout={props.logout}/>
            <div>
                <Route path={'/profilePage/current'}
                       render={() => <MoviesPage text={'Current'} movies={props.movies}
                                                 changeList={props.changeList}
                                                 filters={props.filters} />}/>
                <Route path={'/profilePage/planning'}
                       render={() => <MoviesPage text={'Planning'} movies={props.movies}
                                                 changeList={props.changeList}
                                                 filters={props.filters}/>}/>
                <Route path={'/profilePage/completed'}
                       render={() => <MoviesPage text={'Completed'} movies={props.movies}
                                                 changeList={props.changeList}
                                                 filters={props.filters}/>}/>
                <Route path={'/profilePage/paused'}
                       render={() => <MoviesPage text={'Paused'} movies={props.movies}
                                                 changeList={props.changeList}
                                                 filters={props.filters}/>}/>
                <Route path={'/profilePage/dropped'}
                       render={() => <MoviesPage text={'Dropped'} movies={props.movies}
                                                 changeList={props.changeList}
                                                 filters={props.filters}/>}/>
            </div>
        </div>
    )
}


MainPage.propTypes = {
    profile: PropTypes.object,
    movies: PropTypes.array,
    changeList: PropTypes.func,
    logout: PropTypes.func,
    filters: PropTypes.object,

}

export  default MainPage;