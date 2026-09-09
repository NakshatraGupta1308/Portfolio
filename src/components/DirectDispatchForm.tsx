import React, { useState } from 'react';

export const DirectDispatchForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [inquiryType, setInquiryType] = useState('Fall 2026 Internship');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [receipt, setReceipt] = useState<{ id: string; timestamp: string; isStaticFallback?: boolean; mailtoUrl?: string } | null>(null);
  const [copied, setCopied] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !message.trim()) {
      setErrorMsg('Please enter both your email address and an inquiry message.');
      return;
    }

    setLoading(true);
    setErrorMsg('');

    const formattedSubject = `[Portfolio Dispatch] ${inquiryType} - ${subject.trim() || name.trim() || 'Inquiry'}`;
    const emailBody = `From: ${name.trim() || 'Recruiter / Visitor'} (${email.trim()})
Inquiry Type: ${inquiryType}
Subject: ${subject.trim() || 'Not specified'}

Message:
${message.trim()}

---
Transmitted via Nakshatra Gupta Systems Portfolio`;

    const mailto = `mailto:ng1308@iastate.edu?subject=${encodeURIComponent(formattedSubject)}&body=${encodeURIComponent(emailBody)}`;

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          subject: subject.trim(),
          inquiryType,
          message: message.trim()
        })
      });

      if (res.ok) {
        const data = await res.json();
        if (data.success) {
          setReceipt({ id: data.receiptId, timestamp: data.timestamp });
          setName('');
          setEmail('');
          setSubject('');
          setMessage('');
          return;
        }
      }
      
      // If endpoint returns non-OK (such as 404 on GitHub Pages static deployment)
      const fallbackId = 'DSP-GH-' + Math.random().toString(36).substring(2, 9).toUpperCase();
      setReceipt({
        id: fallbackId,
        timestamp: new Date().toISOString(),
        isStaticFallback: true,
        mailtoUrl: mailto
      });
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
    } catch {
      // Offline or static GitHub Pages mode
      const fallbackId = 'DSP-GH-' + Math.random().toString(36).substring(2, 9).toUpperCase();
      setReceipt({
        id: fallbackId,
        timestamp: new Date().toISOString(),
        isStaticFallback: true,
        mailtoUrl: mailto
      });
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
    } finally {
      setLoading(false);
    }
  };

  const handleCopyInquiry = () => {
    if (receipt?.mailtoUrl) {
      navigator.clipboard.writeText(`To: ng1308@iastate.edu\nSubject: ${subject || inquiryType}\nSender: ${email}\nMessage: ${message}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <div className="bg-[#121316] border border-[rgba(255,255,255,0.12)] p-6 sm:p-8 space-y-6">
      <div className="flex items-center justify-between border-b border-[rgba(255,255,255,0.08)] pb-4">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#00ff66] animate-pulse"></span>
          <span className="font-mono text-xs text-[#ffffff] font-bold uppercase tracking-wider">
            TRANSMIT DIRECT INQUIRY DISPATCH
          </span>
        </div>
        <span className="text-[11px] font-mono text-[#8d9099]">TARGET: NAKSHATRA GUPTA</span>
      </div>

      {receipt ? (
        <div className="p-6 bg-[#090a0c] border border-[#00ff66] space-y-3 font-mono text-xs">
          <div className="flex items-center gap-2 text-[#00ff66] font-bold text-sm">
            <span className="material-symbols-outlined text-lg">check_circle</span>
            <span>DISPATCH RECEIPT GENERATED</span>
          </div>
          <p className="text-[#8d9099] leading-relaxed">
            {receipt.isStaticFallback
              ? "Your dispatch packet has been formatted for Nakshatra Gupta (ng1308@iastate.edu). You can launch your mail client with one click to transmit it directly or copy the formatted message."
              : "Your inquiry has been stored in the verified backend systems queue. A copy has been routed for Nakshatra's review."}
          </p>
          <div className="p-3 bg-[#121316] border border-[rgba(255,255,255,0.08)] flex flex-col sm:flex-row justify-between text-[11px] text-[#8d9099] gap-1">
            <span>RECEIPT ID: <strong className="text-[#ffffff]">{receipt.id}</strong></span>
            <span>TIMESTAMP: <strong className="text-[#ffffff]">{new Date(receipt.timestamp).toLocaleString()}</strong></span>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            {receipt.mailtoUrl && (
              <a
                href={receipt.mailtoUrl}
                className="px-4 py-2 bg-[#00ff66] text-[#090a0c] font-bold text-xs uppercase hover:bg-[#ffffff] transition-colors inline-flex items-center gap-1.5"
              >
                <span className="material-symbols-outlined text-sm">send</span>
                <span>Send via Mail Client</span>
              </a>
            )}
            <button
              onClick={handleCopyInquiry}
              className="px-4 py-2 bg-[#18191d] border border-[rgba(255,255,255,0.2)] text-[#ffffff] font-bold text-xs uppercase hover:border-[#00ff66] hover:text-[#00ff66] transition-colors inline-flex items-center gap-1.5"
            >
              <span className="material-symbols-outlined text-sm">content_copy</span>
              <span>{copied ? 'Copied to Clipboard!' : 'Copy Summary'}</span>
            </button>
            <button
              onClick={() => setReceipt(null)}
              className="px-4 py-2 bg-[#ffffff] text-[#090a0c] font-bold text-xs uppercase hover:bg-[#ff2a3b] hover:text-[#ffffff] transition-colors"
            >
              Send Another Dispatch
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4 font-mono text-xs">
          {errorMsg && (
            <div className="p-3 bg-[#93000a]/40 border border-[#ffb4ab] text-[#ffdad6]">
              {errorMsg}
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-[#8d9099] block uppercase">Recruiter / Sender Name:</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. John Doe / Principal Recruiter"
                className="w-full p-2.5 bg-[#090a0c] border border-[rgba(255,255,255,0.15)] text-[#ffffff] focus:outline-none focus:border-[#ff2a3b]"
              />
            </div>

            <div className="space-y-1">
              <label className="text-[#8d9099] block uppercase">Return Email Address (*):</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="e.g. recruiter@company.com"
                className="w-full p-2.5 bg-[#090a0c] border border-[rgba(255,255,255,0.15)] text-[#ffffff] focus:outline-none focus:border-[#ff2a3b]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-[#8d9099] block uppercase">Inquiry Classification:</label>
              <select
                value={inquiryType}
                onChange={(e) => setInquiryType(e.target.value)}
                className="w-full p-2.5 bg-[#090a0c] border border-[rgba(255,255,255,0.15)] text-[#ffffff] focus:outline-none focus:border-[#ff2a3b]"
              >
                <option value="Fall 2026 Internship">Fall 2026 Internship</option>
                <option value="Co-op Opportunity">Co-op Opportunity (Fall 2026 / Spring 2027)</option>
                <option value="Full-Time Engineering Role">Full-Time Engineering Role (Post-Grad May 2027)</option>
                <option value="Research & Lab Collaboration">Research &amp; Lab Collaboration</option>
                <option value="General Technical Inquiry">General Technical Inquiry</option>
              </select>
            </div>

            <div className="space-y-1">
              <label className="text-[#8d9099] block uppercase">Subject / Role Identifier:</label>
              <input
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="e.g. Embedded Firmware Co-op // Ames / Remote"
                className="w-full p-2.5 bg-[#090a0c] border border-[rgba(255,255,255,0.15)] text-[#ffffff] focus:outline-none focus:border-[#ff2a3b]"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-[#8d9099] block uppercase">Inquiry Payload / Opportunity Details (*):</label>
            <textarea
              required
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Outline project specifications, team scope, timeline, or interview scheduling coordinates..."
              className="w-full p-3 bg-[#090a0c] border border-[rgba(255,255,255,0.15)] text-[#ffffff] focus:outline-none focus:border-[#ff2a3b] resize-none leading-relaxed"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-[#ffffff] text-[#090a0c] font-bold uppercase tracking-wider hover:bg-[#ff2a3b] hover:text-[#ffffff] transition-all flex items-center justify-center gap-2 disabled:opacity-50"
          >
            {loading ? (
              <>
                <span className="material-symbols-outlined animate-spin text-sm">sync</span>
                <span>TRANSMITTING DIRECT DISPATCH...</span>
              </>
            ) : (
              <>
                <span>TRANSMIT DISPATCH TO NAKSHATRA GUPTA</span>
                <span className="material-symbols-outlined text-sm">send</span>
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
};
