import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Link } from 'react-router-dom';

interface LinkItem {
  title: string;
  url: string;
}

interface IssueItem {
  problem: string;
  solution: string;
}

const Resources: React.FC = () => {
  const { t } = useLanguage();

  const gitCommands = {
    config: [
      'git config --global user.name "Nome Cognome"',
      'git config --global user.email "email@example.com"',
      'git config --list'
    ],
    localRepo: [
      'git init                    # Inizializza repository',
      'git status                  # Stato del repository',
      'git add FILE                # Aggiungi file alla staging area',
      'git add .                   # Aggiungi tutti i file',
      'git commit -m "messaggio"   # Crea commit',
      'git log                     # Visualizza cronologia',
      'git log --oneline           # Log compatto',
      'git log --graph             # Log grafico'
    ],
    diff: [
      'git diff                    # Modifiche non staged',
      'git diff --staged           # Modifiche staged',
      'git diff COMMIT1 COMMIT2    # Confronta commit'
    ],
    branch: [
      'git branch                  # Lista branch',
      'git branch NOME             # Crea branch',
      'git checkout NOME           # Cambia branch',
      'git checkout -b NOME        # Crea e cambia branch',
      'git merge BRANCH            # Unisci branch',
      'git branch -d NOME          # Elimina branch'
    ],
    remote: [
      'git remote add origin URL   # Aggiungi remote',
      'git remote -v               # Lista remote',
      'git push origin BRANCH      # Push su remote',
      'git push -u origin BRANCH   # Push e imposta upstream',
      'git pull                    # Scarica e unisci modifiche',
      'git fetch                   # Scarica senza unire',
      'git clone URL               # Clona repository'
    ],
    fileManagement: [
      'git rm FILE                 # Rimuovi file (Git aware)',
      'git mv OLD NEW              # Rinomina file (Git aware)'
    ]
  };

  return (
    <div className="content">
      <div className="card">
        <h1>{t.resources.title}</h1>

        <section className="links-section">
          <h2>Link Utili</h2>
          <div className="links-grid">
            {t.resources.links.map((link: LinkItem, index: number) => (
              <div key={index} className="link-card">
                <h3>{link.title}</h3>
                <a href={link.url} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                  Visita →
                </a>
              </div>
            ))}
          </div>
        </section>

        <section className="commands-section">
          <h2>{t.commands.title}</h2>
          
          {Object.entries(gitCommands).map(([category, commands]) => (
            <div key={category} className="command-category">
              <h3>{t.commands[category as keyof typeof t.commands]}</h3>
              <div className="code-block">
                {commands.map((command, index) => (
                  <div key={index} className="command-line">
                    <code>{command}</code>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>

        <section className="troubleshooting-section">
          <h2>{t.resources.troubleshooting}</h2>
          <div className="issues-list">
            {t.resources.commonIssues.map((issue: IssueItem, index: number) => (
              <div key={index} className="issue-item">
                <h4>❌ {issue.problem}</h4>
                <p>✅ {issue.solution}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="final-notes-section">
          <h2>{t.resources.finalNotes}</h2>
          <div className="tips-list">
            {t.resources.finalTips.map((tip: string, index: number) => (
              <div key={index} className="tip-item">
                <span className="tip-icon">💡</span>
                <span>{tip}</span>
              </div>
            ))}
          </div>
        </section>

        <div className="highlight">
          <h4>🎓 Continua ad Apprendere</h4>
          <p>
            Il workshop è finito, ma il tuo viaggio con Git e GitHub è appena iniziato! 
            Continua a praticare, contribuisci ai progetti open source e non aver paura di sperimentare.
          </p>
        </div>

        <div className="navigation-links">
          <Link to="/lab3" className="btn btn-outline">
            ← Lab 3: Fork e Pull Request
          </Link>
          <Link to="/" className="btn btn-primary">
            Homepage →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Resources;
