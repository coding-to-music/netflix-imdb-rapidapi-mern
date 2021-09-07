import React from "react";
import './App.css';
import {Route} from "react-router-dom";
import ProfilePageContainer from "./components/main_page/MainPageContainer";
import HeaderContainer from "./components/header/HeaderContainer";
import SearchPageContainer from "./components/search_page/SearchPageContainer";
import Landing from "./components/landing/Landing";

function App() {
    require('dotenv').config()
    return (
        <div className="wrapper">
            <HeaderContainer/>
            <div className="content">
                <Route path={'/profilePage'}
                       render={() => <ProfilePageContainer/>}/>
                <Route path={'/searchPage'}
                       render={() => <SearchPageContainer/>}/>
                <Route path={'/landing'}
                       render={() => <Landing/>}/>
            </div>
        </div>
    );
}

export default App;
