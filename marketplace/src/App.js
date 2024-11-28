import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>
        Mercado Mais Brabo Do Brasil
      </h1>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Site de Serviços prestados por autônomos
        </p>
        <a
          className="App-link"
          href="https://chatgpt.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Saiba Mais 
        </a>
      </header>
    </div>
  );
}

export default App;
