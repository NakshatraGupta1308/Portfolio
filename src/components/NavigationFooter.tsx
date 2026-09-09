import React, { useEffect, useState } from 'react';

export const NavigationFooter: React.FC = () => {
  const [telemetry, setTelemetry] = useState<{
    localTimeCT: string;
    uptimeSeconds: number;
    dispatchesCount: number;
  }>({
    localTimeCT: "Ames, IA",
    uptimeSeconds: 0,
    dispatchesCount: 1
  });

  useEffect(() => {
    fetch('/api/telemetry')
      .then(res => res.json())
      .then(data => {
        if (data && data.location) {
          setTelemetry({
            localTimeCT: data.location.localTimeCT || "Ames, IA",
            uptimeSeconds: data.serverMetrics?.uptimeSeconds || 0,
            dispatchesCount: data.serverMetrics?.totalDispatchesReceived || 1
          });
        }
      })
      .catch(() => {
        // quiet fallback
      });
  }, []);

  return (
    <footer className="w-full bg-[#090a0c] border-t border-[rgba(255,255,255,0.12)] py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex flex-col md:flex-row items-center justify-between gap-6 font-mono text-[13px] text-[#8d9099]">
        <div className="flex flex-wrap items-center gap-2 text-[#52545d]">
          <span className="text-[#ff2a3b] font-bold">//</span>
          <span>LOC:</span>
          <span className="text-[#8d9099]">Ames, IA [42.0267 N, 93.6465 W]</span>
          <span className="text-[#52545d]">|</span>
          <span className="text-[#00ff66] font-semibold">{telemetry.localTimeCT}</span>
        </div>
        <div className="flex items-center gap-2 text-[#52545d]">
          <span>© 2026 Nakshatra Gupta</span>
          <span className="text-[#52545d]">|</span>
          <span className="text-[#8d9099]">Computer Engineering @ Iowa State</span>
        </div>
        <div className="flex items-center gap-4 font-mono text-[11px] uppercase tracking-widest">
          <a
            className="text-[#8d9099] hover:text-[#ff2a3b] transition-colors"
            href="https://github.com"
            rel="noreferrer"
            target="_blank"
          >
            GitHub
          </a>
          <span className="text-[#52545d]">/</span>
          <a
            className="text-[#8d9099] hover:text-[#ff2a3b] transition-colors"
            href="https://linkedin.com"
            rel="noreferrer"
            target="_blank"
          >
            LinkedIn
          </a>
          <span className="text-[#52545d]">/</span>
          <a
            className="text-[#8d9099] hover:text-[#ff2a3b] transition-colors"
            href="mailto:ng1308@iastate.edu"
          >
            Email
          </a>
          <span className="text-[#52545d]">/</span>
          <a
            className="text-[#8d9099] hover:text-[#00ff66] transition-colors"
            href="/api/resume/data"
            target="_blank"
            rel="noreferrer"
            title="Machine-readable JSON resume API"
          >
            JSON API
          </a>
        </div>
      </div>
    </footer>
  );
};
