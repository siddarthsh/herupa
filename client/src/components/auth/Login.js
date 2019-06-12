import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import classnames from "classnames";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      rollno: "",
      password: "",
      errors: {}
    };
  }

  componentDidMount() {
    // If logged in and user navigates to Login page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }

    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const userData = {
      rollno: this.state.rollno,
      password: this.state.password
    };

    this.props.loginUser(userData);
  };

  render() {
    const { errors } = this.state;

    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-5 col-xl-4 my-5">
            <h1 className="display-4 text-center mb-3">Sign in</h1>

            <form noValidate onSubmit={this.onSubmit}>
              <div className="form-group">
                <label htmlFor="rollno">Roll No.</label>
                <input
                  onChange={this.onChange}
                  value={this.state.rollno}
                  error={errors.rollno}
                  id="rollno"
                  type="text"
                  placeholder="101XXXXXX"
                  className={classnames("form-control", {
                    invalid: errors.rollno || errors.rollnonotfound
                  })}
                />
                <span className="red-text">
                  {errors.rollno}
                  {errors.rollnonotfound}
                </span>
              </div>
              <div className="form-group">
                <div className="row">
                  <div className="col">
                    <label>Password</label>
                  </div>
                  <div className="col-auto">
                    <a
                      href="/password-reset"
                      className="form-text small text-muted"
                    >
                      Forgot password?
                    </a>
                  </div>
                </div>
                <input
                  onChange={this.onChange}
                  value={this.state.password}
                  error={errors.password}
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  className={classnames("form-control form-control-appended", {
                    invalid: errors.password || errors.passwordincorrect
                  })}
                />
                <span className="red-text">
                  {errors.password}
                  {errors.passwordincorrect}
                </span>
              </div>
              <button
                type="submit"
                className="btn btn-lg btn-block btn-primary mb-3"
              >
                Sign in
              </button>
              <div className="text-center">
                <small className="text-muted text-center">
                  Don't have an account yet? <Link to="/register">Sign up</Link>
                  .
                </small>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser }
)(Login);
