import React, { useState } from 'react';
import { ScreenId } from '../types';
import { SYSTEM_METRICS } from '../data/portfolioData';
import { playClick } from '../utils/audio';
import { ArrowUp, Copy, Check, ShieldCheck, Terminal, ExternalLink } from 'lucide-react';

interface FooterProps {
  onSelectScreen: (screen: ScreenId) => void;
  onToggleTerminal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectScreen, onToggleTerminal }) => {
  const [copiedPgp, setCopiedPgp] = useState(false);

  const pgpKey = '8B94 A3C7 E219 40BF 91E8  5D02 C72A 4F90 18DC 39E1';

  const handleCopyPgp = () => {
    playClick(1000, 0.02);
    navigator.clipboard.writeText(pgpKey);
    setCopiedPgp(true);
    setTimeout(() => setCopiedPgp(false), 2500);
  };

  const scrollToTop = () => {
    playClick(1200, 0.02);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#090a0c] border-t border-[rgba(255,255,255,0.12)] pt-12 pb-16 px-4 sm:px-8 mt-24">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Top Technical Telemetry Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-[#121316] border border-[rgba(255,255,255,0.08)]">
          <div>
            <div className="text-[10px] font-mono-tech tracking-widest text-[#8d9099] mb-1">
              // CLUSTER LATENCY
            </div>
            <div className="text-xl sm:text-2xl font-display font-bold text-[#ffffff] flex items-center space-x-1.5">
              <span>{SYSTEM_METRICS.consensusLatency}</span>
              <span className="text-xs text-[#00ff66] font-mono-tech">P99</span>
            </div>
            <div className="text-[11px] font-mono-tech text-[#52545d] mt-0.5">
              Asynchronous DAG commit
            </div>
          </div>

          <div>
            <div className="text-[10px] font-mono-tech tracking-widest text-[#8d9099] mb-1">
              // ACTIVE NODES
            </div>
            <div className="text-xl sm:text-2xl font-display font-bold text-[#ffffff]">
              {SYSTEM_METRICS.activeNodes.toLocaleString()}
            </div>
            <div className="text-[11px] font-mono-tech text-[#52545d] mt-0.5">
              Global multi-region fabric
            </div>
          </div>

          <div>
            <div className="text-[10px] font-mono-tech tracking-widest text-[#8d9099] mb-1">
              // PROVEN INVARIANTS
            </div>
            <div className="text-xl sm:text-2xl font-display font-bold text-[#ffffff] text-[#00ff66]">
              {SYSTEM_METRICS.formalProofPassRate}
            </div>
            <div className="text-[11px] font-mono-tech text-[#52545d] mt-0.5">
              Coq + TLA+ machine verified
            </div>
          </div>

          <div>
            <div className="text-[10px] font-mono-tech tracking-widest text-[#8d9099] mb-1">
              // SYSTEM AVAILABILITY
            </div>
            <div className="text-xl sm:text-2xl font-display font-bold text-[#ffffff]">
              {SYSTEM_METRICS.uptime}
            </div>
            <div className="text-[11px] font-mono-tech text-[#52545d] mt-0.5">
              Continuous five-nines tier
            </div>
          </div>
        </div>

        {/* Mid Row: Navigation Directory & PGP Enclave */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-4">
          {/* Brand & Manifesto Column */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center space-x-2">
              <span className="w-2.5 h-2.5 bg-[#ff2a3b] inline-block" />
              <span className="font-display font-bold text-lg text-[#ffffff]">
                ALEXANDER VEX
              </span>
            </div>
            <p className="text-sm font-body text-[#8d9099] leading-relaxed">
              Principal Systems Architect &amp; Cybernetics Researcher specializing in fault-tolerant asynchronous distributed networks, zero-overhead Linux kernel virtualization, and heterogeneous RISC-V edge AI silicon acceleration.
            </p>
            <div className="pt-2 flex items-center space-x-3 text-xs font-mono-tech text-[#8d9099]">
              <span className="text-[#00ff66]">● CLEARANCE: PUBLIC / RESTRICTED</span>
              <span>•</span>
              <span>BASE: SF / PACIFIC TIME</span>
            </div>
          </div>

          {/* Directory Links Column */}
          <div className="lg:col-span-4 space-y-3">
            <div className="text-xs font-mono-tech tracking-widest text-[#8d9099] uppercase">
              // ARCHIVAL INDICES
            </div>
            <div className="grid grid-cols-2 gap-2 text-xs font-mono-tech">
              <button
                onClick={() => onSelectScreen('overview')}
                className="text-left text-[#8d9099] hover:text-[#ff2a3b] py-1 transition-colors"
              >
                01 // OVERVIEW
              </button>
              <button
                onClick={() => onSelectScreen('operations')}
                className="text-left text-[#8d9099] hover:text-[#ff2a3b] py-1 transition-colors"
              >
                02 // OPERATIONS
              </button>
              <button
                onClick={() => onSelectScreen('case-studies')}
                className="text-left text-[#8d9099] hover:text-[#ff2a3b] py-1 transition-colors"
              >
                03 // CASE DOSSIER
              </button>
              <button
                onClick={() => onSelectScreen('dispatches')}
                className="text-left text-[#8d9099] hover:text-[#ff2a3b] py-1 transition-colors"
              >
                04 // FIELD LOGS
              </button>
              <button
                onClick={() => onSelectScreen('arsenal')}
                className="text-left text-[#8d9099] hover:text-[#ff2a3b] py-1 transition-colors"
              >
                05 // ARSENAL
              </button>
              <button
                onClick={() => onSelectScreen('transmission')}
                className="text-left text-[#8d9099] hover:text-[#ff2a3b] py-1 transition-colors"
              >
                06 // TRANSMISSION
              </button>
            </div>

            <div className="pt-3 flex flex-wrap gap-2 text-[11px] font-mono-tech">
              <button
                onClick={onToggleTerminal}
                className="px-2.5 py-1 bg-[#121316] border border-[rgba(255,255,255,0.15)] text-[#8d9099] hover:text-[#ffffff] hover:border-[#ff2a3b] flex items-center space-x-1"
              >
                <Terminal size={12} />
                <span>OPEN CLI</span>
              </button>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="px-2.5 py-1 bg-[#121316] border border-[rgba(255,255,255,0.15)] text-[#8d9099] hover:text-[#ffffff] hover:border-[#ff2a3b] flex items-center space-x-1"
              >
                <span>GITHUB</span>
                <ExternalLink size={10} />
              </a>
              <a
                href="https://arxiv.org"
                target="_blank"
                rel="noreferrer"
                className="px-2.5 py-1 bg-[#121316] border border-[rgba(255,255,255,0.15)] text-[#8d9099] hover:text-[#ffffff] hover:border-[#ff2a3b] flex items-center space-x-1"
              >
                <span>ARXIV</span>
                <ExternalLink size={10} />
              </a>
            </div>
          </div>

          {/* Cryptographic Verification / PGP Fingerprint */}
          <div className="lg:col-span-4 space-y-3">
            <div className="text-xs font-mono-tech tracking-widest text-[#8d9099] uppercase flex items-center justify-between">
              <span>// CRYPTOGRAPHIC VERIFICATION</span>
              <ShieldCheck size={14} className="text-[#00ff66]" />
            </div>
            <div className="p-3 bg-[#0d0e10] border border-[rgba(255,255,255,0.12)] space-y-2">
              <div className="text-[10px] font-mono-tech text-[#52545d]">
                PUBLIC GPG/PGP 4096R KEY FINGERPRINT:
              </div>
              <div className="text-[11px] font-mono-tech text-[#ffffff] tracking-wider font-semibold break-all selection:bg-[#ff2a3b]">
                {pgpKey}
              </div>
              <div className="flex items-center justify-between pt-1">
                <span className="text-[10px] font-mono-tech text-[#8d9099]">
                  EXPIRES: 2028-12-31
                </span>
                <button
                  onClick={handleCopyPgp}
                  className="flex items-center space-x-1 px-2 py-0.5 bg-[#18191d] border border-[rgba(255,255,255,0.2)] text-[10px] font-mono-tech text-[#ffffff] hover:border-[#ff2a3b] hover:text-[#ff2a3b] transition-all"
                >
                  {copiedPgp ? (
                    <>
                      <Check size={11} className="text-[#00ff66]" />
                      <span className="text-[#00ff66]">COPIED</span>
                    </>
                  ) : (
                    <>
                      <Copy size={11} />
                      <span>COPY FINGERPRINT</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright, Coordinates, Return Top */}
        <div className="border-t border-[rgba(255,255,255,0.08)] pt-6 flex flex-col sm:flex-row items-center justify-between text-xs font-mono-tech text-[#52545d] gap-4">
          <div className="flex items-center space-x-2">
            <span>© 2026 ALEXANDER VEX // KINETIC OBSIDIAN</span>
            <span>•</span>
            <span className="text-[#8d9099]">ALL DIRECTIVES LOGGED</span>
          </div>

          <div className="flex items-center space-x-4">
            <span className="hidden md:inline">
              SYS PROTOCOL: ZERO-TRUST RESTRICTED
            </span>
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-1.5 px-3 py-1 bg-[#121316] border border-[rgba(255,255,255,0.15)] text-[#8d9099] hover:text-[#ffffff] hover:border-[#ff2a3b] transition-colors"
            >
              <span>RETURN TO APEX</span>
              <ArrowUp size={13} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
