import React, { useState } from 'react';
import { ARSENAL_SKILLS } from '../../data/portfolioData';
import { playClick } from '../../utils/audio';
import { 
  Terminal, 
  Cpu, 
  Sliders, 
  Activity, 
  ShieldCheck, 
  Layers, 
  Zap,
  Flame,
  Check
} from 'lucide-react';

export const ArsenalScreen: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  
  // Interactive Simulator State
  const [simulatedIops, setSimulatedIops] = useState<number>(2500000); // 2.5M IOPS default

  // Computed simulator metrics
  const coreCount = Math.min(64, Math.max(4, Math.ceil(simulatedIops / 200000)));
  const calculatedLatencyNs = Math.round(72 + (simulatedIops / 1000000) * 14);
  const cacheHitPercent = (99.8 - (simulatedIops / 10000000) * 0.9).toFixed(2);
  const wattsPower = (45 + (simulatedIops / 1000000) * 18).toFixed(1);

  const categories = [
    'all',
    'Low-Level Systems',
    'Distributed Protocols',
    'Hardware & AI Silicon',
    'Formal Methods & Security'
  ];

  const filteredSkills = ARSENAL_SKILLS.filter(
    (s) => activeCategory === 'all' || s.category === activeCategory
  );

  return (
    <div className="space-y-16 py-8 sm:py-12">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center space-x-3 text-xs font-mono-tech tracking-widest text-[#ff2a3b]">
          <span>// INDEX 05</span>
          <span className="text-[#52545d]">///</span>
          <span>WEAPONRY &amp; ARCHITECTURAL SPECIFICATIONS</span>
        </div>
        <h1 className="font-display font-bold text-4xl sm:text-6xl text-[#ffffff] tracking-tight">
          TECHNICAL ARSENAL
        </h1>
        <p className="max-w-3xl text-sm sm:text-base font-body text-[#8d9099] leading-relaxed">
          Operational engineering competencies grounded in decade-long production deployments across bare-metal systems, high-throughput distributed consensus, and formally verified security enclaves.
        </p>
      </div>

      {/* INTERACTIVE SIMULATOR: REAL-TIME SILICON LOAD & CACHE JITTER SIMULATOR */}
      <div className="bg-[#121316] border border-[#ff2a3b] p-6 sm:p-10 space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[rgba(255,255,255,0.08)]">
          <div className="space-y-1">
            <div className="flex items-center space-x-2 text-xs font-mono-tech text-[#ff2a3b]">
              <Sliders size={14} />
              <span>// LIVE STRESS BENCHMARK LAB</span>
            </div>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-[#ffffff]">
              Obsidian Core Throughput &amp; Latency Simulator
            </h2>
          </div>
          <div className="text-xs font-mono-tech text-[#8d9099] px-3 py-1 bg-[#090a0c] border border-[rgba(255,255,255,0.1)]">
            ALGORITHM: ZERO-COPY DPDK + SPSC LOCK-FREE
          </div>
        </div>

        {/* Slider Controls */}
        <div className="space-y-4 p-6 bg-[#090a0c] border border-[rgba(255,255,255,0.08)]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs font-mono-tech gap-2">
            <span className="text-[#ffffff] font-bold">
              SIMULATED SYSTEM WORKLOAD (MESSAGES / SEC):
            </span>
            <span className="text-lg font-mono-tech text-[#ff2a3b] font-bold">
              {(simulatedIops / 1000000).toFixed(2)} MILLION IOPS
            </span>
          </div>

          <input
            type="range"
            min={100000}
            max={10000000}
            step={100000}
            value={simulatedIops}
            onChange={(e) => {
              setSimulatedIops(Number(e.target.value));
              playClick(800, 0.008, 0.02);
            }}
            className="w-full accent-[#ff2a3b] cursor-pointer h-2 bg-[#18191d]"
          />

          <div className="flex justify-between text-[10px] font-mono-tech text-[#52545d]">
            <span>100K IOPS (IDLE)</span>
            <span>2.5M IOPS (NOMINAL)</span>
            <span>5.0M IOPS (PEAK CLUSTER)</span>
            <span>10.0M IOPS (SATURATION)</span>
          </div>
        </div>

        {/* Dynamic Telemetry Metric Output */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 bg-[#090a0c] border border-[rgba(255,255,255,0.08)] space-y-1">
            <div className="text-[10px] font-mono-tech text-[#52545d]">P99 TICK LATENCY</div>
            <div className="text-2xl sm:text-3xl font-display font-bold text-[#ffffff]">
              {calculatedLatencyNs} <span className="text-xs font-mono-tech text-[#00ff66]">ns</span>
            </div>
            <div className="text-[10px] font-mono-tech text-[#00ff66]">
              Deterministic Sub-microsecond
            </div>
          </div>

          <div className="p-4 bg-[#090a0c] border border-[rgba(255,255,255,0.08)] space-y-1">
            <div className="text-[10px] font-mono-tech text-[#52545d]">L2 CACHE HIT RATIO</div>
            <div className="text-2xl sm:text-3xl font-display font-bold text-[#ffffff]">
              {cacheHitPercent}%
            </div>
            <div className="text-[10px] font-mono-tech text-[#00ff66]">
              NUMA Line-Aligned Prefetch
            </div>
          </div>

          <div className="p-4 bg-[#090a0c] border border-[rgba(255,255,255,0.08)] space-y-1">
            <div className="text-[10px] font-mono-tech text-[#52545d]">PINNED CPU CORES</div>
            <div className="text-2xl sm:text-3xl font-display font-bold text-[#ffffff]">
              {coreCount} <span className="text-xs font-mono-tech text-[#8d9099]">/ 64</span>
            </div>
            <div className="text-[10px] font-mono-tech text-[#8d9099]">
              Zero OS Context Switches
            </div>
          </div>

          <div className="p-4 bg-[#090a0c] border border-[rgba(255,255,255,0.08)] space-y-1">
            <div className="text-[10px] font-mono-tech text-[#52545d]">PACKAGE THERMAL DRAW</div>
            <div className="text-2xl sm:text-3xl font-display font-bold text-[#ffffff]">
              {wattsPower} <span className="text-xs font-mono-tech text-[#8d9099]">W</span>
            </div>
            <div className="text-[10px] font-mono-tech text-[#00ff66]">
              Sub-100W Edge Optimized
            </div>
          </div>
        </div>
      </div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap gap-2 border-b border-[rgba(255,255,255,0.12)] pb-4">
        {categories.map((cat) => {
          const isActive = activeCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => {
                playClick(1000, 0.02);
                setActiveCategory(cat);
              }}
              className={`px-3 py-1.5 text-xs font-mono-tech border transition-all ${
                isActive
                  ? 'bg-[#ffffff] text-[#090a0c] border-[#ffffff] font-bold'
                  : 'bg-[#121316] text-[#8d9099] border-[rgba(255,255,255,0.08)] hover:text-[#ffffff]'
              }`}
            >
              {cat.toUpperCase()}
            </button>
          );
        })}
      </div>

      {/* Capability Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredSkills.map((skill, idx) => (
          <div
            key={idx}
            className="p-6 bg-[#121316] border border-[rgba(255,255,255,0.12)] hover:border-[#ff2a3b] transition-all space-y-4 group"
          >
            {/* Header row */}
            <div className="flex items-start justify-between">
              <div className="space-y-1">
                <span className="text-[10px] font-mono-tech tracking-widest text-[#ff2a3b]">
                  {skill.category.toUpperCase()}
                </span>
                <h3 className="font-display font-bold text-xl text-[#ffffff] group-hover:text-[#ff2a3b] transition-colors">
                  {skill.name}
                </h3>
              </div>
              <div className="text-right text-xs font-mono-tech">
                <div className="text-[#ffffff] font-bold">{skill.proficiency}%</div>
                <div className="text-[10px] text-[#52545d]">{skill.experience}</div>
              </div>
            </div>

            {/* Proficiency Meter */}
            <div className="h-2 w-full bg-[#090a0c] border border-[rgba(255,255,255,0.08)] p-0.5">
              <div
                className="h-full bg-[#ffffff] group-hover:bg-[#ff2a3b] transition-all duration-300"
                style={{ width: `${skill.proficiency}%` }}
              />
            </div>

            {/* Production Nodes Badge */}
            <div className="text-xs font-mono-tech text-[#00ff66] flex items-center space-x-1.5">
              <span className="w-1.5 h-1.5 bg-[#00ff66] inline-block" />
              <span>DEPLOYED: {skill.productionNodes}</span>
            </div>

            {/* Key highlights checklist */}
            <div className="pt-2 border-t border-[rgba(255,255,255,0.06)] space-y-1.5">
              {skill.highlights.map((h, i) => (
                <div key={i} className="flex items-center space-x-2 text-xs font-mono-tech text-[#8d9099]">
                  <span className="text-[#ff2a3b] font-bold">▶</span>
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
