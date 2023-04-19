import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Atividade Contínua 2 - Ads 2B
        </p>
        <h3>Aplicação desenvolvida em React por</h3>
        <h2>João Neto</h2>
        <a 
        href='.\About.js'
          route = "About"
          className="App-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          Sobre
        </a>
      </header>
      <footer>João Carlos de Barros Neto</footer>
    </div>
  );
}

export default App;
