// yarn add react-router-dom
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate,
} from "react-router-dom";
import HomePage from "../pages/Home/Home";
import Login from "../pages/Login/Login";

const AppRoutes = () => {
    return(
        <Router>
            <Routes>
                <Route exact path="/login" element={<Login/>} />
                <Route exact path="/login" element={<HomePage/>} />
            </Routes>
        </Router>
    )
};

export default AppRoutes;

