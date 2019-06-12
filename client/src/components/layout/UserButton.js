import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

class UserButton extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };
  render() {
    if (this.props.auth.isAuthenticated) {
      return (
        <div>
          {/* LOGOUT BUTTON ----------------------------------------- */}
          <button onClick={this.onLogoutClick} className="btn btn-primary">
            Logout
          </button>
        </div>
      );
    } else {
      return (
        <div>
          {/* LOGIN BUTTON ----------------------------------------- */}
          <Link to="/login" className="nav-link">
            Sign In
          </Link>
        </div>
      );
    }
  }
}

UserButton.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { logoutUser }
)(UserButton);
