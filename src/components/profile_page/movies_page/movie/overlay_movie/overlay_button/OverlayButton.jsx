import React from "react";
import './OverlayButton.scss'


const OverlayButton = () => {
    return(
        <div className={'buttons'}>
            <div>Current</div>
            <div>Planning</div>
            <div>Completed</div>
            <div>Paused</div>
            <div>Dropped</div>
        </div>
    )
}


export default OverlayButton;