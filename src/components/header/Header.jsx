import React from "react";
import "./Header.scss"
import logo from '../../pictures/0001-5606001556_20210809_103223_0000.png'
import {NavLink, Redirect} from "react-router-dom";
import SearchInput from "./search_input/SearchInput";
import PropTypes from "prop-types";
import Login from "./Login";


const Header = (props) => {
    return (
        <div className={'header'}>
            <div>
                <NavLink to={'/profilePage/current'}>
                    <img className={'logo'} alt='logo' src={logo}/>
                </NavLink>
            </div>
            {props.isAuth ?
                <div className={'search-input'}>
                    <SearchInput searchMovies={props.searchMovies}/>
                </div>
                : null
            }
            {props.isAuth
                ?
                <div>
                    <Redirect to={'/profilePage/current'}/>
                    <div className={'profile-icon'}>
                        <NavLink to={'/profilePage/current'}>
                            <div className={'profile-icon'}>
                                <img referrerPolicy={"no-referrer"} className={'profile-icon'}
                                     src={props.profile.picture}
                                     alt={'profile photo'}/>
                            </div>
                        </NavLink>
                    </div>
                </div>
                : <div className={'google-login'}>
                    <Login handleLogin={props.handleLogin}/>
                </div>
            }
        </div>
    )
}

Header.propTypes = {
    profile: PropTypes.object,
    searchMovies: PropTypes.func,
    handleLogin: PropTypes.func,
    isAuth: PropTypes.bool
}

export default Header;