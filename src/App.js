import React from "react";
import './App.css';
import {Route} from "react-router-dom";
import SearchPage from "./components/search_page/SearchPage";
import ProfilePageContainer from "./components/profile_page/ProfilePageContainer";
import HeaderContainer from "./components/header/HeaderContainer";

function App() {
    return (
        <div className="wrapper">
            <HeaderContainer/>
            <div className="content">
                <Route path={'/profilePage'}
                       render={() => <ProfilePageContainer/>}/>
                <Route path={'/searchPage'}
                       render={() => <SearchPage/>}/>
            </div>
        </div>
    );
}

export default App;
