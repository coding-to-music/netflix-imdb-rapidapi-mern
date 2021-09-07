import {Auth, handleLogin} from "../api/profileAPI";

const SET_PROFILE_STATE = 'SET_PROFILE_STATE'
const SET_AUTH_TOGGLE = 'SET_AUTH_TOGGLE'

let initialState = {
    profile: {},
    isAuth: false,
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_PROFILE_STATE : {
            return {
                ...state, profile: action.profile, isAuth: true
            }
        }
        case SET_AUTH_TOGGLE : {
            return {
                ...state, isAuth: action.boolean
            }
        }
        default:
            return state
    }
};

export const setProfileStateAC = (profile) => ({type: SET_PROFILE_STATE, profile})
export const setAuthToggleAC = (boolean) => ({type: SET_AUTH_TOGGLE, boolean})

export const handleLoginGoogleTC = (googleData) => {
    return (dispatch) => {
        handleLogin(googleData).then(response => {
            if (response.status === 200) {
                dispatch(setAuthToggleAC(true))
                dispatch(setProfileStateAC(response.data))
            }
        })
    }
}

export const authMeTC = () => {
    return (dispatch) => {
        Auth.authMe().then(response => {
            if (response) {
                dispatch(setAuthToggleAC(true))
                dispatch(setProfileStateAC(response.data.user))
            }
        })
    }
}

export const logoutTC = () => {
    return (dispatch) => {
        Auth.logout();
        dispatch(setAuthToggleAC(false));
    }
}

export default profileReducer;