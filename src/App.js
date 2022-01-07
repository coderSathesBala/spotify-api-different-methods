import logo from './logo.svg';
import './App.css';
import PersonList from './components/axios-library.js';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SpotifyGetPlaylists from './components/spotifyGetPlaylists';

function App() {
  return (
        <div>
          <PersonList />
          <SpotifyGetPlaylists />
        </div>
  );
}

export default App;