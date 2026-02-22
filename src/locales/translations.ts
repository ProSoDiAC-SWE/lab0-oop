export const translations = {
  it: {
    title: "Git & GitHub Classroom: Guida pratica per studenti",
    subtitle: "Impara a gestire il codice e a consegnare gli assignment del corso",
    event: "Programmazione ad Oggetti @ Unime",
    organization: "Organizzazione GitHub: ProSoDiAC-SWE",
    nav: {
      home: "Home",
      intro: "Introduzione",
      lab1: "Lab 1: Stage e Commit",
      lab2: "Lab 2: Repository Remoti",
      lab3: "Lab 3: Fork e Pull Request",
      classroom: "GitHub Classroom",
      resources: "Risorse"
    },
    intro: {
      title: "Introduzione",
      prerequisites: "Prerequisiti",
      prerequisitesText: "Prima di iniziare, assicurati di avere:",
      prerequisitesList: [
        "Git installato sul tuo computer (git-scm.com)",
        "Un account GitHub (github.com) — usa la tua email universitaria",
        "Un terminale/command prompt",
        "Un editor di testo (es. VS Code)"
      ],
      setup: "Configurazione iniziale",
      setupText: "Prima di iniziare, configura Git con il tuo nome e email universitaria:",
      setupCommands: [
        'git config --global user.name "NOME COGNOME"',
        'git config --global user.email "matricola@studenti.unime.it"'
      ],
      verifyConfig: "Verifica la configurazione:",
      verifyCommand: "git config --list"
    },
    lab1: {
      title: "Esercizio 1: Stage e Commit",
      subtitle: "Fondamenti locali",
      description: "Questo esercizio ti insegnerà i concetti base di Git: staging area e commit.",
      part1: "Parte 1: Prime operazioni",
      part2: "Parte 2: Gestione dei file",
      part3: "Parte 3: Modifiche e diff",
      part4: "Parte 4: Staged e unstaged contemporaneamente",
      part5: "Parte 5: Operazioni multiple",
      part6: "Parte 6: Rename",
      reflection: "Domande di riflessione:",
      reflectionQuestions: [
        "Qual è la differenza tra git diff e git diff --staged?",
        "Cosa succede quando usi git rm vs il comando rm del sistema operativo?",
        "Come fa Git a riconoscere un rename?"
      ]
    },
    lab2: {
      title: "Esercizio 2: Repository Remoti",
      subtitle: "GitHub",
      description: "Imparerai a lavorare con repository remoti su GitHub, usando sia SSH che HTTPS.",
      sshSetup: "Setup SSH (Opzionale ma raccomandato)",
      sshDescription: "Se preferisci usare SSH invece di HTTPS:",
      sshSteps: [
        "Genera una chiave SSH (se non ne hai già una):",
        "Copia la chiave pubblica:",
        "Vai su GitHub → Settings → SSH and GPG keys → New SSH key",
        "Incolla la chiave e salva"
      ],
      createRemote: "Creazione del repository remoto",
      pushLocal: "Push del repository locale",
      connectRemote: "Connessione al remote",
      modifyPush: "Modifica e push",
      cloneRepo: "Clone di un repository esistente",
      reflectionQuestions: [
        "Qual è la differenza tra git remote add e git clone?",
        "Cosa fa il flag -u in git push -u origin main?",
        "Quale differenza c'è tra SSH e HTTPS per connettersi a GitHub?"
      ]
    },
    lab3: {
      title: "Esercizio 3: Fork, Clone e Pull Request",
      subtitle: "Flusso collaborativo",
      description: "Imparerai il flusso di lavoro collaborativo: fork, modifica, pull request. Questo è il modo in cui contribuirai ai progetti del corso.",
      forkRepo: "Fork del repository del corso",
      cloneFork: "Clone del tuo fork",
      createContribution: "Crea il tuo contributo",
      addPush: "Aggiungi e push",
      createPR: "Crea la Pull Request",
      issueTracking: "Issue tracking (GitHub Issues)",
      reflectionQuestions: [
        "Qual è la differenza tra un fork e un clone?",
        "Perché creiamo un branch separato invece di lavorare su main?",
        "Come funziona il flusso di revisione delle Pull Request?",
        "A cosa servono le GitHub Issues?"
      ]
    },
    classroom: {
      title: "GitHub Classroom: Gestire gli Assignment",
      subtitle: "Come consegnare i tuoi esercizi del corso di Programmazione ad Oggetti",
      description: "GitHub Classroom è la piattaforma usata dal docente per distribuire e raccogliere gli assignment. Segui questa guida passo passo per ogni esercizio del corso.",
      section1Title: "Cos'è GitHub Classroom?",
      section1Text: "GitHub Classroom è uno strumento che permette al docente di creare assignment personalizzati per ogni studente. Quando accetti un assignment, GitHub crea automaticamente un repository privato solo per te, già configurato con il codice di partenza.",
      section2Title: "Passo 1: Accettare un Assignment",
      section2Steps: [
        "Il docente condivide un **link di invito** per ogni assignment (es. via email o portale del corso)",
        "Clicca sul link di invito — ti porterà su GitHub Classroom",
        "Clicca su **Accept this assignment**",
        "Attendi qualche secondo: GitHub sta creando il tuo repository personale",
        "Vedrai il messaggio: \"You are ready to go!\" con il link al **tuo** repository"
      ],
      section2Note: "Il tuo repository sarà nel formato: ProSoDiAC-SWE/[nome-assignment]-[tuo-username]",
      section3Title: "Passo 2: Clonare il Repository Assegnato",
      section3Steps: [
        "Vai al link del tuo repository (fornito dopo l'accettazione)",
        "Clicca sul pulsante verde **Code**",
        "Copia l'URL (HTTPS o SSH)",
        "Apri il terminale e clona il repository:"
      ],
      section3Command: "git clone [URL-DEL-TUO-REPOSITORY]",
      section3Steps2: [
        "Entra nella cartella del progetto:"
      ],
      section3Command2: "cd [nome-del-repository]",
      section4Title: "Passo 3: Lavorare sull'Assignment",
      section4Text: "Apri il progetto con il tuo editor (es. VS Code) e inizia a lavorare, facendo commit frequenti:",
      section4Commands: [
        "git add .                          # aggiungi le tue modifiche",
        'git commit -m "Implementa classe Studente"  # salva con messaggio chiaro',
        "git status                         # controlla lo stato attuale"
      ],
      section4Tip: "Fai commit spesso! Un commit per ogni funzionalità completata è una buona norma.",
      section5Title: "Passo 4: Push della Soluzione",
      section5Text: "Quando hai completato (o vuoi salvare il progresso), fai il push su GitHub:",
      section5Command: "git push origin main",
      section5Note: "Puoi fare push quante volte vuoi prima della scadenza. L'ultimo push prima del termine è quello valutato.",
      section6Title: "Passo 5: Verificare la Consegna",
      section6Steps: [
        "Vai sul tuo repository su GitHub",
        "Verifica che tutti i file siano presenti e aggiornati",
        "Controlla la tab **Actions** (se il docente ha configurato test automatici): un ✅ verde indica test superati",
        "Controlla la data dell'ultimo commit: deve essere prima della scadenza"
      ],
      section6Warning: "⚠️ Il codice viene valutato su GitHub, non sul tuo computer. Assicurati sempre di aver fatto push!",
      classroomLink: "Vai alla Classroom del Corso",
      classroomUrl: "https://classroom.github.com/classrooms/245212095-software-engineering"
    },
    resources: {
      title: "Risorse utili",
      links: [
        {
          title: "Documentazione ufficiale Git",
          url: "https://git-scm.com/doc"
        },
        {
          title: "GitHub Docs",
          url: "https://docs.github.com"
        },
        {
          title: "GitHub Classroom Docs",
          url: "https://docs.github.com/en/education/manage-coursework-with-github-classroom"
        },
        {
          title: "Git Cheat Sheet",
          url: "https://education.github.com/git-cheat-sheet-education.pdf"
        },
        {
          title: "Visualizzare Git",
          url: "https://git-school.github.io/visualizing-git"
        },
        {
          title: "Learn Git Branching",
          url: "https://learngitbranching.js.org"
        }
      ],
      troubleshooting: "Problemi comuni e soluzioni",
      commonIssues: [
        {
          problem: "Permission denied (publickey) con SSH",
          solution: "Verifica che la chiave SSH sia stata aggiunta a GitHub. Testa la connessione: ssh -T git@github.com"
        },
        {
          problem: "Authentication failed con HTTPS",
          solution: "Usa un Personal Access Token invece della password. Vai su GitHub → Settings → Developer settings → Personal access tokens"
        },
        {
          problem: "error: failed to push some refs",
          solution: "Qualcun altro ha pushato prima di te (o hai modificato su GitHub). Soluzione: git pull prima di git push"
        },
        {
          problem: "fatal: not a git repository",
          solution: "Non sei nella cartella del repository. Usa cd per spostarti nella cartella corretta"
        },
        {
          problem: "Merge conflicts",
          solution: "Git non riesce a unire automaticamente le modifiche. Apri i file in conflitto, risolvi manualmente, poi git add e git commit"
        },
        {
          problem: "Non riesco ad accettare l'assignment",
          solution: "Assicurati di essere loggato su GitHub con l'account universitario e di usare il link corretto fornito dal docente"
        }
      ],
      finalNotes: "Note finali",
      finalTips: [
        "Committa spesso con messaggi chiari e descrittivi",
        "Usa branch per sperimentare senza rischi",
        "Fai pull prima di iniziare a lavorare ogni sessione",
        "Leggi i messaggi di errore di Git: sono molto informativi",
        "Non aspettare l'ultimo momento per fare push dell'assignment!"
      ]
    },
    commands: {
      title: "Comandi Git Quick Reference",
      config: "Configurazione",
      localRepo: "Repository locale",
      diff: "Diff e confronti",
      branch: "Branch",
      remote: "Remote",
      fileManagement: "Gestione file"
    }
  }
};
