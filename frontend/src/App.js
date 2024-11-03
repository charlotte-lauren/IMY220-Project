//Charlotte Green u21434965
// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Splash from './pages/Splash';
import Landing from './pages/Landing';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Friends from './pages/Friends';
import Playlist from './pages/Playlist';
import SongLibrary from './pages/SongLibrary';
import Notifications from './pages/Notifications';
import Header from './components/Header';

class App extends React.Component {
    render() {
        return (
            <Router>
                <div className="app">
                    <Header /> {/* Display the header on all pages */}
                    <Switch>
                        <Route exact path="/" component={Splash} />
                        <Route path="/landing" component={Landing} />
                        <Route path="/home" component={Home} />
                        <Route path="/profile" component={Profile} />
                        <Route path="/friends" component={Friends} />
                        <Route path="/playlist" component={Playlist} />
                        <Route path="/song-library" component={SongLibrary} />
                        <Route path="/notifications" component={Notifications} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
