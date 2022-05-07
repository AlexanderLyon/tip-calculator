import React from 'react';
import { Calculator } from './components/calculator';
import logo from '../images/logo.svg';

export const App: React.FC = () => {
  return (
    <main className="app">
      <img className="logo" src={logo} alt="Splitter" />
      <Calculator />
    </main>
  );
};
