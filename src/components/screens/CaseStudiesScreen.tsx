import React, { useState } from 'react';
import { Project } from '../../types';
import { PROJECTS } from '../../data/portfolioData';
import { playClick } from '../../utils/audio';
import { 
  ArrowUpRight, 
  Code, 
  Copy, 
  Check, 
  Activity, 
  ShieldCheck, 
  Cpu, 
  Layers, 
  ChevronRight,
  TrendingUp,
  Terminal
} from 'lucide-react';

interface CaseStudiesScreenProps {
  selectedProjectId?: string;
  onSelectProject: (projectId: string) => void;
}

export const CaseStudiesScreen: React.FC<CaseStudiesScreenProps> = ({
  selectedProjectId,
  onSelectProject
}) => {
  const currentProject = PROJECTS.find((p) => p.id === selectedProjectId) || PROJECTS[0];
  const [activeBenchmarkMode, setActiveBenchmarkMode] = useState<'engineered' | 'baseline'>('engineered');
  const [copiedCode, setCopiedCode] = useState(false);
  const [activeStageIndex, setActiveStageIndex] = useState(0);

  const handleCopyCode = () => {
    playClick(1000, 0.02);
    navigator.clipboard.writeText(currentProject.codeSnippet.code);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const handleSelectTab = (projectId: string) => {
    playClick(1200, 0.02);
    onSelectProject(projectId);
    setActiveStageIndex(0);
  };

  return (
    <div className="space-y-12 py-8 sm:py-12">
      {/* Top Header & Breadcrumb */}
      <div className="space-y-4">
        <div className="flex items-center space-x-3 text-xs font-mono-tech tracking-widest text-[#ff2a3b]">
          <span>// INDEX 03</span>
          <span className="text-[#52545d]">///</span>
          <span>HIGH-ASSURANCE ARCHITECTURAL SCHEMATICS</span>
        </div>
        <h1 className="font-display font-bold text-4xl sm:text-6xl text-[#ffffff] tracking-tight">
          CASE STUDY ARCHIVE
        </h1>
        <p className="max-w-3xl text-sm sm:text-base font-body text-[#8d9099] leading-relaxed">
          In-depth technical verification reports, benchmark telemetry, and formally proven microcode implementations for mission-critical deployments.
        </p>
      </div>

      {/* Project Selector Bar */}
      <div className="flex overflow-x-auto pb-2 border-b border-[rgba(255,255,255,0.12)] gap-2 scrollbar-thin">
        {PROJECTS.map((proj) => {
          const isSelected = proj.id === currentProject.id;
          return (
            <button
              key={proj.id}
              onClick={() => handleSelectTab(proj.id)}
              className={`px-4 py-2.5 text-xs font-mono-tech whitespace-nowrap transition-all border shrink-0 flex items-center space-x-2 focus:outline-none ${
                isSelected
                  ? 'bg-[#ffffff] text-[#090a0c] border-[#ffffff] font-bold'
                  : 'bg-[#121316] text-[#8d9099] border-[rgba(255,255,255,0.1)] hover:text-[#ffffff] hover:border-[rgba(255,255,255,0.25)]'
              }`}
            >
              <span className={isSelected ? 'text-[#ff2a3b]' : 'text-[#52545d]'}>
                {proj.index}
              </span>
              <span>{proj.title}</span>
              {isSelected && <span className="w-1.5 h-1.5 bg-[#ff2a3b] ml-1 inline-block" />}
            </button>
          );
        })}
      </div>

      {/* Project Overview Banner / Project Sheet */}
      <div className="bg-[#121316] border border-[rgba(255,255,255,0.12)] p-6 sm:p-10 space-y-8">
        {/* Title Meta Row */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-[rgba(255,255,255,0.08)]">
          <div className="space-y-2">
            <div className="flex items-center space-x-3">
              <span className="text-sm font-mono-tech text-[#ff2a3b] font-bold">
                SYSTEM ID: {currentProject.index} // {currentProject.id.toUpperCase()}
              </span>
              <span className="text-[10px] font-mono-tech px-2 py-0.5 bg-[#18191d] text-[#00ff66] border border-[rgba(0,255,102,0.3)]">
                {currentProject.status}
              </span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-5xl text-[#ffffff] tracking-tight">
              {currentProject.title}
            </h2>
            <p className="text-sm sm:text-base font-body text-[#8d9099] max-w-2xl">
              {currentProject.subtitle}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row lg:flex-col gap-3 text-xs font-mono-tech text-[#8d9099] shrink-0">
            <div className="p-3 bg-[#0d0e10] border border-[rgba(255,255,255,0.06)]">
              <span className="text-[#52545d]">COMMISSIONING LAB: </span>
              <span className="text-[#ffffff] font-semibold">{currentProject.client}</span>
            </div>
            <div className="p-3 bg-[#0d0e10] border border-[rgba(255,255,255,0.06)]">
              <span className="text-[#52545d]">DEPLOYMENT ERA: </span>
              <span className="text-[#ffffff] font-semibold">{currentProject.year}</span>
            </div>
          </div>
        </div>

        {/* 4-Column Impact Metrics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {currentProject.impactMetrics.map((metric, i) => (
            <div key={i} className="p-4 bg-[#0d0e10] border border-[rgba(255,255,255,0.08)]">
              <div className="text-[10px] font-mono-tech text-[#8d9099] uppercase tracking-wider mb-1">
                {metric.label}
              </div>
              <div className="text-2xl sm:text-3xl font-display font-bold text-[#ffffff]">
                {metric.value}
              </div>
              <div className="flex items-center space-x-1.5 mt-1 text-[11px] font-mono-tech">
                <span className="text-[#00ff66] font-semibold">{metric.delta}</span>
                <span className="text-[#52545d]">({metric.subtext})</span>
              </div>
            </div>
          ))}
        </div>

        {/* Challenge vs Solution Narrative Block */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-4">
          <div className="space-y-3 p-6 bg-[#090a0c] border border-[rgba(255,255,255,0.08)]">
            <div className="text-xs font-mono-tech tracking-widest text-[#ff2a3b] font-bold">
              // 01. OPERATIONAL CHALLENGE &amp; THREAT VECTOR
            </div>
            <p className="text-sm font-body text-[#8d9099] leading-relaxed">
              {currentProject.challenge}
            </p>
          </div>

          <div className="space-y-3 p-6 bg-[#090a0c] border border-[rgba(255,255,255,0.08)]">
            <div className="text-xs font-mono-tech tracking-widest text-[#00ff66] font-bold">
              // 02. FORMALLY VERIFIED ARCHITECTURAL SOLUTION
            </div>
            <p className="text-sm font-body text-[#8d9099] leading-relaxed">
              {currentProject.solution}
            </p>
          </div>
        </div>
      </div>

      {/* INTERACTIVE COMPONENT 1: SYSTEM BENCHMARK TELEMETRY & COMPARISON SWITCHER */}
      <div className="bg-[#121316] border border-[rgba(255,255,255,0.12)] p-6 sm:p-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[rgba(255,255,255,0.08)]">
          <div className="space-y-1">
            <div className="flex items-center space-x-2 text-xs font-mono-tech text-[#ff2a3b]">
              <TrendingUp size={14} />
              <span>// EMPIRICAL VALIDATION TELEMETRY</span>
            </div>
            <h3 className="font-display font-bold text-2xl text-[#ffffff]">
              Synthetic Latency &amp; Resource Differential
            </h3>
          </div>

          {/* Interactive Benchmark Mode Toggle */}
          <div className="flex items-center border border-[rgba(255,255,255,0.15)] bg-[#0d0e10] p-1">
            <button
              onClick={() => {
                playClick(1000, 0.02);
                setActiveBenchmarkMode('engineered');
              }}
              className={`px-3 py-1 text-xs font-mono-tech transition-all ${
                activeBenchmarkMode === 'engineered'
                  ? 'bg-[#ff2a3b] text-[#ffffff] font-bold'
                  : 'text-[#8d9099] hover:text-[#ffffff]'
              }`}
            >
              OBSIDIAN KERNEL
            </button>
            <button
              onClick={() => {
                playClick(1000, 0.02);
                setActiveBenchmarkMode('baseline');
              }}
              className={`px-3 py-1 text-xs font-mono-tech transition-all ${
                activeBenchmarkMode === 'baseline'
                  ? 'bg-[#ffffff] text-[#090a0c] font-bold'
                  : 'text-[#8d9099] hover:text-[#ffffff]'
              }`}
            >
              LEGACY BASELINE
            </button>
          </div>
        </div>

        {/* Dynamic Benchmark Comparative Bars */}
        <div className="space-y-6">
          {currentProject.benchmarks.map((bm, idx) => {
            const currentVal = activeBenchmarkMode === 'engineered' ? bm.engineered : bm.legacy;
            const maxVal = Math.max(bm.legacy, bm.engineered);
            const percentWidth = Math.max(12, Math.round((currentVal / maxVal) * 100));

            return (
              <div key={idx} className="space-y-2">
                <div className="flex items-center justify-between text-xs font-mono-tech">
                  <span className="text-[#ffffff] font-semibold">{bm.metricName}</span>
                  <div className="flex items-center space-x-3">
                    <span className="text-[#8d9099]">
                      ENGINEERED: <strong className="text-[#00ff66]">{bm.engineered} {bm.unit}</strong>
                    </span>
                    <span className="text-[#52545d]">|</span>
                    <span className="text-[#8d9099]">
                      BASELINE: <strong className="text-[#ff5355]">{bm.legacy} {bm.unit}</strong>
                    </span>
                    <span className="px-1.5 py-0.5 bg-[#18191d] text-[#00ff66] text-[10px] font-bold border border-[rgba(0,255,102,0.3)]">
                      -{bm.improvementPercentage}%
                    </span>
                  </div>
                </div>

                {/* Progress bar */}
                <div className="h-6 w-full bg-[#090a0c] border border-[rgba(255,255,255,0.08)] flex items-center p-1">
                  <div
                    className={`h-full transition-all duration-500 ${
                      activeBenchmarkMode === 'engineered' ? 'bg-[#ff2a3b]' : 'bg-[#52545d]'
                    }`}
                    style={{ width: `${percentWidth}%` }}
                  />
                  <span className="ml-3 text-[11px] font-mono-tech text-[#ffffff] font-bold">
                    {currentVal} {bm.unit}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Live Hardware Telemetry Chips */}
        <div className="pt-4 border-t border-[rgba(255,255,255,0.08)] grid grid-cols-2 md:grid-cols-4 gap-3">
          {currentProject.telemetry.map((t, idx) => (
            <div key={idx} className="p-3 bg-[#090a0c] border border-[rgba(255,255,255,0.06)]">
              <div className="text-[10px] font-mono-tech text-[#52545d]">{t.metric}</div>
              <div className="text-sm font-mono-tech font-bold text-[#ffffff] mt-0.5">{t.val}</div>
            </div>
          ))}
        </div>
      </div>

      {/* INTERACTIVE COMPONENT 2: SIGNAL FLOW & ARCHITECTURE PIPELINE */}
      <div className="bg-[#121316] border border-[rgba(255,255,255,0.12)] p-6 sm:p-8 space-y-6">
        <div className="space-y-1 pb-4 border-b border-[rgba(255,255,255,0.08)]">
          <div className="text-xs font-mono-tech text-[#ff2a3b] font-bold">
            // INTERACTIVE SIGNAL PIPELINE
          </div>
          <h3 className="font-display font-bold text-2xl text-[#ffffff]">
            Deterministic Microarchitectural Execution Graph
          </h3>
          <p className="text-xs font-body text-[#8d9099]">
            Click each architectural stage to analyze latency budgets and hardware isolation bounds.
          </p>
        </div>

        {/* Pipeline Nodes Selector */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {currentProject.architectureNodes.map((node, idx) => {
            const isSelected = activeStageIndex === idx;
            return (
              <button
                key={idx}
                onClick={() => {
                  playClick(1100, 0.02);
                  setActiveStageIndex(idx);
                }}
                className={`p-4 text-left border transition-all ${
                  isSelected
                    ? 'bg-[#18191d] border-[#ff2a3b] text-[#ffffff]'
                    : 'bg-[#090a0c] border-[rgba(255,255,255,0.08)] text-[#8d9099] hover:border-[rgba(255,255,255,0.2)]'
                }`}
              >
                <div className="flex items-center justify-between text-[11px] font-mono-tech mb-2">
                  <span className={isSelected ? 'text-[#ff2a3b] font-bold' : 'text-[#52545d]'}>
                    {node.step}
                  </span>
                  <span className="text-[#00ff66] font-semibold">{node.latency}</span>
                </div>
                <div className="font-display font-bold text-sm text-[#ffffff] mb-1">
                  {node.title}
                </div>
                <div className="text-xs font-body text-[#8d9099] line-clamp-2">
                  {node.description}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Stage Detail Callout */}
        <div className="p-4 bg-[#090a0c] border border-[rgba(255,255,255,0.08)] flex items-start space-x-3 text-xs font-mono-tech">
          <div className="w-2 h-2 bg-[#ff2a3b] mt-1 shrink-0" />
          <div>
            <span className="text-[#ff2a3b] font-bold">
              {currentProject.architectureNodes[activeStageIndex].step} ANALYSIS:
            </span>{' '}
            <span className="text-[#e3e2e5]">
              {currentProject.architectureNodes[activeStageIndex].title} completes in {currentProject.architectureNodes[activeStageIndex].latency} under zero heap allocation bounds. Verified against transient microarchitectural leaks.
            </span>
          </div>
        </div>
      </div>

      {/* INTERACTIVE COMPONENT 3: VERIFIED CODE INSPECTOR */}
      <div className="bg-[#121316] border border-[rgba(255,255,255,0.12)] p-6 sm:p-8 space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-[rgba(255,255,255,0.08)]">
          <div className="flex items-center space-x-2 text-xs font-mono-tech">
            <Code size={15} className="text-[#ff2a3b]" />
            <span className="text-[#ffffff] font-bold">{currentProject.codeSnippet.filename}</span>
            <span className="text-[#52545d]">///</span>
            <span className="text-[#8d9099] uppercase">{currentProject.codeSnippet.language}</span>
          </div>

          <button
            onClick={handleCopyCode}
            className="flex items-center space-x-1.5 px-3 py-1 bg-[#18191d] border border-[rgba(255,255,255,0.15)] text-xs font-mono-tech text-[#8d9099] hover:text-[#ffffff] hover:border-[#ff2a3b] transition-all"
          >
            {copiedCode ? (
              <>
                <Check size={12} className="text-[#00ff66]" />
                <span className="text-[#00ff66]">COPIED TO BUFFER</span>
              </>
            ) : (
              <>
                <Copy size={12} />
                <span>COPY SNIPPET</span>
              </>
            )}
          </button>
        </div>

        {/* Code Block with simulated line numbers */}
        <div className="bg-[#090a0c] border border-[rgba(255,255,255,0.08)] p-4 overflow-x-auto text-xs font-mono-tech text-[#e3e2e5] leading-relaxed">
          <pre className="selection:bg-[#ff2a3b] selection:text-white">
            {currentProject.codeSnippet.code}
          </pre>
        </div>

        {/* Verification Certificate Tag */}
        <div className="flex flex-wrap items-center justify-between text-[11px] font-mono-tech text-[#52545d] pt-2">
          <div className="flex items-center space-x-2">
            <ShieldCheck size={13} className="text-[#00ff66]" />
            <span className="text-[#00ff66]">STATIC SYMBOLIC ANALYSIS: VERIFIED CLEAN (0 MEMORY FAULTS)</span>
          </div>
          <span>TARGET: {currentProject.specs[0]?.value}</span>
        </div>
      </div>

      {/* HARDWARE & SPECIFICATIONS LEDGER TABLE */}
      <div className="bg-[#121316] border border-[rgba(255,255,255,0.12)] p-6 sm:p-8 space-y-4">
        <div className="text-xs font-mono-tech text-[#ff2a3b] font-bold">
          // HARDWARE SPECIFICATION LEDGER
        </div>
        <div className="divide-y divide-[rgba(255,255,255,0.08)] border-y border-[rgba(255,255,255,0.08)]">
          {currentProject.specs.map((spec, i) => (
            <div key={i} className="py-3 flex flex-col sm:flex-row sm:items-center justify-between text-xs font-mono-tech gap-1">
              <span className="text-[#8d9099]">{spec.label}</span>
              <span className="text-[#ffffff] font-semibold">{spec.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
