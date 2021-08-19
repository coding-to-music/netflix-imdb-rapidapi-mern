import React from 'react'
import './MainPage.scss'
import ProfileInformation from "./profile_information/ProfilePage";
import {Route} from "react-router-dom";
import MoviesPage from "./movies_page/MoviesPage";
import PropTypes from "prop-types";


const MainPage = (props) => {
    return (
        <div className={'profile-page-wrapper'}>
            <ProfileInformation profile={props.profile}/>
            <div>
                <Route path={'/profilePage/current'}
                       render={() => <MoviesPage text={'Current'} movies={props.movies}
                                                 changeList={props.changeList}
                                                 filters={props.filters}/>}/>
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
    filters: PropTypes.object,
}

export  default MainPage;