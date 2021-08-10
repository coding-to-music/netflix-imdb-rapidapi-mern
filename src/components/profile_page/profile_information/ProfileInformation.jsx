import React from "react";
import "./ProfileInformation.scss"
import PersonalInformation from "./personal-iInformation/PersonalInformation";
import Lists from "./lists/Lists";


const ProfileInformation = () =>{
    return(
        <div className={'profile-information'}>
            <PersonalInformation/>
            <Lists/>
            <div className={'log-out'}>Log out</div>
        </div>
    )
}

export default ProfileInformation;