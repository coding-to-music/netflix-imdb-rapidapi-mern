import React from "react";
import GoogleLogin from "react-google-login";
import PropTypes from "prop-types";

const Login = (props) => {
    return (
        <div>
            <GoogleLogin
                clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                buttonText="Log in with Google"
                onSuccess={props.handleLogin}
                onFailure={props.handleLogin}
                cookiePolicy={'single_host_origin'}
            />
        </div>
    )
}


Login.propTypes = {
    handleLogin: PropTypes.func,
}

export default Login;
