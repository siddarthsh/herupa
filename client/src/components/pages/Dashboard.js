import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class Dashboard extends Component {
  render() {
    const { user } = this.props.auth;
    const isMobile = window.innerWidth <= 3000;
    if (isMobile) {
      return (
        <div className="main-content bg-fixed-bottom">
          <div className="header">
            <div className="container-fluid">
              <div className="header-body">
                <div className="row align-items-end">
                  <div className="col">
                    <h6 className="header-pretitle">DASHBOARD</h6>

                    <h1 className="header-title">
                      <b>Hey there,</b> {user.rollno} 👏
                    </h1>
                  </div>
                  <div className="col-auto" />
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <div className="header">
            <div className="container-fluid">
              <div className="header-body">
                <div className="row align-items-end">
                  <div className="col">
                    <h6 className="header-pretitle">Overview</h6>
                    <h1 className="header-title">Home</h1>
                  </div>
                  <div className="col-auto" />
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

Dashboard.propTypes = {
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  {}
)(Dashboard);
