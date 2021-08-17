import React from "react";
import './PersonalInformation.scss'
import PropTypes from "prop-types";


const PersonalInformation = (props) => {
    return(
        <div className={'person'}>
            <div className={'avatar'}><img className={'avatar'} src={props.profile.photo} alt={'Profile photo'}/></div>
            <div className={'name'}>{props.profile.name}</div>
        </div>
    )
}

PersonalInformation.propTypes = {
    profile: PropTypes.object,
}


export default PersonalInformation;