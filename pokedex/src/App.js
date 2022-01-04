<<<<<<< HEAD
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
=======
import {React} from 'react'
import Router from './routes/Router';
import GlobalStyle from './constants/GlobalStyle';
import Header from './components/header/Header';


function App() {
  return (
    <div>
      <GlobalStyle/>
      <Header/>
      <Router/>
>>>>>>> master
    </div>
  );
}

export default App;
