import React, { useState } from 'react';
import { Project, ProjectCategory } from '../../types';
import { PROJECTS } from '../../data/portfolioData';
import { playClick } from '../../utils/audio';
import { 
  ArrowUpRight, 
  Search, 
  Layers, 
  ListFilter, 
  LayoutGrid, 
  AlignJustify,
  Cpu, 
  ShieldCheck, 
  Activity,
  Code,
  Check
} from 'lucide-react';

interface OperationsScreenProps {
  onSelectProject: (projectId: string) => void;
}

export const OperationsScreen: React.FC<OperationsScreenProps> = ({ onSelectProject }) => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'ledger' | 'blueprint'>('ledger');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const categories: { id: ProjectCategory; label: string }[] = [
    { id: 'all', label: 'ALL DIRECTIVES' },
    { id: 'systems-arch', label: 'DISTRIBUTED SYSTEMS' },
    { id: 'cybernetics', label: 'CYBERNETICS & SEC' },
    { id: 'hardware', label: 'AI SILICON & RISC-V' },
    { id: 'defense-infra', label: 'DEFENSE & KERNEL' }
  ];

  const filteredProjects = PROJECTS.filter((p) => {
    const matchesCat = selectedCategory === 'all' || p.category === selectedCategory;
    const q = searchQuery.toLowerCase();
    const matchesSearch = 
      p.title.toLowerCase().includes(q) ||
      p.subtitle.toLowerCase().includes(q) ||
      p.client.toLowerCase().includes(q) ||
      p.tags.some(t => t.toLowerCase().includes(q)) ||
      p.abstract.toLowerCase().includes(q);
    return matchesCat && matchesSearch;
  });

  const handleCategoryChange = (cat: ProjectCategory) => {
    playClick(1100, 0.02);
    setSelectedCategory(cat);
  };

  return (
    <div className="space-y-12 py-8 sm:py-12">
      {/* Header & Section Metadata */}
      <div className="space-y-4">
        <div className="flex items-center space-x-3 text-xs font-mono-tech tracking-widest text-[#ff2a3b]">
          <span>// INDEX 02</span>
          <span className="text-[#52545d]">///</span>
          <span>SYSTEMS ARCHITECTURE ARCHIVE</span>
        </div>
        <h1 className="font-display font-bold text-4xl sm:text-6xl text-[#ffffff] tracking-tight">
          OPERATIONS &amp; EVIDENCE ATLAS
        </h1>
        <p className="max-w-3xl text-sm sm:text-base font-body text-[#8d9099] leading-relaxed">
          Comprehensive ledger of high-assurance distributed systems, bare-metal kernels, micro-hypervisors, and silicon accelerators engineered for adversarial operational environments.
        </p>
      </div>

      {/* Filter & Control Bar */}
      <div className="p-4 bg-[#121316] border border-[rgba(255,255,255,0.12)] flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-1.5">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => handleCategoryChange(cat.id)}
                className={`px-3 py-1.5 text-xs font-mono-tech transition-all border ${
                  isActive
                    ? 'bg-[#ffffff] text-[#090a0c] border-[#ffffff] font-bold'
                    : 'bg-[#18191d] text-[#8d9099] border-[rgba(255,255,255,0.08)] hover:text-[#ffffff] hover:border-[rgba(255,255,255,0.2)]'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Search & View Mode Switcher */}
        <div className="flex items-center space-x-3">
          <div className="relative flex-1 sm:w-64">
            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#52545d]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter ledger by keyword, tag, or client..."
              className="w-full pl-9 pr-3 py-1.5 bg-[#0d0e10] border border-[rgba(255,255,255,0.12)] text-xs font-mono-tech text-[#ffffff] placeholder-[#52545d] focus:outline-none focus:border-[#ff2a3b]"
            />
          </div>

          <div className="flex items-center border border-[rgba(255,255,255,0.12)] bg-[#0d0e10]">
            <button
              onClick={() => {
                playClick(1000, 0.02);
                setViewMode('ledger');
              }}
              className={`p-1.5 transition-colors ${
                viewMode === 'ledger' ? 'bg-[#ff2a3b] text-[#ffffff]' : 'text-[#8d9099] hover:text-[#ffffff]'
              }`}
              title="Ledger Row View"
            >
              <AlignJustify size={15} />
            </button>
            <button
              onClick={() => {
                playClick(1000, 0.02);
                setViewMode('blueprint');
              }}
              className={`p-1.5 transition-colors ${
                viewMode === 'blueprint' ? 'bg-[#ff2a3b] text-[#ffffff]' : 'text-[#8d9099] hover:text-[#ffffff]'
              }`}
              title="Blueprint Grid View"
            >
              <LayoutGrid size={15} />
            </button>
          </div>
        </div>
      </div>

      {/* Results Telemetry Count */}
      <div className="flex items-center justify-between text-xs font-mono-tech text-[#52545d] px-1">
        <span>MATCHING DIRECTIVES: {filteredProjects.length} OF {PROJECTS.length}</span>
        <span>INDEXING: IEEE / ACM STANDARD COMPLIANT</span>
      </div>

      {/* VIEW MODE 1: LEDGER VIEW (High-density rows matching design system) */}
      {viewMode === 'ledger' && (
        <div className="divide-y divide-[rgba(255,255,255,0.12)] border-y border-[rgba(255,255,255,0.12)]">
          {filteredProjects.map((project) => {
            const isExpanded = expandedId === project.id;
            return (
              <div key={project.id} className="group bg-[#090a0c] hover:bg-[#14151a] transition-all">
                <div
                  onClick={() => {
                    playClick(1100, 0.02);
                    onSelectProject(project.id);
                  }}
                  className="p-5 sm:p-6 cursor-pointer"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
                    {/* Index & Status */}
                    <div className="lg:col-span-1 flex items-center space-x-3">
                      <span className="font-mono-tech text-base sm:text-lg font-bold text-[#8d9099] group-hover:text-[#ff2a3b] transition-colors">
                        {project.index}
                      </span>
                      <span className="lg:hidden text-[10px] font-mono-tech px-2 py-0.5 bg-[#18191d] text-[#00ff66]">
                        {project.status}
                      </span>
                    </div>

                    {/* Title, Subtitle, Client */}
                    <div className="lg:col-span-5 space-y-1">
                      <div className="flex items-center space-x-3">
                        <h2 className="font-display font-bold text-xl sm:text-2xl text-[#ffffff] group-hover:text-[#ff2a3b] transition-colors">
                          {project.title}
                        </h2>
                        <span className="hidden lg:inline-block text-[10px] font-mono-tech px-2 py-0.5 bg-[#18191d] text-[#00ff66] border border-[rgba(0,255,102,0.3)]">
                          {project.status}
                        </span>
                      </div>
                      <div className="text-xs font-mono-tech text-[#8d9099]">
                        {project.client} <span className="text-[#52545d]">///</span> {project.year}
                      </div>
                      <p className="text-xs font-body text-[#8d9099] pt-1 leading-relaxed">
                        {project.subtitle}
                      </p>
                    </div>

                    {/* Tags */}
                    <div className="lg:col-span-3 flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] font-mono-tech px-2 py-0.5 bg-[#121316] text-[#8d9099] border border-[rgba(255,255,255,0.08)]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Primary Metric & Action */}
                    <div className="lg:col-span-3 flex items-center justify-between lg:justify-end space-x-4">
                      <div className="text-left lg:text-right">
                        <div className="text-sm font-mono-tech text-[#ffffff] font-bold">
                          {project.impactMetrics[0]?.value}
                        </div>
                        <div className="text-[10px] font-mono-tech text-[#00ff66]">
                          {project.impactMetrics[0]?.delta}
                        </div>
                      </div>

                      <div className="flex items-center space-x-2">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            playClick(1000, 0.02);
                            setExpandedId(isExpanded ? null : project.id);
                          }}
                          className="px-2 py-1 bg-[#18191d] text-[11px] font-mono-tech text-[#8d9099] hover:text-[#ffffff] border border-[rgba(255,255,255,0.1)] hover:border-[#ff2a3b]"
                        >
                          {isExpanded ? 'COLLAPSE' : 'SPECS'}
                        </button>

                        <div className="w-8 h-8 border border-[rgba(255,255,255,0.15)] flex items-center justify-center text-[#8d9099] group-hover:text-[#ffffff] group-hover:border-[#ff2a3b] group-hover:bg-[#ff2a3b] transition-all transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                          <ArrowUpRight size={15} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Inline Quick Spec Drawer */}
                {isExpanded && (
                  <div className="px-6 py-4 bg-[#0d0e10] border-t border-[rgba(255,255,255,0.08)] grid grid-cols-1 md:grid-cols-3 gap-6 text-xs font-mono-tech animate-in fade-in duration-150">
                    <div className="space-y-1 md:col-span-2">
                      <div className="text-[#ff2a3b] font-bold">// ABSTRACT OVERVIEW</div>
                      <p className="font-body text-[#8d9099] leading-relaxed">
                        {project.abstract}
                      </p>
                    </div>

                    <div className="space-y-2">
                      <div className="text-[#ffffff] font-bold">// HARDWARE &amp; SPEC PROTOCOL</div>
                      {project.specs.slice(0, 2).map((s, idx) => (
                        <div key={idx} className="flex justify-between border-b border-[rgba(255,255,255,0.06)] pb-1">
                          <span className="text-[#52545d]">{s.label}:</span>
                          <span className="text-[#e3e2e5] font-semibold">{s.value}</span>
                        </div>
                      ))}
                      <div className="pt-2">
                        <button
                          onClick={() => onSelectProject(project.id)}
                          className="w-full py-1.5 bg-[#ffffff] text-[#090a0c] font-bold uppercase tracking-wider hover:bg-[#ff2a3b] hover:text-[#ffffff] transition-colors"
                        >
                          VIEW COMPLETE CASE STUDY →
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* VIEW MODE 2: BLUEPRINT GRID VIEW */}
      {viewMode === 'blueprint' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => {
                playClick(1200, 0.02);
                onSelectProject(project.id);
              }}
              className="bg-[#121316] border border-[rgba(255,255,255,0.12)] hover:border-[#ff2a3b] transition-all flex flex-col justify-between group cursor-pointer overflow-hidden"
            >
              {/* Image Graphic Frame */}
              <div className="h-44 w-full relative overflow-hidden bg-[#090a0c] border-b border-[rgba(255,255,255,0.1)]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale contrast-125 opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-300"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-2 left-2 px-2 py-0.5 bg-[#090a0c]/90 text-[#ff2a3b] font-mono-tech text-xs font-bold border border-[rgba(255,42,59,0.4)]">
                  {project.index}
                </div>
                <div className="absolute top-2 right-2 px-2 py-0.5 bg-[#090a0c]/90 text-[#00ff66] font-mono-tech text-[10px] border border-[rgba(0,255,102,0.3)]">
                  {project.status}
                </div>
              </div>

              {/* Body Content */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="text-[11px] font-mono-tech text-[#8d9099]">
                    {project.client} <span className="text-[#52545d]">///</span> {project.year}
                  </div>
                  <h3 className="font-display font-bold text-2xl text-[#ffffff] group-hover:text-[#ff2a3b] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs font-body text-[#8d9099] line-clamp-2 leading-relaxed">
                    {project.subtitle}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 pt-2">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-mono-tech px-2 py-0.5 bg-[#18191d] text-[#8d9099] border border-[rgba(255,255,255,0.06)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Primary Metric Footer */}
                <div className="pt-4 border-t border-[rgba(255,255,255,0.08)] flex items-center justify-between">
                  <div>
                    <div className="text-[10px] font-mono-tech text-[#52545d]">PRIMARY BENCHMARK</div>
                    <div className="text-sm font-mono-tech text-[#ffffff] font-bold">
                      {project.impactMetrics[0]?.value}{' '}
                      <span className="text-[#00ff66] text-xs">({project.impactMetrics[0]?.delta})</span>
                    </div>
                  </div>

                  <div className="w-8 h-8 border border-[rgba(255,255,255,0.15)] flex items-center justify-center text-[#8d9099] group-hover:text-[#ffffff] group-hover:bg-[#ff2a3b] group-hover:border-[#ff2a3b] transition-all">
                    <ArrowUpRight size={14} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
