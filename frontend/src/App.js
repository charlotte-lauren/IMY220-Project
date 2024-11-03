// App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Splash from './pages/Splash';
import Landing from './pages/Landing';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Friends from './pages/Friends';
import Playlist from './pages/Playlist';
import SongLibrary from './pages/SongLibrary';

import Header from './components/Header';

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div className="app">
                    <Header />
                    <Routes>
                        <Route path="/" element={<Splash />} />
                        <Route path="/landing" element={<Landing />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="/profile/:id" element={<Profile />} />
                        <Route path="/friends" element={<Friends />} />
                        <Route path="/playlist/:id" element={<Playlist />} />
                        <Route path="/song-library" element={<SongLibrary />} />
                    </Routes>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
