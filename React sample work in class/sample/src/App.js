import React from 'react';
import './App.css';
import logo from './logo123.png';

const styles = {
  p: {
    color: "blue",
  }
};

class Car extends React.Component {
  constructor() {
    super();
    this.state = { color: "red" };
  }

  render() {
    return <h2>It is a {this.state.color} car!</h2>;
  }
}
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { favouritecolor: "blue" };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ favouritecolor: "black" });
    }, 200);
  }

  render() {
    return (
      <h1>My favourite color is {this.state.favouritecolor}</h1>
    );
  }
}



function App() {
  const [time, setTime] = React.useState(new Date().toLocaleTimeString());


  React.useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const a = <h1>React is {5 + 5} times more than the JSX</h1>;
  const x = 11;
  let t = "hello";
  if (x > 10) {
    t = "hai";
  }
  const d = <h1 className="design">Attribute of a class</h1>;
  const b = <h1>{t}</h1>;
  const c = <h1>{x > 10 ? "kongu" : "KEC"}</h1>;

  return (
    <div className="App">
      <header className="App-header" style={{ backgroundColor: "red" }}>
        <img src={logo} className="App-logo" alt="logo" />
        <p style={{ color: "green" }}>
          Inline css: Edit <code>src/App.js</code> and save to reload.
        </p>
        <p style={styles.p}>Internal css: HEllO WORLD</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          External css: Learn React
        </a>
        <div>
          {a}
          {b}
          {c}
          {d}
        </div>
        <div>
          <h1>Hello, world!</h1>
          <h2>It is {time}.</h2>
        </div>
        <div>
          <Car />
          <Header />
        </div>
      </header>
    </div>
  );
}

export default App;
