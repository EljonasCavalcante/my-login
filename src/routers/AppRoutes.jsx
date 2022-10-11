// yarn add react-router-dom

import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate,
} from "react-router-dom";
import HomePage from "../pages/Home/Home";
import LoginPage from "../pages/Login/Login";
import { AuthProvicer } from "../contexts/auth";

const AppRoutes = () => {
    return(
        <Router>
            <AuthProvicer>
                <Routes>
                    <Route exact path="/login" element={<LoginPage/>} />
                    <Route exact path="/" element={<HomePage/>} />
                </Routes>
            </AuthProvicer>
        </Router>
    )
};

export default AppRoutes;

