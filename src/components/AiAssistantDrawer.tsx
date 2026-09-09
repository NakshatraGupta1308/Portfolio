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
      text: "Hello. I am the verified AI Assistant for Nakshatra Gupta's systems portfolio. Ask me anything about his B.S. Computer Engineering coursework at Iowa State, embedded C experience on the Tiva TM4C123, project implementations (Calmify, CyBot, Rangam Graphics, NASA SpaceApps), or his availability for Fall 2026 internships and co-ops.",
      time: 'SYSTEM READY'
    }
  ]);

  const quickPrompts = [
    "What is Nakshatra's availability for Fall 2026?",
    "Tell me about the Calmify Android project",
    "What microcontrollers has Nakshatra programmed?",
    "What is his academic background at Iowa State?"
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
      const data = await res.json();
      
      const assistantMsg: Message = {
        sender: 'assistant',
        text: data.reply || "Nakshatra Gupta is actively seeking Fall 2026 Computer Engineering positions. Direct inquiry: ng1308@iastate.edu.",
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages((prev) => [...prev, assistantMsg]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          sender: 'assistant',
          text: "Connection to the backend assistant node encountered a transient timeout. You can email Nakshatra directly at ng1308@iastate.edu.",
          time: 'ERR'
        }
      ]);
    } finally {
      setLoading(false);
    }
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
              DOSSIER AI ASSISTANT // CPR E '27
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-[#8d9099] hover:text-[#ffffff] focus:outline-none"
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
              className="px-2.5 py-1 bg-[#090a0c] border border-[rgba(255,255,255,0.1)] text-[#8d9099] hover:text-[#ffffff] hover:border-[#ff2a3b] whitespace-nowrap transition-colors"
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
                <span>{m.sender === 'user' ? 'RECRUITER / VISITOR' : 'SYSTEM AI NODE'}</span>
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
              <span>Querying verified systems dossier...</span>
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
            placeholder="Ask about skills, coursework, projects, or availability..."
            className="flex-1 bg-[#121316] border border-[rgba(255,255,255,0.15)] px-3 py-2 text-xs text-[#ffffff] font-mono placeholder-[#52545d] focus:outline-none focus:border-[#ff2a3b]"
          />
          <button
            type="submit"
            disabled={loading}
            className="px-4 py-2 bg-[#ff2a3b] text-[#ffffff] font-mono text-xs uppercase font-bold hover:bg-[#ff4d5d] transition-colors disabled:opacity-50 flex items-center gap-1"
          >
            <span>SEND</span>
            <span className="material-symbols-outlined text-sm">send</span>
          </button>
        </form>
      </div>
    </div>
  );
};
