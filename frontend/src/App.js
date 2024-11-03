// App.js
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Splash from './pages/Splash';
import Landing from './pages/Landing';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Friends from './pages/Friends';
import Playlist from './pages/Playlist';
import SongLibrary from './pages/SongLibrary';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Splash />
    },
    {
        path: "/landing",
        element: <Landing />
    },
    {
        path: "/home",
        element: <Home />
    },
    {
        path: "/profile",
        element: <Profile /> // Add default profile route
    },
    {
        path: "/profile/:profileId",
        element: <Profile />
    },
    {
        path: "/friends",
        element: <Friends />
    },
    {
        path: "/playlist",
        element: <Playlist /> // Add default playlist route
    },
    {
        path: "/playlist/:playlistId",
        element: <Playlist />
    },
    {
        path: "/song-library",
        element: <SongLibrary />
    }
]);

class App extends React.Component {
    render() {
        return (
            <RouterProvider router={router}>
            </RouterProvider>
        );
    }
}

export default App;
