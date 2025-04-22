import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';

import Work from './components/Work';
import Main from './components/Main';
import WorkState from './context/WorkState';

function App() {
  return (
    <>
    <React.StrictMode>
    <WorkState>
      <Router>
      <Routes>
        <Route path="/login" element={<Login form={"Login"}/>} />
        <Route path="/signup" element={<Login form={"Sign Up"}/>} />
        <Route path="/work" element={<Work />} />
        <Route path="/" element={<Main />} />
      </Routes>
    </Router>
    </WorkState>
    </React.StrictMode>
    </>
  );
}

export default App;
