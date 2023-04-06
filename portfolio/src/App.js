import * as React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Skills from './pages/Skills';
import Qualification from './pages/Qualification';
import Aboutme from './pages/Aboutme';
import Projects from './pages/Projects';
import HomePage from './pages/homePage';

function App() {
  return (
    <div className="App">
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
      
    </div>
  );
}

export default App;
