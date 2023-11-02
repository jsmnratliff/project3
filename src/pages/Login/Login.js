import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            <h1>Login Page</h1>
            <button>
                <Link to="/profile">Log In</Link>
            </button>
        </div>
    );
};

export default Login;