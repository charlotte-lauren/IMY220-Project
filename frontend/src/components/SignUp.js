// frontend/src/components/SignUp.js

import React from 'react';

class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            confirmPassword: '',
            name: '',
            dateOfBirth: '',
            error: '',
            success: ''
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const { name, value } = event.target;
        this.setState({ [name]: value, error: '', success: '' });
    }

    async handleSubmit(event) {
        event.preventDefault();
        const { username, email, password, confirmPassword, name, dateOfBirth } = this.state;

        if (password !== confirmPassword) {
            this.setState({ error: 'Passwords do not match.' });
            return;
        }

        try {
            const response = await fetch('/api/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, email, password, name, dateOfBirth }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || 'Sign up failed. Please try again.');
            }

            const userData = await response.json();
            this.setState({ success: 'Sign up successful! Please log in.' });
            this.resetForm();

        } catch (error) {
            this.setState({ error: error.message });
        }
    }

    resetForm() {
        this.setState({
            username: '',
            email: '',
            password: '',
            confirmPassword: '',
            name: '',
            dateOfBirth: '',
            error: '',
            success: ''
        });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="signup-form">
                <h2>Sign Up</h2>
                {this.state.error && <p className="error-message">{this.state.error}</p>}
                {this.state.success && <p className="success-message">{this.state.success}</p>}
                <div>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        value={this.state.name}
                        onChange={this.handleInputChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        name="username"
                        id="username"
                        value={this.state.username}
                        onChange={this.handleInputChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={this.state.email}
                        onChange={this.handleInputChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="dateOfBirth">Date of Birth:</label>
                    <input
                        type="date"
                        name="dateOfBirth"
                        id="dateOfBirth"
                        value={this.state.dateOfBirth}
                        onChange={this.handleInputChange}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        value={this.state.password}
                        onChange={this.handleInputChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="confirmPassword">Confirm Password:</label>
                    <input
                        type="password"
                        name="confirmPassword"
                        id="confirmPassword"
                        value={this.state.confirmPassword}
                        onChange={this.handleInputChange}
                        required
                    />
                </div>
                <button type="submit">Sign Up</button>
            </form>
        );
    }
}

export default SignUp;
