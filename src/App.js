import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Project from './components/Project';
import "./index.css";

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/project' element={<Project/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </>
  );
}

export default App;
