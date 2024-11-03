/*
Header / Navigation Component (contains your page routing - the ‘navbar’ and
must be present on all pages besides the Splash page)
*/

// Header.js

import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isMobileMenuOpen: false,
        };

        // Binding methods
        this.toggleMobileMenu = this.toggleMobileMenu.bind(this);
    }

    toggleMobileMenu() {
        this.setState(prevState => ({
            isMobileMenuOpen: !prevState.isMobileMenuOpen,
        }));
    }

    render() {
        const { isMobileMenuOpen } = this.state;
        const { user } = this.props; // Assuming user prop contains user information

        return (
            <header className="header">
                <nav className="navbar">
                    <div className="logo">
                        <Link to="/">Notefy</Link>
                    </div>

                    <div className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
                        <ul>
                            <Link to="/home">Home</Link>
                            <Link to="/friends">Friends</Link>
                            <Link to="/song-library">Song Library</Link>
                            <Link to="/notifications">Notifications</Link>
                            <Link to="/profile">Profile</Link>
                            <Link to="/playlist">Playlist</Link>
                        </ul>
                    </div>

                    <button className="mobile-menu-toggle" onClick={this.toggleMobileMenu}>
                        {isMobileMenuOpen ? 'Close' : 'Menu'}
                    </button>
                </nav>
            </header>
        );
    }
}

export default Header;
