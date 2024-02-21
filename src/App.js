import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';

import Work from './components/Work';
import Main from './components/Main';

function App() {
  return (
    <>
      <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/work" element={<Work />} />
        <Route path="/" element={<Main />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
