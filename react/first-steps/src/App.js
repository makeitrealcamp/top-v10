import logo from './logo.svg';
import './App.css';

// JSX - JavaScript and XML
// 1. All tags must be closed
// 2. No adjacent elements (return)
// 3. Change attributes that are the same as JS keywords
// class -> className
// for -> htmlFor

function Greeting({ name, age }) {
  return <p>Hola {name} {age}</p>
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. Hola mundo
        </p>
        <Greeting name="maria" age={19} />
        <Greeting name="juan" />
        <Greeting name="ana" />
        <Greeting name="martin" />
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
