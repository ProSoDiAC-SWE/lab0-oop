import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Link } from 'react-router-dom';

const Lab3: React.FC = () => {
  const { t } = useLanguage();
  const c = t.classroom;

  const lab3Steps = [
    {
      title: t.lab3.forkRepo,
      steps: [
        "Vai su: `https://github.com/ProSoDiAC-SWE/oop-contributors`",
        "Clicca sul pulsante **Fork** in alto a destra",
        "Seleziona il tuo account come destinazione",
        "Clicca \"Create fork\""
      ]
    },
    {
      title: t.lab3.cloneFork,
      steps: [
        "Vai sul **tuo** fork (dovrebbe essere sotto il tuo username)",
        "Clicca sul pulsante verde \"Code\"",
        "Copia l'URL (SSH o HTTPS)",
        "Clona il repository: `git clone [URL-DEL-TUO-FORK]`",
        "Entra nella cartella del progetto: `cd oop-contributors`"
      ]
    },
    {
      title: t.lab3.createContribution,
      steps: [
        "Crea un nuovo branch per il tuo lavoro: `git checkout -b add-contributor-TUONOME`",
        "Nella cartella `contributors/`, crea un file chiamato `TUONOME.md`",
        "Nel file, aggiungi le tue informazioni seguendo il template fornito",
        "Salva il file"
      ]
    },
    {
      title: t.lab3.addPush,
      steps: [
        "Aggiungi il file alla staging area",
        "Fai il commit: `git commit -m \"Add contributor: TUONOME\"`",
        "Push del branch: `git push origin add-contributor-TUONOME`"
      ]
    },
    {
      title: t.lab3.createPR,
      steps: [
        "Vai sul **tuo** fork su GitHub",
        "Dovresti vedere un banner giallo: \"Compare & pull request\"",
        "Clicca su quel pulsante",
        "Verifica che base repository sia `ProSoDiAC-SWE/oop-contributors`",
        "Scrivi un titolo descrittivo: \"Add student: TUONOME\"",
        "Nel campo Description scrivi il messaggio fornito",
        "Clicca \"Create pull request\""
      ]
    },
    {
      title: t.lab3.issueTracking,
      steps: [
        "Vai sul repository originale: `ProSoDiAC-SWE/oop-contributors`",
        "Clicca sulla tab \"Issues\"",
        "Clicca \"New issue\"",
        "Titolo: \"Suggerimento per migliorare il README\"",
        "Aggiungi una descrizione con la tua idea",
        "Aggiungi una label (se disponibile): \"enhancement\"",
        "Clicca \"Submit new issue\""
      ]
    }
  ];

  const studentTemplate = `# Nome Cognome

## Matricola
123456

## Corso
Laurea Triennale in Informatica – Programmazione ad Oggetti

## Chi sono
Breve descrizione di te (2-3 righe)

## Interessi in Informatica
- Argomento 1
- Argomento 2
- Argomento 3

## Contatti
- GitHub: [@tuousername](https://github.com/tuousername)
- Email: matricola@studenti.unime.it`;

  return (
    <div className="content">
      <div className="card">
        <h1>{t.lab3.title}</h1>
        <p className="subtitle">{t.lab3.subtitle}</p>
        <p>{t.lab3.description}</p>

        {/* ── PARTE 1: Fork e Pull Request ── */}
        {lab3Steps.map((section, sectionIndex) => (
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

        <section className="template-section">
          <h2>Template per il tuo profilo</h2>
          <p>Usa questo template per creare il tuo file di profilo:</p>
          <div className="code-block">
            <pre><code>{studentTemplate}</code></pre>
          </div>
        </section>

        <section className="reflection-section">
          <h2>{t.lab1.reflection}</h2>
          <ul>
            {t.lab3.reflectionQuestions.map((question: string, index: number) => (
              <li key={index}>{question}</li>
            ))}
          </ul>
        </section>

        {/* ── PARTE 2: GitHub Classroom ── */}
        <hr className="section-divider" />

        <section className="lab-section classroom-intro">
          <h1>{c.title}</h1>
          <p className="subtitle">{c.subtitle}</p>
          <p>{c.description}</p>
        </section>

        <section className="lab-section classroom-intro">
          <h2>📖 {c.section1Title}</h2>
          <p>{c.section1Text}</p>
        </section>

        <section className="lab-section">
          <h2>{c.section2Title}</h2>
          <ol>
            {c.section2Steps.map((step, i) => (
              <li key={i}>
                <span dangerouslySetInnerHTML={{
                  __html: step.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
                }} />
              </li>
            ))}
          </ol>
          <div className="highlight">
            <h4>💡 Il tuo repository personale</h4>
            <p>{c.section2Note}</p>
          </div>
        </section>

        <section className="lab-section">
          <h2>{c.section3Title}</h2>
          <ol>
            {c.section3Steps.map((step, i) => (
              <li key={i}>{step}</li>
            ))}
          </ol>
          <div className="code-block">
            <code>{c.section3Command}</code>
          </div>
          <ol start={5}>
            {c.section3Steps2.map((step, i) => (
              <li key={i}>{step}</li>
            ))}
          </ol>
          <div className="code-block">
            <code>{c.section3Command2}</code>
          </div>
        </section>

        <section className="lab-section">
          <h2>{c.section4Title}</h2>
          <p>{c.section4Text}</p>
          <div className="code-block">
            {c.section4Commands.map((cmd, i) => (
              <div key={i} className="command-line">
                <code>{cmd}</code>
              </div>
            ))}
          </div>
          <div className="highlight">
            <h4>💡 Buona pratica</h4>
            <p>{c.section4Tip}</p>
          </div>
        </section>

        <section className="lab-section">
          <h2>{c.section5Title}</h2>
          <p>{c.section5Text}</p>
          <div className="code-block">
            <code>{c.section5Command}</code>
          </div>
          <div className="highlight">
            <h4>📅 Scadenze</h4>
            <p>{c.section5Note}</p>
          </div>
        </section>

        <section className="lab-section">
          <h2>{c.section6Title}</h2>
          <ol>
            {c.section6Steps.map((step, i) => (
              <li key={i}>{step}</li>
            ))}
          </ol>
          <div className="highlight warning-highlight">
            <p>{c.section6Warning}</p>
          </div>
        </section>

        <div className="classroom-cta">
          <h3>🚀 Pronto a iniziare?</h3>
          <p>Accedi alla classroom del corso per trovare i tuoi assignment:</p>
          <a
            href={c.classroomUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-classroom btn-large"
          >
            {c.classroomLink} →
          </a>
        </div>

        <div className="highlight">
          <h4>🎯 Obiettivo del Lab</h4>
          <p>
            Questo lab ti introduce al flusso di lavoro collaborativo: fork, branch, commit, push e pull request.
            Sono le stesse operazioni che utilizzerai quando il docente proporrà esercizi tramite <strong>GitHub Classroom</strong>.
          </p>
        </div>

        <div className="navigation-links">
          <Link to="/lab2" className="btn btn-outline">
            ← Lab 2: Repository Remoti
          </Link>
          <Link to="/resources" className="btn btn-primary">
            Risorse Utili →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Lab3;
