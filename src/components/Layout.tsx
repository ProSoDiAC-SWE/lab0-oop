import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import './Layout.css';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { t } = useLanguage();
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div className="layout">
      <header className="header">
        <div className="header-content">
          <div className="logo">
            <h1>{t.title}</h1>
            <p className="subtitle">{t.subtitle}</p>
            <p className="event">{t.event}</p>
          </div>
        </div>
      </header>

      <nav className="navigation">
        <div className="nav-content">
          <Link
            to="/"
            className={`nav-link ${isActive('/') ? 'active' : ''}`}
          >
            {t.nav.home}
          </Link>
          <Link
            to="/intro"
            className={`nav-link ${isActive('/intro') ? 'active' : ''}`}
          >
            {t.nav.intro}
          </Link>
          <Link
            to="/lab1"
            className={`nav-link ${isActive('/lab1') ? 'active' : ''}`}
          >
            {t.nav.lab1}
          </Link>
          <Link
            to="/lab2"
            className={`nav-link ${isActive('/lab2') ? 'active' : ''}`}
          >
            {t.nav.lab2}
          </Link>
          <Link
            to="/lab3"
            className={`nav-link ${isActive('/lab3') ? 'active' : ''}`}
          >
            {t.nav.lab3}
          </Link>
          <Link
            to="/classroom"
            className={`nav-link nav-link-classroom ${isActive('/classroom') ? 'active' : ''}`}
          >
            {t.nav.classroom}
          </Link>
          <Link
            to="/resources"
            className={`nav-link ${isActive('/resources') ? 'active' : ''}`}
          >
            {t.nav.resources}
          </Link>
        </div>
      </nav>

      <main className="main-content">
        {children}
      </main>

      <footer className="footer">
        <div className="footer-content">
          <p>{t.organization}</p>
          <p>Materiale didattico per il corso di Programmazione ad Oggetti @ Unime</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
