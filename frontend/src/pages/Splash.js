import React from 'react';
import LogIn from '../components/LogIn';
import SignUp from '../components/SignUp';
import Header from '../components/Header';
import '../../public/assets/css/index.css';

class Splash extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showLogIn: true,
        };

        this.toggleForm = this.toggleForm.bind(this);
    }

    toggleForm() {
        this.setState((prevState) => ({
            showLogIn: !prevState.showLogIn,
        }));
    }

    render() {
        const { showLogIn } = this.state;

        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-cream">
                <header>
                    <Header />
                </header>
                <h1 className="text-5xl font-playfair text-coral mb-2">Notefy</h1>
                <h2 className="text-2xl font-roboto text-salmon mb-6">Sound Connections</h2>
                <main className="splash-content text-center p-4">
                    <section className="info-section mb-6">
                        <p className="text-salmon text-lg font-roboto">
                            Join us to explore, create, and share your favorite playlists with friends.
                        </p>
                    </section>
                    <section className="form-section bg-white rounded-lg shadow-lg p-6">
                        {showLogIn ? (
                            <>
                                <LogIn />
                                <p className="mt-4">
                                    Don't have an account?{' '}
                                    <button 
                                        className="text-pink underline" 
                                        onClick={this.toggleForm} 
                                        aria-label="Switch to Sign Up form">
                                        Sign Up
                                    </button>
                                </p>
                            </>
                        ) : (
                            <>
                                <SignUp />
                                <p className="mt-4">
                                    Already have an account?{' '}
                                    <button 
                                        className="text-pink underline" 
                                        onClick={this.toggleForm} 
                                        aria-label="Switch to Log In form">
                                        Log In
                                    </button>
                                </p>
                            </>
                        )}
                    </section>
                </main>
            </div>
        );
    }
}

export default Splash;
