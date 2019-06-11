import React, { Component } from "react";

class Landing extends Component {
  render() {
    return (
      <div style={{ height: "75vh" }} className="container valign-wrapper">
        <div className="row">
          <div className="col s12 center-align">
            <h4>
              <b>MERN</b> application built with
                <br />
                <span style={{ fontFamily: "monospace" }}>Reactjs</span>,
                <span style={{ fontFamily: "monospace" }}> Nodejs</span> and
                <span style={{ fontFamily: "monospace" }}> MongoDB</span>
            </h4>
            <p className="flow-text grey-text text-darken-1">
              Still underconstruction
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
