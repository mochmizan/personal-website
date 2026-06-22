import { useState, useEffect } from 'react';
import { RetroGlobe } from '@/components/RetroGlobe';

interface LandingPageProps {
  onEnter: () => void;
}

const roles = ['Web3 Developer', 'Vibe Coder', 'ML Infrastructure', 'Consensus Builder'];

interface Project {
  title: string;
  year: string;
  description: string;
  tags: string[];
  url: string;
  image: string;
}

const projects: Project[] = [
  {
    title: 'RaksaDana',
    year: '2026',
    description: 'AI-powered stock investment dashboard predicting BBCA, BBRI, and BMRI price movements using multivariate LSTM models, with Gemini-generated Indonesian market commentary.',
    tags: ['Python', 'FastAPI', 'Google Gemini API', 'Docker', 'Nuxt.js', 'HuggingFace Spaces', 'Vercel'],
    url: 'https://github.com/mie-intel/raksadana',
    image: '/projects/raksadana.png'
  },
  {
    title: 'GCS — UAV Ground Control Station',
    year: '2025',
    description: "Browser-based ground control interface for drone/UAV operation built during Gamaforce UGM's developer recruitment trial, featuring satellite map view and flight simulation tooling.",
    tags: ['React', 'Leaflet', 'Geoman', 'JavaScript', 'Vite'],
    url: 'https://github.com/mie-intel/gcs',
    image: '/projects/gcs.png'
  },
  {
    title: 'KalkulatorWarisan',
    year: '2024',
    description: 'Islamic inheritance calculator implementing faraid computation rules from Indonesian Ministry of Religious Affairs jurisprudence, including edge-case heir distribution logic.',
    tags: ['PHP', 'Vercel'],
    url: 'https://github.com/mie-intel/kalkulatorwarisan',
    image: '/projects/kalkulatorwarisan.png'
  }
];

