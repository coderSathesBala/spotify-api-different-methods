import logo from './logo.svg';
import './App.css';
import PersonList from './components/axios-library.js'


function App() {
  return (
        <div>
          <PersonList />
          <h1>DISPLAY ARTIST NAME:</h1>
          <h1>DISPLAY ARTIST PICTURE:</h1>
          <h1>DISPLAY ARTIST ALBUM:</h1>
          <h1>DISPLAY ALBUM PICTURE:</h1>
          <h1>DISPLAY ALBUM TRACKLIST:</h1>
          <h1>DISPLAY ALBUM INFO:</h1>
        </div>
  );
}

export default App;
