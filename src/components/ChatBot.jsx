import { useState, useEffect, useRef } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { SYSTEM_PROMPT } from '../data/constants';
import ReactMarkdown from 'react-markdown';
export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'assistant', content: "Hey! 👋 I'm Suraj's AI assistant. Ask me anything about him — his skills, projects, background, or how to get in touch!" }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (open && inputRef.current) setTimeout(() => inputRef.current.focus(), 200);
  }, [open]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  const send = async (presetText = null) => {
    const text = presetText || input.trim();
    if (!text || loading) return;
    
    const newMsgs = [...messages, { role: 'user', content: text }];
    setMessages(newMsgs);
    if (!presetText) setInput('');
    setLoading(true);
    
    try {
      const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);
      
      const model = genAI.getGenerativeModel({
        model: "gemini-2.5-flash",
        systemInstruction: SYSTEM_PROMPT,
      });

      const history = messages.slice(1).map(m => ({
        role: m.role === 'assistant' ? 'model' : 'user',
        parts: [{ text: m.content }]
      }));

      const chat = model.startChat({ history });
      const result = await chat.sendMessage(text);
      const reply = result.response.text();

      setMessages(prev => [...prev, { role: 'assistant', content: reply }]);
    } catch (e) {
      console.error("Gemini API Error:", e);
      setMessages(prev => [...prev, { role: 'assistant', content: "Oops, I couldn't connect to my brain. Make sure your API key is valid!" }]);
    }
    
    setLoading(false);
  };

  const quickQs = ["What projects has Suraj built?", "What are his skills?", "How to contact Suraj?", "What is his education?"];

  return (
    <>
      <button onClick={() => setOpen(!open)} className={`fixed bottom-6 right-6 z-[1000] w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 ${
        open ? 'bg-surface2 border border-border2 text-text2' : 'bg-gradient-to-br from-accent to-accent3 text-white animate-borderGlow'
      }`}>
        {open ? (
          /* Close (X) Icon */
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        ) : (
          /* Chat Bubble Icon */
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
        )}
      </button>

      {!open && (
        <div className="fixed bottom-6 right-6 z-[999] w-14 h-14 rounded-full border border-[rgba(0,212,255,0.3)] animate-borderGlow pointer-events-none" />
      )}

      {open && (
        <div className="fixed bottom-[92px] right-6 z-[999] w-[min(380px,calc(100vw-32px))] h-[min(520px,calc(100vh-120px))] rounded-[20px] bg-bg2 border border-border2 shadow-[0_24px_80px_rgba(0,0,0,0.6),0_0_0_1px_rgba(0,212,255,0.05)] flex flex-col overflow-hidden animate-popIn">
          
          <div className="p-4 px-5 border-b border-border bg-surface flex items-center gap-3">
           <div className="w-9 h-9 rounded-full bg-gradient-to-br from-accent to-accent3 flex items-center justify-center text-white flex-shrink-0 shadow-[0_0_10px_rgba(0,212,255,0.3)]">
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
</div>
            <div className="flex-1">
              <div className="font-syne font-bold text-[14px]">Ask about Suraj</div>
              <div className="flex items-center gap-1.5 mt-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-green animate-pulseAlpha" />
                <span className="text-[11px] text-text3 font-dm">AI Assistant · Online</span>
              </div>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3">
          {messages.map((m, i) => (
              <div key={i} className={`flex animate-slideIn ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] px-4 py-3 text-[13.5px] leading-[1.6] ${
                  m.role === 'user' 
                    ? 'rounded-[14px_14px_4px_14px] bg-gradient-to-br from-accent to-accent2 text-bg font-medium' 
                    : 'rounded-[14px_14px_14px_4px] bg-surface text-text border border-border'
                }`}>
                  {m.role === 'user' ? (
                    m.content
                  ) : (
                    <ReactMarkdown
                      components={{
                        p: ({node, ...props}) => <p className="mb-3 last:mb-0" {...props} />,
                        ul: ({node, ...props}) => <ul className="list-none pl-1 mb-3 space-y-1.5" {...props} />,
                        li: ({node, ...props}) => (
                          <li className="flex items-start gap-2" {...props}>
                            <span className="text-accent mt-0.5 text-[10px]">✦</span>
                            <span className="flex-1">{props.children}</span>
                          </li>
                        ),
                        strong: ({node, ...props}) => <strong className="font-bold text-accent" {...props} />,
                        a: ({node, ...props}) => <a className="text-accent underline decoration-accent/30 hover:decoration-accent underline-offset-2 transition-colors" target="_blank" rel="noreferrer" {...props} />
                      }}
                    >
                      {m.content}
                    </ReactMarkdown>
                  )}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="px-4 py-3 rounded-[14px_14px_14px_4px] bg-surface border border-border flex gap-1 items-center">
                  {[0, 1, 2].map(j => (
                    <span key={j} className="w-1.5 h-1.5 rounded-full bg-accent animate-pulseAlpha" style={{ animationDelay: `${j * 0.2}s` }} />
                  ))}
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {messages.length === 1 && (
            <div className="px-4 pb-2 flex flex-wrap gap-1.5">
              {quickQs.map(q => (
                <button key={q} 
                  onClick={() => send(q)} 
                  className="px-2.5 py-[5px] rounded-full border border-border2 bg-surface text-text2 text-[11px] cursor-pointer font-outfit hover:border-accent hover:text-accent transition-colors">
                  {q}
                </button>
              ))}
            </div>
          )}

          <div className="p-3 px-4 border-t border-border bg-surface flex gap-2 items-center">
            <input
              ref={inputRef}
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && send()}
              placeholder="Ask about Suraj..."
              className="flex-1 bg-bg2 border border-border2 rounded-[10px] px-3.5 py-2 text-text text-[13px] outline-none font-outfit focus:border-accent transition-colors"
            />
            <button onClick={() => send()} disabled={loading || !input.trim()} className={`w-9 h-9 rounded-[10px] flex items-center justify-center text-base flex-shrink-0 transition-colors ${
              loading || !input.trim() ? 'bg-border text-text3 cursor-not-allowed' : 'bg-accent text-bg cursor-pointer'
            }`}>
              ↑
            </button>
          </div>

        </div>
      )}
    </>
  );
}