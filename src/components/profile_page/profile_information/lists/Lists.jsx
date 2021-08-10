import React from "react";
import './Lists.scss'
import {FiPause, FiTrash,FiPlayCircle,FiCheck,FiCalendar} from 'react-icons/fi'
import {NavLink} from "react-router-dom";

const Lists = () => {
    return (
        <div className={'lists'}>
            <NavLink to={'/profilePage/current'}>
                <div><FiPlayCircle/> Current</div>
            </NavLink>
            <NavLink to={'/profilePage/planning'}>
                <div><FiCalendar/> Planning</div>
            </NavLink>
            <NavLink to={'/profilePage/completed'}>
                <div><FiCheck/> Completed</div>
            </NavLink>
            <NavLink to={'/profilePage/paused'}>
                <div><FiPause/> Paused</div>
            </NavLink>
            <NavLink to={'/profilePage/dropped'}>
                <div><FiTrash/> Dropped</div>
            </NavLink>
        </div>
    )
}

export default Lists;