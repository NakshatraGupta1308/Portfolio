import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const ProjectsPage: React.FC = () => {
  const [filter, setFilter] = useState('all');

  const filterButtons = [
    { id: 'all', label: 'All Systems (4)' },
    { id: 'web3d', label: 'Web Platforms & 3D (2)' },
    { id: 'embedded', label: 'Embedded & Robotics (1)' },
    { id: 'mobile', label: 'Android & Distributed (1)' },
  ];

  return (
    <div className="flex flex-col w-full text-[#e3e2e5]">
      {/* Top Dossier Ledger Header */}
      <section className="w-full bg-[#090a0c] px-4 sm:px-8 py-10 border-b border-[rgba(255,255,255,0.08)]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2 font-mono text-[11px] text-[#ff2a3b] tracking-widest uppercase">
              <span>// REGISTER: SYS-PRJ-2026</span>
              <span className="text-[#52545d]">/</span>
              <span className="text-[#8d9099]">4 VERIFIED ENTRIES</span>
            </div>
            <h1 className="font-display text-4xl sm:text-6xl text-[#ffffff] tracking-tight">
              PROJECTS &amp; DOSSIER
            </h1>
            <p className="font-body text-base text-[#8d9099] max-w-2xl">
              Deterministic embedded systems, full-stack Android communications, and GPU-accelerated spatial simulations.
            </p>
          </div>

          {/* Quick Metrics Ribbon */}
          <div className="grid grid-cols-3 gap-3 bg-[#18191d] border border-[rgba(255,255,255,0.12)] p-4 min-w-[280px]">
            <div className="flex flex-col">
              <span className="font-mono text-[11px] text-[#52545d] uppercase">COMMITS/HRS</span>
              <span className="font-mono text-[13px] text-[#ffffff] font-semibold">1,420+ HRS</span>
            </div>
            <div className="flex flex-col">
              <span className="font-mono text-[11px] text-[#52545d] uppercase">SYS TARGETS</span>
              <span className="font-mono text-[13px] text-[#ff2a3b] font-semibold">ARM / WEBGL</span>
            </div>
            <div className="flex flex-col">
              <span className="font-mono text-[11px] text-[#52545d] uppercase">STATUS</span>
              <span className="font-mono text-[13px] text-[#00ff66] font-semibold">ALL VERIFIED</span>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Filter Toolbar */}
      <section className="w-full bg-[#18191d] border-b border-[rgba(255,255,255,0.1)] px-4 sm:px-8 py-3 sticky top-16 z-40 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2">
            {filterButtons.map((btn) => (
              <button
                key={btn.id}
                onClick={() => setFilter(btn.id)}
                className={`px-3 py-1 font-mono text-[11px] uppercase tracking-wider transition-colors border ${
                  filter === btn.id
                    ? 'bg-[#ffffff] text-[#090a0c] font-bold border-[#ffffff]'
                    : 'bg-[#121315] text-[#8d9099] border-[rgba(255,255,255,0.08)] hover:text-[#ffffff]'
                }`}
              >
                {btn.label}
              </button>
            ))}
          </div>
          <div className="hidden lg:flex items-center gap-2 font-mono text-[11px] text-[#52545d] uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-[#ff2a3b] animate-pulse"></span>
            <span>INDEX MODE: ACTIVE AUDIT</span>
          </div>
        </div>
      </section>

      {/* Dossier Main Grid */}
      <main className="w-full bg-[#090a0c] px-4 sm:px-8 py-12">
        <div className="max-w-7xl mx-auto flex flex-col gap-10">
          {/* PROJECT 01: Calmify (Native Android Mental Health Platform) */}
          {(filter === 'all' || filter === 'mobile') && (
            <article className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-[#121315] border border-[rgba(255,255,255,0.1)] p-6 sm:p-8 hover:border-[#ff2a3b] transition-colors">
              {/* Visual Column */}
              <div className="lg:col-span-4 flex flex-col gap-2">
                <div className="flex items-center justify-between font-mono text-[11px] text-[#52545d] uppercase">
                  <span>INDEX: 01 // NATIVE ANDROID</span>
                  <span className="text-[#00ff66]">FULL-STACK ACTIVE</span>
                </div>
                <div className="relative w-full aspect-video bg-[#0d0e10] overflow-hidden border border-[rgba(255,255,255,0.1)] flex items-center justify-center">
                  <iframe
                    className="w-full h-full border-0"
                    src="https://www.youtube.com/embed/qTwxhTLsqMM"
                    title="Calmify Demo"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="flex items-center gap-2 font-mono text-[11px] text-[#8d9099] mt-1">
                  <span className="text-[#ff2a3b]">[DEMO]</span>
                  <span className="truncate">Live Android Client + Spring Boot REST &amp; WSS</span>
                </div>
              </div>

              {/* Spec Column */}
              <div className="lg:col-span-8 flex flex-col justify-between gap-6">
                <div className="space-y-3">
                  <div className="flex flex-wrap items-center gap-2 font-mono text-[11px]">
                    <span className="px-2 py-0.5 bg-[#1f2022] text-[#ffffff] uppercase border border-[rgba(255,255,255,0.06)]">Android / Java</span>
                    <span className="px-2 py-0.5 bg-[#1f2022] text-[#8d9099] uppercase border border-[rgba(255,255,255,0.06)]">Spring Boot</span>
                    <span className="px-2 py-0.5 bg-[#1f2022] text-[#ff2a3b] uppercase border border-[rgba(255,255,255,0.06)]">WebSockets</span>
                    <span className="px-2 py-0.5 bg-[#1f2022] text-[#8d9099] uppercase border border-[rgba(255,255,255,0.06)]">Iowa State University (COMS 3090)</span>
                  </div>
                  <h2 className="font-display text-2xl sm:text-3xl text-[#ffffff] tracking-tight">
                    Calmify : Native Android Mental Health Platform
                  </h2>
                  <p className="font-body text-sm text-[#8d9099] leading-relaxed">
                    Full-stack mental health platform connecting users with licensed counsellors via native Android. Built collaboratively in a 4-person engineering team for COMS 3090 at Iowa State University. Features real-time WebSocket messaging with typing indicators, read receipts, and file attachments; appointment booking workflow; AI-powered chat assistant; mood check-ins and worry journaling; counsellor dashboard with prescription management; and role-based permissions (User, Counsellor, Admin) across 30+ activities.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 bg-[#1b1c1e] p-4 font-mono text-[13px] border border-[rgba(255,255,255,0.06)]">
                    <div className="flex flex-col">
                      <span className="text-[#52545d] text-[11px] uppercase">Platform / Stack:</span>
                      <span className="text-[#ffffff]">Java, Android SDK, Spring Boot, MySQL, WebSockets, Volley, Glide</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[#52545d] text-[11px] uppercase">Execution Model:</span>
                      <span className="text-[#ffffff]">Duplex WebSocket Handshake / Event-Driven State Streams</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[#52545d] text-[11px] uppercase">Core Contributions:</span>
                      <span className="text-[#ffffff]">Role-Based Auth, 30+ Activity UI, AI Assistant, Admin Panel, Glide Pipeline</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[#52545d] text-[11px] uppercase">Engineering Rigor:</span>
                      <span className="text-[#ff2a3b]">GitLab CI/CD Automation / Typing &amp; Receipt ACK Streams</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[rgba(255,255,255,0.08)]">
                  <div className="flex items-center gap-2 font-mono text-[11px] text-[#52545d] uppercase">
                    <span>TIMELINE: JAN 2026 - MAY 2026</span>
                    <span>•</span>
                    <span>COLLABORATION: 4-ENGINEER TEAM</span>
                  </div>
                  <a
                    className="inline-flex items-center gap-2 px-4 py-2 bg-[#ff2a3b] text-[#ffffff] font-mono text-[11px] uppercase tracking-wider font-semibold hover:bg-[#ff4d5d] transition-colors"
                    href="https://www.youtube.com/watch?v=qTwxhTLsqMM"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <span>Watch Video Demo</span>
                    <span className="material-symbols-outlined text-[14px]">play_circle</span>
                  </a>
                </div>
              </div>
            </article>
          )}

          {/* PROJECT 02: CyBot Shopping Robot (Embedded ARM) */}
          {(filter === 'all' || filter === 'embedded') && (
            <article className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-[#121315] border border-[rgba(255,255,255,0.1)] p-6 sm:p-8 hover:border-[#ff2a3b] transition-colors">
              <div className="lg:col-span-4 flex flex-col gap-2">
                <div className="flex items-center justify-between font-mono text-[11px] text-[#52545d] uppercase">
                  <span>INDEX: 02 // EMBEDDED ARM</span>
                  <span className="text-[#00ff66]">HARDWARE ACTIVE</span>
                </div>
                <div className="relative w-full h-80 bg-[#0d0e10] overflow-hidden flex items-center justify-center group border border-[rgba(255,255,255,0.1)]">
                  <img
                    alt="CyBot Autonomous Navigation and Sensing Platform Hardware"
                    className="w-full h-full object-cover filter contrast-110 group-hover:scale-105 transition-transform duration-500"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSvyjefm5ZtmWNWgEs_DKlJBIiN5v6zoezSxTRFC9fje--wpv3SiwBI4WPKVBdpRKF-ug_Odx_IJiHP2rinfNcoMtbUjnV0vlvHCbHldBNXS2dc1HO1GLuVsgF4EASUFUzUXEDFBsYwGXBlv9awPS1kwfo7ZtZENj9_WA2yrhEmWxQShLGni_yUIgdka9ASlXyIZ1lkyBiNEOcYk9Mc67O-6WnheKg3sDyxbvJYNzciGnwmUeaXRMKUaD9tviIx0PEJh0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090a0c] via-transparent to-transparent opacity-80 pointer-events-none"></div>
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                    <span className="px-2 py-0.5 bg-[#090a0c] text-[#ffffff] font-mono text-[11px] uppercase tracking-wider border border-[rgba(255,255,255,0.1)]">
                      TI TM4C123GXL
                    </span>
                    <span className="font-mono text-[11px] text-[#ff2a3b] font-bold">16MHz BARE-METAL</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 font-mono text-[11px] text-[#8d9099] mt-1">
                  <span className="text-[#ff2a3b]">[TARGET]</span>
                  <span className="truncate">Texas Instruments Tiva ARM Cortex-M4</span>
                </div>
              </div>

              <div className="lg:col-span-8 flex flex-col justify-between gap-6">
                <div className="space-y-3">
                  <div className="flex flex-wrap items-center gap-2 font-mono text-[11px]">
                    <span className="px-2 py-0.5 bg-[#1f2022] text-[#ffffff] uppercase border border-[rgba(255,255,255,0.06)]">Bare-Metal Firmware</span>
                    <span className="px-2 py-0.5 bg-[#1f2022] text-[#8d9099] uppercase border border-[rgba(255,255,255,0.06)]">Real-Time Sensing</span>
                    <span className="px-2 py-0.5 bg-[#1f2022] text-[#ff2a3b] uppercase border border-[rgba(255,255,255,0.06)]">Iowa State University (CPR E 288)</span>
                  </div>
                  <h2 className="font-display text-2xl sm:text-3xl text-[#ffffff] tracking-tight">
                    CyBot Shopping Robot: Autonomous Navigation &amp; Sensing Platform
                  </h2>
                  <p className="font-body text-sm text-[#8d9099] leading-relaxed">
                    Autonomous micro-rover platform programmed in bare-metal C to execute environment scanning, obstacle classification, and collision-free waypoint traversal in real time. Deployed on a differential-drive robot chassis with radar-like acoustic and optical depth sweeps.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 bg-[#1b1c1e] p-4 font-mono text-[13px] border border-[rgba(255,255,255,0.06)]">
                    <div className="flex flex-col">
                      <span className="text-[#52545d] text-[11px] uppercase">Platform / Core:</span>
                      <span className="text-[#ffffff]">TI Tiva TM4C123 ARM Cortex-M4 Microcontroller</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[#52545d] text-[11px] uppercase">Execution Model:</span>
                      <span className="text-[#ffffff]">Bare-metal C / Timer Interrupt Service Routines (ISRs)</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[#52545d] text-[11px] uppercase">Stack &amp; Sensors:</span>
                      <span className="text-[#ffffff]">Sharp IR (ADC0 Seq3), Ping Ultrasonic (Timer Input Capture), PWM Servo</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[#52545d] text-[11px] uppercase">Engineering Rigor:</span>
                      <span className="text-[#ff2a3b]">20ms Period PWM Servo Sweep / Async UART Base Telemetry</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[rgba(255,255,255,0.08)]">
                  <div className="flex items-center gap-2 font-mono text-[11px] text-[#52545d] uppercase">
                    <span>ACADEMIC RIGOR: CPR E 288</span>
                    <span>•</span>
                    <span>TELEMETRY: DUPLEX UART</span>
                  </div>
                  <Link
                    to="/resume-and-credentials"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-[#1f2022] text-[#ffffff] font-mono text-[11px] uppercase tracking-wider font-semibold hover:bg-[#ff2a3b] transition-colors border border-[rgba(255,255,255,0.1)]"
                  >
                    <span>Inspect Schematics &amp; Code</span>
                    <span className="material-symbols-outlined text-[14px]">terminal</span>
                  </Link>
                </div>
              </div>
            </article>
          )}

          {/* PROJECT 03: Rangam Graphics (Commercial Production) */}
          {(filter === 'all' || filter === 'web3d') && (
            <article className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-[#121315] border border-[rgba(255,255,255,0.1)] p-6 sm:p-8 hover:border-[#ff2a3b] transition-colors">
              <div className="col-span-12 flex flex-col justify-between gap-6">
                <div className="space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex flex-wrap items-center gap-2 font-mono text-[11px]">
                      <span className="px-2 py-0.5 bg-[#1f2022] text-[#ffffff] uppercase border border-[rgba(255,255,255,0.06)]">Commercial Production</span>
                      <span className="px-2 py-0.5 bg-[#1f2022] text-[#8d9099] uppercase border border-[rgba(255,255,255,0.06)]">Digital Architecture</span>
                      <span className="px-2 py-0.5 bg-[#1f2022] text-[#ff2a3b] uppercase border border-[rgba(255,255,255,0.06)]">Ahmedabad, India</span>
                    </div>
                    <div className="flex items-center gap-2 font-mono text-[11px] text-[#52545d] uppercase">
                      <span>INDEX: 03 // COMMERCIAL PRODUCTION</span>
                      <span className="text-[#00ff66]">LIVE DEPLOYMENT</span>
                    </div>
                  </div>
                  <h2 className="font-display text-2xl sm:text-3xl text-[#ffffff] tracking-tight">
                    Rangam Graphics: Commercial Digital Printing &amp; Creative Studio
                  </h2>
                  <p className="font-body text-sm text-[#8d9099] leading-relaxed">
                    Production web presence designed and engineered for a 33+ year commercial printing and creative manufacturing house. Architected to resolve high-friction B2B lead generation through responsive catalog workflows, zero-layout-shift asset delivery, and instant communication handoffs.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 bg-[#1b1c1e] p-4 font-mono text-[13px] border border-[rgba(255,255,255,0.06)]">
                    <div className="flex flex-col">
                      <span className="text-[#52545d] text-[11px] uppercase">Platform / Core:</span>
                      <span className="text-[#ffffff]">Responsive Architectural Web System / Static Edge Node</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[#52545d] text-[11px] uppercase">Execution Model:</span>
                      <span className="text-[#ffffff]">Direct WhatsApp Pipeline / Dynamic Inquiry Routing</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[#52545d] text-[11px] uppercase">Printing Verticals:</span>
                      <span className="text-[#ffffff]">Digital, Packaging, Pharma, Die Cutting, Shagun Lifafa, Graphic</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[#52545d] text-[11px] uppercase">Engineering Rigor:</span>
                      <span className="text-[#ff2a3b]">Sub-1.2s FCP / Mobile First Lead Funnels</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[rgba(255,255,255,0.08)]">
                  <div className="flex flex-wrap items-center gap-2 font-mono text-[11px] text-[#52545d] uppercase">
                    <span>DEPLOYMENT VERIFIED: 2024</span>
                    <span>•</span>
                    <span className="text-[#00ff66]">PRODUCTION LIVE</span>
                    <span>/</span>
                    <span className="text-[#8d9099]">wondrous-druid-2535ff.netlify.app</span>
                  </div>
                  <a
                    className="inline-flex items-center gap-2 px-4 py-2 bg-[#ffffff] text-[#090a0c] font-mono text-[11px] uppercase tracking-wider font-semibold hover:bg-[#ff2a3b] hover:text-[#ffffff] transition-colors"
                    href="https://wondrous-druid-2535ff.netlify.app/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <span>View Live Site</span>
                    <span className="material-symbols-outlined text-[14px]">arrow_outward</span>
                  </a>
                </div>
              </div>
            </article>
          )}

          {/* PROJECT 04: NASA SpaceApps 3D Orbit Visualization */}
          {(filter === 'all' || filter === 'web3d') && (
            <article className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-[#121315] border border-[rgba(255,255,255,0.1)] p-6 sm:p-8 hover:border-[#ff2a3b] transition-colors">
              <div className="col-span-12 flex flex-col justify-between gap-6">
                <div className="space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex flex-wrap items-center gap-2 font-mono text-[11px]">
                      <span className="px-2 py-0.5 bg-[#1f2022] text-[#ffffff] uppercase border border-[rgba(255,255,255,0.06)]">Astrodynamics</span>
                      <span className="px-2 py-0.5 bg-[#1f2022] text-[#8d9099] uppercase border border-[rgba(255,255,255,0.06)]">WebGL Compute</span>
                      <span className="px-2 py-0.5 bg-[#1f2022] text-[#ff2a3b] uppercase border border-[rgba(255,255,255,0.06)]">Global Hackathon</span>
                    </div>
                    <div className="flex items-center gap-2 font-mono text-[11px] text-[#52545d] uppercase">
                      <span>INDEX: 04 // 3D GRAPHICS &amp; SIMULATION</span>
                      <span className="text-[#00ff66]">SPACEAPPS WINNER</span>
                    </div>
                  </div>
                  <h2 className="font-display text-2xl sm:text-3xl text-[#ffffff] tracking-tight">
                    3D Celestial Orbit Visualization Engine: NASA SpaceApps
                  </h2>
                  <p className="font-body text-sm text-[#8d9099] leading-relaxed">
                    Interactive high-precision astrophysics visualization engine that plots near-Earth objects (NEOs) and planetary trajectories in three dimensions. Transforms raw astronomical tables into real-time render loops using Keplerian element math and GPU lighting pipelines.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 bg-[#1b1c1e] p-4 font-mono text-[13px] border border-[rgba(255,255,255,0.06)]">
                    <div className="flex flex-col">
                      <span className="text-[#52545d] text-[11px] uppercase">Platform / Core:</span>
                      <span className="text-[#ffffff]">Three.js / WebGL / Custom Fragment Shaders</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[#52545d] text-[11px] uppercase">Execution Model:</span>
                      <span className="text-[#ffffff]">Keplerian Orbital Mechanics Solver / True Anomaly Loop</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[#52545d] text-[11px] uppercase">Stack &amp; Sensors:</span>
                      <span className="text-[#ffffff]">JavaScript ES6+, NASA JPL Ephemeris API, Three.js Camera Matrix</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[#52545d] text-[11px] uppercase">Engineering Rigor:</span>
                      <span className="text-[#ff2a3b]">Calculates Semi-Major Axis, Eccentricity, and Inclination at 60 FPS</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[rgba(255,255,255,0.08)]">
                  <div className="flex items-center gap-2 font-mono text-[11px] text-[#52545d] uppercase">
                    <span>AWARD: NASA SPACEAPPS AMES REGIONAL</span>
                    <span>•</span>
                    <span>[EPHEMERIS] NASA JPL Horizons Trajectory Engine</span>
                  </div>
                  <a
                    className="inline-flex items-center gap-2 px-4 py-2 bg-[#1f2022] text-[#ffffff] font-mono text-[11px] uppercase tracking-wider font-semibold hover:bg-[#ff2a3b] transition-colors border border-[rgba(255,255,255,0.1)]"
                    href="https://github.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span>Launch 3D Simulator</span>
                    <span className="material-symbols-outlined text-[14px]">view_in_ar</span>
                  </a>
                </div>
              </div>
            </article>
          )}
        </div>
      </main>
    </div>
  );
};
