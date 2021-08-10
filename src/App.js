import React from "react";
import './App.css';
import Header from "./components/header/Header";
import {Route} from "react-router-dom";
import ProfilePage from "./components/profile_page/ProfilePage";
import SearchPage from "./components/search_page/SearchPage";

function App() {
    return (
        <div className="wrapper">
            <Header/>
            <div className="content">
                <Route path={'/profilePage'}
                       render={() => <ProfilePage/>}/>
                <Route path={'/searchPage'}
                       render={() => <SearchPage/>}/>
            </div>
        </div>
    );
}

export default App;
