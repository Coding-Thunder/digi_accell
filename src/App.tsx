import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Details from './pages/detail/Details';
import Home from './pages/home/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/details/:id' element={<Details />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
