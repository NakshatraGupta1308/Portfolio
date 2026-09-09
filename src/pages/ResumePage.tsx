import React, { useState, useEffect } from 'react';

export const ResumePage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [copyLabel, setCopyLabel] = useState('Copy Plaintext');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsModalOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const copyPlaintextResume = () => {
    const textContent = `NAKSHATRA GUPTA
Computer Engineering Undergraduate - Iowa State University
Location: Ames, Iowa
Target: Fall 2026 & Beyond (Internship / Co-op / Full-Time)

EDUCATION:
- Iowa State University (Ames, Iowa)
  B.S. in Computer Engineering (Expected Graduation: May 2027)
  Relevant Coursework: Embedded Systems, Computer Architecture, Software Development Practice
- Nirma University (Ahmedabad, India)
  B.S. in Computer Science & Engineering (Transferred, July 2023 - May 2025)
  Relevant Coursework: Operating Systems, Data Structures & Algorithms, Software Development Principles

WORK EXPERIENCE:
- Iowa State University ISSO (Aug 2026 - Present)
  ISSO Office Assistant: Processing I-9 Employment Eligibility Verification, SUNAPSIS, Customer Service.
- Iowa State University Dining Services (Aug 2025 - Present)
  Dining Student Worker: Fast-paced operations, sanitation protocols, high-density team coordination.

LEADERSHIP & COMMUNITY:
- Comic Con India (Ahmedabad) - Volunteer (Mar 2025)
  Crowd management and high-density logistical communications.
- Concert Events (India) - Volunteer (Mar 2025)
  Logistical routing and perimeter event monitoring.

TECHNICAL SKILLS:
- Programming: C (Bare-Metal), Java, Python, HTML / CSS / JavaScript
- Hardware & Tools: Tiva TM4C123GH6PM, UART, GPIO, Timers, PWM Servos, Oscilloscopes, Logic Analyzers, Git, MATLAB
- Core Concepts: OOP, Data Structures, Microcontroller I/O, Hardware Interrupts, Algorithm Analysis`;

    if (navigator.clipboard) {
      navigator.clipboard.writeText(textContent).then(() => {
        setCopyLabel('Copied to Clipboard!');
        setTimeout(() => {
          setCopyLabel('Copy Plaintext');
        }, 2500);
      }).catch(() => {
        setCopyLabel('Copied!');
        setTimeout(() => setCopyLabel('Copy Plaintext'), 2500);
      });
    }
  };

  return (
    <div className="flex flex-col w-full text-[#e3e2e5]">
      {/* Telemetry Sub-Header Strip */}
      <section className="w-full bg-[#0d0e10] border-b border-[rgba(255,255,255,0.06)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-2.5 flex flex-wrap items-center justify-between gap-4 font-mono text-[11px] uppercase tracking-widest text-[#52545d]">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-[#ffffff]">
              <span className="w-2 h-2 rounded-full bg-[#00ff66]"></span>
              RECORD: CERTIFIED
            </span>
            <span className="hidden sm:inline text-[rgba(255,255,255,0.12)]">/</span>
            <span className="hidden sm:inline">REG_ID: ISU-CPRE-2027</span>
            <span className="hidden md:inline text-[rgba(255,255,255,0.12)]">/</span>
            <span className="hidden md:inline">TARGET_CYCLE: FALL 2026+</span>
          </div>
          <div className="flex items-center gap-4 text-[#8d9099]">
            <span>LOC: AMES, IA [US]</span>
            <span className="text-[rgba(255,255,255,0.12)]">/</span>
            <span className="text-[#ff2a3b] font-semibold">REVISION: V.FALL26.04</span>
          </div>
        </div>
      </section>

      {/* Main Document Workspace */}
      <section className="w-full bg-[#090a0c] py-10 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex flex-col gap-10">
          {/* Section Title & Global Action Bar */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-[rgba(255,255,255,0.08)]">
            <div className="space-y-2 max-w-2xl">
              <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-[#ff2a3b]">
                <span>[ SYSTEM FILE // 03.CV ]</span>
                <span>::</span>
                <span>VERIFIED CREDENTIALS</span>
              </div>
              <h1 className="font-display text-4xl sm:text-6xl text-[#ffffff] tracking-tight uppercase">
                RESUME &amp; DOSSIER
              </h1>
              <p className="font-body text-sm sm:text-base text-[#8d9099]">
                Computer Engineering undergraduate at Iowa State University specializing in low-level microcontroller systems, bare-metal hardware integration, and reliable software architecture.
              </p>
            </div>

            {/* Quick Action Bar */}
            <div className="flex flex-wrap items-center gap-2 shrink-0">
              <a
                className="flex items-center gap-2 px-5 py-3 bg-[#ffffff] text-[#090a0c] font-mono text-[13px] uppercase font-semibold hover:bg-[#ff2a3b] hover:text-[#ffffff] transition-colors"
                href="./assets/Nakshatra_Gupta_Resume_2026.jpg"
                download="Nakshatra_Gupta_Resume_2026.jpg"
              >
                <span className="material-symbols-outlined text-lg leading-none">download</span>
                <span>Download Resume (JPG/PDF)</span>
              </a>
              <button
                className="flex items-center gap-2 px-5 py-3 bg-[#18191d] border border-[rgba(255,255,255,0.12)] text-[#ffffff] font-mono text-[13px] uppercase hover:bg-[#1f2022] transition-colors"
                onClick={() => setIsModalOpen(true)}
              >
                <span className="material-symbols-outlined text-lg leading-none">fullscreen</span>
                <span>Fullscreen View</span>
              </button>
              <button
                className="flex items-center gap-2 px-5 py-3 bg-[#18191d] border border-[rgba(255,255,255,0.12)] text-[#8d9099] font-mono text-[13px] uppercase hover:text-[#ffffff] hover:bg-[#1f2022] transition-colors"
                onClick={copyPlaintextResume}
              >
                <span className="material-symbols-outlined text-lg leading-none">content_copy</span>
                <span>{copyLabel}</span>
              </button>
            </div>
          </div>

          {/* Split Layout: Visual Document Viewer + Structured Data Log */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Column 1: Document Preview Pane */}
            <div className="lg:col-span-5 flex flex-col gap-3 order-1 lg:order-1 lg:sticky lg:top-20">
              <div className="bg-[#18191d] border border-[rgba(255,255,255,0.12)] p-2 flex flex-col gap-1 shadow-xl">
                <div className="flex items-center justify-between px-3 py-2 bg-[#0d0e10] font-mono text-[11px] uppercase text-[#8d9099]">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#ff2a3b]"></span>
                    <span>NAKSHATRA_GUPTA_RESUME_FALL26.PDF</span>
                  </div>
                  <span className="text-[#52545d]">1545 x 1999 PX</span>
                </div>
                {/* Image Canvas */}
                <div
                  className="relative group overflow-hidden bg-[#0d0e10] cursor-zoom-in"
                  onClick={() => setIsModalOpen(true)}
                >
                  <img
                    alt="High-fidelity visual scan of Nakshatra Gupta's professional resume"
                    className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-[1.015]"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3rzTuzvkZGIF2d9GHqx9ISJpocMjhckhP24z9TK2hFmubd7C6T7u9Wij97P3QqQl9RU4PSvyQ3lwBfCMGO9cfU4jZ3JmmMv1HZQMUH7YAW13EtmWBHdBgDlhHrMJUd-jp3fe2K4Iz4iMwUfvnskTljJQti-kt95VNEuKu7kR5Q9rwbdVL1NP8iHBtlMlWXSqCeBZzN-FdNa4vNHzYn-Lb-rWW-CnlT2mFKAMiYizzyykHOWFqPDz1rmuXILwO1HtYFwc"
                  />
                  <div className="absolute inset-0 bg-[#090a0c]/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity backdrop-blur-[2px]">
                    <span className="px-4 py-2 bg-[#090a0c] text-[#ffffff] font-mono text-[13px] uppercase tracking-wider flex items-center gap-2 shadow-2xl border border-[rgba(255,255,255,0.2)]">
                      <span className="material-symbols-outlined text-base">zoom_in</span>
                      Expand Document Ledger
                    </span>
                  </div>
                </div>
                <div className="px-3 py-2 bg-[#0d0e10] flex items-center justify-between font-mono text-[11px] text-[#52545d] uppercase">
                  <span className="flex items-center gap-1 text-[#00ff66]">
                    <span className="material-symbols-outlined text-sm">verified</span>
                    Original Hardcopy Validated
                  </span>
                  <span>PAGE 01 / 01</span>
                </div>
              </div>

              {/* Fast Spec Card below Viewer */}
              <div className="bg-[#18191d] border border-[rgba(255,255,255,0.12)] p-4 space-y-2">
                <div className="font-mono text-[11px] uppercase text-[#ff2a3b] tracking-wider">
                  [ CANDIDACY SUMMARY ]
                </div>
                <div className="grid grid-cols-2 gap-2 font-mono text-[13px]">
                  <div className="p-2 bg-[#0d0e10] border border-[rgba(255,255,255,0.06)]">
                    <div className="text-[#52545d] text-[10px]">MAJOR</div>
                    <div className="text-[#ffffff] font-semibold">Computer Eng.</div>
                  </div>
                  <div className="p-2 bg-[#0d0e10] border border-[rgba(255,255,255,0.06)]">
                    <div className="text-[#52545d] text-[10px]">GRADUATION</div>
                    <div className="text-[#ffffff] font-semibold">May 2027</div>
                  </div>
                  <div className="p-2 bg-[#0d0e10] border border-[rgba(255,255,255,0.06)]">
                    <div className="text-[#52545d] text-[10px]">CURRENT ROLE</div>
                    <div className="text-[#ffffff] font-semibold">ISSO Assistant</div>
                  </div>
                  <div className="p-2 bg-[#0d0e10] border border-[rgba(255,255,255,0.06)]">
                    <div className="text-[#52545d] text-[10px]">LOOKING FOR</div>
                    <div className="text-[#00ff66] font-semibold">Fall 2026 &amp; Beyond</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Column 2: Structured Machine-Readable Registry */}
            <div className="lg:col-span-7 flex flex-col gap-10 order-2 lg:order-2">
              {/* 01. Academic Trajectory */}
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-2 border-b border-[rgba(255,255,255,0.08)]">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[13px] text-[#ff2a3b] font-bold">01 //</span>
                    <h2 className="font-display text-xl uppercase text-[#ffffff] tracking-tight">Academic Trajectory</h2>
                  </div>
                  <span className="font-mono text-[11px] text-[#52545d] uppercase">DEGREE &amp; INSTITUTION</span>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="bg-[#18191d] border border-[rgba(255,255,255,0.1)] p-6 space-y-3 hover:bg-[#1f2022] transition-colors">
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                      <div>
                        <div className="font-display text-xl text-[#ffffff] font-semibold">Iowa State University</div>
                        <div className="font-mono text-[13px] text-[#ff2a3b]">Ames, Iowa - United States</div>
                      </div>
                      <div className="px-2 py-1 bg-[#0d0e10] text-[#8d9099] font-mono text-[11px] uppercase shrink-0 sm:text-right border border-[rgba(255,255,255,0.06)]">
                        Expected Graduation: May 2027
                      </div>
                    </div>
                    <div className="text-[#ffffff] font-body text-base font-semibold">
                      Bachelor of Science in Computer Engineering
                    </div>
                    <div className="space-y-1 pt-1">
                      <div className="font-mono text-[11px] uppercase text-[#52545d]">
                        Relevant Coursework:
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        <span className="px-2 py-1 bg-[#0d0e10] font-mono text-[11px] text-[#8d9099]">Embedded Systems</span>
                        <span className="px-2 py-1 bg-[#0d0e10] font-mono text-[11px] text-[#8d9099]">Computer Architecture</span>
                        <span className="px-2 py-1 bg-[#0d0e10] font-mono text-[11px] text-[#8d9099]">Software Development Practice</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#18191d] border border-[rgba(255,255,255,0.1)] p-6 space-y-3 hover:bg-[#1f2022] transition-colors">
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                      <div>
                        <div className="font-display text-xl text-[#ffffff] font-semibold">Nirma University</div>
                        <div className="font-mono text-[13px] text-[#8d9099]">Ahmedabad, Gujarat - India</div>
                      </div>
                      <div className="px-2 py-1 bg-[#0d0e10] text-[#8d9099] font-mono text-[11px] uppercase shrink-0 sm:text-right border border-[rgba(255,255,255,0.06)]">
                        July 2023 - May 2025 (Transferred)
                      </div>
                    </div>
                    <div className="text-[#ffffff] font-body text-base font-semibold">
                      Bachelor of Science in Computer Science &amp; Engineering
                    </div>
                    <div className="space-y-1 pt-1">
                      <div className="font-mono text-[11px] uppercase text-[#52545d]">
                        Relevant Coursework:
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        <span className="px-2 py-1 bg-[#0d0e10] font-mono text-[11px] text-[#8d9099]">Operating Systems</span>
                        <span className="px-2 py-1 bg-[#0d0e10] font-mono text-[11px] text-[#8d9099]">Data Structures &amp; Algorithms</span>
                        <span className="px-2 py-1 bg-[#0d0e10] font-mono text-[11px] text-[#8d9099]">Software Development Principles</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 02. Work Experience */}
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-2 border-b border-[rgba(255,255,255,0.08)]">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[13px] text-[#ff2a3b] font-bold">02 //</span>
                    <h2 className="font-display text-xl uppercase text-[#ffffff] tracking-tight">Work Experience</h2>
                  </div>
                  <span className="font-mono text-[11px] text-[#52545d] uppercase">EMPLOYMENT LOG</span>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="bg-[#18191d] border border-[rgba(255,255,255,0.1)] p-6 space-y-3 hover:bg-[#1f2022] transition-colors border-l-2 border-l-[#ff2a3b]">
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                      <div>
                        <div className="font-display text-xl text-[#ffffff] font-semibold">Iowa State University</div>
                        <div className="flex items-center gap-2 font-mono text-[13px] text-[#ff2a3b]">
                          <span>ISSO Office Assistant</span>
                          <span className="text-[#52545d]">-</span>
                          <span className="text-[#8d9099] text-xs">Part-time · On-site</span>
                        </div>
                        <div className="font-mono text-[11px] text-[#52545d] uppercase pt-0.5">
                          Ames, Iowa, United States
                        </div>
                      </div>
                      <div className="px-2 py-1 bg-[#0d0e10] text-[#00ff66] font-mono text-[11px] uppercase shrink-0 border border-[rgba(0,255,102,0.2)]">
                        Aug 2026 - Present
                      </div>
                    </div>
                    <p className="font-body text-sm text-[#8d9099] leading-relaxed">
                      Processing I-9 Employment Eligibility Verification for international student employees at Iowa State ISSO. Scanning and verifying travel &amp; university documents with high accuracy. Providing customer service to students from diverse backgrounds navigating employment authorization requirements. Resolving documentation issues and ensuring accurate record-keeping during peak enrollment period.
                    </p>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {['Time Management', 'SUNAPSIS', 'Administrative Assistance', 'Customer Service', 'Attention to Detail', 'Confidentiality', 'Record Keeping'].map(s => (
                        <span key={s} className="px-2.5 py-1 bg-[#0d0e10] font-mono text-[11px] text-[#52545d] uppercase border border-[rgba(255,255,255,0.06)]">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="bg-[#18191d] border border-[rgba(255,255,255,0.1)] p-6 space-y-3 hover:bg-[#1f2022] transition-colors">
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                      <div>
                        <div className="font-display text-xl text-[#ffffff] font-semibold">Iowa State University Dining Services</div>
                        <div className="font-mono text-[13px] text-[#ff2a3b]">
                          Dining Student Worker
                        </div>
                        <div className="font-mono text-[11px] text-[#52545d] uppercase pt-0.5">
                          Ames, Iowa, United States
                        </div>
                      </div>
                      <div className="px-2 py-1 bg-[#0d0e10] text-[#8d9099] font-mono text-[11px] uppercase shrink-0 border border-[rgba(255,255,255,0.06)]">
                        Aug 2025 - Present
                      </div>
                    </div>
                    <p className="font-body text-sm text-[#8d9099] leading-relaxed">
                      Operating within a high-throughput, deadline-driven university culinary facility. Coordinates real-time inventory management, rapid equipment sanitation compliance, and continuous customer-facing service workflows under rigorous peak operational windows. Demonstrates punctuality, adaptive task switching, and proactive peer collaboration.
                    </p>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {['High-Pressure Execution', 'Time Management', 'Team Collaboration', 'Sanitation Protocols'].map(s => (
                        <span key={s} className="px-2.5 py-1 bg-[#0d0e10] font-mono text-[11px] text-[#52545d] uppercase border border-[rgba(255,255,255,0.06)]">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* 03. Featured Projects */}
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-2 border-b border-[rgba(255,255,255,0.08)]">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[13px] text-[#ff2a3b] font-bold">03 //</span>
                    <h2 className="font-display text-xl uppercase text-[#ffffff] tracking-tight">Featured Projects</h2>
                  </div>
                  <span className="font-mono text-[11px] text-[#52545d] uppercase">ENGINEERING LOG</span>
                </div>
                <div className="bg-[#18191d] border border-[rgba(255,255,255,0.1)] p-6 space-y-3 border-l-2 border-l-[#ff2a3b]">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                    <div>
                      <div className="flex items-center gap-2 font-display text-xl text-[#ffffff] font-semibold">
                        <span>Calmify</span>
                        <span className="text-[#52545d]">/</span>
                        <span className="text-[#ff2a3b] text-sm font-mono uppercase tracking-wider">Android Mental Wellness App</span>
                      </div>
                      <div className="font-mono text-[13px] text-[#8d9099] pt-0.5">Iowa State University (COMS 3090)</div>
                    </div>
                    <div className="px-2 py-1 bg-[#0d0e10] text-[#ff2a3b] font-mono text-[11px] uppercase shrink-0 sm:text-right border border-[rgba(255,255,255,0.06)]">
                      Jan 2026 - May 2026
                    </div>
                  </div>
                  <p className="font-body text-sm text-[#8d9099] leading-relaxed">
                    Native Android full-stack platform built for Iowa State University COMS 3090. Developed WebSocket chat with typing indicators and read receipts, appointment booking, AI chat assistant, admin dashboard, role-based UI across 30+ activities, and automated GitLab CI/CD.
                  </p>
                  <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                    <div className="flex flex-wrap gap-1.5">
                      {['Android SDK', 'Java', 'WebSockets', 'Spring Boot', 'MySQL', 'Volley & Glide', 'GitLab CI/CD'].map(t => (
                        <span key={t} className="px-2 py-0.5 bg-[#0d0e10] font-mono text-[11px] text-[#8d9099] uppercase border border-[rgba(255,255,255,0.06)]">
                          {t}
                        </span>
                      ))}
                    </div>
                    <a
                      className="flex items-center gap-1.5 px-3 py-1.5 bg-[#ff2a3b] text-[#ffffff] font-mono text-[11px] uppercase font-semibold hover:bg-[#ff4d5d] transition-colors shrink-0"
                      href="https://www.youtube.com/watch?v=qTwxhTLsqMM"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <span className="material-symbols-outlined text-sm leading-none">smart_display</span>
                      <span>Video Demo</span>
                      <span className="material-symbols-outlined text-xs leading-none">open_in_new</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* 04. Leadership & Community */}
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-2 border-b border-[rgba(255,255,255,0.08)]">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[13px] text-[#ff2a3b] font-bold">04 //</span>
                    <h2 className="font-display text-xl uppercase text-[#ffffff] tracking-tight">Leadership &amp; Community</h2>
                  </div>
                  <span className="font-mono text-[11px] text-[#52545d] uppercase">FIELD MOBILIZATION</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-[#18191d] border border-[rgba(255,255,255,0.1)] p-5 space-y-2 hover:bg-[#1f2022] transition-colors">
                    <div className="flex items-center justify-between">
                      <span className="px-2 py-0.5 bg-[#0d0e10] font-mono text-[11px] text-[#ff2a3b] uppercase border border-[rgba(255,255,255,0.06)]">Event Operations</span>
                      <span className="font-mono text-[11px] text-[#52545d]">Mar 2025</span>
                    </div>
                    <div className="font-display text-lg text-[#ffffff] font-semibold">
                      Comic Con India
                    </div>
                    <div className="font-mono text-[13px] text-[#8d9099]">
                      Volunteer : Ahmedabad Chapter
                    </div>
                    <p className="font-body text-sm text-[#8d9099] leading-normal pt-1">
                      Executed crowd routing, access coordination, and rapid team communications during high-density multi-day convention operations.
                    </p>
                  </div>

                  <div className="bg-[#18191d] border border-[rgba(255,255,255,0.1)] p-5 space-y-2 hover:bg-[#1f2022] transition-colors">
                    <div className="flex items-center justify-between">
                      <span className="px-2 py-0.5 bg-[#0d0e10] font-mono text-[11px] text-[#ff2a3b] uppercase border border-[rgba(255,255,255,0.06)]">Logistics</span>
                      <span className="font-mono text-[11px] text-[#52545d]">Mar 2025</span>
                    </div>
                    <div className="font-display text-lg text-[#ffffff] font-semibold">
                      Concert Events India
                    </div>
                    <div className="font-mono text-[13px] text-[#8d9099]">
                      Volunteer : Logistical Lead
                    </div>
                    <p className="font-body text-sm text-[#8d9099] leading-normal pt-1">
                      Managed perimeter check points, emergency pathway egress, and back-of-house logistical asset dispatch for live musical performances.
                    </p>
                  </div>
                </div>
              </div>

              {/* 05. Technical Skill Registers */}
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-2 border-b border-[rgba(255,255,255,0.08)]">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[13px] text-[#ff2a3b] font-bold">05 //</span>
                    <h2 className="font-display text-xl uppercase text-[#ffffff] tracking-tight">Technical Skill Registers</h2>
                  </div>
                  <span className="font-mono text-[11px] text-[#52545d] uppercase">STACK &amp; TOOLING</span>
                </div>
                <div className="bg-[#18191d] border border-[rgba(255,255,255,0.1)] p-6 space-y-5">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between font-mono text-[11px] uppercase text-[#52545d]">
                      <span>Category: Programming &amp; Scripting</span>
                      <span>PROFICIENCY INDEX</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 font-mono text-[13px]">
                      <div className="p-2.5 bg-[#0d0e10] border border-[rgba(255,255,255,0.06)] flex items-center justify-between">
                        <span className="text-[#ffffff] font-semibold">C (Bare-Metal)</span>
                        <span className="text-[#ff2a3b] text-xs uppercase font-bold">Primary</span>
                      </div>
                      <div className="p-2.5 bg-[#0d0e10] border border-[rgba(255,255,255,0.06)] flex items-center justify-between">
                        <span className="text-[#ffffff] font-semibold">Java</span>
                        <span className="text-[#8d9099] text-xs uppercase">Core OOP</span>
                      </div>
                      <div className="p-2.5 bg-[#0d0e10] border border-[rgba(255,255,255,0.06)] flex items-center justify-between">
                        <span className="text-[#ffffff] font-semibold">Python</span>
                        <span className="text-[#8d9099] text-xs uppercase">Data / Scripting</span>
                      </div>
                      <div className="p-2.5 bg-[#0d0e10] border border-[rgba(255,255,255,0.06)] flex items-center justify-between">
                        <span className="text-[#ffffff] font-semibold">HTML / CSS / JS</span>
                        <span className="text-[#8d9099] text-xs uppercase">Web Front-end</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2 pt-2 border-t border-[rgba(255,255,255,0.06)]">
                    <div className="flex items-center justify-between font-mono text-[11px] uppercase text-[#52545d]">
                      <span>Category: Hardware, Peripherals &amp; Lab Instrumentation</span>
                      <span>SIGNAL &amp; HARDWARE</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {['TI TM4C123', 'UART / SPI / I2C', 'GPIO Configuration', 'PWM Timers', 'Oscilloscopes', 'Logic Analyzers', 'GitLab CI/CD', 'Android SDK', 'WebSockets', 'Spring Boot', 'MySQL', 'Volley & Glide'].map(h => (
                        <span key={h} className="px-2.5 py-1.5 bg-[#0d0e10] text-[#ffffff] font-mono text-[13px] border border-[rgba(255,255,255,0.06)]">
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2 pt-2 border-t border-[rgba(255,255,255,0.06)]">
                    <div className="flex items-center justify-between font-mono text-[11px] uppercase text-[#52545d]">
                      <span>Category: Theoretical Foundations</span>
                      <span>SYSTEM KERNEL</span>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 font-mono text-[11px] text-[#8d9099] uppercase">
                      {[
                        'Object-Oriented Programming',
                        'Data Structures',
                        'Microcontroller I/O',
                        'Hardware Interrupts (ISR)',
                        'Algorithm Analysis',
                        'Memory Pointers & Stack'
                      ].map(t => (
                        <div key={t} className="p-2 bg-[#0d0e10] border border-[rgba(255,255,255,0.06)] flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 bg-[#ff2a3b] rounded-full shrink-0"></span>
                          <span>{t}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Direct Audit Badge */}
              <div className="p-6 bg-[#18191d] border border-[rgba(255,255,255,0.12)] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-[#00ff66] font-mono text-[11px] uppercase">
                    <span className="material-symbols-outlined text-sm">verified_user</span>
                    <span>Verified Academic &amp; Professional Record</span>
                  </div>
                  <div className="font-display text-xl text-[#ffffff]">Fall 2026 &amp; Beyond Candidate</div>
                  <div className="font-mono text-[13px] text-[#8d9099]">
                    Official institutional transcripts and lab references accessible upon request.
                  </div>
                </div>
                <a
                  className="px-5 py-3 bg-[#ffffff] text-[#090a0c] font-mono text-[13px] uppercase font-semibold hover:bg-[#ff2a3b] hover:text-[#ffffff] transition-colors shrink-0 text-center"
                  href="mailto:ng1308@iastate.edu?subject=Inquiry:%20Fall%202026%20Engineering%20Opportunity"
                >
                  Request Full Packet
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fullscreen Modal for Document Inspection */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-[#090a0c]/95 backdrop-blur-md flex flex-col items-center justify-center p-4">
          <div className="w-full max-w-5xl h-full flex flex-col border border-[rgba(255,255,255,0.15)] bg-[#121316]">
            <div className="w-full py-2.5 flex items-center justify-between text-[#ffffff] bg-[#18191d] px-4 border-b border-[rgba(255,255,255,0.12)]">
              <div className="flex items-center gap-2 font-mono text-[11px] uppercase">
                <span className="w-2 h-2 rounded-full bg-[#ff2a3b]"></span>
                <span>Nakshatra Gupta Resume [Inspection Mode]</span>
              </div>
              <div className="flex items-center gap-2">
                <a
                  className="px-3 py-1 bg-[#1f2022] hover:bg-[#ffffff] hover:text-[#090a0c] font-mono text-[11px] uppercase transition-colors border border-[rgba(255,255,255,0.1)]"
                  download="Nakshatra_Gupta_Resume_2026.jpg"
                  href="https://lh3.googleusercontent.com/aida-public/AB6AXuCgyJlZAE9jRdH8CqSnVGWMP1zKi3MjrH06RfiUKc1tIUzVMA9Th_Jm23dBxnF3O2wY2aItfejLjbEwxxnb9CrANFj6xqJn-8_Dn_s9PjC81ds9Z6lA9SGFO1uIgONatuMYrce_jBS-sux64t9m0uYdUDMue-v35r-lA_TYqkU2RiQJrlqGHPprS79uvAoKVZx_iYj3OJf22d_UHmgnS23s1NKCfxBKDcRO-VRI5G43oJw3Bts0Eyf9cxdGRg_uqBeGyA4"
                >
                  Download Copy
                </a>
                <button
                  className="px-3 py-1 bg-[#ff2a3b] text-[#ffffff] font-mono text-[11px] uppercase hover:bg-[#ff4d5d]"
                  onClick={() => setIsModalOpen(false)}
                >
                  Close [ESC]
                </button>
              </div>
            </div>
            <div className="flex-1 overflow-y-auto p-4 flex items-center justify-center bg-[#0d0e10]">
              <img
                alt="Full size resume of Nakshatra Gupta"
                className="max-w-full max-h-none lg:max-w-3xl shadow-2xl"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDG5W8Kl2wq8nlssidRS4Owm_1sAdkfQwNKazjsTLCbe7ee3eKlqiWCfxUdpEB4ImvpPVfFkURbBwZ0cxBSxdaiA3_mG1W8oDTYdyJ8ryUGlT1jiTzAEB4lWq71tDhwHa4mRag8vcaHa8PMlZ_es4evVwd4rCUowBQFiRf9A0CKkM8RU1j3hSoRYg0KGA2JYC18BE4pa_Y7KoUHgOtG9PSm0U_2iadCfA71muoqmPY8TsKIK2vZAZn1fRKPcbzb2USQ8Ng"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
