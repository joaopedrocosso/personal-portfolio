import React from 'react';

interface PortfolioNavProps {
  activeSection: string;
  handleScroll: (id: string) => void;
}

const PortfolioNav: React.FC<PortfolioNavProps> = ({ activeSection, handleScroll }) => {
  return (
    <nav className="flex flex-col text-white-2 tracking-wide justify-start items-start gap-4 py-16 font-bold text-sm">
      <button
        onClick={() => handleScroll('about')}
        className={`transition-all ${activeSection === 'about' ? 'text-white-1' : 'hover:text-white-1'}`}
      >
        ABOUT
      </button>
      <button
        onClick={() => handleScroll('experience')}
        className={`transition-all ${activeSection === 'experience' ? 'text-white-1' : 'hover:text-white-1'}`}
      >
        EXPERIENCE
      </button>
      <button
        onClick={() => handleScroll('projects')}
        className={`transition-all ${activeSection === 'projects' ? 'text-white-1' : 'hover:text-white-1'}`}
      >
        PROJECTS
      </button>
    </nav>
  );
};

export default PortfolioNav;
