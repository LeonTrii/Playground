import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './components/Navbar';
import Outline from './components/Outline';
import OutcomeThree from './components/OutcomeThree';
import OutcomeFour from './components/OutcomeFour';
import Conclusion from './components/Conculsion';
import { useState } from 'react';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Navbar />
    <Outline />
    <OutcomeThree />
    <OutcomeFour />
    <Conclusion />  
  </React.StrictMode>
);