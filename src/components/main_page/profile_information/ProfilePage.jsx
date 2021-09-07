import React from "react";
import "./ProfilePage.scss"
import PersonalInformation from "./personal-iInformation/PersonalInformation";
import Lists from "./lists/Lists";
import PropTypes from "prop-types";


const ProfilePage = (props) =>{
    return(
        <div className={'profile-information'}>
            <PersonalInformation profile={props.profile}/>
            <Lists/>
            <div onClick={props.logout} className={'log-out'}>Log out</div>
        </div>
    )
}


ProfilePage.propTypes = {
    profile: PropTypes.object,
    logout: PropTypes.func
}

export default ProfilePage;