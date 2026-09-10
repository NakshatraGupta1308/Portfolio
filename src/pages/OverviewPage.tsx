import React from 'react';
import { Link } from 'react-router-dom';

export const OverviewPage: React.FC = () => {
  return (
    <div className="flex flex-col w-full text-[#e3e2e5]">
      {/* TOP TELEMETRY STATUS BAR */}
      <section className="w-full bg-[#090a0c] px-4 sm:px-8 py-2 border-b border-[rgba(255,255,255,0.06)]">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-y-2 font-mono text-[11px] uppercase tracking-widest text-[#8d9099]">
          <div className="flex items-center gap-3">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#00ff66]"></span>
            <span className="text-[#ffffff]">PORTFOLIO // COMPUTER ENGINEERING &amp; COMPUTER SCIENCE</span>
            <span className="text-[#52545d]">/</span>
            <span>IOWA STATE (BS CE) &amp; NIRMA UNIVERSITY (BS CSE, 2+2)</span>
          </div>
          <div className="flex items-center gap-4 text-[#52545d]">
            <span className="text-[#8d9099]">AMES, IOWA</span>
            <span className="text-[#ff2a3b] font-semibold">TARGET_CYCLE: FALL 2026+ // SEEKING CS &amp; CE INTERNSHIPS</span>
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
            <span className="text-[#ffb3af]">2+2 TRANSFER SCHOLAR (NIRMA BS CSE → IOWA STATE BS CE)</span>
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
                  Computer Engineering Student <span className="text-[#ff2a3b]">//</span> 2+2 Transfer @ Iowa State University (via Nirma University BS CSE)
                </p>
              </div>
              <div className="bg-[#18191d] border-l-2 border-[#ff2a3b] p-4">
                <p className="font-editorial text-lg sm:text-xl text-[#e3e2e5] italic leading-relaxed">
                  “Applying principles of software engineering, full-stack web platforms, reactive Android applications, and embedded computing systems.”
                </p>
              </div>
              <p className="font-body text-sm sm:text-base text-[#8d9099] leading-relaxed max-w-2xl">
                2+2 Transfer student from Nirma University, India (BS in Computer Science and Engineering) to Iowa State University pursuing a B.S. in Computer Engineering (Expected May 2027). Well-versed in principles of software engineering with hands-on command over full-stack web systems, native Android development, real-time WebSocket communication flows, 3D graphics, and embedded computing on ARM architectures. Actively seeking Fall 2026 Computer Science / Computer Engineering internships, co-ops, and full-time opportunities post-graduation.
              </p>

              {/* Interactive Action Cluster */}
              <div className="flex flex-wrap items-center gap-3 pt-2 font-mono text-[13px]">
                <Link
                  to="/projects"
                  className="bg-[#ffffff] text-[#090a0c] px-6 py-2.5 font-semibold uppercase tracking-wider hover:bg-[#ff2a3b] hover:text-[#ffffff] transition-colors"
                >
                  Explore Projects [04]
                </Link>
                <Link
                  to="/resume-and-credentials"
                  className="bg-[#1f2022] text-[#ffffff] px-6 py-2.5 font-semibold uppercase tracking-wider hover:bg-[#292a2c] transition-colors border border-[rgba(255,255,255,0.1)]"
                >
                  View Resume &amp; Credentials
                </Link>
                <Link
                  to="/contact"
                  className="bg-[#1b1c1e] text-[#8d9099] px-6 py-2.5 uppercase tracking-wider hover:text-[#ff2a3b] transition-colors border border-[rgba(255,255,255,0.06)] text-left cursor-pointer"
                >
                  Communications Dispatch →
                </Link>
              </div>

              {/* Academic & Trajectory Metrics Strip */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4">
                <div className="bg-[#121315] border border-[rgba(255,255,255,0.08)] p-3">
                  <span className="block font-mono text-[11px] text-[#52545d] uppercase">Academic Pathway</span>
                  <span className="font-mono text-[13px] text-[#ffffff] font-semibold">2+2 Transfer Student</span>
                  <span className="block font-mono text-[11px] text-[#8d9099]">Nirma (BS CSE) → ISU (BS CE)</span>
                </div>
                <div className="bg-[#121315] border border-[rgba(255,255,255,0.08)] p-3">
                  <span className="block font-mono text-[11px] text-[#52545d] uppercase">Curriculum Focus</span>
                  <span className="font-mono text-[13px] text-[#ff2a3b] font-semibold">Computer Engineering</span>
                  <span className="block font-mono text-[11px] text-[#8d9099]">Systems &amp; Software Principles</span>
                </div>
                <div className="bg-[#121315] border border-[rgba(255,255,255,0.08)] p-3">
                  <span className="block font-mono text-[11px] text-[#52545d] uppercase">Target Roles</span>
                  <span className="font-mono text-[13px] text-[#ffffff] font-semibold">Fall 2026 &amp; Beyond</span>
                  <span className="block font-mono text-[11px] text-[#8d9099]">CS / CE Intern &amp; Co-op</span>
                </div>
              </div>
            </div>

            {/* Right: Profile Imagery Frame with Diagnostics Overlay */}
            <div className="lg:col-span-4 flex flex-col items-center justify-center">
              <div className="relative w-full max-w-sm bg-[#18191d] p-2 border border-[rgba(255,255,255,0.12)]">
                <div className="overflow-hidden aspect-[3/4] relative bg-[#090a0c]">
                  <img
                    alt="Nakshatra Gupta - Computer Engineering Student"
                    className="w-full h-full object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-700"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDquJYZWW-6ZJ3Ornmez0wcrsGFhynbkXtoP4E3QNyn9OUhgEgwps-YTKbrhYZcOSnW-X3wlP4rxuzux-sKMRdmUKxYnFXKxHU3qxDM4AzZBVZB48K__B-OcdNntsjB6ALxrCbMUaVcyz0OLe0Hs24EMqRpe0z5tKv7GHa9dxkC5sB4O43MAytkV2k0J3G8KqQZcVNXX8yZwWJ_0vPeRWydiuSvYYJVA8sOTW5hsgFKSchgCIWJtiwnZzDliLZ4gKrDjjQ"
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-[#090a0c]/90 p-3 backdrop-blur-sm border-t border-[rgba(255,255,255,0.1)]">
                    <div className="flex items-center justify-between font-mono text-[11px] uppercase">
                      <span className="text-[#ffffff] font-semibold">NAKSHATRA GUPTA</span>
                      <span className="text-[#ff2a3b]">CPR E '27</span>
                    </div>
                    <div className="flex items-center justify-between text-[#52545d] font-mono text-[11px] mt-0.5">
                      <span>IOWA STATE &amp; NIRMA UNIV</span>
                      <span className="text-[#00ff66]">AMES, IA</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between p-1.5 text-[#52545d] font-mono text-[11px]">
                  <span>COMPUTER ENGINEERING</span>
                  <span>2+2 SCHOLAR</span>
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
                CORE TECHNICAL MATRIX
              </span>
              <h2 className="font-display text-2xl sm:text-3xl text-[#ffffff] uppercase tracking-tight">
                Software Development Disciplines
              </h2>
            </div>
            <p className="font-mono text-[13px] text-[#8d9099] max-w-md">
              Focusing on modern full-stack web platforms, reactive mobile architectures, and interactive spatial computation, grounded by low-level systems comprehension.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Discipline 01 */}
            <div className="bg-[#18191d] border border-[rgba(255,255,255,0.1)] p-6 flex flex-col justify-between group hover:bg-[#1f2022] hover:border-[#ff2a3b] transition-colors">
              <div>
                <div className="flex items-center justify-between font-mono text-[13px] mb-4">
                  <span className="text-[#ff2a3b] font-bold">01 /</span>
                  <span className="text-[#52545d] uppercase font-mono text-[11px]">WEB &amp; FULL-STACK</span>
                </div>
                <h3 className="font-display text-xl text-[#ffffff] uppercase mb-2 group-hover:text-[#ffb3af] transition-colors">
                  Full-Stack Web Architecture
                </h3>
                <p className="font-body text-sm text-[#8d9099] leading-relaxed mb-6">
                  Building responsive, high-performance web applications and production backends. Experienced with modern component architectures, REST APIs, relational database schemas (MySQL), automated CI/CD pipelines, and client-facing production systems.
                </p>
              </div>
              <div className="pt-4 border-t border-[rgba(255,255,255,0.06)]">
                <div className="flex flex-wrap gap-1 font-mono text-[11px] uppercase text-[#52545d]">
                  <span className="bg-[#121315] px-2 py-0.5 text-[#8d9099]">TypeScript</span>
                  <span className="bg-[#121315] px-2 py-0.5 text-[#8d9099]">React</span>
                  <span className="bg-[#121315] px-2 py-0.5 text-[#8d9099]">Spring Boot</span>
                  <span className="bg-[#121315] px-2 py-0.5 text-[#8d9099]">MySQL</span>
                  <span className="bg-[#121315] px-2 py-0.5 text-[#8d9099]">Netlify</span>
                  <span className="bg-[#121315] px-2 py-0.5 text-[#8d9099]">GitLab CI/CD</span>
                </div>
              </div>
            </div>

            {/* Discipline 02 */}
            <div className="bg-[#18191d] border border-[rgba(255,255,255,0.1)] p-6 flex flex-col justify-between group hover:bg-[#1f2022] hover:border-[#ff2a3b] transition-colors">
              <div>
                <div className="flex items-center justify-between font-mono text-[13px] mb-4">
                  <span className="text-[#ff2a3b] font-bold">02 /</span>
                  <span className="text-[#52545d] uppercase font-mono text-[11px]">MOBILE &amp; REAL-TIME</span>
                </div>
                <h3 className="font-display text-xl text-[#ffffff] uppercase mb-2 group-hover:text-[#ffb3af] transition-colors">
                  Native Android &amp; Real-Time Systems
                </h3>
                <p className="font-body text-sm text-[#8d9099] leading-relaxed mb-6">
                  Architecting multi-activity mobile applications in native Java and Android SDK. Implemented duplex WebSocket messaging with typing indicators and read receipts, role-based authorization, Volley/Glide pipelines, and multi-user interaction flows.
                </p>
              </div>
              <div className="pt-4 border-t border-[rgba(255,255,255,0.06)]">
                <div className="flex flex-wrap gap-1 font-mono text-[11px] uppercase text-[#52545d]">
                  <span className="bg-[#121315] px-2 py-0.5 text-[#8d9099]">Android SDK</span>
                  <span className="bg-[#121315] px-2 py-0.5 text-[#8d9099]">Java</span>
                  <span className="bg-[#121315] px-2 py-0.5 text-[#8d9099]">WebSockets</span>
                  <span className="bg-[#121315] px-2 py-0.5 text-[#8d9099]">Volley / Glide</span>
                  <span className="bg-[#121315] px-2 py-0.5 text-[#8d9099]">Role-Based Auth</span>
                </div>
              </div>
            </div>

            {/* Discipline 03 */}
            <div className="bg-[#18191d] border border-[rgba(255,255,255,0.1)] p-6 flex flex-col justify-between group hover:bg-[#1f2022] hover:border-[#ff2a3b] transition-colors">
              <div>
                <div className="flex items-center justify-between font-mono text-[13px] mb-4">
                  <span className="text-[#ff2a3b] font-bold">03 /</span>
                  <span className="text-[#52545d] uppercase font-mono text-[11px]">GRAPHICS &amp; HARDWARE BRIDGE</span>
                </div>
                <h3 className="font-display text-xl text-[#ffffff] uppercase mb-2 group-hover:text-[#ffb3af] transition-colors">
                  Interactive 3D &amp; Hardware Bridge
                </h3>
                <p className="font-body text-sm text-[#8d9099] leading-relaxed mb-6">
                  Rendering 60fps GPU-accelerated spatial environments in the browser with Three.js and WebGL. Complemented by hardware-software integration experience from CyBot, using bare-metal C, timers, and sensors to appreciate true execution efficiency.
                </p>
              </div>
              <div className="pt-4 border-t border-[rgba(255,255,255,0.06)]">
                <div className="flex flex-wrap gap-1 font-mono text-[11px] uppercase text-[#52545d]">
                  <span className="bg-[#121315] px-2 py-0.5 text-[#8d9099]">Three.js</span>
                  <span className="bg-[#121315] px-2 py-0.5 text-[#8d9099]">WebGL</span>
                  <span className="bg-[#121315] px-2 py-0.5 text-[#8d9099]">JavaScript</span>
                  <span className="bg-[#121315] px-2 py-0.5 text-[#8d9099]">Keplerian Math</span>
                  <span className="bg-[#121315] px-2 py-0.5 text-[#8d9099]">CyBot (C Lab)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED WORK: FOUR MAJOR PROJECTS */}
      <section className="w-full bg-[#121316] px-4 sm:px-8 py-16" id="featured-projects">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 font-mono text-[13px] text-[#ff2a3b] mb-1">
                <span>// 01. EVIDENCE LEDGER</span>
                <span className="text-[#52545d]">---</span>
                <span className="text-[#8d9099]">SOFTWARE &amp; SYSTEMS AUDIT</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl text-[#ffffff] uppercase tracking-tight">
                Featured Software &amp; Systems Projects
              </h2>
            </div>
            <span className="font-mono text-[11px] uppercase text-[#8d9099] tracking-widest">
              WEB PLATFORMS • NATIVE ANDROID • WEBGL 3D • HARDWARE LAB
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
                  Flagship full-stack mobile platform engineered in a 4-person team for COMS 3090 at Iowa State University. Built native Android client in Java with Spring Boot REST microservices, MySQL relational persistence, and duplex WebSocket messaging supporting live typing indicators and read receipts. Features appointment booking, role-based authorization for Users, Counsellors, and Admins across 30+ activities, and continuous GitLab CI/CD pipelines.
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

          {/* PROJECT 02: CYBOT (HARDWARE LAB FOUNDATION) */}
          <div className="bg-[#18191d] border border-[rgba(255,255,255,0.12)] p-6 sm:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <div className="flex flex-wrap items-center gap-2 font-mono text-[13px]">
                  <span className="text-[#ff2a3b] font-bold">PROJECT // 02</span>
                  <span className="text-[#52545d]">/</span>
                  <span className="text-[#ffb3af] uppercase font-mono text-[11px]">HARDWARE &amp; SYSTEMS LAB</span>
                  <span className="text-[#52545d]">/</span>
                  <span className="text-[#8d9099] font-mono text-[11px]">IOWA STATE UNIVERSITY (CPR E 288)</span>
                </div>
                <h3 className="font-display text-2xl sm:text-3xl text-[#ffffff] uppercase">
                  CyBot Autonomous Navigation &amp; Sensing Platform
                </h3>
                <div className="inline-block bg-[#121315] px-2.5 py-1 text-[#ffb3af] font-mono text-[11px] border border-[rgba(255,255,255,0.06)]">
                  ★ FOUNDATIONAL HARDWARE MILESTONE: Grounding software principles in physical execution and sensor interfacing
                </div>
                <p className="font-body text-sm text-[#8d9099] leading-relaxed">
                  Engineered autonomous navigation and obstacle avoidance for a mobile robot utilizing the Texas Instruments Tiva TM4C123 microcontroller. Interfaced IR and ultrasonic sensors for distance detection and obstacle scanning, calibrated PWM servo angles, and implemented UART serial protocols to relay telemetry and execute movement commands for structured aisle navigation.
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
                    <span className="block font-mono text-[11px] text-[#52545d] uppercase">Firmware</span>
                    <span className="font-mono text-[13px] text-[#ff2a3b] font-semibold">Embedded C</span>
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-1 font-mono text-[11px] uppercase text-[#52545d] pt-1">
                  <span className="bg-[#090a0c] px-2 py-1 text-[#8d9099]">Servo PWM</span>
                  <span className="bg-[#090a0c] px-2 py-1 text-[#8d9099]">UART Communication</span>
                  <span className="bg-[#090a0c] px-2 py-1 text-[#8d9099]">Obstacle Avoidance</span>
                  <span className="bg-[#090a0c] px-2 py-1 text-[#8d9099]">Sensor Calibration</span>
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
                    <span>CPR E 288 HARDWARE LAB</span>
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
                  <span className="text-[#8d9099] font-mono text-[11px]">COMMERCIAL PRODUCTION WEB</span>
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
                Architected and deployed a production-grade responsive commercial website for Rangam Graphics, an established commercial printing and packaging company. Structured client service showcases, interactive product galleries, rapid quote pipelines, and direct WhatsApp messaging automation for seamless lead generation.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 py-1 max-w-3xl">
                <div className="bg-[#121315] p-3 border border-[rgba(255,255,255,0.06)]">
                  <span className="block font-mono text-[11px] text-[#52545d] uppercase">Role</span>
                  <span className="font-mono text-[13px] text-[#ffffff] font-semibold">Web Developer</span>
                </div>
                <div className="bg-[#121315] p-3 border border-[rgba(255,255,255,0.06)]">
                  <span className="block font-mono text-[11px] text-[#52545d] uppercase">Inquiry Channel</span>
                  <span className="font-mono text-[13px] text-[#ffffff] font-semibold">WhatsApp API &amp; Forms</span>
                </div>
                <div className="bg-[#121315] p-3 border border-[rgba(255,255,255,0.06)]">
                  <span className="block font-mono text-[11px] text-[#52545d] uppercase">Hosting</span>
                  <span className="font-mono text-[13px] text-[#ff2a3b] font-semibold">Netlify Edge</span>
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
                  <span className="bg-[#090a0c] px-2 py-1 text-[#8d9099]">HTML5</span>
                  <span className="bg-[#090a0c] px-2 py-1 text-[#8d9099]">CSS3</span>
                  <span className="bg-[#090a0c] px-2 py-1 text-[#8d9099]">JavaScript</span>
                  <span className="bg-[#090a0c] px-2 py-1 text-[#8d9099]">Responsive UI</span>
                </div>
              </div>
            </div>
          </div>

          {/* PROJECT 04: KARD (REAL-TIME MULTIPLAYER CARD GAME) */}
          <div className="bg-[#18191d] border border-[rgba(255,255,255,0.12)] p-6 sm:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <div className="flex flex-wrap items-center gap-2 font-mono text-[13px]">
                  <span className="text-[#ff2a3b] font-bold">PROJECT // 04</span>
                  <span className="text-[#52545d]">/</span>
                  <span className="text-[#00ff66] uppercase font-mono text-[11px]">FULL-STACK &amp; MULTIPLAYER</span>
                  <span className="text-[#52545d]">/</span>
                  <span className="text-[#8d9099] font-mono text-[11px]">JAVA SPRING BOOT + REACT</span>
                </div>
                <h3 className="font-display text-2xl sm:text-3xl text-[#ffffff] uppercase">
                  KARD : Real-Time Multiplayer Card Game
                </h3>
                <p className="font-body text-sm text-[#8d9099] leading-relaxed">
                  A full-stack, real-time multiplayer card game built from scratch. Features room creation and join via live lobby, synchronized WebSocket (STOMP) state management across players, complete card ruleset (Skip, Reverse, Draw Two, Wild, Wild Draw Four), color picker, UNO callout overlay, real-time game logs, sound effects, card animations, and dynamic mobile-responsive card sizing.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-1">
                  <div className="bg-[#121315] p-3 border border-[rgba(255,255,255,0.06)]">
                    <span className="block font-mono text-[11px] text-[#52545d] uppercase">Backend</span>
                    <span className="font-mono text-[13px] text-[#ffffff] font-semibold">Spring Boot (Java)</span>
                  </div>
                  <div className="bg-[#121315] p-3 border border-[rgba(255,255,255,0.06)]">
                    <span className="block font-mono text-[11px] text-[#52545d] uppercase">Sync Protocol</span>
                    <span className="font-mono text-[13px] text-[#ff2a3b] font-semibold">WebSocket STOMP</span>
                  </div>
                  <div className="bg-[#121315] p-3 border border-[rgba(255,255,255,0.06)]">
                    <span className="block font-mono text-[11px] text-[#52545d] uppercase">Frontend</span>
                    <span className="font-mono text-[13px] text-[#ffffff] font-semibold">React + Vite</span>
                  </div>
                  <div className="bg-[#121315] p-3 border border-[rgba(255,255,255,0.06)]">
                    <span className="block font-mono text-[11px] text-[#52545d] uppercase">Deployment</span>
                    <span className="font-mono text-[13px] text-[#00ff66] font-semibold">Render + Vercel</span>
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-3 pt-1 font-mono text-[13px]">
                  <a
                    className="bg-[#ff2a3b] text-[#ffffff] px-4 py-2 uppercase font-semibold hover:bg-[#ff4d5d] transition-colors flex items-center gap-1.5"
                    href="https://kard-thegame.vercel.app/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <span className="material-symbols-outlined text-sm">sports_esports</span>
                    <span>Play Live Game</span>
                  </a>
                  <a
                    className="bg-[#1f2022] text-[#ffffff] px-4 py-2 uppercase font-semibold hover:bg-[#292a2c] transition-colors flex items-center gap-1.5 border border-[rgba(255,255,255,0.1)]"
                    href="https://github.com/NakshatraGupta1308/kard-thegame"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <span className="material-symbols-outlined text-sm">code</span>
                    <span>GitHub Code</span>
                  </a>
                  <div className="flex flex-wrap gap-1 font-mono text-[11px] uppercase text-[#52545d]">
                    <span className="bg-[#090a0c] px-2 py-1 text-[#8d9099]">Java</span>
                    <span className="bg-[#090a0c] px-2 py-1 text-[#8d9099]">Spring Boot</span>
                    <span className="bg-[#090a0c] px-2 py-1 text-[#8d9099]">STOMP WSS</span>
                    <span className="bg-[#090a0c] px-2 py-1 text-[#8d9099]">React</span>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-5">
                <div className="relative bg-[#090a0c] p-1.5 overflow-hidden border border-[rgba(255,255,255,0.12)]">
                  <div className="relative w-full aspect-[16/10] overflow-hidden group">
                    <img
                      alt="KARD - The Multiplayer Card Game Preview"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      src="/assets/kard-thumbnail.svg"
                    />
                  </div>
                  <div className="p-2 flex justify-between items-center text-[#52545d] font-mono text-[11px]">
                    <span>KARD LOBBY &amp; ARENA</span>
                    <span className="text-[#00ff66]">LIVE ON VERCEL</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* PROJECT 05: NASA SPACEAPPS */}
          <div className="bg-[#18191d] border border-[rgba(255,255,255,0.12)] p-6 sm:p-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2 font-mono text-[13px]">
                <span className="text-[#ff2a3b] font-bold">PROJECT // 05</span>
                <span className="text-[#52545d]">/</span>
                <span className="font-mono text-[11px] text-[#8d9099] uppercase">NASA SPACE APPS HACKATHON</span>
                <span className="text-[#52545d]">/</span>
                <span className="text-[#00ff66] uppercase font-mono text-[11px]">WEBGL 3D SOFTWARE</span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl text-[#ffffff] uppercase">
                NASA SpaceApps : 3D Celestial Orbit Visualization
              </h3>
              <p className="font-body text-sm text-[#8d9099] leading-relaxed max-w-4xl">
                Engineered an interactive 3D celestial orbit simulation software running in the browser with Three.js and WebGL. Models orbital mechanics, celestial coordinate matrices, and trajectory paths for near-Earth asteroids and planetary bodies with zero lag and responsive 60fps rendering.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-1">
                <div className="bg-[#121315] p-3 border border-[rgba(255,255,255,0.06)]">
                  <span className="block font-mono text-[11px] text-[#52545d] uppercase">Graphics Library</span>
                  <span className="font-mono text-[13px] text-[#ffffff] font-semibold">Three.js</span>
                </div>
                <div className="bg-[#121315] p-3 border border-[rgba(255,255,255,0.06)]">
                  <span className="block font-mono text-[11px] text-[#52545d] uppercase">Engine</span>
                  <span className="font-mono text-[13px] text-[#ffffff] font-semibold">WebGL Shaders</span>
                </div>
                <div className="bg-[#121315] p-3 border border-[rgba(255,255,255,0.06)]">
                  <span className="block font-mono text-[11px] text-[#ff2a3b] font-semibold">Orbit Simulation</span>
                </div>
                <div className="bg-[#121315] p-3 border border-[rgba(255,255,255,0.06)]">
                  <span className="block font-mono text-[11px] text-[#52545d] uppercase">Honor</span>
                  <span className="font-mono text-[13px] text-[#ffffff] font-semibold">SpaceApps Winner</span>
                </div>
              </div>
              <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-[rgba(255,255,255,0.08)]">
                <div className="flex flex-wrap gap-1 font-mono text-[11px] uppercase text-[#52545d]">
                  <span className="bg-[#090a0c] px-2 py-1 text-[#8d9099]">Three.js</span>
                  <span className="bg-[#090a0c] px-2 py-1 text-[#8d9099]">JavaScript</span>
                  <span className="bg-[#090a0c] px-2 py-1 text-[#8d9099]">WebGL</span>
                  <span className="bg-[#090a0c] px-2 py-1 text-[#8d9099]">Orbital Math</span>
                </div>
                <a
                  className="bg-[#ff2a3b] text-[#ffffff] px-4 py-2 uppercase font-semibold hover:bg-[#ff4d5d] transition-colors flex items-center gap-1.5 font-mono text-[13px]"
                  href="https://github.com/NakshatraGupta1308/SpaceApps_Astro6"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>View SpaceApps Repo</span>
                  <span className="material-symbols-outlined text-sm">open_in_new</span>
                </a>
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
                  <span>// 02. CREDENTIALS &amp; PROFILE</span>
                  <span className="text-[#52545d]">/</span>
                  <span className="text-[#8d9099]">VERIFIED RECORDS</span>
                </div>
                <h2 className="font-display text-2xl sm:text-4xl text-[#ffffff] uppercase tracking-tight">
                  Verified Technical Profile
                </h2>
                <p className="font-body text-sm text-[#8d9099] leading-relaxed">
                  Review my verified history covering 2+2 articulation from Nirma University (BS CSE) to Iowa State University, full-stack software applications, native Android platform engineering, and verified coursework. Available for offline review via downloadable standard PDF/JPG or interactive web profile.
                </p>

                {/* Key Resume Highlights */}
                <div className="space-y-2 font-mono text-[13px]">
                  <div className="flex items-center gap-3 bg-[#121315] p-3 border border-[rgba(255,255,255,0.06)]">
                    <span className="text-[#ff2a3b]">•</span>
                    <span className="text-[#ffffff] font-semibold">Degree Program:</span>
                    <span className="text-[#8d9099]">2+2 B.S. Transfer: Nirma Univ (BS CSE) → Iowa State Univ (BS Computer Engineering, May '27)</span>
                  </div>
                  <div className="flex items-center gap-3 bg-[#121315] p-3 border border-[rgba(255,255,255,0.06)]">
                    <span className="text-[#ff2a3b]">•</span>
                    <span className="text-[#ffffff] font-semibold">Core Technical Stack:</span>
                    <span className="text-[#8d9099]">Java, Python, TypeScript / React, Android SDK, Spring Boot, MySQL, WebSockets, Three.js, C</span>
                  </div>
                  <div className="flex items-center gap-3 bg-[#121315] p-3 border border-[rgba(255,255,255,0.06)]">
                    <span className="text-[#ff2a3b]">•</span>
                    <span className="text-[#ffffff] font-semibold">Target Opportunities:</span>
                    <span className="text-[#00ff66]">Fall 2026 &amp; Beyond (Computer Science / Computer Engineering Internships &amp; Co-ops)</span>
                  </div>
                </div>

                {/* Download / Navigate Actions */}
                <div className="flex flex-wrap items-center gap-3 pt-2 font-mono text-[13px]">
                  <Link
                    to="/resume-and-credentials"
                    className="bg-[#ffffff] text-[#090a0c] px-6 py-2.5 uppercase font-semibold hover:bg-[#ff2a3b] hover:text-[#ffffff] transition-colors flex items-center gap-2"
                  >
                    <span className="material-symbols-outlined text-base">description</span>
                    <span>Open Full Resume &amp; Profile</span>
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
                    <span className="text-[#ff2a3b]">v2.5</span>
                  </div>
                  <div className="space-y-1 font-mono text-[13px]">
                    <div className="text-[#ffffff] font-semibold">NAKSHATRA GUPTA</div>
                    <div className="text-[#52545d] text-xs">Computer Engineering Student (2+2 Transfer · Nirma BS CSE to ISU BS CE)</div>
                  </div>
                  <div className="bg-[#090a0c] p-3 font-mono text-[11px] text-[#8d9099] space-y-1 border border-[rgba(255,255,255,0.06)]">
                    <div>[01] FULL-STACK ANDROID &amp; SPRING BOOT • CALMIFY</div>
                    <div>[02] EMBEDDED C SENSOR SYSTEMS • CYBOT (CPR E 288)</div>
                    <div>[03] COMMERCIAL WEB ARCHITECTURE • RANGAM GRAPHICS</div>
                    <div>[04] MULTIPLAYER WEBSOCKET ENGINE • KARD</div>
                    <div>[05] 3D GRAPHICS &amp; ASTROPHYSICS • NASA SPACEAPPS</div>
                  </div>
                  <div className="pt-2 flex justify-between items-center font-mono text-[11px] text-[#52545d] uppercase">
                    <span>LOCATION: AMES, IA</span>
                    <span className="text-[#00ff66]">CS / CPR E • Fall 2026 &amp; Beyond</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DIRECT INQUIRY & CONTACT BANNER */}
      <section className="w-full bg-[#121316] px-4 sm:px-8 py-16" id="dispatch-inquiry">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-2 max-w-2xl">
              <span className="font-mono text-[11px] uppercase tracking-widest text-[#ff2a3b] block">
                COMMUNICATIONS &amp; CONTACT // FALL 2026 &amp; BEYOND
              </span>
              <h2 className="font-display text-3xl sm:text-4xl text-[#ffffff] uppercase tracking-tight">
                Get In Touch
              </h2>
              <p className="font-body text-sm text-[#8d9099]">
                Actively discussing Fall 2026 Computer Science / Computer Engineering internships, co-ops, and post-graduation opportunities (May 2027). Transmit a dispatch or reach out directly.
              </p>
            </div>
            <div className="shrink-0 font-mono text-[11px] uppercase text-[#52545d]">
              <span className="inline-block w-2 h-2 rounded-full bg-[#00ff66] mr-2 animate-pulse"></span>
              <span>DIRECT CHANNELS MONITORED</span>
            </div>
          </div>

          <div className="bg-[#18191d] border border-[rgba(255,255,255,0.12)] p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-[#00ff66] font-mono text-[11px] uppercase">
                <span className="material-symbols-outlined text-sm">send</span>
                <span>Direct Communications Dispatch Active</span>
              </div>
              <h3 className="font-display text-xl text-[#ffffff]">
                Send a direct dispatch message via our dedicated contact station
              </h3>
              <p className="font-mono text-[13px] text-[#8d9099] max-w-xl">
                Transmit detailed role specifications, timeline requirements, or schedule interview coordinates directly through the contact portal.
              </p>
            </div>
            <Link
              to="/contact"
              className="px-6 py-3 bg-[#ffffff] text-[#090a0c] font-mono text-[13px] uppercase font-semibold hover:bg-[#ff2a3b] hover:text-[#ffffff] transition-colors shrink-0 text-center flex items-center gap-2"
            >
              <span>Open Contact Station</span>
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </div>

          {/* Contact Channels Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 font-mono text-[13px]">
            <a
              className="bg-[#18191d] border border-[rgba(255,255,255,0.08)] p-4 group hover:border-[#ff2a3b] transition-colors block"
              href="mailto:nixngaps@gmail.com"
            >
              <span className="block font-mono text-[11px] uppercase text-[#52545d] mb-1">Primary Email</span>
              <span className="text-[#ffffff] font-semibold group-hover:text-[#ff2a3b] transition-colors truncate block">nixngaps@gmail.com</span>
              <span className="block font-mono text-[11px] text-[#8d9099] mt-2">→ Direct Mail Dispatch</span>
            </a>
            <a
              className="bg-[#18191d] border border-[rgba(255,255,255,0.08)] p-4 group hover:border-[#ff2a3b] transition-colors block"
              href="https://github.com/NakshatraGupta1308"
              target="_blank"
              rel="noreferrer"
            >
              <span className="block font-mono text-[11px] uppercase text-[#52545d] mb-1">GitHub Profile</span>
              <span className="text-[#ffffff] font-semibold group-hover:text-[#ff2a3b] transition-colors truncate block">NakshatraGupta1308</span>
              <span className="block font-mono text-[11px] text-[#8d9099] mt-2">→ Repositories &amp; Code</span>
            </a>
            <a
              className="bg-[#18191d] border border-[rgba(255,255,255,0.08)] p-4 group hover:border-[#ff2a3b] transition-colors block"
              href="https://www.linkedin.com/in/nakshatra-gupta-13aug2005"
              target="_blank"
              rel="noreferrer"
            >
              <span className="block font-mono text-[11px] uppercase text-[#52545d] mb-1">LinkedIn Network</span>
              <span className="text-[#ffffff] font-semibold group-hover:text-[#ff2a3b] transition-colors truncate block">nakshatra-gupta</span>
              <span className="block font-mono text-[11px] text-[#8d9099] mt-2">→ Professional Profile</span>
            </a>
            <a
              className="bg-[#18191d] border border-[rgba(255,255,255,0.08)] p-4 group hover:border-[#ff2a3b] transition-colors block"
              href="tel:+15159162251"
            >
              <span className="block font-mono text-[11px] uppercase text-[#52545d] mb-1">Voice / SMS</span>
              <span className="text-[#ffffff] font-semibold group-hover:text-[#ff2a3b] transition-colors">+1 515-916-2251</span>
              <span className="block font-mono text-[11px] text-[#8d9099] mt-2">→ Central Time (CT)</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
