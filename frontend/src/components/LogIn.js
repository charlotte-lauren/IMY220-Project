// frontend/src/components/LogIn.js

import React from 'react';
import '../../public/assets/css/index.css';

class LogIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            error: '',
            success: '',
            isLoading: false
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
        const { username, password } = this.state;

        this.setState({ isLoading: true }); // Set loading state

        try {
            const response = await fetch('/api/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || 'Login failed. Please check your credentials.');
            }

            const userData = await response.json();
            console.log('Login successful:', userData);
            this.setState({ success: 'Login successful!', isLoading: false });
            // You can redirect the user or update the application state here

        } catch (error) {
            this.setState({ error: error.message, isLoading: false });
        }
    }

    render() {
        const { isLoading } = this.state;

        return (
            <section className="login-form bg-white p-6 rounded-lg shadow-md">
                <form onSubmit={this.handleSubmit}>
                    <h2 className="text-3xl font-playfair text-center text-coral mb-4">Login</h2>
                    {this.state.error && (
                        <p className="error-message text-red-500" aria-live="assertive">{this.state.error}</p>
                    )}
                    {this.state.success && (
                        <p className="success-message text-green-500" aria-live="polite">{this.state.success}</p>
                    )}
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
                    <button type="submit" disabled={isLoading} className="bg-coral text-white font-bold py-2 px-4 rounded hover:bg-pink transition">
                        {isLoading ? 'Logging in...' : 'Login'}
                    </button>
                </form>
            </section>
        );
    }
}

export default LogIn;
