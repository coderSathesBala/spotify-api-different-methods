import logo from './logo.svg';
import './App.css';
import PersonList from './components/axios-library.js';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


function App() {
  return (
        <div>
          <PersonList />
        </div>
  );
}

export default App;