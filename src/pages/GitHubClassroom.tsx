import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Link } from 'react-router-dom';

const GitHubClassroom: React.FC = () => {
    const { t } = useLanguage();
    const c = t.classroom;

    return (
        <div className="content">
            <div className="card">
                <h1>{c.title}</h1>
                <p className="subtitle">{c.subtitle}</p>
                <p>{c.description}</p>

                {/* Cos'è GitHub Classroom */}
                <section className="lab-section classroom-intro">
                    <h2>📖 {c.section1Title}</h2>
                    <p>{c.section1Text}</p>
                </section>

                {/* Passo 1: Accettare un Assignment */}
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

                {/* Passo 2: Clonare */}
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

                {/* Passo 3: Lavorare */}
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

                {/* Passo 4: Push */}
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

                {/* Passo 5: Verificare */}
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

                {/* Link alla Classroom */}
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

                <div className="navigation-links">
                    <Link to="/lab3" className="btn btn-outline">
                        ← Lab 3: Fork e Pull Request
                    </Link>
                    <Link to="/resources" className="btn btn-primary">
                        Risorse Utili →
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default GitHubClassroom;
