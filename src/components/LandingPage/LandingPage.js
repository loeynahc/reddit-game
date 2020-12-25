/**
 * The home page of the website
 */
import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import "./LandingPage.css";

class LandingPage extends Component {

    render() {
        return (
            <>
                <h1> Hello world </h1>
            </>
        );
    }
}

export default withRouter(LandingPage);