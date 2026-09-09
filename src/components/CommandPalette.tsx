import React, { useState, useEffect, useRef } from 'react';
import { ScreenId, Project, Dispatch } from '../types';
import { PROJECTS, DISPATCHES, ARSENAL_SKILLS } from '../data/portfolioData';
import { playClick } from '../utils/audio';
import { Search, X, Terminal, FileCode, BookOpen, Cpu, Send, Layers } from 'lucide-react';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectScreen: (screen: ScreenId) => void;
  onSelectProject: (projectId: string) => void;
  onSelectDispatch: (dispatchId: string) => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  onSelectScreen,
  onSelectProject,
  onSelectDispatch
}) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setQuery('');
      setSelectedIndex(0);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else {
          playClick(1000, 0.02);
          // Handled by parent or toggler
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Flatten searchable list
  type SearchItem = 
    | { type: 'screen'; id: ScreenId; label: string; desc: string; icon: React.ReactNode }
    | { type: 'project'; id: string; label: string; desc: string; icon: React.ReactNode }
    | { type: 'dispatch'; id: string; label: string; desc: string; icon: React.ReactNode }
    | { type: 'skill'; id: string; label: string; desc: string; icon: React.ReactNode };

  const allItems: SearchItem[] = [
    { type: 'screen', id: 'overview', label: '01 // OVERVIEW', desc: 'Systems dossier, manifesto, telemetry, & featured operations', icon: <Layers size={14} className="text-[#ff2a3b]" /> },
    { type: 'screen', id: 'operations', label: '02 // OPERATIONS', desc: 'Complete evidence atlas & technical project records ledger', icon: <FileCode size={14} className="text-[#00ff66]" /> },
    { type: 'screen', id: 'case-studies', label: '03 // CASE DOSSIER', desc: 'Deep architectural schematics, benchmarks & verified code', icon: <Cpu size={14} className="text-[#ff2a3b]" /> },
    { type: 'screen', id: 'dispatches', label: '04 // FIELD LOGS', desc: 'Published research monographs, formal proofs & papers', icon: <BookOpen size={14} className="text-[#8d9099]" /> },
    { type: 'screen', id: 'arsenal', label: '05 // ARSENAL', desc: 'Technical weaponry matrix, latency simulator & capabilities', icon: <Terminal size={14} className="text-[#00ff66]" /> },
    { type: 'screen', id: 'transmission', label: '06 // TRANSMISSION', desc: 'Encrypted direct inquiries, PGP verification & consultation', icon: <Send size={14} className="text-[#ff2a3b]" /> },
    
    // Projects
    ...PROJECTS.map((p) => ({
      type: 'project' as const,
      id: p.id,
      label: `PROJECT ${p.index} // ${p.title}`,
      desc: `${p.subtitle} (${p.tags.join(', ')})`,
      icon: <FileCode size={14} className="text-[#e3e2e5]" />
    })),

    // Dispatches
    ...DISPATCHES.map((d) => ({
      type: 'dispatch' as const,
      id: d.id,
      label: `LOG-${d.index} // ${d.title}`,
      desc: `${d.category} • ${d.readTime}`,
      icon: <BookOpen size={14} className="text-[#8d9099]" />
    })),

    // Skills
    ...ARSENAL_SKILLS.map((s) => ({
      type: 'skill' as const,
      id: s.name,
      label: `STACK // ${s.name}`,
      desc: `${s.category} • ${s.experience} • ${s.proficiency}% Proficiency`,
      icon: <Cpu size={14} className="text-[#ff2a3b]" />
    }))
  ];

  const filteredItems = allItems.filter((item) => {
    const q = query.toLowerCase();
    return item.label.toLowerCase().includes(q) || item.desc.toLowerCase().includes(q);
  });

  const handleSelect = (item: SearchItem) => {
    playClick(1300, 0.02);
    if (item.type === 'screen') {
      onSelectScreen(item.id as ScreenId);
    } else if (item.type === 'project') {
      onSelectProject(item.id);
    } else if (item.type === 'dispatch') {
      onSelectDispatch(item.id);
    } else if (item.type === 'skill') {
      onSelectScreen('arsenal');
    }
    onClose();
  };

  const handleKeyDownInInput = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % (filteredItems.length || 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filteredItems.length) % (filteredItems.length || 1));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (filteredItems[selectedIndex]) {
        handleSelect(filteredItems[selectedIndex]);
      }
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-[#090a0c]/80 backdrop-blur-md">
      <div 
        className="w-full max-w-2xl bg-[#121316] border border-[#ff2a3b] shadow-2xl overflow-hidden flex flex-col animate-in fade-in zoom-in-95 duration-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Search Input */}
        <div className="flex items-center px-4 py-3 border-b border-[rgba(255,255,255,0.12)] bg-[#0d0e10]">
          <Search size={16} className="text-[#ff2a3b] mr-3 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            onKeyDown={handleKeyDownInInput}
            placeholder="Search directives, systems, case studies, field logs, or specs..."
            className="w-full bg-transparent text-[#ffffff] font-mono-tech text-sm placeholder-[#52545d] focus:outline-none"
          />
          <button
            onClick={onClose}
            className="p-1 text-[#8d9099] hover:text-[#ffffff] focus:outline-none"
          >
            <X size={16} />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-[60vh] overflow-y-auto divide-y divide-[rgba(255,255,255,0.06)]">
          {filteredItems.length === 0 ? (
            <div className="p-8 text-center text-xs font-mono-tech text-[#52545d]">
              NO MATCHING DIRECTIVES FOUND FOR &quot;{query}&quot;
            </div>
          ) : (
            filteredItems.map((item, idx) => {
              const isSelected = idx === selectedIndex;
              return (
                <button
                  key={`${item.type}-${item.id}-${idx}`}
                  onClick={() => handleSelect(item)}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`w-full px-4 py-3 text-left flex items-center justify-between transition-colors font-mono-tech text-xs focus:outline-none ${
                    isSelected
                      ? 'bg-[#18191d] border-l-2 border-[#ff2a3b] text-[#ffffff]'
                      : 'text-[#8d9099] hover:bg-[#14151a]'
                  }`}
                >
                  <div className="flex items-center space-x-3 overflow-hidden">
                    <span className="shrink-0">{item.icon}</span>
                    <div className="overflow-hidden">
                      <div className={`font-semibold truncate ${isSelected ? 'text-[#ffffff]' : 'text-[#e3e2e5]'}`}>
                        {item.label}
                      </div>
                      <div className="text-[11px] text-[#8d9099] truncate">
                        {item.desc}
                      </div>
                    </div>
                  </div>
                  <div className="shrink-0 ml-4 flex items-center space-x-2">
                    <span className="text-[10px] text-[#52545d] uppercase px-1.5 py-0.5 bg-[#090a0c] border border-[rgba(255,255,255,0.06)]">
                      {item.type}
                    </span>
                    <span className="text-[#ff2a3b] text-xs">↵</span>
                  </div>
                </button>
              );
            })
          )}
        </div>

        {/* Footer Shortcut Bar */}
        <div className="px-4 py-2 bg-[#0d0e10] border-t border-[rgba(255,255,255,0.08)] flex items-center justify-between text-[11px] font-mono-tech text-[#52545d]">
          <div className="flex items-center space-x-3">
            <span>[↑↓] NAVIGATE</span>
            <span>[↵] EXECUTE</span>
            <span>[ESC] CLOSE</span>
          </div>
          <div className="text-[#8d9099]">
            COMMAND REGISTRY // {filteredItems.length} ITEMS
          </div>
        </div>
      </div>
    </div>
  );
};
