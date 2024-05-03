import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './components/Navbar';
import Outline from './components/Outline';
import OutcomeOne from './components/OutcomeOne';
import OutcomeTwo from './components/OutcomeTwo';
import OutcomeThree from './components/OutcomeThree';
import OutcomeFour from './components/OutcomeFour';
import Conclusion from './components/Conculsion';
import { useState } from 'react';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Navbar />
    <Outline />
    <OutcomeOne />
    <OutcomeTwo />
    <OutcomeThree />
    <OutcomeFour />
    <Conclusion />  
  </React.StrictMode>
);