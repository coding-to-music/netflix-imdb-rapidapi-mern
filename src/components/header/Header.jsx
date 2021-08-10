import React from "react";
import "./Header.scss"
import logo from '../../pictures/0001-5606001556_20210809_103223_0000.png'
import {NavLink} from "react-router-dom";
import SearchInput from "../common/search_input/SearchInput";


const Header = () => {
    return (
        <div className={'header'}>
            <div>
                <NavLink to={'/profilePage/current'}>
                    <img className={'logo'} alt='logo' src={logo}/>
                </NavLink>
            </div>
            <div className={'search-input'}>
                <SearchInput/>
            </div>
            <div className={'profile-icon'}>
                <NavLink to={'/profilePage/current'}>
                    <div className={'profile-icon'}/>
                </NavLink>
            </div>
        </div>
    )
}

export default Header;