import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Analysis from './pages/Analysis'
import Index from './pages/index';
import Mypage from './pages/mypage'
import Record from './pages/record'
import SignIn from './pages/signIn'
import SignUpID from './pages/signUp_ID'
import SignUpPW from './pages/signUp_PW'
import SignUpTAC from './pages/signUp_TAC'
import Popup from './pages/popup'
import GlobalStyle from './styles/GlobalStyle';

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/analysis" element={<Analysis />} />
            <Route path="/mypage" element={<Mypage />} />
            <Route path="/record" element={<Record />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup-id" element={<SignUpID />} />
            <Route path="/signup-pw" element={<SignUpPW />} />
            <Route path="/signup-tac" element={<SignUpTAC />} />
            <Route path="/popup" element={<Popup />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App