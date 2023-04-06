<<<<<<< HEAD
import * as React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Skills from './pages/Skills';
import Qualification from './pages/Qualification';
import Aboutme from './pages/Aboutme';
import Projects from './pages/Projects';
import HomePage from './pages/homePage';
=======
import logo from './logo.svg';
import './App.css';
>>>>>>> e03aba7b8b774822353569d58fad77667adec3ee

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      <BrowserRouter>
      <Navbar />
      <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/Aboutme' element={<Aboutme/>}/>
      <Route path='/Qualification' element={<Qualification/>}/>
      <Route path='/Skills' element={<Skills/>}/>
      <Route path='/Projects' element={<Projects/>}/>
      </Routes>
      </BrowserRouter>
      
=======
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
      </header>
>>>>>>> e03aba7b8b774822353569d58fad77667adec3ee
    </div>
  );
}

export default App;
