/*
Sign up Form (contains all the information required / inputs to sign up, the
sign up functionality does not need to be implemented yet)
*/

// SignUpForm.js

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
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    handleSubmit(event) {
        event.preventDefault();
        // Implement sign up functionality here
        console.log('Signing up with:', this.state);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="signup-form">
                <h2>Sign Up</h2>
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
                        name="newUsername"
                        id="newUsername"
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
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        name="newPassword"
                        id="newPassword"
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
