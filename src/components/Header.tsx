import React, { useState, useEffect } from 'react';
import { ScreenId } from '../types';
import { playClick, toggleAudioFeedback, isAudioEnabled } from '../utils/audio';
import { 
  Terminal, 
  Search, 
  Volume2, 
  VolumeX, 
  Menu, 
  X, 
  ShieldAlert, 
  Activity, 
  ArrowUpRight 
} from 'lucide-react';

interface HeaderProps {
  currentScreen: ScreenId;
  onSelectScreen: (screen: ScreenId) => void;
  onOpenCommandPalette: () => void;
  onToggleTerminal: () => void;
  isTerminalOpen: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  currentScreen,
  onSelectScreen,
  onOpenCommandPalette,
  onToggleTerminal,
  isTerminalOpen
}) => {
  const [utcTime, setUtcTime] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [audioActive, setAudioActive] = useState(isAudioEnabled());

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const iso = now.toISOString().replace('T', ' ').substring(0, 19);
      setUtcTime(`${iso} UTC`);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const navItems: { id: ScreenId; index: string; label: string }[] = [
    { id: 'overview', index: '01', label: 'OVERVIEW' },
    { id: 'operations', index: '02', label: 'OPERATIONS' },
    { id: 'case-studies', index: '03', label: 'CASE DOSSIER' },
    { id: 'dispatches', index: '04', label: 'FIELD LOGS' },
    { id: 'arsenal', index: '05', label: 'ARSENAL' },
    { id: 'transmission', index: '06', label: 'TRANSMISSION' }
  ];

  const handleNavClick = (id: ScreenId) => {
    playClick(1400, 0.02);
    onSelectScreen(id);
    setMobileMenuOpen(false);
  };

  const handleAudioToggle = () => {
    const newState = toggleAudioFeedback();
    setAudioActive(newState);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#090a0c]/95 backdrop-blur-md border-b border-[rgba(255,255,255,0.12)]">
      {/* Top Telemetry & Status Coordinate Bar */}
      <div className="w-full border-b border-[rgba(255,255,255,0.06)] px-4 sm:px-8 py-1.5 flex flex-wrap items-center justify-between text-[11px] font-mono-tech tracking-[0.14em] text-[#8d9099]">
        <div className="flex items-center space-x-4 sm:space-x-6">
          <div className="flex items-center space-x-2">
            <span className="inline-block w-2 h-2 bg-[#00ff66] animate-pulse" />
            <span className="text-[#ffffff] font-medium">SYS_STATUS: NOMINAL</span>
          </div>
          <span className="hidden md:inline text-[rgba(255,255,255,0.2)]">|</span>
          <div className="hidden md:flex items-center space-x-2">
            <span className="text-[#8d9099]">CORE:</span>
            <span className="text-[#ffffff]">KERNEL v6.12-VERIFIED</span>
          </div>
          <span className="hidden lg:inline text-[rgba(255,255,255,0.2)]">|</span>
          <div className="hidden lg:flex items-center space-x-2">
            <span className="text-[#8d9099]">DIRECTIVES:</span>
            <span className="text-[#ff2a3b] font-semibold">Q2–Q4 2026 ENGAGEMENT</span>
          </div>
        </div>

        <div className="flex items-center space-x-4 sm:space-x-6">
          <div className="hidden sm:block text-[#e3e2e5]">
            {utcTime || '2026-09-09 22:37:41 UTC'}
          </div>
          <span className="hidden sm:inline text-[rgba(255,255,255,0.2)]">|</span>
          <div className="text-[#8d9099] flex items-center space-x-1.5">
            <span className="text-[#ff2a3b]">+</span>
            <span>SEC-09 // LAT 37.77° N</span>
          </div>
        </div>
      </div>

      {/* Primary Navigation & Brand Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 h-16 sm:h-20 flex items-center justify-between">
        {/* Brand / Identity Block */}
        <button
          onClick={() => handleNavClick('overview')}
          className="flex items-center space-x-3 text-left focus:outline-none group"
        >
          <div className="w-9 h-9 bg-[#121316] border border-[rgba(255,255,255,0.2)] flex items-center justify-center text-[#ff2a3b] font-mono-tech font-bold text-base transition-all group-hover:border-[#ff2a3b] group-hover:bg-[#18191d]">
            KΩ
          </div>
          <div className="flex flex-col">
            <div className="flex items-center space-x-2">
              <span className="font-display font-bold text-base sm:text-lg tracking-tight text-[#ffffff] group-hover:text-[#ff2a3b] transition-colors">
                ALEXANDER VEX
              </span>
              <span className="text-[10px] font-mono-tech px-1.5 py-0.5 bg-[#18191d] text-[#ff2a3b] border border-[rgba(255,42,59,0.4)]">
                ARCHITECT
              </span>
            </div>
            <span className="text-[11px] font-mono-tech tracking-wider text-[#8d9099]">
              KINETIC OBSIDIAN // SYSTEMS DOSSIER
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-1">
          {navItems.map((item) => {
            const isActive = currentScreen === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-3.5 py-2 text-xs font-mono-tech tracking-wider transition-all relative flex items-center space-x-1.5 focus:outline-none ${
                  isActive
                    ? 'text-[#ffffff] bg-[#18191d] border border-[#ff2a3b]'
                    : 'text-[#8d9099] hover:text-[#ffffff] hover:bg-[#14151a] border border-transparent hover:border-[rgba(255,255,255,0.12)]'
                }`}
              >
                <span className={isActive ? 'text-[#ff2a3b]' : 'text-[#52545d]'}>
                  {item.index}
                </span>
                <span>{item.label}</span>
                {isActive && (
                  <span className="w-1.5 h-1.5 bg-[#ff2a3b] ml-1 inline-block" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Utility Actions: Command Palette, Terminal Toggle, Audio, Contact CTA */}
        <div className="flex items-center space-x-2 sm:space-x-3">
          {/* Command Palette Trigger */}
          <button
            onClick={() => {
              playClick(1100, 0.02);
              onOpenCommandPalette();
            }}
            className="hidden sm:flex items-center space-x-2 px-2.5 py-1.5 bg-[#121316] border border-[rgba(255,255,255,0.15)] text-[#8d9099] hover:text-[#ffffff] hover:border-[#ff2a3b] text-xs font-mono-tech transition-all focus:outline-none"
            title="Open Command Palette (Cmd + K)"
          >
            <Search size={13} />
            <span className="hidden xl:inline text-[11px]">SEARCH</span>
            <kbd className="text-[10px] px-1 bg-[#1f2022] text-[#8d9099] border border-[rgba(255,255,255,0.1)]">
              ⌘K
            </kbd>
          </button>

          {/* Terminal Console Switcher */}
          <button
            onClick={() => {
              playClick(1300, 0.02);
              onToggleTerminal();
            }}
            className={`flex items-center space-x-1.5 px-2.5 py-1.5 text-xs font-mono-tech border transition-all focus:outline-none ${
              isTerminalOpen
                ? 'bg-[#ff2a3b] text-[#ffffff] border-[#ff2a3b]'
                : 'bg-[#121316] text-[#8d9099] border-[rgba(255,255,255,0.15)] hover:text-[#ffffff] hover:border-[#ff2a3b]'
            }`}
            title="Toggle Systems Terminal"
          >
            <Terminal size={14} />
            <span className="hidden md:inline text-[11px]">CLI</span>
          </button>

          {/* Audio Feedback Switcher */}
          <button
            onClick={handleAudioToggle}
            className={`p-2 border transition-all focus:outline-none ${
              audioActive
                ? 'bg-[#18191d] text-[#ff2a3b] border-[#ff2a3b]'
                : 'bg-[#121316] text-[#52545d] border-[rgba(255,255,255,0.15)] hover:text-[#8d9099]'
            }`}
            title={`Tactile Audio Feedback: ${audioActive ? 'ON' : 'OFF'}`}
          >
            {audioActive ? <Volume2 size={14} /> : <VolumeX size={14} />}
          </button>

          {/* Fast Transmission CTA */}
          <button
            onClick={() => handleNavClick('transmission')}
            className="hidden sm:inline-flex items-center space-x-1.5 px-3.5 py-2 bg-[#ffffff] text-[#090a0c] text-xs font-mono-tech font-bold tracking-wider hover:bg-[#ff2a3b] hover:text-[#ffffff] transition-colors focus:outline-none"
          >
            <span>TRANSMIT</span>
            <ArrowUpRight size={13} />
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => {
              playClick(1000, 0.02);
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            className="lg:hidden p-2 bg-[#121316] border border-[rgba(255,255,255,0.15)] text-[#ffffff] hover:border-[#ff2a3b] focus:outline-none"
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden w-full bg-[#0d0e10] border-t border-[rgba(255,255,255,0.12)] px-4 py-4 space-y-2">
          <div className="text-[10px] font-mono-tech tracking-widest text-[#52545d] px-2 pb-1 border-b border-[rgba(255,255,255,0.06)]">
            // DIRECTORY NAVIGATION
          </div>
          {navItems.map((item) => {
            const isActive = currentScreen === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full flex items-center justify-between px-3 py-2.5 text-xs font-mono-tech tracking-wider border text-left transition-all ${
                  isActive
                    ? 'bg-[#18191d] border-[#ff2a3b] text-[#ffffff]'
                    : 'bg-[#121316] border-[rgba(255,255,255,0.08)] text-[#8d9099] hover:text-[#ffffff]'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <span className={isActive ? 'text-[#ff2a3b]' : 'text-[#52545d]'}>
                    {item.index}
                  </span>
                  <span>{item.label}</span>
                </div>
                {isActive && <span className="w-1.5 h-1.5 bg-[#ff2a3b]" />}
              </button>
            );
          })}

          <div className="pt-2 flex items-center space-x-2">
            <button
              onClick={() => {
                onOpenCommandPalette();
                setMobileMenuOpen(false);
              }}
              className="flex-1 py-2 bg-[#18191d] border border-[rgba(255,255,255,0.15)] text-xs font-mono-tech text-[#8d9099] flex items-center justify-center space-x-2"
            >
              <Search size={13} />
              <span>SEARCH DOSSIER</span>
            </button>
            <button
              onClick={() => {
                onToggleTerminal();
                setMobileMenuOpen(false);
              }}
              className="px-4 py-2 bg-[#121316] border border-[rgba(255,255,255,0.15)] text-xs font-mono-tech text-[#8d9099] flex items-center justify-center space-x-1.5"
            >
              <Terminal size={14} />
              <span>CLI</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
