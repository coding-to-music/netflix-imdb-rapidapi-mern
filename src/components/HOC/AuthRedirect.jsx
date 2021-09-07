import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

let mapStateToPropsRedirect = (state) => ({
    isAuth: state.profileInfo.isAuth
});

export const AuthRedirect = (Component) => {

    class RedirectComponent extends React.Component {
        render() {
            if (!this.props.isAuth) return <Redirect to={'/landing'}/>
            return <Component {...this.props}/>
        }
    }

    RedirectComponent.propTypes = {
        isAuth: PropTypes.bool,
    }
    return connect(mapStateToPropsRedirect)(RedirectComponent);
}
