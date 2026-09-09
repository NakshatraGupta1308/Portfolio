import React, { useState } from 'react';
import { playClick } from '../../utils/audio';
import { 
  Send, 
  ShieldCheck, 
  Lock, 
  Check, 
  Copy, 
  Calendar, 
  Mail, 
  Clock, 
  MessageSquare,
  AlertCircle
} from 'lucide-react';

export const TransmissionScreen: React.FC = () => {
  const [subject, setSubject] = useState('');
  const [classification, setClassification] = useState('RESTRICTED');
  const [encryption, setEncryption] = useState('ML-KEM-1024');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isTransmitting, setIsTransmitting] = useState(false);
  const [transmissionSuccess, setTransmissionSuccess] = useState(false);
  const [transmissionPacketHash, setTransmissionPacketHash] = useState('');

  // Consultation Slot State
  const [selectedDate, setSelectedDate] = useState('2026-09-18');
  const [selectedSlot, setSelectedSlot] = useState('14:00 UTC');
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  const pgpKey = '8B94 A3C7 E219 40BF 91E8  5D02 C72A 4F90 18DC 39E1';
  const [copiedPgp, setCopiedPgp] = useState(false);

  const handleCopyPgp = () => {
    playClick(1000, 0.02);
    navigator.clipboard.writeText(pgpKey);
    setCopiedPgp(true);
    setTimeout(() => setCopiedPgp(false), 2000);
  };

  const handleTransmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message || !email) return;

    playClick(1400, 0.03);
    setIsTransmitting(true);

    // Simulate cryptographic framing & transmission
    setTimeout(() => {
      const randomHash = Array.from({ length: 32 }, () => 
        Math.floor(Math.random() * 16).toString(16)
      ).join('');
      setTransmissionPacketHash(`0x${randomHash}`);
      setIsTransmitting(false);
      setTransmissionSuccess(true);
      playClick(1600, 0.04);
    }, 1200);
  };

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    playClick(1300, 0.03);
    setBookingConfirmed(true);
  };

  return (
    <div className="space-y-16 py-8 sm:py-12">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center space-x-3 text-xs font-mono-tech tracking-widest text-[#ff2a3b]">
          <span>// INDEX 06</span>
          <span className="text-[#52545d]">///</span>
          <span>ENCRYPTED DIRECT DISPATCH CONSOLE</span>
        </div>
        <h1 className="font-display font-bold text-4xl sm:text-6xl text-[#ffffff] tracking-tight">
          TRANSMISSION TERMINAL
        </h1>
        <p className="max-w-3xl text-sm sm:text-base font-body text-[#8d9099] leading-relaxed">
          Direct cryptographic channel for classified systems architecture inquiries, consulting directives, and high-assurance project proposals.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Column: Transmission Form (7 cols) */}
        <div className="lg:col-span-7 space-y-8">
          <div className="bg-[#121316] border border-[rgba(255,255,255,0.12)] p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-[rgba(255,255,255,0.08)]">
              <div className="flex items-center space-x-2 text-xs font-mono-tech text-[#ffffff] font-bold">
                <Lock size={14} className="text-[#ff2a3b]" />
                <span>DIRECTIVE TRANSMISSION FORM</span>
              </div>
              <span className="text-[10px] font-mono-tech text-[#00ff66]">
                CHANNEL ENCRYPTED (E2EE)
              </span>
            </div>

            {transmissionSuccess ? (
              <div className="p-8 bg-[#090a0c] border border-[#00ff66] space-y-4 text-xs font-mono-tech animate-in fade-in duration-200">
                <div className="flex items-center space-x-2 text-[#00ff66] font-bold text-sm">
                  <Check size={18} />
                  <span>TRANSMISSION PACKET DISPATCHED &amp; LOGGED</span>
                </div>
                <p className="text-[#8d9099] leading-relaxed">
                  Your encrypted directive has been routed through our secure relay. A verified acknowledgement will be transmitted to <strong className="text-[#ffffff]">{email}</strong> within 12 hours.
                </p>
                <div className="p-3 bg-[#121316] border border-[rgba(255,255,255,0.08)] space-y-1">
                  <div className="text-[10px] text-[#52545d]">CRYPTOGRAPHIC PACKET DIGEST (SHA-256):</div>
                  <div className="text-[#ffffff] break-all font-mono-tech select-all">
                    {transmissionPacketHash}
                  </div>
                </div>
                <button
                  onClick={() => {
                    setTransmissionSuccess(false);
                    setMessage('');
                    setSubject('');
                  }}
                  className="px-4 py-2 bg-[#ffffff] text-[#090a0c] font-bold uppercase tracking-wider hover:bg-[#ff2a3b] hover:text-[#ffffff] transition-colors"
                >
                  DISPATCH ANOTHER TRANSMISSION
                </button>
              </div>
            ) : (
              <form onSubmit={handleTransmit} className="space-y-4 text-xs font-mono-tech">
                {/* Subject & Classification Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[#8d9099] block font-semibold">
                      DIRECTIVE CODENAME / SUBJECT:
                    </label>
                    <input
                      type="text"
                      required
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      placeholder="e.g. PROJECT TITAN // CONSENSUS AUDIT"
                      className="w-full p-2.5 bg-[#0c0d10] border border-[rgba(255,255,255,0.15)] text-[#ffffff] focus:outline-none focus:border-[#ff2a3b] transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[#8d9099] block font-semibold">
                      CLASSIFICATION CLEARANCE:
                    </label>
                    <select
                      value={classification}
                      onChange={(e) => setClassification(e.target.value)}
                      className="w-full p-2.5 bg-[#0c0d10] border border-[rgba(255,255,255,0.15)] text-[#ffffff] focus:outline-none focus:border-[#ff2a3b]"
                    >
                      <option value="UNCLASSIFIED">UNCLASSIFIED // GENERAL INQUIRY</option>
                      <option value="RESTRICTED">RESTRICTED // SYSTEMS ARCHITECTURE</option>
                      <option value="SECRET">SECRET // DEFENSE &amp; HARDWARE ENCLAVE</option>
                    </select>
                  </div>
                </div>

                {/* Email & Encryption Protocol */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[#8d9099] block font-semibold">
                      AUTHENTICATED RETURN EMAIL:
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="operator@organization.mil or .com"
                      className="w-full p-2.5 bg-[#0c0d10] border border-[rgba(255,255,255,0.15)] text-[#ffffff] focus:outline-none focus:border-[#ff2a3b] transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[#8d9099] block font-semibold">
                      ENCRYPTION SPECIFICATION:
                    </label>
                    <select
                      value={encryption}
                      onChange={(e) => setEncryption(e.target.value)}
                      className="w-full p-2.5 bg-[#0c0d10] border border-[rgba(255,255,255,0.15)] text-[#ffffff] focus:outline-none focus:border-[#ff2a3b]"
                    >
                      <option value="ML-KEM-1024">ML-KEM-1024 (Post-Quantum Kyber)</option>
                      <option value="ChaCha20-Poly1305">ChaCha20-Poly1305 Symmetric</option>
                      <option value="AES-256-GCM">AES-256-GCM Silicon Encrypted</option>
                    </select>
                  </div>
                </div>

                {/* Message Payload */}
                <div className="space-y-1.5">
                  <label className="text-[#8d9099] block font-semibold">
                    OPERATIONAL DIRECTIVE PAYLOAD:
                  </label>
                  <textarea
                    required
                    rows={6}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Outline your systems architecture objectives, throughput requirements, hardware constraints, or advisory timeline..."
                    className="w-full p-3 bg-[#0c0d10] border border-[rgba(255,255,255,0.15)] text-[#ffffff] focus:outline-none focus:border-[#ff2a3b] transition-colors resize-none leading-relaxed"
                  />
                </div>

                {/* Security Advisory note */}
                <div className="p-3 bg-[#090a0c] border border-[rgba(255,255,255,0.06)] flex items-start space-x-2 text-[11px] text-[#8d9099]">
                  <AlertCircle size={13} className="text-[#ff2a3b] mt-0.5 shrink-0" />
                  <span>
                    Transmissions are cryptographically signed and stored in ephemeral RAM buffers. Zero third-party telemetry or ad trackers are invoked.
                  </span>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isTransmitting}
                  className="w-full py-3.5 bg-[#ffffff] text-[#090a0c] font-bold text-xs uppercase tracking-[0.1em] hover:bg-[#ff2a3b] hover:text-[#ffffff] transition-all flex items-center justify-center space-x-2 disabled:opacity-50"
                >
                  {isTransmitting ? (
                    <span>ASSEMBLING CRYPTOGRAPHIC PACKET...</span>
                  ) : (
                    <>
                      <span>TRANSMIT DIRECTIVE</span>
                      <Send size={13} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Right Column: PGP Enclave, Booking & Direct Comms (5 cols) */}
        <div className="lg:col-span-5 space-y-8">
          {/* PGP Public Key Registry Card */}
          <div className="bg-[#121316] border border-[rgba(255,255,255,0.12)] p-6 space-y-4">
            <div className="flex items-center justify-between text-xs font-mono-tech">
              <span className="text-[#ffffff] font-bold">// GPG / PGP KEY REGISTRY</span>
              <ShieldCheck size={14} className="text-[#00ff66]" />
            </div>

            <p className="text-xs font-body text-[#8d9099]">
              For out-of-band communications, encrypt documents directly with the official master key:
            </p>

            <div className="p-3 bg-[#090a0c] border border-[rgba(255,255,255,0.08)] space-y-2 text-xs font-mono-tech">
              <div className="text-[10px] text-[#52545d]">FINGERPRINT:</div>
              <div className="text-[#ffffff] font-bold select-all tracking-wider break-all">
                {pgpKey}
              </div>
              <div className="flex items-center justify-between pt-1">
                <span className="text-[10px] text-[#8d9099]">4096-BIT RSA / ED25519</span>
                <button
                  onClick={handleCopyPgp}
                  className="px-2 py-0.5 bg-[#18191d] border border-[rgba(255,255,255,0.15)] text-[10px] text-[#ffffff] hover:border-[#ff2a3b] hover:text-[#ff2a3b] transition-all flex items-center space-x-1"
                >
                  {copiedPgp ? (
                    <>
                      <Check size={11} className="text-[#00ff66]" />
                      <span className="text-[#00ff66]">COPIED</span>
                    </>
                  ) : (
                    <>
                      <Copy size={11} />
                      <span>COPY</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Consultation / Advisory Time Slot Booking Simulator */}
          <div className="bg-[#121316] border border-[rgba(255,255,255,0.12)] p-6 space-y-4">
            <div className="flex items-center space-x-2 text-xs font-mono-tech text-[#ffffff] font-bold">
              <Calendar size={14} className="text-[#ff2a3b]" />
              <span>SYSTEMS ADVISORY CONSULTATION</span>
            </div>

            <p className="text-xs font-body text-[#8d9099]">
              Reserve a 45-minute technical briefing slot for systems architecture evaluation:
            </p>

            {bookingConfirmed ? (
              <div className="p-4 bg-[#090a0c] border border-[#00ff66] text-xs font-mono-tech text-[#00ff66] space-y-1">
                <div className="font-bold">✓ BRIEFING SLOT LOCKED</div>
                <div className="text-[#8d9099]">
                  Date: {selectedDate} at {selectedSlot}. Calendar invite &amp; secure meeting coordinates will be dispatched.
                </div>
              </div>
            ) : (
              <form onSubmit={handleBooking} className="space-y-3 text-xs font-mono-tech">
                <div className="space-y-1">
                  <label className="text-[#8d9099]">DESIRED DATE:</label>
                  <select
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full p-2 bg-[#090a0c] border border-[rgba(255,255,255,0.12)] text-[#ffffff] focus:outline-none focus:border-[#ff2a3b]"
                  >
                    <option value="2026-09-18">2026-09-18 // THURSDAY</option>
                    <option value="2026-09-22">2026-09-22 // TUESDAY</option>
                    <option value="2026-09-25">2026-09-25 // FRIDAY</option>
                    <option value="2026-10-02">2026-10-02 // THURSDAY</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-[#8d9099]">COORDINATED TIME SLOT (UTC):</label>
                  <div className="grid grid-cols-2 gap-2">
                    {['14:00 UTC', '16:30 UTC', '19:00 UTC', '21:30 UTC'].map((slot) => (
                      <button
                        key={slot}
                        type="button"
                        onClick={() => setSelectedSlot(slot)}
                        className={`p-2 text-center border transition-all ${
                          selectedSlot === slot
                            ? 'bg-[#ffffff] text-[#090a0c] border-[#ffffff] font-bold'
                            : 'bg-[#090a0c] text-[#8d9099] border-[rgba(255,255,255,0.08)] hover:text-[#ffffff]'
                        }`}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 bg-[#18191d] border border-[rgba(255,255,255,0.2)] text-[#ffffff] font-bold uppercase tracking-wider hover:border-[#ff2a3b] hover:text-[#ff2a3b] transition-all"
                >
                  RESERVE BRIEFING SLOT
                </button>
              </form>
            )}
          </div>

          {/* Direct Encrypted Comms Matrix */}
          <div className="bg-[#121316] border border-[rgba(255,255,255,0.12)] p-6 space-y-3">
            <div className="text-xs font-mono-tech text-[#ffffff] font-bold">
              // DIRECT PROTOCOL ENDPOINTS
            </div>
            <div className="divide-y divide-[rgba(255,255,255,0.06)] text-xs font-mono-tech">
              <div className="py-2 flex justify-between">
                <span className="text-[#8d9099]">SIGNAL:</span>
                <span className="text-[#ffffff]">alexander_vex.01</span>
              </div>
              <div className="py-2 flex justify-between">
                <span className="text-[#8d9099]">MATRIX:</span>
                <span className="text-[#ffffff]">@vex:kinetic.systems</span>
              </div>
              <div className="py-2 flex justify-between">
                <span className="text-[#8d9099]">SECURE RFC:</span>
                <span className="text-[#ffffff]">vex@kinetic-obsidian.net</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
