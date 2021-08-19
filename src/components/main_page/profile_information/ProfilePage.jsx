import React from "react";
import "./ProfilePage.scss"
import PersonalInformation from "./personal-iInformation/PersonalInformation";
import Lists from "./lists/Lists";
import PropTypes from "prop-types";


const ProfileInformation = (props) =>{
    return(
        <div className={'profile-information'}>
            <PersonalInformation profile={props.profile}/>
            <Lists/>
            <div className={'log-out'}>Log out</div>
        </div>
    )
}


ProfileInformation.propTypes = {
    profile: PropTypes.object,
}

export default ProfileInformation;