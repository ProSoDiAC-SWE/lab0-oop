# Git Workshop Website

Un sito web moderno per il workshop Git del Linux Day UniMe 2025, costruito con React e TypeScript.

## Caratteristiche

- 🌍 **Multilingue**: Supporto per italiano e inglese
- 📱 **Responsive**: Design moderno e mobile-friendly
- 🎨 **UI Moderna**: Interfaccia pulita e intuitiva
- 📚 **Contenuti Completi**: Tutti i lab del workshop inclusi
- 🚀 **Deploy su GitHub Pages**: Pronto per la pubblicazione

## Struttura del Progetto

```
website/
├── public/
│   ├── index.html
│   └── manifest.json
├── src/
│   ├── components/
│   │   ├── Layout.tsx
│   │   └── Layout.css
│   ├── contexts/
│   │   └── LanguageContext.tsx
│   ├── locales/
│   │   └── translations.ts
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── Introduction.tsx
│   │   ├── Lab1.tsx
│   │   ├── Lab2.tsx
│   │   ├── Lab3.tsx
│   │   ├── Resources.tsx
│   │   └── Pages.css
│   ├── App.tsx
│   ├── App.css
│   ├── index.tsx
│   └── index.css
├── package.json
└── tsconfig.json
```

## Pagine

1. **Home**: Panoramica del workshop e quick start
2. **Introduzione**: Prerequisiti e configurazione iniziale
3. **Lab 1**: Stage e Commit (fondamenti locali)
4. **Lab 2**: Repository Remoti (GitHub)
5. **Lab 3**: Fork e Pull Request (flusso open source)
6. **Risorse**: Link utili, comandi Git e troubleshooting

## Installazione e Sviluppo

```bash
# Installa le dipendenze
npm install

# Avvia il server di sviluppo
npm start

# Build per produzione
npm run build

# Deploy su GitHub Pages
npm run deploy
```

## Tecnologie Utilizzate

- **React 18** con TypeScript
- **React Router** per la navigazione
- **CSS3** per lo styling responsive
- **GitHub Pages** per il deploy

## Deploy su GitHub Pages

Il progetto è configurato per essere deployato automaticamente su GitHub Pages:

1. Il repository deve essere pubblico
2. La homepage è configurata in `package.json`
3. Usa `npm run deploy` per pubblicare

## Contributi

Questo progetto è stato creato per il Linux Day UniMe 2025. Per contribuire:

1. Fork del repository
2. Crea un branch per la tua feature
3. Commit delle modifiche
4. Push del branch
5. Apri una Pull Request

## Licenza

Questo progetto è rilasciato sotto licenza MIT.