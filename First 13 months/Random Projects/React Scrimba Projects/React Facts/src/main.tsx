import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './Components/Navbar'
import Main from './Components/Main'
const root = document.getElementById('root');


ReactDOM.createRoot(root as HTMLElement).render(
  <React.StrictMode>
    <Navbar />
    <Main />
  </React.StrictMode>
)
