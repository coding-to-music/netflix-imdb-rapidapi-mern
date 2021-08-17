import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import PropTypes from "prop-types";


class HeaderContainer extends React.Component {
    render() {
        return (
            <Header profile={this.props.profile}/>
        )
    }
}


let mapStateToProps = (state) => ({
    profile: state.profileInfo.profile

})

HeaderContainer.propTypes = {
   profile:PropTypes.object,
}

export default connect(mapStateToProps)(HeaderContainer)