import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { soundEngine } from '../utils/audioFeedback';

interface NavigationHeaderProps {
  onToggleQnA?: () => void;
}

export const NavigationHeader: React.FC<NavigationHeaderProps> = ({ onToggleQnA }) => {
  const location = useLocation();
  const currentPath = location.pathname;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [sfxMuted, setSfxMuted] = useState(() => soundEngine.getMuted());

  const handleToggleSfx = () => {
    const newMuted = soundEngine.toggleMute();
    setSfxMuted(newMuted);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#090a0c]/90 backdrop-blur-md border-b border-[rgba(255,255,255,0.12)]">
      <div className="h-16 w-full px-4 sm:px-6 lg:px-8 xl:px-10 flex items-center justify-between gap-4 lg:gap-8">
        {/* Logo & Identity */}
        <div className="flex items-center gap-3 shrink-0">
          <span className="w-2 h-2 rounded-full bg-[#00ff66] ring-2 ring-[#00ff66]/20 shrink-0 animate-pulse"></span>
          <Link
            to="/"
            className="flex items-center gap-1.5 font-mono text-[13px] tracking-wider text-[#ffffff] uppercase hover:text-[#ffb3af] transition-colors whitespace-nowrap"
          >
            <span className="font-semibold">NAKSHATRA GUPTA</span>
            <span className="text-[#52545d]">//</span>
            <span className="text-[#8d9099] hidden sm:inline">CprE @ Iowa State</span>
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-4 lg:gap-8 xl:gap-10 h-full shrink-0">
          <Link
            to="/"
            className={`font-mono text-[13px] uppercase tracking-wider whitespace-nowrap h-full flex items-center transition-colors border-b-2 px-1 ${
              currentPath === "/" || currentPath === "/overview"
                ? "text-[#ffffff] border-[#ff2a3b] font-semibold"
                : "text-[#8d9099] border-transparent hover:text-[#ffffff]"
            }`}
          >
            Overview
          </Link>
          <Link
            to="/projects"
            className={`font-mono text-[13px] uppercase tracking-wider whitespace-nowrap h-full flex items-center transition-colors border-b-2 px-1 ${
              currentPath === "/projects" || currentPath === "/projects-and-dossier"
                ? "text-[#ffffff] border-[#ff2a3b] font-semibold"
                : "text-[#8d9099] border-transparent hover:text-[#ffffff]"
            }`}
          >
            Projects &amp; Work
          </Link>
          <Link
            to="/resume-and-credentials"
            className={`font-mono text-[13px] uppercase tracking-wider whitespace-nowrap h-full flex items-center transition-colors border-b-2 px-1 ${
              currentPath === "/resume-and-credentials"
                ? "text-[#ffffff] border-[#ff2a3b] font-semibold"
                : "text-[#8d9099] border-transparent hover:text-[#ffffff]"
            }`}
          >
            Resume &amp; Credentials
          </Link>
          <Link
            to="/contact"
            className={`font-mono text-[13px] uppercase tracking-wider whitespace-nowrap h-full flex items-center transition-colors border-b-2 px-1 ${
              currentPath === "/contact"
                ? "text-[#ffffff] border-[#ff2a3b] font-semibold"
                : "text-[#8d9099] border-transparent hover:text-[#ffffff]"
            }`}
          >
            Contact
          </Link>
        </nav>

        {/* Right Status Indicator & Quick Q&A & Profile Avatar */}
        <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
          {/* Tactile Audio Feedback Toggle */}
          <button
            onClick={handleToggleSfx}
            className="flex items-center gap-1.5 px-2 py-1 bg-[#121316] border border-[rgba(255,255,255,0.1)] hover:border-[#ff2a3b]/50 text-[#8d9099] hover:text-[#ffffff] text-[11px] font-mono tracking-wider transition-all cursor-pointer whitespace-nowrap shrink-0"
            title={sfxMuted ? 'Unmute tactical drum click sound' : 'Mute tactical drum click sound'}
            aria-label="Toggle drum click sound feedback"
          >
            <span className={`material-symbols-outlined text-[14px] ${sfxMuted ? 'text-[#52545d]' : 'text-[#ff2a3b]'}`}>
              {sfxMuted ? 'volume_off' : 'volume_up'}
            </span>
            <span className="hidden sm:inline">{sfxMuted ? 'SFX: OFF' : 'SFX: ON'}</span>
          </button>

          {/* Quick Q&A Trigger */}
          {onToggleQnA && (
            <button
              onClick={onToggleQnA}
              className="hidden lg:flex items-center gap-1.5 px-2.5 py-1 bg-[#121316] border border-[#ff2a3b]/40 text-[#ff2a3b] hover:bg-[#ff2a3b] hover:text-[#ffffff] text-[11px] font-mono tracking-wider transition-all cursor-pointer whitespace-nowrap shrink-0"
              title="Quick Q&A about Nakshatra's coursework, projects, and availability"
            >
              <span className="material-symbols-outlined text-[14px]">quiz</span>
              <span>QUICK Q&amp;A</span>
            </button>
          )}

          <div className="hidden xl:flex items-center gap-2 px-3 py-1 bg-[#1f2022] border border-[rgba(255,42,59,0.4)] rounded-full whitespace-nowrap shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff2a3b] animate-pulse"></span>
            <span className="font-mono text-[11px] tracking-widest text-[#ffffff] uppercase font-semibold">
              OPEN FOR FALL 2026 &amp; BEYOND
            </span>
          </div>

          <div className="flex items-center ring-1 ring-[rgba(255,255,255,0.12)] rounded-full overflow-hidden shrink-0">
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
            to="/projects"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-[#ffffff] hover:text-[#ff2a3b]"
          >
            Projects &amp; Work
          </Link>
          <Link
            to="/resume-and-credentials"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-[#ffffff] hover:text-[#ff2a3b]"
          >
            Resume &amp; Credentials
          </Link>
          <Link
            to="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-[#ffffff] hover:text-[#ff2a3b]"
          >
            Contact
          </Link>
          {onToggleQnA && (
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onToggleQnA();
              }}
              className="w-full text-left py-2 text-[#ff2a3b] flex items-center gap-2 cursor-pointer"
            >
              <span className="material-symbols-outlined text-sm">quiz</span>
              <span>Quick Q&amp;A / FAQ</span>
            </button>
          )}
          <button
            onClick={handleToggleSfx}
            className="w-full text-left py-2 text-[#8d9099] hover:text-[#ffffff] flex items-center gap-2 cursor-pointer border-t border-[rgba(255,255,255,0.06)] pt-3"
          >
            <span className={`material-symbols-outlined text-sm ${sfxMuted ? 'text-[#52545d]' : 'text-[#ff2a3b]'}`}>
              {sfxMuted ? 'volume_off' : 'volume_up'}
            </span>
            <span>{sfxMuted ? 'Tactile Sound Effects: OFF' : 'Tactile Sound Effects: ON (Light Drum Kick)'}</span>
          </button>
        </div>
      )}
    </header>
  );
};
