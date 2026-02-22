import React, { useState, useEffect, useCallback } from 'react';

interface PresentationModeProps {
    isActive: boolean;
    onToggle: () => void;
}

const PresentationControls: React.FC<PresentationModeProps> = ({ isActive, onToggle }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [slides, setSlides] = useState<Element[]>([]);

    // Collect slides when entering presentation mode
    useEffect(() => {
        if (isActive) {
            const sections = document.querySelectorAll('.lab-section, .classroom-intro, .prerequisites-section, .setup-section, .welcome-section');
            const slideArray = Array.from(sections);
            setSlides(slideArray);
            setCurrentSlide(0);

            // Show only first slide initially
            slideArray.forEach((s, i) => {
                (s as HTMLElement).style.display = i === 0 ? '' : 'none';
            });
        } else {
            // Restore all sections
            document.querySelectorAll('.lab-section, .classroom-intro, .prerequisites-section, .setup-section, .welcome-section')
                .forEach(s => {
                    (s as HTMLElement).style.display = '';
                });
            setSlides([]);
            setCurrentSlide(0);
        }
    }, [isActive]);

    // Navigate to specific slide
    const goToSlide = useCallback((index: number) => {
        if (slides.length === 0) return;
        const bounded = Math.max(0, Math.min(index, slides.length - 1));

        slides.forEach((s, i) => {
            (s as HTMLElement).style.display = i === bounded ? '' : 'none';
        });
        (slides[bounded] as HTMLElement).scrollIntoView({ behavior: 'smooth', block: 'start' });
        setCurrentSlide(bounded);
    }, [slides]);

    // Keyboard navigation
    useEffect(() => {
        if (!isActive) return;

        const handleKey = (e: KeyboardEvent) => {
            if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
                e.preventDefault();
                goToSlide(currentSlide + 1);
            } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
                e.preventDefault();
                goToSlide(currentSlide - 1);
            } else if (e.key === 'Escape') {
                onToggle();
            }
        };

        window.addEventListener('keydown', handleKey);
        return () => window.removeEventListener('keydown', handleKey);
    }, [isActive, currentSlide, goToSlide, onToggle]);

    return (
        <>
            {/* Toggle Button */}
            <button
                className={`presentation-btn ${isActive ? 'active' : ''}`}
                onClick={onToggle}
                title={isActive ? 'Esci dalla presentazione (Esc)' : 'Entra in modalità presentazione (P)'}
                aria-label="Toggle presentation mode"
            >
                {isActive ? '✕ Esci' : '📽 Presenta'}
            </button>

            {/* Slide Navigation (only when active) */}
            {isActive && slides.length > 0 && (
                <div className="presentation-nav">
                    <button
                        className="slide-btn"
                        onClick={() => goToSlide(currentSlide - 1)}
                        disabled={currentSlide === 0}
                        title="Sezione precedente (←)"
                        aria-label="Sezione precedente"
                    >
                        ←
                    </button>

                    <span className="slide-counter">
                        <span className="slide-current">{currentSlide + 1}</span>
                        <span className="slide-sep"> / </span>
                        <span className="slide-total">{slides.length}</span>
                    </span>

                    <button
                        className="slide-btn"
                        onClick={() => goToSlide(currentSlide + 1)}
                        disabled={currentSlide === slides.length - 1}
                        title="Sezione successiva (→)"
                        aria-label="Sezione successiva"
                    >
                        →
                    </button>
                </div>
            )}
        </>
    );
};

const PresentationMode: React.FC = () => {
    const [isActive, setIsActive] = useState(false);

    const toggle = useCallback(() => {
        setIsActive(prev => !prev);
    }, []);

    // Apply/remove class on body
    useEffect(() => {
        if (isActive) {
            document.body.classList.add('presentation-mode');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            document.body.classList.remove('presentation-mode');
        }
        return () => {
            document.body.classList.remove('presentation-mode');
        };
    }, [isActive]);

    // Global keyboard shortcut to enter presentation mode
    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === 'p' || e.key === 'P') {
                const tag = (e.target as HTMLElement).tagName;
                if (tag === 'INPUT' || tag === 'TEXTAREA') return;
                if (!isActive) toggle();
            }
        };
        window.addEventListener('keydown', handleKey);
        return () => window.removeEventListener('keydown', handleKey);
    }, [isActive, toggle]);

    return <PresentationControls isActive={isActive} onToggle={toggle} />;
};

export default PresentationMode;
