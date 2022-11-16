import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Error from './pages/Error';
import About from './pages/About';
import Accommodation from './pages/Accommodation';
import Home from './pages/Home';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/accommodation/:id" element={<Accommodation />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
