import React from "react";
import './OverlayButton.scss'
import PropTypes from "prop-types";
import {Button} from "@material-ui/core";


const OverlayButton = (props) => {

    const buttonClick = (button) => {
        props.changeList(props.id, button)
    }

    return (
        <div className={'buttons'}>
            <Button className={'button-' + (props.text === 'Current' ? 'active' : 'not')}
                    onClick={() => buttonClick('Current')}>Current</Button>
            <Button className={'button-' + (props.text === 'Planning' ? 'active' : 'not')}
                    onClick={() => buttonClick('Planning')}>Planning</Button>
            <Button className={'button-' + (props.text === 'Completed' ? 'active' : 'not')}
                    onClick={() => buttonClick('Completed')}>Completed</Button>
            <Button className={'button-' + (props.text === 'Paused' ? 'active' : 'not')}
                    onClick={() => buttonClick('Paused')}>Paused</Button>
            <Button className={'button-' + (props.text === 'Dropped' ? 'active' : 'not')}
                    onClick={() => buttonClick('Dropped')}>Dropped</Button>
        </div>
    )
}

OverlayButton.propTypes = {
    text: PropTypes.string,
    changeList: PropTypes.any,
    id: PropTypes.string,
}


export default OverlayButton;