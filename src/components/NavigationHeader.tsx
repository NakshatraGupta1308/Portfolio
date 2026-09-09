import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface NavigationHeaderProps {
  onToggleAiAssistant?: () => void;
}

export const NavigationHeader: React.FC<NavigationHeaderProps> = ({ onToggleAiAssistant }) => {
  const location = useLocation();
  const currentPath = location.pathname;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#090a0c]/90 backdrop-blur-md border-b border-[rgba(255,255,255,0.12)]">
      <div className="h-16 w-full px-4 sm:px-8 max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Logo & Identity */}
        <div className="flex items-center gap-3 shrink-0">
          <span className="w-2 h-2 rounded-full bg-[#00ff66] ring-2 ring-[#00ff66]/20 shrink-0 animate-pulse"></span>
          <Link
            to="/"
            className="flex items-center gap-1.5 font-mono text-[13px] tracking-wider text-[#ffffff] uppercase hover:text-[#ffb3af] transition-colors"
          >
            <span className="font-semibold">NAKSHATRA GUPTA</span>
            <span className="text-[#52545d]">//</span>
            <span className="text-[#8d9099] hidden xs:inline">CprE @ Iowa State</span>
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 h-full">
          <Link
            to="/"
            className={`font-mono text-[13px] uppercase tracking-wider h-full flex items-center transition-colors border-b-2 ${
              currentPath === "/" || currentPath === "/overview"
                ? "text-[#ffffff] border-[#ff2a3b] font-semibold"
                : "text-[#8d9099] border-transparent hover:text-[#ffffff]"
            }`}
          >
            Overview
          </Link>
          <Link
            to="/projects-and-dossier"
            className={`font-mono text-[13px] uppercase tracking-wider h-full flex items-center transition-colors border-b-2 ${
              currentPath === "/projects-and-dossier"
                ? "text-[#ffffff] border-[#ff2a3b] font-semibold"
                : "text-[#8d9099] border-transparent hover:text-[#ffffff]"
            }`}
          >
            Projects &amp; Dossier
          </Link>
          <Link
            to="/resume-and-credentials"
            className={`font-mono text-[13px] uppercase tracking-wider h-full flex items-center transition-colors border-b-2 ${
              currentPath === "/resume-and-credentials"
                ? "text-[#ffffff] border-[#ff2a3b] font-semibold"
                : "text-[#8d9099] border-transparent hover:text-[#ffffff]"
            }`}
          >
            Resume &amp; Credentials
          </Link>
          <a
            href="#dispatch-inquiry"
            className="text-[#8d9099] hover:text-[#ffffff] font-mono text-[13px] uppercase tracking-wider h-full flex items-center transition-colors"
          >
            Contact
          </a>
        </nav>

        {/* Right Status Indicator & AI Assistant & Profile Avatar */}
        <div className="flex items-center gap-3 shrink-0">
          {/* AI Assistant Quick Trigger */}
          {onToggleAiAssistant && (
            <button
              onClick={onToggleAiAssistant}
              className="hidden lg:flex items-center gap-1.5 px-2.5 py-1 bg-[#121316] border border-[#ff2a3b]/40 text-[#ff2a3b] hover:bg-[#ff2a3b] hover:text-[#ffffff] text-[11px] font-mono tracking-wider transition-all"
              title="Query AI Assistant about Nakshatra's coursework and skills"
            >
              <span className="material-symbols-outlined text-[14px]">smart_toy</span>
              <span>ASK AI</span>
            </button>
          )}

          <div className="hidden sm:flex items-center gap-2 px-3 py-1 bg-[#1f2022] border border-[rgba(255,42,59,0.4)] rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff2a3b] animate-pulse"></span>
            <span className="font-mono text-[11px] tracking-widest text-[#ffffff] uppercase font-semibold">
              OPEN FOR FALL 2026 &amp; BEYOND
            </span>
          </div>

          <div className="flex items-center ring-1 ring-[rgba(255,255,255,0.12)] rounded-full overflow-hidden">
            <img
              alt="Profile"
              className="w-8 h-8 rounded-full object-cover"
              src="https://lh3.googleusercontent.com/aida/AEtjO1UeDHneMieui5pn_W2lqUBbvOYV-7jWricew4JzXaGgr9fFz6gft6ouiWw2BABnNQSRKckCajK1HD-P_bP4A6JtfAhuIQwOTKZem0tik1vXyUVJLPxoI5XCVYx4hhAEcARQx0xnBK0kzaNgIG2q9O-4uJKWUu54pQZvfpjSktZqqGPJgME58i3_Y4LVHcwHlUi0biWbIk8HZnrJLfVPeQ7sFPFtFyhXDLbT6Nc50LVgOxz3GEZ2Wg3jNwxzDFf3YNdH8AbCP6i5ooc"
            />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 text-[#8d9099] hover:text-[#ffffff] focus:outline-none"
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined text-2xl">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#090a0c] border-b border-[rgba(255,255,255,0.12)] px-4 py-4 space-y-3 font-mono text-[13px] uppercase tracking-wider">
          <Link
            to="/"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-[#ffffff] hover:text-[#ff2a3b]"
          >
            Overview
          </Link>
          <Link
            to="/projects-and-dossier"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-[#ffffff] hover:text-[#ff2a3b]"
          >
            Projects &amp; Dossier
          </Link>
          <Link
            to="/resume-and-credentials"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-[#ffffff] hover:text-[#ff2a3b]"
          >
            Resume &amp; Credentials
          </Link>
          <a
            href="#dispatch-inquiry"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-[#8d9099] hover:text-[#ffffff]"
          >
            Contact
          </a>
          {onToggleAiAssistant && (
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onToggleAiAssistant();
              }}
              className="w-full text-left py-2 text-[#ff2a3b] flex items-center gap-2"
            >
              <span className="material-symbols-outlined text-sm">smart_toy</span>
              <span>Ask AI Assistant</span>
            </button>
          )}
        </div>
      )}
    </header>
  );
};
