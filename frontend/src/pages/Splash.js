import React from 'react';
import LogIn from '../components/LogIn';
import Header from '../components/Header';

class Splash extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showLogIn: true, // State to toggle between Log In and Sign Up
        };

        this.toggleForm = this.toggleForm.bind(this);
    }

    toggleForm() {
        this.setState((prevState) => ({
            showLogIn: !prevState.showLogIn, // Toggle the form
        }));
    }

    render() {
        const { showLogIn } = this.state;

        return (
            <div className="splash-page">
                <Header />
                <h1>Notefy</h1>
                <h2 className="tagline">Sound Connections</h2>
                <main className="splash-content">
                    <section className="info-section">
                        <p>
                            Join us to explore, create, and share your favorite playlists with friends.
                        </p>
                    </section>
                    <section className="form-section">
                        {showLogIn ? (
                            <>
                                <LogIn />
                                <p>
                                    Don't have an account? <button onClick={this.toggleForm}>Sign Up</button>
                                </p>
                            </>
                        ) : (
                            <>
                                <SignUp />
                                <p>
                                    Already have an account? <button onClick={this.toggleForm}>Log In</button>
                                </p>
                            </>
                        )}
                    </section>
                </main>
                <footer className="splash-footer">
                    <p>&copy; 2024 Notefy. All rights reserved.</p>
                </footer>
            </div>
        );
    }
}

export default Splash;