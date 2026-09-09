import React, { useState, useEffect } from 'react';
import { SYSTEM_METRICS } from '../data/portfolioData';

export const TelemetryTicker: React.FC = () => {
  const [epochCounter, setEpochCounter] = useState(4829104);
  const [liveLatency, setLiveLatency] = useState(0.84);

  useEffect(() => {
    const interval = setInterval(() => {
      setEpochCounter((prev) => prev + 1);
      setLiveLatency((0.82 + Math.random() * 0.05));
    }, 2400);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-[#090a0c] border-y border-[rgba(255,255,255,0.08)] py-2 overflow-hidden select-none">
      <div className="flex items-center space-x-8 text-[11px] font-mono-tech whitespace-nowrap overflow-x-auto scrollbar-none px-4 sm:px-8 text-[#8d9099]">
        <div className="flex items-center space-x-2">
          <span className="w-1.5 h-1.5 bg-[#00ff66] inline-block" />
          <span className="text-[#ffffff] font-semibold">GLOBAL DAG EPOCH: #{epochCounter}</span>
        </div>
        <span className="text-[rgba(255,255,255,0.15)]">///</span>
        <div>
          <span>P99 CONSENSUS: </span>
          <span className="text-[#00ff66] font-bold">{liveLatency.toFixed(3)} ms</span>
        </div>
        <span className="text-[rgba(255,255,255,0.15)]">///</span>
        <div>
          <span>ACTIVE FABRIC NODES: </span>
          <span className="text-[#ffffff] font-bold">{SYSTEM_METRICS.activeNodes}</span>
        </div>
        <span className="text-[rgba(255,255,255,0.15)]">///</span>
        <div>
          <span>COQ INVARIANTS: </span>
          <span className="text-[#00ff66] font-bold">100.00% PASS</span>
        </div>
        <span className="text-[rgba(255,255,255,0.15)]">///</span>
        <div>
          <span>MEMORY BANDWIDTH: </span>
          <span className="text-[#ffffff]">{SYSTEM_METRICS.memoryBandwidth}</span>
        </div>
        <span className="text-[rgba(255,255,255,0.15)]">///</span>
        <div>
          <span>PHASE SYNCHRONIZATION: </span>
          <span className="text-[#ffffff]">{SYSTEM_METRICS.clockDrift}</span>
        </div>
        <span className="text-[rgba(255,255,255,0.15)]">///</span>
        <div>
          <span>THREAT CONTAINMENT: </span>
          <span className="text-[#ff2a3b] font-bold">AUTONOMOUS ACTIVE</span>
        </div>
      </div>
    </div>
  );
};
