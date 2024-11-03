import React from 'react';

class Landing extends React.Component {
    render() {
        return (
            <div className="landing-page">
                <header className="landing-header">
                    <h1>Welcome to Notefy</h1>
                    <p className="tagline">Sound Connections</p>
                </header>
                <main className="landing-content">
                    <section className="section discover">
                        <h2>Discover New Music</h2>
                        <p>Find playlists curated just for you and explore new genres.</p>
                    </section>
                    <section className="section create">
                        <h2>Create Your Own Playlists</h2>
                        <p>Share your musical tastes with friends and the world.</p>
                    </section>
                    <section className="section connect">
                        <h2>Connect with Others</h2>
                        <p>Follow friends and discover what they are listening to.</p>
                    </section>
                </main>
                <footer className="landing-footer">
                    <p>&copy; 2024 Notefy. Join us and start your musical journey today!</p>
                </footer>
            </div>
        );
    }
}

export default Landing;
