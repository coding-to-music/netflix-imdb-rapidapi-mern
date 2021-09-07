import React from "react";
import './OverlaySearchButton.scss'
import PropTypes from "prop-types";
import {Button} from "@material-ui/core";


const OverlaySearchButton = (props) => {


    const setList = (button) => {
        let newFilm = {...props.movie};
        newFilm.list = button;
        props.addFilmToList(newFilm)
    }

    return (
        <div className={'buttons'}>
            <Button className={'button-' + (props.list === 'Current' ? 'active' : 'not')}
                    onClick={() => setList('Current')}>Current</Button>
            <Button className={'button-' + (props.list === 'Planning' ? 'active' : 'not')}
                    onClick={() => setList('Planning')}>Planning</Button>
            <Button className={'button-' + (props.list === 'Completed' ? 'active' : 'not')}
                    onClick={() => setList('Completed')}>Completed</Button>
            <Button className={'button-' + (props.list === 'Paused' ? 'active' : 'not')}
                    onClick={() => setList('Paused')}>Paused</Button>
            <Button className={'button-' + (props.list === 'Dropped' ? 'active' : 'not')}
                    onClick={() => setList('Dropped')}>Dropped</Button>
        </div>
    )
}

OverlaySearchButton.propTypes = {
    text: PropTypes.string,
    changeList: PropTypes.any,
    id: PropTypes.number,
    movie: PropTypes.object,
    addFilmToList:PropTypes.func,
    list:PropTypes.string
}


export default OverlaySearchButton;