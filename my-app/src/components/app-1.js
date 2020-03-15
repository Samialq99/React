import React from "react";
import logo from "../logo.svg";
import "../App.css";

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

        <div className="container-fluid p-3 my-3 bg-primary text-white">
          <h1>My First Bootstrap Page</h1>
          <p>This is some text.</p>
        </div>
      </header>
    </div>
  );
}

export default App;
