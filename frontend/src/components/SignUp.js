// frontend/src/components/SignUp.js

import React from 'react';
import '../../public/assets/css/index.css';

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

        // You might want to add additional checks for email format and password length here

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
            <section className="signup-form bg-white p-6 rounded-lg shadow-md">
                <form onSubmit={this.handleSubmit}>
                    <h2 className="text-3xl font-playfair text-center text-coral mb-4">Sign Up</h2>
                    {this.state.error && (
                        <p className="error-message text-red-500" aria-live="assertive">{this.state.error}</p>
                    )}
                    {this.state.success && (
                        <p className="success-message text-green-500" aria-live="polite">{this.state.success}</p>
                    )}
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-roboto">Name:</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            value={this.state.name}
                            onChange={this.handleInputChange}
                            required
                            className="border border-gray-300 rounded w-full p-2"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="username" className="block text-sm font-roboto">Username:</label>
                        <input
                            type="text"
                            name="username"
                            id="username"
                            value={this.state.username}
                            onChange={this.handleInputChange}
                            required
                            className="border border-gray-300 rounded w-full p-2"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-roboto">Email:</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={this.state.email}
                            onChange={this.handleInputChange}
                            required
                            className="border border-gray-300 rounded w-full p-2"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="dateOfBirth" className="block text-sm font-roboto">Date of Birth:</label>
                        <input
                            type="date"
                            name="dateOfBirth"
                            id="dateOfBirth"
                            value={this.state.dateOfBirth}
                            onChange={this.handleInputChange}
                            className="border border-gray-300 rounded w-full p-2"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-sm font-roboto">Password:</label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            value={this.state.password}
                            onChange={this.handleInputChange}
                            required
                            className="border border-gray-300 rounded w-full p-2"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="confirmPassword" className="block text-sm font-roboto">Confirm Password:</label>
                        <input
                            type="password"
                            name="confirmPassword"
                            id="confirmPassword"
                            value={this.state.confirmPassword}
                            onChange={this.handleInputChange}
                            required
                            className="border border-gray-300 rounded w-full p-2"
                        />
                    </div>
                    <button type="submit" className="bg-coral text-white font-bold py-2 px-4 rounded hover:bg-pink transition">
                        Sign Up
                    </button>
                </form>
            </section>
        );
    }
}

export default SignUp;
