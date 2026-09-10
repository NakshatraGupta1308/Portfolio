import React from 'react';
import { DirectDispatchForm } from '../components/DirectDispatchForm';

export const ContactPage: React.FC = () => {
  return (
    <div className="flex flex-col w-full text-[#e3e2e5]">
      {/* TOP TELEMETRY STATUS BAR */}
      <section className="w-full bg-[#090a0c] px-4 sm:px-8 py-2 border-b border-[rgba(255,255,255,0.06)]">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-y-2 font-mono text-[11px] uppercase tracking-widest text-[#8d9099]">
          <div className="flex items-center gap-3">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#00ff66]"></span>
            <span className="text-[#ffffff]">COMMUNICATIONS STATION // DIRECT DISPATCH</span>
            <span className="text-[#52545d]">/</span>
            <span>AMES, IOWA [CENTRAL TIME]</span>
          </div>
          <div className="flex items-center gap-4 text-[#52545d]">
            <span className="text-[#8d9099]">SLA: &lt; 24 HR RESPONSE</span>
            <span className="text-[#ff2a3b] font-semibold">SEEKING CS / CPR E INTERNSHIPS &amp; CO-OPS</span>
          </div>
        </div>
      </section>

      {/* HERO SECTION */}
      <section className="w-full bg-[#121316] px-4 sm:px-8 py-12 sm:py-16 relative overflow-hidden border-b border-[rgba(255,255,255,0.08)]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 font-mono text-[13px] uppercase tracking-wider text-[#8d9099] mb-4">
            <span className="text-[#ff2a3b] font-bold">//</span>
            <span>CONTACT &amp; COMMUNICATIONS</span>
            <span className="text-[#52545d]">•</span>
            <span className="text-[#ffb3af]">NAKSHATRA GUPTA</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="space-y-3 max-w-3xl">
              <h1 className="font-display text-4xl sm:text-6xl text-[#ffffff] uppercase tracking-tight leading-none">
                Communications<br />
                <span className="text-[#ffb3af] italic font-editorial font-normal lowercase tracking-normal">Dispatch.</span>
              </h1>
              <p className="font-body text-base text-[#8d9099] leading-relaxed pt-2">
                Open to discussing Computer Science and Computer Engineering internships, co-ops, and future full-time roles starting Fall 2026 and post-graduation in May 2027. Transmit an inquiry below or reach out via direct email or telephone.
              </p>
            </div>

            <div className="bg-[#18191d] border border-[rgba(255,255,255,0.12)] p-4 font-mono text-[13px] min-w-[280px]">
              <div className="flex items-center justify-between pb-2 border-b border-[rgba(255,255,255,0.08)]">
                <span className="text-[#52545d] text-[11px] uppercase">STATUS</span>
                <span className="text-[#00ff66] font-semibold">CHANNELS OPEN</span>
              </div>
              <div className="pt-2 space-y-1 text-xs">
                <div className="flex justify-between">
                  <span className="text-[#8d9099]">Primary Email:</span>
                  <span className="text-[#ffffff]">nixngaps@gmail.com</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#8d9099]">Academic Email:</span>
                  <span className="text-[#ffffff]">ng1308@iastate.edu</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#8d9099]">Phone:</span>
                  <span className="text-[#ffffff]">+1 515-916-2251</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#8d9099]">Timezone:</span>
                  <span className="text-[#ff2a3b]">US Central (CT)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT: DISPATCH FORM & COORDINATES */}
      <section className="w-full bg-[#090a0c] px-4 sm:px-8 py-14">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Direct Dispatch Interactive Form */}
          <div className="lg:col-span-8 space-y-6">
            <div className="space-y-1">
              <div className="flex items-center gap-2 font-mono text-[13px] text-[#ff2a3b]">
                <span>01 // DIRECT TRANSMISSION</span>
                <span className="text-[#52545d]">/</span>
                <span className="text-[#8d9099] font-mono text-[11px] uppercase">VERIFIED SECURE DISPATCH</span>
              </div>
              <h2 className="font-display text-2xl sm:text-3xl text-[#ffffff] uppercase tracking-tight">
                Send a Dispatch Message
              </h2>
              <p className="font-body text-sm text-[#8d9099]">
                Submit your inquiry directly to Nakshatra Gupta. Form transmissions will generate a timestamped receipt and route directly to his primary inbox.
              </p>
            </div>

            {/* Live Interactive Form with Local & Static Fallbacks */}
            <DirectDispatchForm />
          </div>

          {/* Right Column: Direct Channels, Academic Coordinates, and Verified Profiles */}
          <div className="lg:col-span-4 space-y-6">
            <div className="space-y-1">
              <div className="flex items-center gap-2 font-mono text-[13px] text-[#ff2a3b]">
                <span>02 // DIRECT REACH</span>
                <span className="text-[#52545d]">/</span>
                <span className="text-[#8d9099] font-mono text-[11px] uppercase">COORDINATES</span>
              </div>
              <h2 className="font-display text-xl sm:text-2xl text-[#ffffff] uppercase tracking-tight">
                Contact Channels
              </h2>
            </div>

            {/* Email Card */}
            <div className="bg-[#18191d] border border-[rgba(255,255,255,0.1)] p-5 space-y-2 hover:border-[#ff2a3b] transition-colors">
              <div className="flex items-center justify-between text-[#52545d] font-mono text-[11px] uppercase">
                <span>PRIMARY INBOX</span>
                <span className="text-[#00ff66]">DIRECT ACCESS</span>
              </div>
              <div className="text-[#ffffff] font-mono text-base font-semibold">
                nixngaps@gmail.com
              </div>
              <p className="font-body text-xs text-[#8d9099] leading-relaxed">
                Direct personal and recruitment inbox for software engineering opportunities, co-ops, and collaboration. (Academic: ng1308@iastate.edu)
              </p>
              <div className="pt-2">
                <a
                  href="mailto:nixngaps@gmail.com?subject=Inquiry:%20Software%20Engineering%20Opportunity"
                  className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#1f2022] hover:bg-[#ff2a3b] text-[#ffffff] font-mono text-[11px] uppercase tracking-wider transition-colors border border-[rgba(255,255,255,0.1)]"
                >
                  <span className="material-symbols-outlined text-sm">mail</span>
                  <span>Launch Mail Client</span>
                </a>
              </div>
            </div>

            {/* Telephony Card */}
            <div className="bg-[#18191d] border border-[rgba(255,255,255,0.1)] p-5 space-y-2 hover:border-[#ff2a3b] transition-colors">
              <div className="flex items-center justify-between text-[#52545d] font-mono text-[11px] uppercase">
                <span>DIRECT PHONE / SMS</span>
                <span className="text-[#8d9099]">CENTRAL TIME</span>
              </div>
              <div className="text-[#ffffff] font-mono text-base font-semibold">
                +1 515-916-2251
              </div>
              <p className="font-body text-xs text-[#8d9099] leading-relaxed">
                Direct voice and SMS for urgent recruitment touchpoints, interview scheduling, or coordination during business hours.
              </p>
              <div className="pt-2">
                <a
                  href="tel:+15159162251"
                  className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#1f2022] hover:bg-[#ff2a3b] text-[#ffffff] font-mono text-[11px] uppercase tracking-wider transition-colors border border-[rgba(255,255,255,0.1)]"
                >
                  <span className="material-symbols-outlined text-sm">call</span>
                  <span>Dial Direct Line</span>
                </a>
              </div>
            </div>

            {/* Academic & Geographic Station */}
            <div className="bg-[#18191d] border border-[rgba(255,255,255,0.1)] p-5 space-y-2">
              <div className="flex items-center justify-between text-[#52545d] font-mono text-[11px] uppercase">
                <span>CAMPUS STATION</span>
                <span className="text-[#8d9099]">IOWA, USA</span>
              </div>
              <div className="text-[#ffffff] font-body text-base font-semibold">
                Iowa State University
              </div>
              <div className="font-mono text-xs text-[#ffb3af]">
                Department of Electrical &amp; Computer Engineering
              </div>
              <p className="font-body text-xs text-[#8d9099] leading-relaxed">
                Ames, Iowa 50011, United States.<br />
                2+2 Transfer Scholar (B.S. CSE from Nirma University, India to B.S. Computer Engineering at Iowa State University).
              </p>
            </div>

            {/* Quick Profiles Link Strip */}
            <div className="bg-[#18191d] border border-[rgba(255,255,255,0.1)] p-5 space-y-3 font-mono text-xs">
              <div className="text-[#52545d] text-[11px] uppercase">NETWORK LINKS</div>
              <div className="space-y-2">
                <a
                  href="https://github.com/NakshatraGupta1308"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-2 bg-[#090a0c] hover:bg-[#1f2022] text-[#8d9099] hover:text-[#ffffff] transition-colors border border-[rgba(255,255,255,0.06)]"
                >
                  <span>GitHub (@NakshatraGupta1308)</span>
                  <span className="material-symbols-outlined text-sm">open_in_new</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/nakshatra-gupta-13aug2005"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-2 bg-[#090a0c] hover:bg-[#1f2022] text-[#8d9099] hover:text-[#ffffff] transition-colors border border-[rgba(255,255,255,0.06)]"
                >
                  <span>LinkedIn Profile</span>
                  <span className="material-symbols-outlined text-sm">open_in_new</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