export function LandingPage({ onEnter }: LandingPageProps) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const activeRole = roles[roleIndex];
    
    const handleTyping = () => {
      if (!isDeleting) {
        // Typing phase
        const nextText = activeRole.substring(0, displayedText.length + 1);
        setDisplayedText(nextText);
        setTypingSpeed(100);

        if (nextText === activeRole) {
          // Pause at the end of the text
          setTypingSpeed(2000); // 2 seconds hold
          setIsDeleting(true);
        }
      } else {
        // Deleting phase
        const nextText = activeRole.substring(0, displayedText.length - 1);
        setDisplayedText(nextText);
        setTypingSpeed(40); // Delete faster than type

        if (nextText === '') {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
          setTypingSpeed(400); // Pause before typing next word
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, roleIndex, typingSpeed]);

  return (
    <div className="w-full min-h-screen text-[#fcfdfc] overflow-y-auto scroll-smooth flex flex-col items-center" style={{ backgroundColor: 'var(--bg-color)' }}>
      <header className="absolute top-0 left-0 w-full px-6 py-4 flex items-center justify-between z-20 select-none">
        <div className="flex items-center gap-2">
          <span className="font-plus-jakarta-sans font-extrabold text-2xl lowercase tracking-normal text-white">mizan-web</span>
        </div>
      </header>

      {/* Hero Section */}
      <section className="w-full min-h-screen flex flex-col items-center justify-center relative px-4">
        {/* Background ambient light */}
        <div
          className="absolute w-[600px] h-[600px] rounded-full filter blur-[120px] pointer-events-none opacity-20 z-0"
          style={{
            background: 'radial-gradient(circle, var(--accent-color) 0%, transparent 70%)',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        />

        {/* The Dithered Interactive Globe */}
        <div className="absolute z-0 animate-fade-in" style={{ animationDuration: '2s' }}>
          <RetroGlobe size={600} interactive={true} />
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 text-center flex flex-col items-center gap-4 max-w-md px-6 select-none pointer-events-auto">
          <div className="space-y-1 font-plus-jakarta-sans text-white">
            <p className="text-xl font-normal opacity-90 tracking-wide">
              Hi! I'am
            </p>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight">
              Moch. Mizan Ghodafail
            </h1>
          </div>

          {/* Transitioning Role Pill (Terminal Retype Effect) */}
          <div className="h-12 flex items-center justify-center">
            <div
              className="bg-[var(--accent-color)] text-[var(--accent-text)] px-5 py-2.5 font-plus-jakarta-sans text-sm uppercase tracking-wider font-bold shadow-md min-w-[240px] text-center"
            >
              {displayedText}<span className="animate-pulse font-normal">|</span>
            </div>
          </div>
        </div>


      </section>

      {/* About Section & Footer Wrapper with dynamic grid background below the fold */}
      <div className="w-full bg-pattern-dark flex flex-col items-center border-t border-[var(--accent-color)]" style={{ backgroundColor: 'var(--bg-color)' }}>
        {/* About Section */}
        <section className="w-full max-w-3xl px-6 py-20 z-10 font-plus-jakarta-sans">
          <div className="space-y-6">
            <h2 className="text-xs uppercase tracking-widest" style={{ color: 'var(--accent-color)' }}>
              // 01. About Me
            </h2>
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-tight">
              Building cooperative AI intelligence systems.
            </h3>
            <p className="text-sm leading-relaxed text-[#a2b0a4] font-light">
              I am Moch. Mizan Ghodafail, a systems engineer and researcher focused on decentralized networks, 
              cooperative machine learning, and Web3 infrastructure. I design and build high-performance systems 
              that enable secure, distributed computation over-the-internet.
            </p>
            <div className="pt-4">
              <button
                onClick={onEnter}
                className="psyche-btn text-xs font-plus-jakarta-sans font-bold uppercase tracking-wider flex items-center gap-2"
              >
                <span>View Training Network Status</span>
                <span>&rarr;</span>
              </button>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="w-full max-w-3xl px-6 pb-20 z-10 font-plus-jakarta-sans">
          <div className="space-y-6">
            <h2 className="text-xs uppercase tracking-widest" style={{ color: 'var(--accent-color)' }}>
              // 02. Selected Work
            </h2>
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-tight">
              Projects & Experiments
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4 w-full">
              {projects.map((project, idx) => (
                <a
                  key={idx}
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="psyche-card flex flex-col gap-3 rounded-xl overflow-hidden hover:border-[var(--accent-color)] hover:shadow-lg transition-all duration-300 group"
                  style={{ backgroundColor: 'var(--panel-bg)', borderColor: 'var(--panel-border-color)' }}
                >
                  {/* Aspect Video Screenshot Frame */}
                  <div className="aspect-video w-full overflow-hidden relative border-b border-[var(--border-muted)] bg-[var(--panel-bg-darker)]">
                    {/* Retro Subtle Scanlines overlay */}
                    <div 
                      className="absolute inset-0 pointer-events-none z-10" 
                      style={{
                        background: 'repeating-linear-gradient(rgba(18, 16, 16, 0) 0px, rgba(18, 16, 16, 0) 1px, rgba(0, 0, 0, 0.15) 2px, rgba(0, 0, 0, 0.15) 3px)',
                        mixBlendMode: 'overlay'
                      }}
                    />
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  {/* Card Details */}
                  <div className="p-4 pt-1 flex flex-col gap-2 flex-1">
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="text-sm font-bold text-white leading-snug">
                        {project.title}
                      </h4>
                      <span className="text-[10px] text-[#a2b0a4] shrink-0 mt-0.5 font-medium">
                        {project.year}
                      </span>
                    </div>
                    <p className="text-[11px] leading-relaxed text-[#a2b0a4] font-light flex-1">
                      {project.description}
                    </p>
                    
                    {/* Technology tags */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {project.tags.map((tag, tagIdx) => (
                        <span 
                          key={tagIdx}
                          className="px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider bg-[var(--panel-bg-darker)] text-[var(--accent-color)] border border-[var(--border-muted)]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Decorative footer details */}
        <footer className="w-full py-8 text-center font-plus-jakarta-sans text-[9px] text-[#4e6b54] tracking-widest uppercase border-t border-[var(--accent-color)] select-none" style={{ backgroundColor: 'var(--bg-color)' }}>
          Mizan Ghodafail // Distributed Intelligence Network v0.0.1
        </footer>
      </div>
    </div>
  );
}
