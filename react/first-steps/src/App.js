import React from 'react'
import logo from './logo.svg';
import './App.css';

// JSX - JavaScript and XML
// 1. All tags must be closed
// 2. No adjacent elements (return)
// 3. Change attributes that are the same as JS keywords
// class -> className
// for -> htmlFor

// true && true // true
// true && false // false
// false && true // false
// false && false // false

// true && 'hola mundo' // 'hola mundo'
// 0 && 'hola mundo' // 0

// true || true // true
// true || false // true
// false || true // true
// false || false // false

// const port = process.env.PORT || 3000

function Greeting({ name, age, working }) {
  return (
    <div>
      <p>Hola {name} {age}</p>
      {working && <p>Working</p>}
      {working ? (
        <p>Working</p>
      ) : (
        false
      )}
    </div>
  )
}

function Button({ children }) {
  return <button>{children}</button>
}

class TrafficLight extends React.Component {
  // constructor(props) {
  //   super(props)

  //   // stop, prepare, go
  //   this.state = {
  //     signal: 'prepare'
  //   }

  //   this.handleStop = this.handleStop.bind(this)
  //   this.handlePrepare = this.handlePrepare.bind(this)
  //   this.handleGo = this.handleGo.bind(this)
  // }
  state = {
    signal: 'go'
  }

  handleStop = () => {
    this.setState({ signal: 'stop' })
    // this.state.signal = 'stop'
  }

  handlePrepare = () => {
    this.setState({ signal: 'prepare' })
  }

  handleGo = () => {
    this.setState({ signal: 'go' })
  }

  render() {
    const light = {
      stop: 'red',
      prepare: 'yellow',
      go: 'green',
    }

    // let light;
    // if(this.state.signal === 'stop') {
    //   light = 'red'
    // } else if (this.state.signal === 'prepare') {
    //   light = 'yellow'
    // } else {
    //   light = 'green'
    // }

    return (
      <div>
        <p>{light[this.state.signal]}</p>
        <button type="button" onClick={this.handleStop}>Stop</button>
        <button type="button" onClick={this.handlePrepare}>Prepare</button>
        <button type="button" onClick={this.handleGo}>Go</button>
      </div>
    )
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. Hola mundo
        </p>
        <TrafficLight />
        <TrafficLight />
        <TrafficLight />
        <TrafficLight />
        <Greeting name="maria" age={19} working />
        <Greeting name="juan" />
        <Greeting name="ana" />
        <Greeting name="martin" />
        <Button>Hola mundo</Button>
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
