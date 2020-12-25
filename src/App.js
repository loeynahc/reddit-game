import React, { Component } from "react";
import "./App.css";

import Routes from "./components/routes";
// import Header from "./components/Header/Header";
// import AuthContextProvider from "./context/AuthContext";

class App extends Component {
    render() {
        return (
            <>
            <Routes />
            </>
        );
    }
}

export default App;

// <AuthContextProvider>
// <Header/>
// </AuthContextProvider>