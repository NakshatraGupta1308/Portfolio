import React from 'react';
import { Link } from 'react-router-dom';
import { DirectDispatchForm } from '../components/DirectDispatchForm';

export const OverviewPage: React.FC = () => {
  return (
    <div className="flex flex-col w-full text-[#e3e2e5]">
      {/* TOP TELEMETRY STATUS BAR */}
      <section className="w-full bg-[#090a0c] px-4 sm:px-8 py-2 border-b border-[rgba(255,255,255,0.06)]">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-y-2 font-mono text-[11px] uppercase tracking-widest text-[#8d9099]">
          <div className="flex items-center gap-3">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#00ff66]"></span>
            <span className="text-[#ffffff]">PORTFOLIO // COMPUTER ENGINEERING</span>
            <span className="text-[#52545d]">/</span>
            <span>IOWA STATE UNIVERSITY</span>
          </div>
          <div className="flex items-center gap-4 text-[#52545d]">
            <span className="text-[#8d9099]">AMES, IOWA</span>
            <span className="text-[#ff2a3b] font-semibold">TARGET_CYCLE: FALL 2026+ // SEEKING OPPORTUNITIES</span>
          </div>
        </div>
      </section>

      {/* HERO SECTION */}
      <section className="w-full bg-[#121316] px-4 sm:px-8 py-12 sm:py-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 font-mono text-[13px] uppercase tracking-wider text-[#8d9099] mb-4">
            <span className="text-[#ff2a3b] font-bold">//</span>
            <span>NAKSHATRA GUPTA</span>
            <span className="text-[#52545d]">•</span>
            <span>COMPUTER ENGINEERING STUDENT @ ISU</span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left: Editorial Typography & Actions */}
            <div className="lg:col-span-8 flex flex-col space-y-6">
              <div className="space-y-2">
                <h1 className="font-display text-4xl sm:text-7xl lg:text-[84px] text-[#ffffff] leading-none tracking-tight uppercase">
                  Nakshatra<br />
                  <span className="text-[#ffb3af] italic font-editorial font-normal lowercase tracking-normal">Gupta.</span>
                </h1>
                <p className="font-display text-lg sm:text-2xl text-[#8d9099] pt-1 uppercase tracking-wide">
                  Computer Engineering <span className="text-[#ff2a3b]">@</span> Iowa State University
                </p>
              </div>
              <div className="bg-[#18191d] border-l-2 border-[#ff2a3b] p-4">
                <p className="font-editorial text-lg sm:text-xl text-[#e3e2e5] italic leading-relaxed">
                  “Engineering at the intersection of bare-metal silicon registers and dynamic interactive systems.”
                </p>
              </div>
              <p className="font-body text-sm sm:text-base text-[#8d9099] leading-relaxed max-w-2xl">
                Currently pursuing a Bachelor of Science in Computer Engineering at Iowa State University (Expected May 2027), following foundational coursework at Nirma University. Actively seeking Fall 2026 internships, co-ops, and full-time opportunities (following graduation) across embedded firmware, silicon architecture, robotics navigation, and high-performance computing systems.
              </p>

              {/* Interactive Action Cluster */}
              <div className="flex flex-wrap items-center gap-3 pt-2 font-mono text-[13px]">
                <Link
                  to="/projects-and-dossier"
                  className="bg-[#ffffff] text-[#090a0c] px-6 py-2.5 font-semibold uppercase tracking-wider hover:bg-[#ff2a3b] hover:text-[#ffffff] transition-colors"
                >
                  Explore Projects [04]
                </Link>
                <Link
                  to="/resume-and-credentials"
                  className="bg-[#1f2022] text-[#ffffff] px-6 py-2.5 font-semibold uppercase tracking-wider hover:bg-[#292a2c] transition-colors border border-[rgba(255,255,255,0.1)]"
                >
                  View Resume
                </Link>
                <button
                  type="button"
                  onClick={() => {
                    const el = document.getElementById('dispatch-inquiry');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-[#1b1c1e] text-[#8d9099] px-6 py-2.5 uppercase tracking-wider hover:text-[#ff2a3b] transition-colors border border-[rgba(255,255,255,0.06)] text-left cursor-pointer"
                >
                  Direct Dispatch →
                </button>
              </div>

              {/* Academic & Trajectory Metrics Strip */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4">
                <div className="bg-[#121315] border border-[rgba(255,255,255,0.08)] p-3">
                  <span className="block font-mono text-[11px] text-[#52545d] uppercase">Degree Program</span>
                  <span className="font-mono text-[13px] text-[#ffffff] font-semibold">B.S. CprE</span>
                  <span className="block font-mono text-[11px] text-[#8d9099]">Iowa State University</span>
                </div>
                <div className="bg-[#121315] border border-[rgba(255,255,255,0.08)] p-3">
                  <span className="block font-mono text-[11px] text-[#52545d] uppercase">Expected Graduation</span>
                  <span className="font-mono text-[13px] text-[#ff2a3b] font-semibold">May 2027</span>
                  <span className="block font-mono text-[11px] text-[#8d9099]">Undergraduate</span>
                </div>
                <div className="bg-[#121315] border border-[rgba(255,255,255,0.08)] p-3">
                  <span className="block font-mono text-[11px] text-[#52545d] uppercase">Target Term</span>
                  <span className="font-mono text-[13px] text-[#ffffff] font-semibold">Fall 2026 &amp; Beyond</span>
                  <span className="block font-mono text-[11px] text-[#8d9099]">Internship / Co-op</span>
                </div>
              </div>
            </div>

            {/* Right: Profile Imagery Frame with Diagnostics Overlay */}
            <div className="lg:col-span-4 flex flex-col items-center justify-center">
              <div className="relative w-full max-w-sm bg-[#18191d] p-2 border border-[rgba(255,255,255,0.12)]">
                <div className="overflow-hidden aspect-[3/4] relative bg-[#090a0c]">
                  <img
                    alt="Nakshatra Gupta - Systems and Computer Engineer"
                    className="w-full h-full object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-700"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDquJYZWW-6ZJ3Ornmez0wcrsGFhynbkXtoP4E3QNyn9OUhgEgwps-YTKbrhYZcOSnW-X3wlP4rxuzux-sKMRdmUKxYnFXKxHU3qxDM4AzZBVZB48K__B-OcdNntsjB6ALxrCbMUaVcyz0OLe0Hs24EMqRpe0z5tKv7GHa9dxkC5sB4O43MAytkV2k0J3G8KqQZcVNXX8yZwWJ_0vPeRWydiuSvYYJVA8sOTW5hsgFKSchgCIWJtiwnZzDliLZ4gKrDjjQ"
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-[#090a0c]/90 p-3 backdrop-blur-sm border-t border-[rgba(255,255,255,0.1)]">
                    <div className="flex items-center justify-between font-mono text-[11px] uppercase">
                      <span className="text-[#ffffff] font-semibold">NAKSHATRA GUPTA</span>
                      <span className="text-[#ff2a3b]">CPR E '27</span>
                    </div>
                    <div className="flex items-center justify-between text-[#52545d] font-mono text-[11px] mt-0.5">
                      <span>IOWA STATE UNIVERSITY</span>
                      <span className="text-[#00ff66]">AMES, IA</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between p-1.5 text-[#52545d] font-mono text-[11px]">
                  <span>COMPUTER ENGINEERING</span>
                  <span>ISU CPRE</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DISCIPLINE & CAPABILITY MOSAIC */}
      <section className="w-full bg-[#090a0c] px-4 sm:px-8 py-14">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <span className="font-mono text-[11px] uppercase tracking-widest text-[#ff2a3b] block mb-1">
                CORE COMPETENCY MATRIX
              </span>
              <h2 className="font-display text-2xl sm:text-3xl text-[#ffffff] uppercase tracking-tight">
                Three Technical Disciplines
              </h2>
            </div>
            <p className="font-mono text-[13px] text-[#8d9099] max-w-md">
              Synthesizing low-level deterministic silicon control with mathematically grounded spatial rendering and resilient cloud infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Discipline 01 */}
            <div className="bg-[#18191d] border border-[rgba(255,255,255,0.1)] p-6 flex flex-col justify-between group hover:bg-[#1f2022] hover:border-[#ff2a3b] transition-colors">
              <div>
                <div className="flex items-center justify-between font-mono text-[13px] mb-4">
                  <span className="text-[#ff2a3b] font-bold">01 /</span>
                  <span className="text-[#52545d] uppercase font-mono text-[11px]">FIRMWARE / SILICON</span>
                </div>
                <h3 className="font-display text-xl text-[#ffffff] uppercase mb-2 group-hover:text-[#ffb3af] transition-colors">
                  Embedded Systems &amp; Microcontrollers
                </h3>
                <p className="font-body text-sm text-[#8d9099] leading-relaxed mb-6">
                  Low-overhead bare-metal development on ARM Cortex-M architecture. Deep experience configuring PWM timers, register-level interrupts, UART/SPI serial links, and ADC sensor sampling without heavy RTOS abstraction layers.
                </p>
              </div>
              <div className="pt-4 border-t border-[rgba(255,255,255,0.06)]">
                <div className="flex flex-wrap gap-1 font-mono text-[11px] uppercase text-[#52545d]">
                  <span className="bg-[#121315] px-2 py-0.5 text-[#8d9099]">Tiva TM4C123</span>
                  <span className="bg-[#121315] px-2 py-0.5 text-[#8d9099]">Bare-Metal C</span>
                  <span className="bg-[#121315] px-2 py-0.5 text-[#8d9099]">PWM Servo</span>
                  <span className="bg-[#121315] px-2 py-0.5 text-[#8d9099]">UART / I2C</span>
                  <span className="bg-[#121315] px-2 py-0.5 text-[#8d9099]">ADC Sampling</span>
                </div>
              </div>
            </div>

            {/* Discipline 02 */}
            <div className="bg-[#18191d] border border-[rgba(255,255,255,0.1)] p-6 flex flex-col justify-between group hover:bg-[#1f2022] hover:border-[#ff2a3b] transition-colors">
              <div>
                <div className="flex items-center justify-between font-mono text-[13px] mb-4">
                  <span className="text-[#ff2a3b] font-bold">02 /</span>
                  <span className="text-[#52545d] uppercase font-mono text-[11px]">MATH / VISUALIZATION</span>
                </div>
                <h3 className="font-display text-xl text-[#ffffff] uppercase mb-2 group-hover:text-[#ffb3af] transition-colors">
                  Creative Code &amp; Spatial 3D
                </h3>
                <p className="font-body text-sm text-[#8d9099] leading-relaxed mb-6">
                  Architecting GPU-accelerated spatial environments in the browser. Translating orbital Keplerian celestial vectors, particle physics, and geometric shaders into zero-lag 60fps WebGL rendering canvases.
                </p>
              </div>
              <div className="pt-4 border-t border-[rgba(255,255,255,0.06)]">
                <div className="flex flex-wrap gap-1 font-mono text-[11px] uppercase text-[#52545d]">
                  <span className="bg-[#121315] px-2 py-0.5 text-[#8d9099]">Three.js</span>
                  <span className="bg-[#121315] px-2 py-0.5 text-[#8d9099]">WebGL</span>
                  <span className="bg-[#121315] px-2 py-0.5 text-[#8d9099]">GLSL Shaders</span>
                  <span className="bg-[#121315] px-2 py-0.5 text-[#8d9099]">60fps Math</span>
                  <span className="bg-[#121315] px-2 py-0.5 text-[#8d9099]">Canvas API</span>
                </div>
              </div>
            </div>

            {/* Discipline 03 */}
            <div className="bg-[#18191d] border border-[rgba(255,255,255,0.1)] p-6 flex flex-col justify-between group hover:bg-[#1f2022] hover:border-[#ff2a3b] transition-colors">
              <div>
                <div className="flex items-center justify-between font-mono text-[13px] mb-4">
                  <span className="text-[#ff2a3b] font-bold">03 /</span>
                  <span className="text-[#52545d] uppercase font-mono text-[11px]">DISTRIBUTED / WEB</span>
                </div>
                <h3 className="font-display text-xl text-[#ffffff] uppercase mb-2 group-hover:text-[#ffb3af] transition-colors">
                  Full-Stack &amp; Systems Architecture
                </h3>
                <p className="font-body text-sm text-[#8d9099] leading-relaxed mb-6">
                  Building resilient client facing digital software with modern decoupled frontends, fast transactional routing, asynchronous data telemetry, and production deployment automation for enterprises and research platforms.
                </p>
              </div>
              <div className="pt-4 border-t border-[rgba(255,255,255,0.06)]">
                <div className="flex flex-wrap gap-1 font-mono text-[11px] uppercase text-[#52545d]">
                  <span className="bg-[#121315] px-2 py-0.5 text-[#8d9099]">TypeScript</span>
                  <span className="bg-[#121315] px-2 py-0.5 text-[#8d9099]">Python Async</span>
                  <span className="bg-[#121315] px-2 py-0.5 text-[#8d9099]">REST Pipelines</span>
                  <span className="bg-[#121315] px-2 py-0.5 text-[#8d9099]">Linux OS</span>
                  <span className="bg-[#121315] px-2 py-0.5 text-[#8d9099]">CI / CD</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED DOSSIER: FOUR MAJOR PROJECTS */}
      <section className="w-full bg-[#121316] px-4 sm:px-8 py-16" id="featured-dossier">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 font-mono text-[13px] text-[#ff2a3b] mb-1">
                <span>// 01. EVIDENCE LEDGER</span>
                <span className="text-[#52545d]">---</span>
                <span className="text-[#8d9099]">SYSTEM AUDIT</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl text-[#ffffff] uppercase tracking-tight">
                Featured Engineering Projects
              </h2>
            </div>
            <span className="font-mono text-[11px] uppercase text-[#8d9099] tracking-widest">
              FIELD DEMOS • PRODUCTION CODEBASES • HARDWARE
            </span>
          </div>

          {/* PROJECT 01: CALMIFY */}
          <div className="bg-[#18191d] border border-[rgba(255,255,255,0.12)] p-6 sm:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <div className="flex flex-wrap items-center gap-2 font-mono text-[13px]">
                  <span className="text-[#ff2a3b] font-bold">PROJECT // 01</span>
                  <span className="text-[#52545d]">/</span>
                  <span className="text-[#00ff66] uppercase font-mono text-[11px]">MOBILE &amp; FULL-STACK</span>
                  <span className="text-[#52545d]">/</span>
                  <span className="text-[#8d9099] font-mono text-[11px]">IOWA STATE UNIVERSITY (COMS 3090)</span>
                  <span className="text-[#52545d]">/</span>
                  <span className="text-[#ff2a3b] font-mono text-[11px]">JAN 2026 - MAY 2026</span>
                </div>
                <h3 className="font-display text-2xl sm:text-3xl text-[#ffffff] uppercase">
                  CALMIFY : NATIVE ANDROID MENTAL HEALTH PLATFORM
                </h3>
                <p className="font-body text-sm text-[#8d9099] leading-relaxed">
                  Native Android mental health platform built in a 4-person team for Iowa State University COMS 3090. Features WebSocket-powered real-time counsellor chat with typing indicators and read receipts, appointment booking workflow, AI support assistant, daily mood tracking, and role-based access for Users, Counsellors, and Admins across 30+ activities.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-1">
                  <div className="bg-[#121315] p-3 border border-[rgba(255,255,255,0.06)]">
                    <span className="block font-mono text-[11px] text-[#52545d] uppercase">Architecture</span>
                    <span className="font-mono text-[13px] text-[#ffffff] font-semibold">Android SDK</span>
                  </div>
                  <div className="bg-[#121315] p-3 border border-[rgba(255,255,255,0.06)]">
                    <span className="block font-mono text-[11px] text-[#52545d] uppercase">Backend</span>
                    <span className="font-mono text-[13px] text-[#ffffff] font-semibold">Spring Boot</span>
                  </div>
                  <div className="bg-[#121315] p-3 border border-[rgba(255,255,255,0.06)]">
                    <span className="block font-mono text-[11px] text-[#52545d] uppercase">Database</span>
                    <span className="font-mono text-[13px] text-[#ff2a3b] font-semibold">MySQL</span>
                  </div>
                  <div className="bg-[#121315] p-3 border border-[rgba(255,255,255,0.06)]">
                    <span className="block font-mono text-[11px] text-[#52545d] uppercase">Real-Time</span>
                    <span className="font-mono text-[13px] text-[#ffffff] font-semibold">WebSockets</span>
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-3 pt-1 font-mono text-[13px]">
                  <a
                    className="bg-[#ff2a3b] text-[#ffffff] px-4 py-2 uppercase font-semibold hover:bg-[#ff4d5d] transition-colors flex items-center gap-1.5"
                    href="https://www.youtube.com/watch?v=qTwxhTLsqMM"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <span className="material-symbols-outlined text-sm">play_arrow</span>
                    <span>Watch On YouTube</span>
                  </a>
                  <div className="flex flex-wrap gap-1 font-mono text-[11px] uppercase text-[#52545d]">
                    <span className="bg-[#090a0c] px-2 py-1 text-[#8d9099]">Java</span>
                    <span className="bg-[#090a0c] px-2 py-1 text-[#8d9099]">Volley</span>
                    <span className="bg-[#090a0c] px-2 py-1 text-[#8d9099]">Glide</span>
                    <span className="bg-[#090a0c] px-2 py-1 text-[#8d9099]">GitLab CI/CD</span>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-5">
                <div className="relative bg-[#090a0c] p-1.5 overflow-hidden border border-[rgba(255,255,255,0.12)]">
                  <div className="relative w-full aspect-[16/10] overflow-hidden">
                    <iframe
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full border-0"
                      src="https://www.youtube.com/embed/qTwxhTLsqMM"
                      title="Calmify Video Demo"
                    ></iframe>
                  </div>
                  <div className="p-2 flex justify-between items-center text-[#52545d] font-mono text-[11px]">
                    <span>CALMIFY VIDEO DEMO</span>
                    <span>COMS 3090 TEAM PROJECT</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* PROJECT 02: CYBOT */}
          <div className="bg-[#18191d] border border-[rgba(255,255,255,0.12)] p-6 sm:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center gap-2 font-mono text-[13px]">
                  <span className="text-[#ff2a3b] font-bold">PROJECT // 02</span>
                  <span className="text-[#52545d]">/</span>
                  <span className="text-[#00ff66] uppercase font-mono text-[11px]">ACADEMIC PROJECT</span>
                  <span className="text-[#52545d]">/</span>
                  <span className="text-[#8d9099] font-mono text-[11px]">IOWA STATE UNIVERSITY (CPR E 288)</span>
                </div>
                <h3 className="font-display text-2xl sm:text-3xl text-[#ffffff] uppercase">
                  CyBot Autonomous Navigation &amp; Sensing Platform
                </h3>
                <p className="font-body text-sm text-[#8d9099] leading-relaxed">
                  Engineered autonomous navigation and obstacle avoidance for a mobile robot utilizing the Texas Instruments Tiva TM4C123 microcontroller. Interfaced IR and ultrasonic sensors for precise distance detection and object scanning, calibrated servo motor angles, and implemented UART communication to send telemetry and receive movement commands for structured aisle navigation.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 py-1">
                  <div className="bg-[#121315] p-3 border border-[rgba(255,255,255,0.06)]">
                    <span className="block font-mono text-[11px] text-[#52545d] uppercase">Microcontroller</span>
                    <span className="font-mono text-[13px] text-[#ffffff] font-semibold">Tiva TM4C123</span>
                  </div>
                  <div className="bg-[#121315] p-3 border border-[rgba(255,255,255,0.06)]">
                    <span className="block font-mono text-[11px] text-[#52545d] uppercase">Sensors</span>
                    <span className="font-mono text-[13px] text-[#ffffff] font-semibold">IR + Ultrasonic</span>
                  </div>
                  <div className="bg-[#121315] p-3 border border-[rgba(255,255,255,0.06)]">
                    <span className="block font-mono text-[11px] text-[#52545d] uppercase">Software</span>
                    <span className="font-mono text-[13px] text-[#ff2a3b] font-semibold">Embedded C</span>
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-1 font-mono text-[11px] uppercase text-[#52545d] pt-1">
                  <span className="bg-[#090a0c] px-2 py-1 text-[#8d9099]">Servo Control</span>
                  <span className="bg-[#090a0c] px-2 py-1 text-[#8d9099]">UART Communication</span>
                  <span className="bg-[#090a0c] px-2 py-1 text-[#8d9099]">Obstacle Avoidance</span>
                  <span className="bg-[#090a0c] px-2 py-1 text-[#8d9099]">Aisle Navigation</span>
                </div>
              </div>
              <div className="lg:col-span-5">
                <div className="relative bg-[#090a0c] p-1.5 overflow-hidden border border-[rgba(255,255,255,0.12)]">
                  <img
                    alt="CyBot Autonomous Navigation Robot"
                    className="w-full aspect-[16/10] object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCbmIxFGTBcT83FtICeDy4coyNfmq8zDzoBetDRfnWd3oOIV5lDBp7duHDWgNQ4S2lL2QVdDPK-6Es3crED_y4GSG26tezn_h6gix2vtP0h2MJsv2BMabIJe4j98MSr8WXnLN4GZKnmUBykwfuzbSjjvJ1QUx2apCznWbj22VZKIz50l9tgyHYJl8krXAqzHX34OeGCHwadPburfUUAebyORYme5GyElFwL9yMCSxWuWzM3KVEajnBXjQrFUQjP7L4htHo"
                  />
                  <div className="p-2 flex justify-between items-center text-[#52545d] font-mono text-[11px]">
                    <span>CYBOT PLATFORM</span>
                    <span>EMBEDDED SYSTEMS LAB</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* PROJECT 03: RANGAM GRAPHICS */}
          <div className="bg-[#18191d] border border-[rgba(255,255,255,0.12)] p-6 sm:p-8">
            <div className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2 font-mono text-[13px]">
                  <span className="text-[#ff2a3b] font-bold">PROJECT // 03</span>
                  <span className="text-[#52545d]">/</span>
                  <span className="text-[#00ff66] uppercase font-mono text-[11px]">CLIENT WORK</span>
                  <span className="text-[#52545d]">/</span>
                  <span className="text-[#8d9099] font-mono text-[11px]">COMMERCIAL PRODUCTION</span>
                </div>
                <div className="font-mono text-[11px] uppercase text-[#52545d] flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00ff66] inline-block"></span>
                  <span className="text-[#8d9099]">LIVE PRODUCTION DEPLOYMENT</span>
                </div>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl text-[#ffffff] uppercase">
                Rangam Graphics : Commercial Printing &amp; Studio Website
              </h3>
              <p className="font-body text-sm text-[#8d9099] leading-relaxed max-w-4xl">
                Developed and deployed a responsive commercial website for Rangam Graphics, an established commercial printing and packaging business. Structured comprehensive showcase pages for digital printing, industrial packaging, and finishing services, featuring quick quote inquiries and direct WhatsApp messaging integration for customer inquiries.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 py-1 max-w-3xl">
                <div className="bg-[#121315] p-3 border border-[rgba(255,255,255,0.06)]">
                  <span className="block font-mono text-[11px] text-[#52545d] uppercase">Role</span>
                  <span className="font-mono text-[13px] text-[#ffffff] font-semibold">Web Developer</span>
                </div>
                <div className="bg-[#121315] p-3 border border-[rgba(255,255,255,0.06)]">
                  <span className="block font-mono text-[11px] text-[#52545d] uppercase">Inquiry Channel</span>
                  <span className="font-mono text-[13px] text-[#ffffff] font-semibold">WhatsApp &amp; Forms</span>
                </div>
                <div className="bg-[#121315] p-3 border border-[rgba(255,255,255,0.06)]">
                  <span className="block font-mono text-[11px] text-[#52545d] uppercase">Hosting</span>
                  <span className="font-mono text-[13px] text-[#ff2a3b] font-semibold">Netlify</span>
                </div>
              </div>
              <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-[rgba(255,255,255,0.08)]">
                <a
                  className="bg-[#ff2a3b] text-[#ffffff] px-4 py-2 uppercase font-semibold hover:bg-[#ff4d5d] transition-colors flex items-center gap-1.5 font-mono text-[13px]"
                  href="https://wondrous-druid-2535ff.netlify.app/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <span>Launch Live Website</span>
                  <span className="material-symbols-outlined text-sm">open_in_new</span>
                </a>
                <div className="flex flex-wrap gap-1 font-mono text-[11px] uppercase text-[#52545d]">
                  <span className="bg-[#090a0c] px-2 py-1 text-[#8d9099]">HTML</span>
                  <span className="bg-[#090a0c] px-2 py-1 text-[#8d9099]">CSS</span>
                  <span className="bg-[#090a0c] px-2 py-1 text-[#8d9099]">JavaScript</span>
                  <span className="bg-[#090a0c] px-2 py-1 text-[#8d9099]">Responsive UI</span>
                </div>
              </div>
            </div>
          </div>

          {/* PROJECT 04: NASA SPACEAPPS */}
          <div className="bg-[#18191d] border border-[rgba(255,255,255,0.12)] p-6 sm:p-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2 font-mono text-[13px]">
                <span className="text-[#ff2a3b] font-bold">PROJECT // 04</span>
                <span className="text-[#52545d]">/</span>
                <span className="font-mono text-[11px] text-[#8d9099] uppercase">NASA SPACE APPS HACKATHON</span>
                <span className="text-[#52545d]">/</span>
                <span className="text-[#00ff66] uppercase font-mono text-[11px]">WEBGL VISUALIZATION</span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl text-[#ffffff] uppercase">
                NASA SpaceApps : 3D Celestial Orbit Visualization
              </h3>
              <p className="font-body text-sm text-[#8d9099] leading-relaxed max-w-4xl">
                Developed an interactive 3D celestial orbit visualization in the browser using Three.js and WebGL for near-Earth asteroids and comets. Rendered orbital trajectories, celestial coordinate references, and dynamic planetary bodies with interactive camera controls and lighting.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-1">
                <div className="bg-[#121315] p-3 border border-[rgba(255,255,255,0.06)]">
                  <span className="block font-mono text-[11px] text-[#52545d] uppercase">Library</span>
                  <span className="font-mono text-[13px] text-[#ffffff] font-semibold">Three.js</span>
                </div>
                <div className="bg-[#121315] p-3 border border-[rgba(255,255,255,0.06)]">
                  <span className="block font-mono text-[11px] text-[#52545d] uppercase">Renderer</span>
                  <span className="font-mono text-[13px] text-[#ffffff] font-semibold">WebGL</span>
                </div>
                <div className="bg-[#121315] p-3 border border-[rgba(255,255,255,0.06)]">
                  <span className="block font-mono text-[11px] text-[#52545d] uppercase">Focus</span>
                  <span className="font-mono text-[13px] text-[#ff2a3b] font-semibold">Orbit Simulation</span>
                </div>
                <div className="bg-[#121315] p-3 border border-[rgba(255,255,255,0.06)]">
                  <span className="block font-mono text-[11px] text-[#52545d] uppercase">Event</span>
                  <span className="font-mono text-[13px] text-[#ffffff] font-semibold">NASA Hackathon</span>
                </div>
              </div>
              <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-[rgba(255,255,255,0.08)]">
                <div className="flex flex-wrap gap-1 font-mono text-[11px] uppercase text-[#52545d]">
                  <span className="bg-[#090a0c] px-2 py-1 text-[#8d9099]">Three.js</span>
                  <span className="bg-[#090a0c] px-2 py-1 text-[#8d9099]">JavaScript</span>
                  <span className="bg-[#090a0c] px-2 py-1 text-[#8d9099]">WebGL</span>
                  <span className="bg-[#090a0c] px-2 py-1 text-[#8d9099]">3D Modeling</span>
                </div>
                <span className="font-mono text-[11px] uppercase text-[#52545d]">BROWSER-BASED 3D</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RESUME PREVIEW & CREDENTIALS TEASER SECTION */}
      <section className="w-full bg-[#090a0c] px-4 sm:px-8 py-16" id="resume-quicklook">
        <div className="max-w-7xl mx-auto">
          <div className="bg-[#18191d] border border-[rgba(255,255,255,0.12)] p-6 sm:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center gap-2 font-mono text-[13px] text-[#ff2a3b] uppercase">
                  <span>// 02. CREDENTIALS &amp; DOSSIER</span>
                  <span className="text-[#52545d]">/</span>
                  <span className="text-[#8d9099]">VERIFIED RECORDS</span>
                </div>
                <h2 className="font-display text-2xl sm:text-4xl text-[#ffffff] uppercase tracking-tight">
                  Verified Technical Dossier
                </h2>
                <p className="font-body text-sm text-[#8d9099] leading-relaxed">
                  Review my verified history covering embedded laboratory assignments at Iowa State, production engineering contracts, foundational coursework at Nirma University, and verified honors. Available for offline review via downloadable standard PDF or web dossier index.
                </p>

                {/* Key Resume Highlights */}
                <div className="space-y-2 font-mono text-[13px]">
                  <div className="flex items-center gap-3 bg-[#121315] p-3 border border-[rgba(255,255,255,0.06)]">
                    <span className="text-[#ff2a3b]">•</span>
                    <span className="text-[#ffffff] font-semibold">Degree:</span>
                    <span className="text-[#8d9099]">B.S. in Computer Engineering, Iowa State University</span>
                  </div>
                  <div className="flex items-center gap-3 bg-[#121315] p-3 border border-[rgba(255,255,255,0.06)]">
                    <span className="text-[#ff2a3b]">•</span>
                    <span className="text-[#ffffff] font-semibold">Core Stack:</span>
                    <span className="text-[#8d9099]">C, C++, ARM Assembly, Python, JavaScript / Three.js, Git, Linux</span>
                  </div>
                  <div className="flex items-center gap-3 bg-[#121315] p-3 border border-[rgba(255,255,255,0.06)]">
                    <span className="text-[#ff2a3b]">•</span>
                    <span className="text-[#ffffff] font-semibold">Target Availability:</span>
                    <span className="text-[#00ff66]">Fall 2026 &amp; Beyond (Co-op / Full-Time / Internship)</span>
                  </div>
                </div>

                {/* Download / Navigate Actions */}
                <div className="flex flex-wrap items-center gap-3 pt-2 font-mono text-[13px]">
                  <Link
                    to="/resume-and-credentials"
                    className="bg-[#ffffff] text-[#090a0c] px-6 py-2.5 uppercase font-semibold hover:bg-[#ff2a3b] hover:text-[#ffffff] transition-colors flex items-center gap-2"
                  >
                    <span className="material-symbols-outlined text-base">description</span>
                    <span>Open Full Resume Dossier</span>
                  </Link>
                  <a
                    className="bg-[#1f2022] text-[#ffffff] px-6 py-2.5 uppercase font-semibold hover:bg-[#292a2c] transition-colors flex items-center gap-2 border border-[rgba(255,255,255,0.1)]"
                    href="./assets/Nakshatra_Gupta_Resume_2026.jpg"
                    download="Nakshatra_Gupta_Resume_2026.jpg"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="material-symbols-outlined text-base">download</span>
                    <span>Download Resume (JPG/PDF)</span>
                  </a>
                </div>
              </div>

              {/* Graphic Schematic Resume Quick Card */}
              <div className="lg:col-span-5">
                <div className="bg-[#121315] border border-[rgba(255,255,255,0.08)] p-6 space-y-4">
                  <div className="flex items-center justify-between font-mono text-[11px] uppercase text-[#52545d]">
                    <span>FILE: NAKSHATRA_GUPTA_CV_2026.PDF</span>
                    <span className="text-[#ff2a3b]">v2.4</span>
                  </div>
                  <div className="space-y-1 font-mono text-[13px]">
                    <div className="text-[#ffffff] font-semibold">NAKSHATRA GUPTA</div>
                    <div className="text-[#52545d] text-xs">CprE Undergraduate / Systems &amp; Low-Level Developer</div>
                  </div>
                  <div className="bg-[#090a0c] p-3 font-mono text-[11px] text-[#8d9099] space-y-1 border border-[rgba(255,255,255,0.06)]">
                    <div>[01] EMBEDDED C • TM4C123 • SENSOR FUSION</div>
                    <div>[02] COMMERCIAL WEB • RANGAM GRAPHICS • NETLIFY</div>
                    <div>[03] 3D GRAPHICS • THREE.JS • KEPLERIAN MATH</div>
                  </div>
                  <div className="pt-2 flex justify-between items-center font-mono text-[11px] text-[#52545d] uppercase">
                    <span>LOCATION: AMES, IA</span>
                    <span className="text-[#00ff66]">Fall 2026 &amp; Beyond</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DIRECT INQUIRY & CONTACT DISPATCH BANNER (WITH LIVE INTERACTIVE BACKEND FORM) */}
      <section className="w-full bg-[#121316] px-4 sm:px-8 py-16" id="dispatch-inquiry">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-2 max-w-2xl">
              <span className="font-mono text-[11px] uppercase tracking-widest text-[#ff2a3b] block">
                COMMUNICATIONS DISPATCH // FALL 2026 &amp; BEYOND
              </span>
              <h2 className="font-display text-3xl sm:text-4xl text-[#ffffff] uppercase tracking-tight">
                Have an engineering challenge or opportunity?
              </h2>
              <p className="font-body text-sm text-[#8d9099]">
                I am actively discussing Fall 2026 internships, co-ops, and full-time engineering roles in embedded firmware, robotics control, systems infrastructure, and high-performance computing. Let us build dependable systems together.
              </p>
            </div>
            <div className="shrink-0 font-mono text-[11px] uppercase text-[#52545d]">
              <span className="inline-block w-2 h-2 rounded-full bg-[#00ff66] mr-2 animate-pulse"></span>
              <span>DIRECT CHANNELS MONITORED</span>
            </div>
          </div>

          {/* Interactive Direct Dispatch Form Connected to /api/contact */}
          <DirectDispatchForm />

          {/* Contact Channels Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-mono text-[13px]">
            <a
              className="bg-[#18191d] border border-[rgba(255,255,255,0.08)] p-4 group hover:border-[#ff2a3b] transition-colors block"
              href="mailto:ng1308@iastate.edu"
            >
              <span className="block font-mono text-[11px] uppercase text-[#52545d] mb-1">Academic Primary Email</span>
              <span className="text-[#ffffff] font-semibold group-hover:text-[#ff2a3b] transition-colors">ng1308@iastate.edu</span>
              <span className="block font-mono text-[11px] text-[#8d9099] mt-2">→ Direct Mail Dispatch</span>
            </a>
            <a
              className="bg-[#18191d] border border-[rgba(255,255,255,0.08)] p-4 group hover:border-[#ff2a3b] transition-colors block"
              href="tel:+15159162251"
            >
              <span className="block font-mono text-[11px] uppercase text-[#52545d] mb-1">Voice • SMS Telephony</span>
              <span className="text-[#ffffff] font-semibold group-hover:text-[#ff2a3b] transition-colors">+1 515-916-2251</span>
              <span className="block font-mono text-[11px] text-[#8d9099] mt-2">→ Central Standard Time (CT)</span>
            </a>
            <div className="bg-[#18191d] border border-[rgba(255,255,255,0.08)] p-4 block">
              <span className="block font-mono text-[11px] uppercase text-[#52545d] mb-1">Physical Station</span>
              <span className="text-[#ffffff] font-semibold">Ames, IA, USA</span>
              <span className="block font-mono text-[11px] text-[#8d9099] mt-2">Iowa State University Campus</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
