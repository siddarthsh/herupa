import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import UserMenu from "./UserMenu";
import Search from '@carbon/icons-react/es/search/20';
import Saved from '@carbon/icons-react/es/bookmark/20';
import Help from '@carbon/icons-react/es/help/20';


class UserNav extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };
  render() {
    const isMobile = window.innerWidth <= 600;
    if (isMobile) {
      return (
        <div>Hello</div>
      )

  }
  else {
    if (this.props.auth.isAuthenticated) {
      return (
        <div className="row mr-1">
          {/* SEARCH BUTTON ----------------------------------------- */}
          <Link to="/login" className="nav-link">
          <Search className="nav-svg" />
            Search
          </Link>          
          {/* SAVED BUTTON ----------------------------------------- */}
          <Link to="/login" className="nav-link">
          <Saved className="nav-svg" />
           Saved
          </Link>          
          {/* HELP BUTTON ----------------------------------------- */}
          <Link to="/login" className="nav-link">          
          <Help className="nav-svg" />
            Help
          </Link>          
          {/* PROFILE BUTTON ----------------------------------------- */}
          
          <UserMenu />
          {/* SIGN OUT BUTTON ----------------------------------------- */}
          <button onClick={this.onLogoutClick} className="btn btn-primary">
            Sign Out
          </button>
        </div>
      );
    } else {
      return (
        <div className="row mr-1">
          {/* SIGN IN BUTTON ----------------------------------------- */}
          <Link to="/login" className="nav-link">
            Sign In
          </Link>
          {/* SIGN UP BUTTON ----------------------------------------- */}
          <Link to="/register" className="btn btn-primary">
            Sign Up
          </Link>
        </div>
      );
    }
  }
}
}

UserNav.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { logoutUser }
)(UserNav);
