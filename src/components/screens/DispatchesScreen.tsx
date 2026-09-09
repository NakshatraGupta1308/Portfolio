import React, { useState } from 'react';
import { Dispatch } from '../../types';
import { DISPATCHES } from '../../data/portfolioData';
import { playClick } from '../../utils/audio';
import { 
  BookOpen, 
  Search, 
  Copy, 
  Check, 
  ExternalLink, 
  ChevronRight, 
  ArrowLeft,
  FileText,
  Clock,
  Bookmark
} from 'lucide-react';

interface DispatchesScreenProps {
  selectedDispatchId?: string;
  onSelectDispatch: (dispatchId: string) => void;
}

export const DispatchesScreen: React.FC<DispatchesScreenProps> = ({
  selectedDispatchId,
  onSelectDispatch
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeDispatch, setActiveDispatch] = useState<Dispatch | null>(
    selectedDispatchId ? DISPATCHES.find(d => d.id === selectedDispatchId) || null : null
  );
  const [copiedBibtex, setCopiedBibtex] = useState(false);

  const filteredDispatches = DISPATCHES.filter((d) => {
    const q = searchQuery.toLowerCase();
    return (
      d.title.toLowerCase().includes(q) ||
      d.category.toLowerCase().includes(q) ||
      d.abstract.toLowerCase().includes(q) ||
      d.tags.some(t => t.toLowerCase().includes(q))
    );
  });

  const handleOpenDispatch = (dispatch: Dispatch) => {
    playClick(1200, 0.02);
    setActiveDispatch(dispatch);
    onSelectDispatch(dispatch.id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCopyBibtex = (bib: string) => {
    playClick(1000, 0.02);
    navigator.clipboard.writeText(bib);
    setCopiedBibtex(true);
    setTimeout(() => setCopiedBibtex(false), 2000);
  };

  return (
    <div className="space-y-12 py-8 sm:py-12">
      {/* If an article is open, display the interactive reader */}
      {activeDispatch ? (
        <div className="space-y-8">
          {/* Back to Archive Bar */}
          <button
            onClick={() => {
              playClick(1000, 0.02);
              setActiveDispatch(null);
            }}
            className="inline-flex items-center space-x-2 text-xs font-mono-tech text-[#8d9099] hover:text-[#ff2a3b] transition-colors focus:outline-none"
          >
            <ArrowLeft size={14} />
            <span>RETURN TO RESEARCH ARCHIVE</span>
          </button>

          {/* Article Header Sheet */}
          <div className="bg-[#121316] border border-[rgba(255,255,255,0.12)] p-6 sm:p-12 space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4 text-xs font-mono-tech">
              <div className="flex items-center space-x-3 text-[#ff2a3b]">
                <span className="font-bold">MONOGRAPH // LOG-{activeDispatch.index}</span>
                <span className="text-[#52545d]">|</span>
                <span>{activeDispatch.category}</span>
              </div>
              <div className="flex items-center space-x-4 text-[#8d9099]">
                <span className="flex items-center space-x-1">
                  <Clock size={12} />
                  <span>{activeDispatch.readTime}</span>
                </span>
                <span>DATE: {activeDispatch.date}</span>
              </div>
            </div>

            <h1 className="font-display font-bold text-3xl sm:text-5xl text-[#ffffff] tracking-tight leading-tight">
              {activeDispatch.title}
            </h1>

            {/* DOI and Citation Badges */}
            <div className="flex flex-wrap items-center gap-3 pt-2 text-xs font-mono-tech">
              <div className="px-3 py-1 bg-[#090a0c] border border-[rgba(255,255,255,0.08)] text-[#8d9099]">
                DOI: <span className="text-[#ffffff]">{activeDispatch.doi}</span>
              </div>
              <button
                onClick={() => handleCopyBibtex(activeDispatch.bibtex)}
                className="flex items-center space-x-1.5 px-3 py-1 bg-[#18191d] border border-[rgba(255,255,255,0.15)] text-[#ffffff] hover:border-[#ff2a3b] hover:text-[#ff2a3b] transition-all"
              >
                {copiedBibtex ? (
                  <>
                    <Check size={12} className="text-[#00ff66]" />
                    <span className="text-[#00ff66]">BIBTEX COPIED</span>
                  </>
                ) : (
                  <>
                    <Copy size={12} />
                    <span>EXPORT BIBTEX CITATION</span>
                  </>
                )}
              </button>
            </div>

            {/* Abstract Box */}
            <div className="p-6 bg-[#090a0c] border-l-2 border-[#ff2a3b] border-y border-r border-[rgba(255,255,255,0.06)] space-y-2">
              <div className="text-xs font-mono-tech text-[#ff2a3b] font-bold">
                // EXECUTIVE ABSTRACT
              </div>
              <p className="font-editorial italic text-base sm:text-lg text-[#e3e2e5] leading-relaxed">
                &ldquo;{activeDispatch.abstract}&rdquo;
              </p>
            </div>

            {/* Key Theorems / Formal Claims */}
            <div className="space-y-3 pt-2">
              <div className="text-xs font-mono-tech text-[#ffffff] font-bold">
                // MACHINE-CHECKED FORMAL THEOREMS:
              </div>
              <div className="space-y-2">
                {activeDispatch.keyTheorems.map((theorem, idx) => (
                  <div
                    key={idx}
                    className="p-3 bg-[#0d0e10] border border-[rgba(255,255,255,0.08)] text-xs font-mono-tech text-[#00ff66] flex items-start space-x-2"
                  >
                    <span className="text-[#ff2a3b] font-bold">▶</span>
                    <span>{theorem}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Monograph Paragraphs */}
            <div className="space-y-8 pt-6 border-t border-[rgba(255,255,255,0.08)]">
              {activeDispatch.paragraphs.map((p, idx) => (
                <div key={idx} className="space-y-3">
                  <h2 className="font-display font-bold text-xl sm:text-2xl text-[#ffffff]">
                    {p.heading}
                  </h2>
                  <p className="font-body text-base text-[#8d9099] leading-relaxed">
                    {p.body}
                  </p>
                  {p.codeOrFormula && (
                    <div className="p-4 bg-[#090a0c] border border-[rgba(255,255,255,0.1)] overflow-x-auto text-xs font-mono-tech text-[#e3e2e5]">
                      <pre>{p.codeOrFormula}</pre>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Tags & Return Button */}
            <div className="pt-8 border-t border-[rgba(255,255,255,0.08)] flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap gap-1.5">
                {activeDispatch.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-mono-tech px-2 py-0.5 bg-[#090a0c] text-[#8d9099] border border-[rgba(255,255,255,0.08)]"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              <button
                onClick={() => {
                  playClick(1000, 0.02);
                  setActiveDispatch(null);
                }}
                className="px-4 py-2 bg-[#ffffff] text-[#090a0c] font-mono-tech text-xs font-bold uppercase tracking-wider hover:bg-[#ff2a3b] hover:text-[#ffffff] transition-colors"
              >
                RETURN TO LOG ARCHIVE
              </button>
            </div>
          </div>
        </div>
      ) : (
        /* Archive List View */
        <div className="space-y-8">
          {/* Header */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3 text-xs font-mono-tech tracking-widest text-[#ff2a3b]">
              <span>// INDEX 04</span>
              <span className="text-[#52545d]">///</span>
              <span>THEORETICAL MONOGRAPHS &amp; RESEARCH LOGS</span>
            </div>
            <h1 className="font-display font-bold text-4xl sm:text-6xl text-[#ffffff] tracking-tight">
              FIELD LOGS &amp; DISPATCHES
            </h1>
            <p className="max-w-3xl text-sm sm:text-base font-body text-[#8d9099] leading-relaxed">
              Peer-reviewed monographs, formal safety specifications, and laboratory treatises exploring the edge of distributed consensus, silicon packaging, and memory security.
            </p>
          </div>

          {/* Search Bar */}
          <div className="p-4 bg-[#121316] border border-[rgba(255,255,255,0.12)] flex items-center">
            <Search size={14} className="text-[#52545d] mr-3" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search monographs by topic, theorem, or DOI..."
              className="w-full bg-transparent text-xs font-mono-tech text-[#ffffff] placeholder-[#52545d] focus:outline-none"
            />
          </div>

          {/* Monograph Record Rows */}
          <div className="divide-y divide-[rgba(255,255,255,0.12)] border-y border-[rgba(255,255,255,0.12)]">
            {filteredDispatches.map((dispatch) => (
              <div
                key={dispatch.id}
                onClick={() => handleOpenDispatch(dispatch)}
                className="group p-6 bg-[#090a0c] hover:bg-[#14151a] transition-all cursor-pointer"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
                  {/* Monograph Log Index */}
                  <div className="lg:col-span-2 flex items-center space-x-3">
                    <span className="font-mono-tech text-base font-bold text-[#8d9099] group-hover:text-[#ff2a3b] transition-colors">
                      LOG-{dispatch.index}
                    </span>
                    <span className="text-[10px] font-mono-tech px-2 py-0.5 bg-[#18191d] text-[#8d9099]">
                      {dispatch.date}
                    </span>
                  </div>

                  {/* Title & Abstract */}
                  <div className="lg:col-span-7 space-y-1.5">
                    <div className="text-xs font-mono-tech text-[#ff2a3b]">
                      {dispatch.category}
                    </div>
                    <h2 className="font-display font-bold text-xl sm:text-2xl text-[#ffffff] group-hover:text-[#ff2a3b] transition-colors">
                      {dispatch.title}
                    </h2>
                    <p className="text-xs font-body text-[#8d9099] line-clamp-2 leading-relaxed">
                      {dispatch.abstract}
                    </p>
                  </div>

                  {/* Read Time & Action */}
                  <div className="lg:col-span-3 flex items-center justify-between lg:justify-end space-x-4">
                    <div className="text-left lg:text-right text-xs font-mono-tech text-[#52545d]">
                      <div>{dispatch.readTime}</div>
                      <div className="text-[10px] text-[#8d9099]">DOI VERIFIED</div>
                    </div>

                    <div className="w-8 h-8 border border-[rgba(255,255,255,0.15)] flex items-center justify-center text-[#8d9099] group-hover:text-[#ffffff] group-hover:border-[#ff2a3b] group-hover:bg-[#ff2a3b] transition-all transform group-hover:translate-x-1">
                      <ChevronRight size={16} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
