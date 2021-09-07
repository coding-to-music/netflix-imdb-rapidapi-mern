import React from "react";
import './PersonalInformation.scss'
import PropTypes from "prop-types";


const PersonalInformation = (props) => {
    return(
        <div className={'person'}>
            <div className={'avatar'}><img referrerPolicy={"no-referrer"} className={'avatar'} src={props.profile.picture} alt={'Profile photo'}/></div>
            <div className={'name'}>{props.profile.name}</div>
            <div className={'email'}>{props.profile.email}</div>
        </div>
    )
}

PersonalInformation.propTypes = {
    profile: PropTypes.object,
}


export default PersonalInformation;