# Lab0 — Git & GitHub Classroom

Sito web del laboratorio introduttivo **Lab0** per il corso di **Programmazione ad Oggetti @ UniMe**.  
Costruito con React + TypeScript.

## Struttura

| Pagina | Route | Contenuto |
|---|---|---|
| Home | `/` | Panoramica e quick start |
| Introduzione | `/intro` | Prerequisiti e configurazione Git |
| Lab 1 | `/lab1` | Stage e Commit |
| Lab 2 | `/lab2` | Repository Remoti |
| Lab 3 | `/lab3` | Fork, Pull Request & GitHub Classroom |
| Risorse | `/resources` | Cheat sheet, link utili, troubleshooting |

## Avvio locale

```bash
npm install
npm start       # dev server su http://localhost:3000
npm run build   # build di produzione
```

## Deploy (GitHub Pages)

Il sito è configurato per essere pubblicato su `https://<org>.github.io/lab0-oop/`.  
Aggiornare `homepage` in `package.json` se necessario, poi:

```bash
npm run build
# copia il contenuto di build/ nel branch gh-pages
```

## Organizzazione GitHub

[ProSoDiAC-SWE](https://github.com/ProSoDiAC-SWE)