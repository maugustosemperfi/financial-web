import React, { createContext, useReducer } from 'react';
import './App.css';
import Routes from './routes';
import GlobalStyle from './styles/global';
import { StateProvider } from './core/context/financial-context';

function App() {
  return (
    <>
      <GlobalStyle />
      <StateProvider>
        <Routes />
      </StateProvider>
    </>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
