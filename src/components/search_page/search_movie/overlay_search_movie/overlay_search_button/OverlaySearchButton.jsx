import React from "react";
import './OverlaySearchButton.scss'
import PropTypes from "prop-types";
import {Button} from "@material-ui/core";


const OverlaySearchButton = (props) => {

    const setList = (button) => {
     console.log(button)
    }

    return (
        <div className={'buttons'}>
            <Button className={'button-' + (props.text === 'Current' ? 'active' : 'not')}
                    onClick={() => setList('Current')}>Current</Button>
            <Button className={'button-' + (props.text === 'Planning' ? 'active' : 'not')}
                    onClick={() => setList('Planning')}>Planning</Button>
            <Button className={'button-' + (props.text === 'Completed' ? 'active' : 'not')}
                    onClick={() => setList('Completed')}>Completed</Button>
            <Button className={'button-' + (props.text === 'Paused' ? 'active' : 'not')}
                    onClick={() => setList('Paused')}>Paused</Button>
            <Button className={'button-' + (props.text === 'Dropped' ? 'active' : 'not')}
                    onClick={() => setList('Dropped')}>Dropped</Button>
        </div>
    )
}

OverlaySearchButton.propTypes = {
    text: PropTypes.string,
    changeList: PropTypes.any,
    id: PropTypes.number,
}


export default OverlaySearchButton;