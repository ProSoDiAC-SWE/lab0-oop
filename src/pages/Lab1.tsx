import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Link } from 'react-router-dom';

const Lab1: React.FC = () => {
  const { t } = useLanguage();

  const lab1Steps = [
    {
      part: t.lab1.part1,
      steps: [
        "Crea una cartella chiamata `workshop-git`",
        "Entra nella cartella `workshop-git`",
        "Crea un file chiamato `intro.txt`",
        "Inizializza un repository Git vuoto",
        "Aggiungi `intro.txt` alla staging area",
        "Fai il commit con il messaggio \"adding intro.txt\"",
        "Visualizza il log dei commit con `git log`"
      ]
    },
    {
      part: t.lab1.part2,
      steps: [
        "Crea un altro file chiamato `notes.txt`",
        "Aggiungi `notes.txt` alla staging area",
        "Fai il commit con il messaggio \"adding notes.txt\"",
        "Rimuovi il file `intro.txt`",
        "Aggiungi questa modifica alla staging area",
        "Fai il commit con il messaggio \"removing intro.txt\"",
        "Controlla i tuoi commit usando `git log`"
      ]
    },
    {
      part: t.lab1.part3,
      steps: [
        "Modifica il contenuto di `notes.txt` (aggiungi qualche riga di testo)",
        "Usa il comando `git diff` per vedere i dettagli della modifica",
        "Aggiungi il file modificato alla staging area con `git add notes.txt`",
        "Nota come il file si sposta nella staging area (`git status`)",
        "Prova di nuovo `git diff`: non dà output! Perché?",
        "Per vedere le differenze nella staging area usa: `git diff --staged`"
      ]
    },
    {
      part: t.lab1.part4,
      steps: [
        "Senza fare il commit, modifica di nuovo `notes.txt`",
        "Guarda l'output di `git status` e `git diff`",
        "Nota: puoi avere modifiche sia staged che unstaged per lo stesso file!",
        "Aggiungi le ultime modifiche con `git add notes.txt`",
        "Fai il commit"
      ]
    },
    {
      part: t.lab1.part5,
      steps: [
        "Crea quattro file: `file1.txt`, `file2.txt`, `file3.txt`, `file4.txt`",
        "Aggiungi tutti e quattro i file alla staging area",
        "Fai il commit con il messaggio \"adding four files\"",
        "Usa `git rm file1.txt` per rimuovere `file1.txt`",
        "Guarda lo status e fai il commit della rimozione",
        "Elimina `file2.txt` usando il comando del sistema operativo",
        "Guarda `git status`: come appare diverso dal punto precedente?",
        "Aggiungi questa modifica e fai il commit"
      ]
    },
    {
      part: t.lab1.part6,
      steps: [
        "Usa `git mv file3.txt new_file3.txt` per rinominare il file",
        "Guarda `git status` e fai il commit",
        "Rinomina `file4.txt` in `new_file4.txt` usando il comando del sistema operativo",
        "Guarda `git status`: Git ha riconosciuto automaticamente il rename?",
        "Sistema lo status e fai il commit"
      ]
    }
  ];

  return (
    <div className="content">
      <div className="card">
        <h1>{t.lab1.title}</h1>
        <p className="subtitle">{t.lab1.subtitle}</p>
        <p>{t.lab1.description}</p>

        {lab1Steps.map((section, sectionIndex) => (
          <section key={sectionIndex} className="lab-section">
            <h2>{section.part}</h2>
            <ol>
              {section.steps.map((step, stepIndex) => (
                <li key={stepIndex}>
                  <span dangerouslySetInnerHTML={{ 
                    __html: step.replace(/`([^`]+)`/g, '<code class="inline-code">$1</code>')
                  }} />
                </li>
              ))}
            </ol>
          </section>
        ))}

        <section className="reflection-section">
          <h2>{t.lab1.reflection}</h2>
          <ul>
            {t.lab1.reflectionQuestions.map((question: string, index: number) => (
              <li key={index}>{question}</li>
            ))}
          </ul>
        </section>

        <div className="highlight">
          <h4>🎯 Obiettivo del Lab</h4>
          <p>
            Questo lab ti insegna i concetti fondamentali di Git: staging area, commit e gestione dei file. 
            Comprendere questi concetti è essenziale per lavorare efficacemente con Git.
          </p>
        </div>

        <div className="navigation-links">
          <Link to="/intro" className="btn btn-outline">
            ← Introduzione
          </Link>
          <Link to="/lab2" className="btn btn-primary">
            Lab 2: Repository Remoti →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Lab1;
