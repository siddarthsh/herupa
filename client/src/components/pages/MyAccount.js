import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class MyAccount extends Component {
  render() {
    const { user } = this.props.auth;
    const isMobile = window.innerWidth <= 3000;
    if (isMobile) {
      return (
        <div className="main-content bg-fixed-bottom">
          <div className="header">
            <div className="container">
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
            <div className="row">
              <div className="container">
                 <div className="col-12 col-lg-6 col-xl">
                <div className="card">
                  <div className="card-body">
                    <div className="row align-items-center">
                      <div className="col">
                       <h6 className="card-title text-uppercase text-muted mb-2">
                       Budget
                       </h6>
                       <span className="h2 mb-0">
                       $24,500
                       </span>
                       <span className="badge badge-soft-success mt-n1">
                        +3.5%
                       </span>
                      </div>
                      <div className="col-auto">
                       <span className="h2 fe fe-dollar-sign text-muted mb-0"></span>
                      </div>
                    </div>
                  </div>
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

MyAccount.propTypes = {
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  {}
)(MyAccount);
