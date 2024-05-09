import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import ProjectTest from './ProjectTest';
import LearnPage from './LearnPage';
import JournalEntry from './JournalEntry'; // Ensure you import LearnPage
import News from './News'; // Ensure you import News
import Header from './Header';
import QuizGame from './QuizGame';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/projecttest" element={<ProjectTest />} />
        <Route path="/learnpage" element={<LearnPage />} />
        <Route path="/journalentry" element={<JournalEntry />} />
        <Route path="/news" element={<News />} />
        <Route path="/quizgame" element={<QuizGame />} />
      </Routes>
    </Router>
  );
}

export default App;
