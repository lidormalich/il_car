import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About';
import ILcars from './components/ILcars';
import NavBar from './components/NavBar';
import Showcar from './components/ShowCar';

function App() {
  return (
    <>
      <BrowserRouter>
        <header>
          <NavBar />

        </header>
        <Routes>
          <Route path='/' element={<ILcars />} />
          <Route path='/about' element={<About />} />
          <Route path='/car' element={<Showcar />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
