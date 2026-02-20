import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Link } from 'react-router-dom';

const Introduction: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="content">
      <div className="card">
        <h1>{t.intro.title}</h1>
        
        <section className="prerequisites-section">
          <h2>{t.intro.prerequisites}</h2>
          <p>{t.intro.prerequisitesText}</p>
          <ul>
            {t.intro.prerequisitesList.map((item: string, index: number) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="setup-section">
          <h2>{t.intro.setup}</h2>
          <p>{t.intro.setupText}</p>
          
          <div className="code-block">
            <code>{t.intro.setupCommands[0]}</code>
          </div>
          <div className="code-block">
            <code>{t.intro.setupCommands[1]}</code>
          </div>
          
          <p>{t.intro.verifyConfig}</p>
          <div className="code-block">
            <code>{t.intro.verifyCommand}</code>
          </div>
        </section>

        <div className="highlight">
          <h4>💡 Suggerimento</h4>
          <p>
            Assicurati di usare lo stesso nome e email che hai usato per creare il tuo account GitHub. 
            Questo aiuterà Git a collegare i tuoi commit al tuo profilo GitHub.
          </p>
        </div>

        <section className="next-steps">
          <h2>Prossimi Passi</h2>
          <p>
            Una volta completata la configurazione iniziale, sarai pronto per iniziare con il 
            <strong> Lab 1: Stage e Commit</strong>, dove imparerai i concetti fondamentali di Git.
          </p>
          <div className="action-buttons">
                    <Link to="/lab1" className="btn btn-outline">
                      ← Lab 1: Stage e Commit
                    </Link>
                  </div>
        </section>
      </div>
    </div>
  );
};

export default Introduction;
