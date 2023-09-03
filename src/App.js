import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';

// Import layout
import Main from './layout/Main';
// Import component
import Home from './views/Home';
import Dashboard from './views/Dashboard';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route element={<Main />}>
        <Route path="/dashboard" element={<Dashboard />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
