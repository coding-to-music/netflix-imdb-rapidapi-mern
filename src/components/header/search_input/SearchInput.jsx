import React from "react";
import './SearchInput.scss'
import {FiSearch} from 'react-icons/fi'
import {NavLink, useHistory} from "react-router-dom";


const SearchInput = () => {

    const history = useHistory();

    function handleClick(e) {
        if (e.key === 'Enter') {
            history.push('/searchPage');
        }
    }

    return (
        <div className={'search'}>
            <div className={'form'}>
                <input type={'text'} placeholder={'Search..'} onKeyDown={handleClick}/>
                <button type={'button'}>
                    <NavLink to={'/searchPage'}>
                        <FiSearch size={28}/>
                    </NavLink>
                </button>
            </div>
        </div>
    )
}


export default SearchInput;