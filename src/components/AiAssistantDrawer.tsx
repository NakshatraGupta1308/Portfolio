import React, { useState } from 'react';

interface AiAssistantDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Message {
  sender: 'user' | 'assistant';
  text: string;
  time: string;
}

export const AiAssistantDrawer: React.FC<AiAssistantDrawerProps> = ({ isOpen, onClose }) => {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: 'assistant',
      text: "Hello! Welcome to the Quick Q&A for Nakshatra Gupta's portfolio. You can select any of the suggested questions below or type your own question to get instant answers about his 2+2 academic pathway (Nirma BS CSE to Iowa State BS CE), software development projects (Calmify, Rangam Graphics, NASA SpaceApps, CyBot), technical skills, or internship availability.",
      time: 'SYSTEM READY'
    }
  ]);

  const quickPrompts = [
    "Tell me about Nakshatra's 2+2 Transfer background",
    "What software development roles is he seeking?",
    "Tell me about the Calmify Android project",
    "What are his core technical skills & languages?"
  ];

  const handleSend = async (queryText?: string) => {
    const question = queryText || input;
    if (!question.trim() || loading) return;

    const userMsg: Message = {
      sender: 'user',
      text: question.trim(),
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch('/api/assistant/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question: question.trim() })
      });
      if (res.ok) {
        const data = await res.json();
        if (data.reply) {
          const assistantMsg: Message = {
            sender: 'assistant',
            text: data.reply,
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
          };
          setMessages((prev) => [...prev, assistantMsg]);
          return;
        }
      }
      // Fallback for static environments
      throw new Error('Static fallback');
    } catch {
      const fallbackReply = getClientFallbackResponse(question);
      setMessages((prev) => [
        ...prev,
        {
          sender: 'assistant',
          text: fallbackReply,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  const getClientFallbackResponse = (q: string): string => {
    const lower = q.toLowerCase();
    if (lower.includes('availab') || lower.includes('fall 2026') || lower.includes('intern') || lower.includes('co-op') || lower.includes('hire') || lower.includes('full-time') || lower.includes('start') || lower.includes('graduat') || lower.includes('role') || lower.includes('job')) {
      return "Nakshatra Gupta is actively seeking Computer Science / Computer Engineering Internships and Co-ops for Fall 2026, and full-time opportunities post-graduation (May 2027), with an emphasis on software development. Contact: ng1308@iastate.edu | +1 515-916-2251.";
    }
    if (lower.includes('transfer') || lower.includes('nirma') || lower.includes('2+2') || lower.includes('background') || lower.includes('education') || lower.includes('degree') || lower.includes('school') || lower.includes('iowa state')) {
      return "Nakshatra is a 2+2 Transfer student from Nirma University (Ahmedabad, India), where he pursued a B.S. in Computer Science and Engineering (BS CSE). He transferred to Iowa State University to complete his B.S. in Computer Engineering (CPR E '27). He knows principles of software engineering and has a strong hold over software development, full-stack systems, and real-time computing.";
    }
    if (lower.includes('calmify') || lower.includes('android') || lower.includes('coms 3090') || lower.includes('mental health') || lower.includes('app')) {
      return "Calmify is a native Android mental health app developed in a 4-person Agile sprint for ISU COMS 3090 (Jan - May 2026). It incorporates WebSocket-based real-time counsellor chat with typing indicators and read receipts, role-based access for counselors/users/admins, appointment scheduling, and an AI support drawer across 30+ activities. Video demo: https://www.youtube.com/watch?v=qTwxhTLsqMM";
    }
    if (lower.includes('cybot') || lower.includes('cpre 288') || lower.includes('robot') || lower.includes('embedded') || lower.includes('microcontroller') || lower.includes('tiva') || lower.includes('tm4c') || lower.includes('hardware')) {
      return "While Nakshatra's primary focus and projects are software-based, his hardware foundation includes the CyBot autonomous navigation platform (CPR E 288 at Iowa State), where he programmed a TI Tiva TM4C123 ARM Cortex-M4 microcontroller in bare-metal C using ISRs, PWM servo control, ADC distance sweeps, and UART telemetry.";
    }
    if (lower.includes('rangam') || lower.includes('print') || lower.includes('graphic') || lower.includes('firm') || lower.includes('netlify')) {
      return "Rangam Graphics is a commercial production website engineered for an established 33-year printing & packaging firm. It features digital & offset printing portfolios, packaging solutions, and custom WhatsApp inquiry routing. Live deployment: https://wondrous-druid-2535ff.netlify.app/";
    }
    if (lower.includes('nasa') || lower.includes('space') || lower.includes('orbit') || lower.includes('three.js') || lower.includes('webgl') || lower.includes('hackathon')) {
      return "For NASA SpaceApps, Nakshatra engineered an interactive 3D orbital simulation engine using Three.js and WebGL. It calculates real-time Keplerian orbital mechanics to render near-Earth asteroids and planetary bodies at a smooth 60 FPS in browser canvas.";
    }
    if (lower.includes('course') || lower.includes('class') || lower.includes('gpa')) {
      return "Core coursework includes: Advanced Software Development Practice (COMS 3090), Data Structures & Algorithms, Object-Oriented Programming, Operating Systems, Database Management Systems, Computer Architecture, and Embedded Systems (CPR E 288).";
    }
    if (lower.includes('skill') || lower.includes('language') || lower.includes('stack') || lower.includes('c ') || lower.includes('c,') || lower.includes('python') || lower.includes('java')) {
      return "Technical Languages & Frameworks: Java, Python, TypeScript/JavaScript, HTML/CSS, C, Android SDK, Spring Boot, MySQL, WebSockets, Three.js, React, Node.js, and Git/GitHub. Embedded tools: TI TM4C123 ARM Cortex-M4, UART, SPI, I2C, and Oscilloscopes.";
    }
    if (lower.includes('contact') || lower.includes('email') || lower.includes('phone') || lower.includes('reach')) {
      return "You can reach Nakshatra Gupta directly at ng1308@iastate.edu, via phone at +1 515-916-2251, or submit an inquiry using the Direct Dispatch form on the Contact page.";
    }
    return "Nakshatra Gupta is a 2+2 Transfer student from Nirma University (BS CSE) to Iowa State University (BS Computer Engineering) who knows principles of software engineering and has a strong hold over software development, full-stack Android & web development, and real-time systems. You can ask about his projects (Calmify, Rangam Graphics, NASA SpaceApps, CyBot) or contact him at ng1308@iastate.edu.";
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[#090a0c]/80 backdrop-blur-sm flex justify-end">
      <div className="w-full max-w-lg bg-[#121316] border-l border-[rgba(255,255,255,0.15)] flex flex-col h-full shadow-2xl">
        {/* Drawer Header */}
        <div className="p-4 bg-[#090a0c] border-b border-[rgba(255,255,255,0.12)] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#ff2a3b] animate-pulse"></span>
            <span className="font-mono text-xs text-[#ffffff] font-bold uppercase tracking-wider">
              QUICK Q&amp;A // PORTFOLIO FAQ
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-[#8d9099] hover:text-[#ffffff] focus:outline-none cursor-pointer"
          >
            <span className="material-symbols-outlined text-xl">close</span>
          </button>
        </div>

        {/* Quick Suggestion Chips */}
        <div className="p-3 bg-[#18191d] border-b border-[rgba(255,255,255,0.08)] flex gap-2 overflow-x-auto scrollbar-none text-[11px] font-mono">
          {quickPrompts.map((prompt, idx) => (
            <button
              key={idx}
              onClick={() => handleSend(prompt)}
              className="px-2.5 py-1 bg-[#090a0c] border border-[rgba(255,255,255,0.1)] text-[#8d9099] hover:text-[#ffffff] hover:border-[#ff2a3b] whitespace-nowrap transition-colors cursor-pointer"
            >
              {prompt}
            </button>
          ))}
        </div>

        {/* Messages Stream */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((m, i) => (
            <div
              key={i}
              className={`flex flex-col ${
                m.sender === 'user' ? 'items-end' : 'items-start'
              }`}
            >
              <div className="flex items-center gap-2 text-[10px] font-mono text-[#52545d] mb-1">
                <span>{m.sender === 'user' ? 'YOU' : 'PORTFOLIO FAQ'}</span>
                <span>•</span>
                <span>{m.time}</span>
              </div>
              <div
                className={`p-3 max-w-[85%] text-xs leading-relaxed ${
                  m.sender === 'user'
                    ? 'bg-[#ffffff] text-[#090a0c] font-medium'
                    : 'bg-[#090a0c] border border-[rgba(255,255,255,0.12)] text-[#e3e2e5] font-mono'
                }`}
              >
                {m.text}
              </div>
            </div>
          ))}

          {loading && (
            <div className="flex items-center gap-2 text-xs font-mono text-[#ff2a3b]">
              <span className="material-symbols-outlined text-sm animate-spin">sync</span>
              <span>Retrieving answer...</span>
            </div>
          )}
        </div>

        {/* Input Form */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSend();
          }}
          className="p-3 bg-[#090a0c] border-t border-[rgba(255,255,255,0.12)] flex items-center gap-2"
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask a question (skills, coursework, projects, or availability)..."
            className="flex-1 bg-[#121316] border border-[rgba(255,255,255,0.15)] px-3 py-2 text-xs text-[#ffffff] font-mono placeholder-[#52545d] focus:outline-none focus:border-[#ff2a3b]"
          />
          <button
            type="submit"
            disabled={loading}
            className="px-4 py-2 bg-[#ff2a3b] text-[#ffffff] font-mono text-xs uppercase font-bold hover:bg-[#ff4d5d] transition-colors disabled:opacity-50 flex items-center gap-1 cursor-pointer"
          >
            <span>SEND</span>
            <span className="material-symbols-outlined text-sm">send</span>
          </button>
        </form>
      </div>
    </div>
  );
};
