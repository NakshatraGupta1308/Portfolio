import React from 'react';
import { ScreenId, Project } from '../../types';
import { PROJECTS, SYSTEM_METRICS } from '../../data/portfolioData';
import { playClick } from '../../utils/audio';
import { 
  ArrowUpRight, 
  Terminal, 
  ShieldCheck, 
  Activity, 
  Layers, 
  Cpu, 
  ChevronRight,
  ExternalLink
} from 'lucide-react';

interface OverviewScreenProps {
  onSelectScreen: (screen: ScreenId) => void;
  onSelectProject: (projectId: string) => void;
  onToggleTerminal: () => void;
}

export const OverviewScreen: React.FC<OverviewScreenProps> = ({
  onSelectScreen,
  onSelectProject,
  onToggleTerminal
}) => {
  const featuredProjects = PROJECTS.slice(0, 4);

  return (
    <div className="space-y-24 py-8 sm:py-16">
      {/* 01. HERO / MONUMENTAL DECLARATION SECTION */}
      <section className="relative">
        <div className="space-y-8">
          {/* Status Sub-Indicator */}
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center space-x-2 px-3 py-1 bg-[#18191d] border border-[rgba(255,255,255,0.12)] text-[11px] font-mono-tech tracking-widest text-[#ffffff]">
              <span className="w-2 h-2 bg-[#00ff66] animate-pulse inline-block" />
              <span>SYSTEM CADENCE: 1.2 GHZ SYNC</span>
            </span>
            <span className="inline-flex items-center px-3 py-1 bg-[#121316] border border-[rgba(255,255,255,0.08)] text-[11px] font-mono-tech text-[#8d9099]">
              CLEARANCE: LEVEL-4 TOP-TIER
            </span>
            <span className="inline-flex items-center px-3 py-1 bg-[#121316] border border-[rgba(255,255,255,0.08)] text-[11px] font-mono-tech text-[#8d9099]">
              LOCATION: PACIFIC LABS (37.77° N)
            </span>
          </div>

          {/* Monumental Headline: Alexander Vex */}
          <div className="space-y-4">
            <h1 className="font-display font-bold text-5xl sm:text-7xl lg:text-[88px] tracking-tight text-[#ffffff] leading-[0.95] uppercase">
              ALEXANDER VEX
            </h1>
            <div className="flex items-center space-x-3 text-xs sm:text-sm font-mono-tech tracking-[0.14em] text-[#ff2a3b]">
              <span>[ SYSTEMS ARCHITECT ]</span>
              <span className="text-[#52545d]">///</span>
              <span>[ CYBERNETICS RESEARCHER ]</span>
            </div>
          </div>

          {/* Editorial Italic Manifesto Line from Newsreader */}
          <div className="max-w-4xl pt-2 border-l-2 border-[#ff2a3b] pl-6 py-2">
            <p className="font-editorial italic text-2xl sm:text-4xl text-[#e3e2e5] font-normal leading-snug">
              &ldquo;I engineer distributed infrastructure where algorithmic intelligence meets physical consequence.&rdquo;
            </p>
          </div>

          {/* Descriptive Abstract Paragraph */}
          <p className="max-w-3xl text-base sm:text-lg font-body text-[#8d9099] leading-relaxed">
            Specialized in low-level bare-metal kernels, formally verified Byzantine fault-tolerant mesh consensus protocols, zero-overhead eBPF hypervisors, and sub-millisecond quantized edge silicon accelerators. Operating across adversarial environments where downtime and memory corruption are unacceptable failure modes.
          </p>

          {/* Action CTAs: Primary and Ghost Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <button
              onClick={() => {
                playClick(1400, 0.02);
                onSelectScreen('operations');
              }}
              className="px-6 py-3 bg-[#ffffff] text-[#090a0c] font-mono-tech text-xs font-bold uppercase tracking-[0.1em] hover:bg-[#ff2a3b] hover:text-[#ffffff] transition-all flex items-center space-x-2 focus:outline-none"
            >
              <span>INSPECT EVIDENCE ATLAS</span>
              <ArrowUpRight size={14} />
            </button>

            <button
              onClick={() => {
                playClick(1100, 0.02);
                onSelectScreen('transmission');
              }}
              className="px-6 py-3 bg-transparent text-[#ffffff] border border-[rgba(255,255,255,0.2)] font-mono-tech text-xs uppercase tracking-[0.1em] hover:border-[#ff2a3b] hover:text-[#ff2a3b] transition-all flex items-center space-x-2 focus:outline-none"
            >
              <span>DISPATCH DIRECTIVE</span>
              <span className="text-[#ff2a3b]">→</span>
            </button>

            <button
              onClick={() => {
                playClick(1000, 0.02);
                onToggleTerminal();
              }}
              className="px-4 py-3 bg-[#121316] border border-[rgba(255,255,255,0.12)] text-[#8d9099] hover:text-[#ffffff] hover:border-[#ff2a3b] font-mono-tech text-xs transition-all flex items-center space-x-2"
            >
              <Terminal size={14} className="text-[#ff2a3b]" />
              <span className="hidden sm:inline">TERMINAL DIAGNOSTICS</span>
            </button>
          </div>
        </div>
      </section>

      {/* 02. SECTION DIVIDER WITH TECHNICAL COORDINATES */}
      <div className="w-full border-b border-[rgba(255,255,255,0.12)] flex items-center justify-between text-xs font-mono-tech text-[#8d9099] py-2">
        <div className="flex items-center space-x-3">
          <span className="text-[#ff2a3b] font-bold">// 01</span>
          <span className="text-[#ffffff] uppercase tracking-wider font-semibold">
            TELEMETRY MATRIX &amp; LIVE CALIBRATION
          </span>
        </div>
        <div className="text-[#52545d] hidden sm:block">
          GRID: 12-COL FIXED // NODE SPEC: X86_64 + RV64GCV
        </div>
      </div>

      {/* 03. HIGH DENSITY METRIC MATRIX */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-6 bg-[#121316] border border-[rgba(255,255,255,0.12)] hover:border-[#ff2a3b] transition-all group">
          <div className="flex items-center justify-between text-[11px] font-mono-tech text-[#8d9099] mb-3">
            <span>CONSENSUS EPOCH</span>
            <Activity size={14} className="text-[#00ff66]" />
          </div>
          <div className="font-display font-bold text-3xl sm:text-4xl text-[#ffffff] group-hover:text-[#ff2a3b] transition-colors">
            {SYSTEM_METRICS.consensusLatency}
          </div>
          <div className="text-xs font-mono-tech text-[#52545d] mt-2">
            P99 Asynchronous DAG Finality across 14,000+ mesh peers
          </div>
          <div className="mt-4 pt-3 border-t border-[rgba(255,255,255,0.06)] flex items-center justify-between text-[10px] font-mono-tech text-[#8d9099]">
            <span>BANDWIDTH: 2.4KB</span>
            <span className="text-[#00ff66]">OPTIMIZED</span>
          </div>
        </div>

        <div className="p-6 bg-[#121316] border border-[rgba(255,255,255,0.12)] hover:border-[#ff2a3b] transition-all group">
          <div className="flex items-center justify-between text-[11px] font-mono-tech text-[#8d9099] mb-3">
            <span>INVARIANT VERIFICATION</span>
            <ShieldCheck size={14} className="text-[#ff2a3b]" />
          </div>
          <div className="font-display font-bold text-3xl sm:text-4xl text-[#ffffff] group-hover:text-[#ff2a3b] transition-colors">
            100.0%
          </div>
          <div className="text-xs font-mono-tech text-[#52545d] mt-2">
            Coq &amp; TLA+ machine-checked safety &amp; liveness proofs
          </div>
          <div className="mt-4 pt-3 border-t border-[rgba(255,255,255,0.06)] flex items-center justify-between text-[10px] font-mono-tech text-[#8d9099]">
            <span>EXPLOIT CVEs: 0</span>
            <span className="text-[#00ff66]">AUDITED</span>
          </div>
        </div>

        <div className="p-6 bg-[#121316] border border-[rgba(255,255,255,0.12)] hover:border-[#ff2a3b] transition-all group">
          <div className="flex items-center justify-between text-[11px] font-mono-tech text-[#8d9099] mb-3">
            <span>DIRECT MEMORY I/O</span>
            <Cpu size={14} className="text-[#8d9099]" />
          </div>
          <div className="font-display font-bold text-3xl sm:text-4xl text-[#ffffff] group-hover:text-[#ff2a3b] transition-colors">
            {SYSTEM_METRICS.memoryBandwidth}
          </div>
          <div className="text-xs font-mono-tech text-[#52545d] mt-2">
            Zero-copy PCIe 5.0 lockless DMA ring buffers in silicon
          </div>
          <div className="mt-4 pt-3 border-t border-[rgba(255,255,255,0.06)] flex items-center justify-between text-[10px] font-mono-tech text-[#8d9099]">
            <span>OS CONTEXT SW: 0</span>
            <span className="text-[#00ff66]">HARDWARE RING-0</span>
          </div>
        </div>

        <div className="p-6 bg-[#121316] border border-[rgba(255,255,255,0.12)] hover:border-[#ff2a3b] transition-all group">
          <div className="flex items-center justify-between text-[11px] font-mono-tech text-[#8d9099] mb-3">
            <span>CLOCK DRIFT BOUND</span>
            <Layers size={14} className="text-[#00ff66]" />
          </div>
          <div className="font-display font-bold text-3xl sm:text-4xl text-[#ffffff] group-hover:text-[#ff2a3b] transition-colors">
            &lt; 12ns
          </div>
          <div className="text-xs font-mono-tech text-[#52545d] mt-2">
            Peer-to-peer PTP Kalman filter alignment under GPS denial
          </div>
          <div className="mt-4 pt-3 border-t border-[rgba(255,255,255,0.06)] flex items-center justify-between text-[10px] font-mono-tech text-[#8d9099]">
            <span>ALLAN DEV: 10⁻¹²</span>
            <span className="text-[#00ff66]">ATOMIC GRADE</span>
          </div>
        </div>
      </section>

      {/* 04. SECTION DIVIDER: FEATURED OPERATIONS RECORD ROWS */}
      <div className="w-full border-b border-[rgba(255,255,255,0.12)] flex items-center justify-between text-xs font-mono-tech text-[#8d9099] py-2">
        <div className="flex items-center space-x-3">
          <span className="text-[#ff2a3b] font-bold">// 02</span>
          <span className="text-[#ffffff] uppercase tracking-wider font-semibold">
            PRIMARY OPERATIONS LEDGER // SELECTED WORKS
          </span>
        </div>
        <button
          onClick={() => onSelectScreen('operations')}
          className="text-[#ff2a3b] hover:text-[#ff4d5d] flex items-center space-x-1"
        >
          <span>VIEW FULL CATALOG (06)</span>
          <ChevronRight size={13} />
        </button>
      </div>

      {/* 05. PROJECT INDEX ITEMS (RECORD ROWS) - Matching the exact Kinetic Obsidian design system spec */}
      <div className="divide-y divide-[rgba(255,255,255,0.12)] border-y border-[rgba(255,255,255,0.12)]">
        {featuredProjects.map((project) => (
          <div
            key={project.id}
            onClick={() => {
              playClick(1200, 0.02);
              onSelectProject(project.id);
            }}
            className="group block w-full text-left p-4 sm:p-6 transition-all hover:bg-[#14151a] cursor-pointer"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
              {/* Index Column */}
              <div className="lg:col-span-1 flex items-center space-x-3">
                <span className="font-mono-tech text-sm sm:text-base font-semibold text-[#8d9099] group-hover:text-[#ff2a3b] transition-colors">
                  {project.index}
                </span>
                <span className="inline-block lg:hidden text-[10px] font-mono-tech px-2 py-0.5 bg-[#18191d] text-[#8d9099] border border-[rgba(255,255,255,0.1)]">
                  {project.status}
                </span>
              </div>

              {/* Title & Client Metadata Column */}
              <div className="lg:col-span-5 space-y-1">
                <div className="flex items-center space-x-3">
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-[#ffffff] tracking-tight group-hover:text-[#ff2a3b] transition-colors">
                    {project.title}
                  </h3>
                  <span className="hidden lg:inline-block text-[10px] font-mono-tech px-2 py-0.5 bg-[#18191d] text-[#00ff66] border border-[rgba(0,255,102,0.3)]">
                    {project.status}
                  </span>
                </div>
                <div className="text-xs font-mono-tech text-[#8d9099]">
                  {project.client} <span className="text-[#52545d]">///</span> {project.year}
                </div>
                <p className="text-xs font-body text-[#8d9099] line-clamp-1 pt-1">
                  {project.subtitle}
                </p>
              </div>

              {/* Technical Discipline Tags */}
              <div className="lg:col-span-4 flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-mono-tech px-2 py-1 bg-[#121316] text-[#8d9099] border border-[rgba(255,255,255,0.08)] group-hover:border-[rgba(255,255,255,0.2)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Primary Metric & External Vector Arrow */}
              <div className="lg:col-span-2 flex items-center justify-between lg:justify-end space-x-4">
                <div className="text-right">
                  <div className="text-xs font-mono-tech text-[#ffffff] font-semibold">
                    {project.impactMetrics[0]?.value}
                  </div>
                  <div className="text-[10px] font-mono-tech text-[#00ff66]">
                    {project.impactMetrics[0]?.delta}
                  </div>
                </div>

                <div className="w-8 h-8 border border-[rgba(255,255,255,0.15)] flex items-center justify-center text-[#8d9099] group-hover:text-[#ffffff] group-hover:border-[#ff2a3b] group-hover:bg-[#ff2a3b] transition-all transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                  <ArrowUpRight size={15} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 06. ARCHITECTURAL PHILOSOPHY & CAPABILITY SNAPSHOT */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="p-8 bg-[#121316] border border-[rgba(255,255,255,0.12)] space-y-4">
          <div className="text-xs font-mono-tech tracking-widest text-[#ff2a3b]">
            // 01. SYSTEMS RIGOR
          </div>
          <h3 className="font-display font-bold text-xl text-[#ffffff]">
            Zero-Tolerance for Runtime Failure
          </h3>
          <p className="text-sm font-body text-[#8d9099] leading-relaxed">
            In non-terrestrial optical meshes and financial execution engines, transient bugs cascade into irreversible state divergence. Every architectural invariant is mechanically verified with formal state exploration before compilation.
          </p>
          <div className="text-xs font-mono-tech text-[#52545d] pt-2">
            STACK: RUST • TLA+ • COQ • RISC-V
          </div>
        </div>

        <div className="p-8 bg-[#121316] border border-[rgba(255,255,255,0.12)] space-y-4">
          <div className="text-xs font-mono-tech tracking-widest text-[#ff2a3b]">
            // 02. HARDWARE CONVERGENCE
          </div>
          <h3 className="font-display font-bold text-xl text-[#ffffff]">
            Bare-Metal Kernel Bypass
          </h3>
          <p className="text-sm font-body text-[#8d9099] leading-relaxed">
            Standard operating system abstractions introduce unpredictable interrupt latency. We bypass Linux netfilter and virtual memory overhead using direct eBPF XDP drivers, DPDK ring buffers, and custom silicon registers.
          </p>
          <div className="text-xs font-mono-tech text-[#52545d] pt-2">
            STACK: eBPF • DPDK • FPGA • TRITON
          </div>
        </div>

        <div className="p-8 bg-[#121316] border border-[rgba(255,255,255,0.12)] space-y-4">
          <div className="text-xs font-mono-tech tracking-widest text-[#ff2a3b]">
            // 03. POST-QUANTUM DEFENSE
          </div>
          <h3 className="font-display font-bold text-xl text-[#ffffff]">
            Cryptographic Enclaves
          </h3>
          <p className="text-sm font-body text-[#8d9099] leading-relaxed">
            Architecting hardware-grounded secure enclaves resilient against side-channel differential power analysis and upcoming quantum Shor attacks via ML-KEM-1024 and verifiable hardware roots of trust.
          </p>
          <div className="text-xs font-mono-tech text-[#52545d] pt-2">
            STACK: FIPS 203 • DUDECT • VT-x • HSM
          </div>
        </div>
      </section>

      {/* 07. INTERACTIVE DIRECTIVE CALLOUT */}
      <section className="p-8 sm:p-12 bg-[#0d0e10] border border-[rgba(255,255,255,0.15)] relative overflow-hidden">
        <div className="relative z-10 max-w-3xl space-y-6">
          <div className="text-xs font-mono-tech tracking-widest text-[#ff2a3b]">
            // INITIATE ENGAGEMENT DIRECTIVE
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#ffffff] tracking-tight">
            Deploying High-Assurance Computational Architecture.
          </h2>
          <p className="text-sm sm:text-base font-body text-[#8d9099] leading-relaxed">
            Currently accepting primary consulting directives, defense system architecture advisories, and mission-critical distributed consensus reviews for Q2–Q4 2026.
          </p>
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={() => onSelectScreen('transmission')}
              className="px-6 py-3 bg-[#ffffff] text-[#090a0c] font-mono-tech text-xs font-bold uppercase tracking-wider hover:bg-[#ff2a3b] hover:text-[#ffffff] transition-all"
            >
              DISPATCH SECURE TRANSMISSION
            </button>
            <button
              onClick={() => onSelectScreen('case-studies')}
              className="px-6 py-3 bg-[#18191d] text-[#ffffff] border border-[rgba(255,255,255,0.2)] font-mono-tech text-xs uppercase tracking-wider hover:border-[#ff2a3b] transition-all"
            >
              BROWSE CASE STUDIES
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
