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
  );
}

export default App;
