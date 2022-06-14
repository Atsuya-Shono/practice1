import React from 'react';
import logo from './logo.svg';
// import { Top } from './components/pages/top';
// import { TimeLine } from './components/pages/timeline'
import { Layout } from './components/templete/layout'
import { Router } from "./router/router"
import './App.css';

function App() {
  return (
    //   <div className="App">
    //     <header className="App-header">
    //       <img src={logo} className="App-logo" alt="logo" />
    //       <p>
    //         Edit <code>src/App.tsx</code> and save to reload.
    //       </p>
    //       <a
    //         className="App-link"
    //         href="https://reactjs.org"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         Learn React
    //       </a>
    //     </header>
    //   </div>
    <div>
      <React.StrictMode>
        <Layout>
          <Router />
        </Layout>
      </React.StrictMode>
    </div>
  );
}

export default App;
