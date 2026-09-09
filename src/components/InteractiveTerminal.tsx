import React, { useState, useRef, useEffect } from 'react';
import { ScreenId } from '../types';
import { PROJECTS, DISPATCHES, SYSTEM_METRICS } from '../data/portfolioData';
import { playClick } from '../utils/audio';
import { Terminal as TerminalIcon, X, Minimize2, Maximize2 } from 'lucide-react';

interface InteractiveTerminalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectScreen: (screen: ScreenId) => void;
  onSelectProject: (projectId: string) => void;
}

interface CommandLog {
  type: 'input' | 'output' | 'error' | 'system';
  text: string;
}

export const InteractiveTerminal: React.FC<InteractiveTerminalProps> = ({
  isOpen,
  onClose,
  onSelectScreen,
  onSelectProject
}) => {
  const [input, setInput] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);
  const [history, setHistory] = useState<CommandLog[]>([
    { type: 'system', text: 'KINETIC OBSIDIAN SYSTEMS TERMINAL [CORE v6.12.0]' },
    { type: 'system', text: 'AUTHENTICATED OPERATOR: GUEST // CLEARANCE: SEC-09' },
    { type: 'system', text: 'Type "help" to display available diagnostic commands.' }
  ]);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [isOpen, history]);

  if (!isOpen) return null;

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const rawCmd = input.trim();
    if (!rawCmd) return;

    playClick(1100, 0.02);

    const newLogs: CommandLog[] = [...history, { type: 'input', text: `$ ${rawCmd}` }];
    const cmd = rawCmd.toLowerCase();
    const args = cmd.split(' ');
    const primary = args[0];

    switch (primary) {
      case 'help':
        newLogs.push({
          type: 'output',
          text: `AVAILABLE DIRECTIVES:
  status        - Output global consensus & node telemetry
  projects, ls  - Enumerate operations ledger and project codes
  open <id>     - Load dossier for project (e.g. open neuron-k, aethel-net)
  benchmark     - Run synthetic cycle latency benchmark test
  whoami        - Display identity registry and security clearance
  screen <name> - Jump to screen (overview, operations, case-studies, dispatches, arsenal, transmission)
  clear         - Wipe terminal buffer
  exit          - Close diagnostics console`
        });
        break;

      case 'status':
        newLogs.push({
          type: 'output',
          text: `TELEMETRY MATRIX:
  Consensus Latency:      ${SYSTEM_METRICS.consensusLatency} (P99 aBFT Epoch)
  Operational Nodes:      ${SYSTEM_METRICS.activeNodes} Active Global Nodes
  System Uptime:          ${SYSTEM_METRICS.uptime} (Five-Nines Continuous)
  Clock Phase Drift:      ${SYSTEM_METRICS.clockDrift}
  Memory Bus Bandwidth:   ${SYSTEM_METRICS.memoryBandwidth}
  Formal Invariant Proof: ${SYSTEM_METRICS.formalProofPassRate} (Coq + TLA+ Verified)`
        });
        break;

      case 'projects':
      case 'ls':
        const projList = PROJECTS.map(
          (p) => `  [${p.index}] ${p.id.padEnd(16)} | ${p.title.padEnd(16)} | ${p.status.padEnd(14)} | ${p.client}`
        ).join('\n');
        newLogs.push({
          type: 'output',
          text: `ACTIVE EVIDENCE LEDGER:\n${projList}\nTip: Type "open <id>" to view dossier.`
        });
        break;

      case 'open':
        const targetId = args[1];
        if (!targetId) {
          newLogs.push({ type: 'error', text: 'Error: Must specify project id. Example: "open neuron-k"' });
        } else {
          const match = PROJECTS.find(
            (p) => p.id.toLowerCase() === targetId || p.index === targetId
          );
          if (match) {
            newLogs.push({ type: 'output', text: `Accessing dossier for [${match.title}]...` });
            onSelectProject(match.id);
          } else {
            newLogs.push({ type: 'error', text: `Project id "${targetId}" not found in registry.` });
          }
        }
        break;

      case 'screen':
      case 'goto':
        const targetScreen = args[1] as ScreenId;
        const validScreens: ScreenId[] = ['overview', 'operations', 'case-studies', 'dispatches', 'arsenal', 'transmission'];
        if (validScreens.includes(targetScreen)) {
          newLogs.push({ type: 'output', text: `Routing display plane to [${targetScreen.toUpperCase()}]...` });
          onSelectScreen(targetScreen);
        } else {
          newLogs.push({ type: 'error', text: `Invalid screen. Valid targets: ${validScreens.join(', ')}` });
        }
        break;

      case 'benchmark':
        newLogs.push({
          type: 'output',
          text: `[INITIATING SYNTHETIC HARDWARE BENCHMARK]
  Allocating NUMA-pinned L2 cache lines... DONE (0.04ms)
  Spinning 64 thread lockless SPSC ring buffers... DONE (0.12ms)
  Testing memory bandwidth over PCIe 5.0 DMA:
  >> Pass 1: 3.18 TB/s
  >> Pass 2: 3.24 TB/s
  >> Pass 3: 3.21 TB/s
  Mean Invariant Latency: 842 nanoseconds.
  BENCHMARK VERIFIED: PASS (Zero instruction divergence).`
        });
        break;

      case 'whoami':
        newLogs.push({
          type: 'output',
          text: `IDENTITY REGISTRY:
  Subject:            Alexander Vex
  Title:              Principal Systems Architect & Cybernetics Researcher
  Clearance:          Level-4 Restricted Systems Access
  Primary Focus:      Fault-Tolerant Distributed Consensus, Bare-Metal Kernels, Edge AI Acceleration
  PGP Key:            8B94 A3C7 E219 40BF 91E8 5D02 C72A 4F90 18DC 39E1`
        });
        break;

      case 'clear':
        setHistory([]);
        setInput('');
        return;

      case 'exit':
      case 'quit':
        onClose();
        setInput('');
        return;

      default:
        newLogs.push({
          type: 'error',
          text: `Command not recognized: "${rawCmd}". Type "help" for active directives.`
        });
        break;
    }

    setHistory(newLogs);
    setInput('');
  };

  return (
    <div 
      className={`fixed z-50 transition-all ${
        isExpanded
          ? 'inset-4 bg-[#090a0c]/98 border border-[#ff2a3b]'
          : 'bottom-4 right-4 w-[92vw] sm:w-[580px] h-[440px] bg-[#0d0e10]/98 border border-[rgba(255,255,255,0.2)] hover:border-[#ff2a3b]'
      } shadow-2xl flex flex-col font-mono-tech backdrop-blur-lg`}
    >
      {/* Terminal Title Bar */}
      <div className="flex items-center justify-between px-3 py-2 bg-[#121316] border-b border-[rgba(255,255,255,0.12)]">
        <div className="flex items-center space-x-2 text-xs">
          <TerminalIcon size={14} className="text-[#ff2a3b]" />
          <span className="font-semibold text-[#ffffff] tracking-wider">
            DIAGNOSTIC TELEMETRY CONSOLE // CLI-01
          </span>
        </div>
        <div className="flex items-center space-x-1">
          <button
            onClick={() => {
              playClick(1000, 0.02);
              setIsExpanded(!isExpanded);
            }}
            className="p-1 text-[#8d9099] hover:text-[#ffffff] focus:outline-none"
            title={isExpanded ? 'Minimize' : 'Expand'}
          >
            {isExpanded ? <Minimize2 size={13} /> : <Maximize2 size={13} />}
          </button>
          <button
            onClick={() => {
              playClick(900, 0.02);
              onClose();
            }}
            className="p-1 text-[#8d9099] hover:text-[#ff2a3b] focus:outline-none"
            title="Close"
          >
            <X size={14} />
          </button>
        </div>
      </div>

      {/* Terminal Output Log Area */}
      <div className="flex-1 p-4 overflow-y-auto space-y-2 text-xs font-mono-tech select-text bg-[#090a0c]/80">
        {history.map((log, i) => (
          <div key={i} className="leading-relaxed whitespace-pre-wrap">
            {log.type === 'input' && (
              <span className="text-[#ff2a3b] font-bold">{log.text}</span>
            )}
            {log.type === 'output' && (
              <span className="text-[#e3e2e5]">{log.text}</span>
            )}
            {log.type === 'error' && (
              <span className="text-[#ff5355] font-semibold">{log.text}</span>
            )}
            {log.type === 'system' && (
              <span className="text-[#8d9099]">{log.text}</span>
            )}
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      {/* Terminal Input Form */}
      <form
        onSubmit={handleCommand}
        className="flex items-center px-3 py-2 bg-[#121316] border-t border-[rgba(255,255,255,0.12)]"
      >
        <span className="text-[#00ff66] mr-2 text-xs font-bold">$</span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder='Type command ("help", "status", "ls", "benchmark")...'
          className="flex-1 bg-transparent text-[#ffffff] font-mono-tech text-xs placeholder-[#52545d] focus:outline-none"
        />
        <span className="text-[10px] text-[#52545d] hidden sm:inline ml-2">
          [ENTER]
        </span>
      </form>
    </div>
  );
};
