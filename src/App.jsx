import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Analysis from './pages/Analysis'
import Index from './pages/index';
import Mypage from './pages/mypage'
import Record from './pages/record'
import SignIn from './pages/signIn'
import SignUp from './pages/signUp'
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
            <Route path="/signup" element={<SignUp />} />
            <Route path="/popup" element={<Popup />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App