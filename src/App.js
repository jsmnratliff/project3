import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

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

                <Switch>
                    <Route exact path="/login">
                        <Login />
                    </Route>
                    <Route exact path="/profile">
                        <Profile />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;