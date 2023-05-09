import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import TranslatedScriptsPage from './pages/TranslatedScriptsPage';
import CansbridgePage from './pages/CansbridgePage';
import SummaryPage from './pages/SummaryPage';
import FaqPage from './pages/FaqPage';
import QuizPage from './pages/QuizPage';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <div className='AppHolder'>
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/quiz" element={<QuizPage />} />
          <Route exact path="/translated-scripts" element={<TranslatedScriptsPage />} />
          <Route exact path="/cansbridge" element={<CansbridgePage />} />
          <Route exact path="/faq" element={<FaqPage />} />
          <Route exact path="/summary" element={<SummaryPage />} />
          <Route exact path="/login" element={<LoginPage />} />
        </Routes>
      </Router>
    </div>
  );
}
 
export default App;
