import logo from './logo.svg';
import './App.css';
import ButtonComponents from './Components/ButtonComponent';
import Image from './Components/ImageComponents';

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
        <div>
          <ButtonComponents ButtonLabel='Click me' ButtonText="Click here"/>
          <ButtonComponents ButtonLabel='Click me' ButtonText="Click here"/>
          <ButtonComponents ButtonLabel='Click me' ButtonText="Click here"/>
          <Image Immagine='http://placekitten.com/100/100'/>
        </div>
      </header>
    </div>
  );
}

export default App;
