import logo from './logo.svg';
import './App.css';
import Circle from './Circle';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

      </header>
      <svg>
        <Circle cx={80} cy={80} r={40} />
      </svg>
    </div>
  );
}

export default App;
