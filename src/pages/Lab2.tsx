import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Link } from 'react-router-dom';


const Lab2: React.FC = () => {
  const { t } = useLanguage();

  const sshSteps = [
    "Genera una chiave SSH (se non ne hai già una):",
    "Copia la chiave pubblica:",
    "Vai su GitHub → Settings → SSH and GPG keys → New SSH key",
    "Incolla la chiave e salva"
  ];

  const sshCommands = [
    'ssh-keygen -t ed25519 -C "tua-email@example.com"',
    'cat ~/.ssh/id_ed25519.pub'
  ];

  const lab2Steps = [
    {
      title: t.lab2.createRemote,
      steps: [
        "Vai su github.com e accedi",
        "Clicca su \"New repository\" (il pulsante verde + in alto a destra)",
        "Nome repository: `workshop-remote`",
        "Scegli: **Public** o **Private**",
        "**Non** selezionare \"Initialize this repository with a README\"",
        "Clicca \"Create repository\""
      ]
    },
    {
      title: t.lab2.pushLocal,
      steps: [
        "Crea una nuova cartella `workshop-remote`",
        "Entra nella cartella",
        "Crea un file `README.md` con contenuto: \"# Workshop Git - Esercizio 2\"",
        "Inizializza il repository Git",
        "Aggiungi `README.md` alla staging area",
        "Fai il commit con messaggio \"first commit\""
      ]
    },
    {
      title: t.lab2.connectRemote,
      steps: [
        "Aggiungi il remote origin (SSH o HTTPS)",
        "Verifica i remote configurati: `git remote -v`",
        "Push del codice: `git push -u origin main`"
      ]
    },
    {
      title: t.lab2.modifyPush,
      steps: [
        "Modifica `README.md` aggiungendo nuove righe",
        "Aggiungi le modifiche e fai il commit",
        "Push delle modifiche: `git push`",
        "Vai su GitHub e verifica che le modifiche siano state caricate"
      ]
    },
    {
      title: t.lab2.cloneRepo,
      steps: [
        "Trova un repository pubblico interessante su GitHub",
        "Clonalo sul tuo computer: `git clone [URL-DEL-REPOSITORY]`"
      ]
    }
  ];

  return (
    <div className="content">
      <div className="card">
        <h1>{t.lab2.title}</h1>
        <p className="subtitle">{t.lab2.subtitle}</p>
        <p>{t.lab2.description}</p>

        <section className="ssh-section">
          <h2>{t.lab2.sshSetup}</h2>
          <p>{t.lab2.sshDescription}</p>
          
          <ol>
            {sshSteps.map((step, index) => (
              <li key={index}>
                {step}
                {index === 0 && (
                  <div className="code-block">
                    <code>{sshCommands[0]}</code>
                  </div>
                )}
                {index === 1 && (
                  <div className="code-block">
                    <code>{sshCommands[1]}</code>
                  </div>
                )}
              </li>
            ))}
          </ol>
        </section>

        {lab2Steps.map((section, sectionIndex) => (
          <section key={sectionIndex} className="lab-section">
            <h2>{section.title}</h2>
            <ol>
              {section.steps.map((step, stepIndex) => (
                <li key={stepIndex}>
                  <span dangerouslySetInnerHTML={{ 
                    __html: step.replace(/`([^`]+)`/g, '<code class="inline-code">$1</code>')
                               .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
                  }} />
                </li>
              ))}
            </ol>
          </section>
        ))}

        <div className="highlight">
          <h4>🔐 Autenticazione</h4>
          <p>
            <strong>SSH:</strong> Usa chiavi crittografiche per l'autenticazione. Più sicuro e conveniente per uso frequente.
          </p>
          <p>
            <strong>HTTPS:</strong> Usa username e password (o Personal Access Token). Più semplice da configurare inizialmente.
          </p>
        </div>

        <section className="reflection-section">
          <h2>{t.lab1.reflection}</h2>
          <ul>
            {t.lab2.reflectionQuestions.map((question: string, index: number) => (
              <li key={index}>{question}</li>
            ))}
          </ul>
        </section>

        <div className="navigation-links">
          <Link to="/lab1" className="btn btn-outline">
            ← Lab 1: Stage e Commit
          </Link>
          <Link to="/lab3" className="btn btn-primary">
            Lab 3: Fork e Pull Request →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Lab2;
