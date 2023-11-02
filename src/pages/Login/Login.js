import React from 'react';
import { useHistory } from 'react-router-dom';

function Login() {
    const history = useHistory();

    // Define a function to handle the login action
    const handleLogin = () => {
        // You can implement authentication logic here
        // For this example, we're just logging a message
        console.log('User logged in');

        // After successful login, navigate to the profile page
        history.push('/profile');
    };

    return (
        <div>
            <h1>Login Page</h1>
            <button onClick={handleLogin}>Log In</button>
        </div>
    );
}

export default Login;