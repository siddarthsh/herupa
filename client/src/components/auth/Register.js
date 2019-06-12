import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import classnames from "classnames";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      rollno: "",
      email: "",
      password: "",
      password2: "",
      errors: {}
    };
  }

  componentDidMount() {
    // If logged in and user navigates to Register page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
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

    const newUser = {
      rollno: this.state.rollno,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };

    this.props.registerUser(newUser, this.props.history);
  };

  render() {
    const { errors } = this.state;

    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-5 col-xl-4 my-5">
            <h1 className="display-4 text-center mb-3">Sign up</h1>
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
                    invalid: errors.rollno
                  })}
                />
                <span className="red-text">{errors.rollno}</span>
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  onChange={this.onChange}
                  value={this.state.email}
                  error={errors.email}
                  id="email"
                  type="email"
                  placeholder="name@thapar.edu"
                  className={classnames("form-control", {
                    invalid: errors.email
                  })}
                />
                <span className="red-text">{errors.email}</span>
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  onChange={this.onChange}
                  value={this.state.password}
                  error={errors.password}
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  className={classnames("form-control", {
                    invalid: errors.password
                  })}
                />
                <span className="red-text">{errors.password}</span>
              </div>
              <div className="form-group">
                <label htmlFor="password2">Confirm Password</label>
                <input
                  onChange={this.onChange}
                  value={this.state.password2}
                  error={errors.password2}
                  id="password2"
                  type="password"
                  placeholder="Confirm your password"
                  className={classnames("form-control", {
                    invalid: errors.password2
                  })}
                />
                <span className="red-text">{errors.password2}</span>
              </div>
              <button
                type="submit"
                className="btn btn-lg btn-block btn-primary mb-3"
              >
                Sign up
              </button>
              <div className="text-center">
                <small className="text-muted text-center">
                  Already have an account? <Link to="/login">Sign in</Link>.
                </small>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Register));
