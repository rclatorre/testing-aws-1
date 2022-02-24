import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import React from 'react'

function App() {
  const [respuesta, setRespuesta] = React.useState()

  axios.get('http://api.wiracocha.click/')
  .then( resp => {
    const data = resp.data
    setRespuesta(data)
    console.log(data)
  })

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
        <p>
          {respuesta}
        </p>
      </header>
    </div>
  );
}

export default App;
