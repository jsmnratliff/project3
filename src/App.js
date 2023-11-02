import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Login from './pages/Login/Login';
import Profile from './pages/Profile/Profile';

function App() {
    return (
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                    <li>
                        <Link to="/profile">Profile</Link>
                    </li>
                </ul>

                <hr />

                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/profile">
                    <Profile />
                </Route>
            </div>
        </Router>
    );
}

export default App;