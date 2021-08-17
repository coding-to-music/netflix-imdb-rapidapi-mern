import React from "react";
import "./Header.scss"
import logo from '../../pictures/0001-5606001556_20210809_103223_0000.png'
import {NavLink} from "react-router-dom";
import SearchInput from "./search_input/SearchInput";
import PropTypes from "prop-types";


const Header = (props) => {
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
                    <div className={'profile-icon'}>
                        <img className={'profile-icon'} alt={'Profile photo'} src={props.profile.photo}/>
                    </div>
                </NavLink>
            </div>
        </div>
    )
}

Header.propTypes = {
    profile:PropTypes.object,
}

export default Header;