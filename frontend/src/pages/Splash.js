import React from 'react';
import LogIn from '../components/LogIn';
import SignUp from '../components/SignUp';

class Splash extends React.Component {
    render() {
        return (
            <div className="splash-page">
                <header className="splash-header">
                    <h1>Notefy</h1>
                    <h2 className="tagline">Sound Connections</h2>
                </header>
                <main className="splash-content">
                    <section className="info-section">
                        <p>
                            Join us to explore, create, and share your favorite playlists with friends.
                        </p>
                    </section>
                    <section className="form-section">
                        <LogIn />
                        <SignUp />
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