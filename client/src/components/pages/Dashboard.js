import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class Dashboard extends Component {
  render() {
    const { user } = this.props.auth;
    const isMobile = window.innerWidth <= 3000;
    if(isMobile) {
    return (
      <div style={{ height: "75vh" }} className="container valign-wrapper">
        <div className="row">
          <div className="landing-copy col s12 center-align">
            <h4>
              <b>Hey there,</b> {user.rollno}
              <p className="flow-text grey-text text-darken-1">
                You are logged into your{" "}
                <span style={{ fontFamily: "monospace" }}>Herupa</span> Dashboard 👏
              </p>
            </h4>
          </div>
        </div>
      </div>
    );}
    else {
      return (
        <div>
          <div className="header">
           <div className="container-fluid">
            <div className="header-body">
              <div className="row align-items-end">
                <div className="col">
                    <h6 className="header-pretitle">
                      Overview
                    </h6>
                    <h1 className="header-title">
                    Home
                    </h1>
                </div>
                <div className="col-auto">
                </div>
              </div>
            </div> 
           </div>
          </div>

        </div>
      )
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
  mapStateToProps,{}
)(Dashboard);
