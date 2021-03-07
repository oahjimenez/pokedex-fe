import logo from './logo.svg';
import './App.css';
import { getPokedex } from './utils/getPokedex';

function App() {

  getPokedex({}).then(() => { console.log("done dex")})

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello from V2 Checo</h1>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
