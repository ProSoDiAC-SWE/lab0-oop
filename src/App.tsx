import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import Layout from './components/Layout';
import Home from './pages/Home';
import Introduction from './pages/Introduction';
import Lab1 from './pages/Lab1';
import Lab2 from './pages/Lab2';
import Lab3 from './pages/Lab3';
import GitHubClassroom from './pages/GitHubClassroom';
import Resources from './pages/Resources';
import './App.css';
import './pages/Pages.css';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="App">
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/intro" element={<Introduction />} />
              <Route path="/lab1" element={<Lab1 />} />
              <Route path="/lab2" element={<Lab2 />} />
              <Route path="/lab3" element={<Lab3 />} />
              <Route path="/classroom" element={<GitHubClassroom />} />
              <Route path="/resources" element={<Resources />} />
            </Routes>
          </Layout>
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;
