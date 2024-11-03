/**
 * Login Form (contains all the information / inputs required to log in, the login
functionality does not need to be implemented yet)
 */

import React from 'react';

class LogIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            error: '',
            success: ''
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    async handleSubmit(event) {
        event.preventDefault();
        const { username, password } = this.state;

        try {
            const response = await fetch('/api/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            if (!response.ok) {
                throw new Error('Login failed. Please check your credentials.');
            }

            const userData = await response.json();
            // Handle successful login (e.g., redirect, save user data, etc.)
            console.log('Login successful:', userData);
            this.setState({ success: 'Login successful!' });
            // You can redirect the user or update the application state here

        } catch (error) {
            this.setState({ error: error.message });
        }
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="login-form">
                <h2>Login</h2>
                {this.state.error && <p className="error-message">{this.state.error}</p>}
                {this.state.success && <p className="success-message">{this.state.success}</p>}
                <div>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        name="username1"
                        id="username1"
                        value={this.state.username}
                        onChange={this.handleInputChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password1"
                        name="password1"
                        id="password"
                        value={this.state.password}
                        onChange={this.handleInputChange}
                        required
                    />
                </div>
                <button type="submit">Login</button>
            </form>
        );
    }
}

export default LogIn;
