import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import './App.css'
import Analysis from './pages/Analysis'
import Index from './pages/index';
import Mypage from './pages/mypage';
import Record from './pages/record';
import SignIn from './pages/signIn';
import SignUp from './pages/signUp';
import Popup from './pages/popup';
import GlobalStyle from './styles/GlobalStyle';
import Test from './pages/test';

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
`;

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <AppContainer>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/analysis" element={<Analysis />} />
            <Route path="/mypage" element={<Mypage />} />
            <Route path="/record" element={<Record />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/popup" element={<Popup />} />
            <Route path="/test" element={<Test />} />
          </Routes>
        </AppContainer>
      </Router>
    </>
  );
}

export default App;