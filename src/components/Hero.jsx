import { useState, useEffect } from 'react';
import { DATA } from '../data/constants';

export default function Hero() {
  const [typed, setTyped] = useState('');
  const roles = ["Full-Stack Developer", "MERN Stack Engineer", "AI Integration"];
  const [ri, setRi] = useState(0);
  const [phase, setPhase] = useState('typing');

  useEffect(() => {
    let timeout;
    const current = roles[ri];
    if (phase === 'typing') {
      if (typed.length < current.length) {
        timeout = setTimeout(() => setTyped(current.slice(0, typed.length + 1)), 60);
      } else {
        timeout = setTimeout(() => setPhase('deleting'), 1800);
      }
    } else {
      if (typed.length > 0) {
        timeout = setTimeout(() => setTyped(typed.slice(0, -1)), 35);
      } else {
        setRi((ri + 1) % roles.length);
        setPhase('typing');
      }
    }
    return () => clearTimeout(timeout);
  }, [typed, phase, ri]);

  return (
    <section id="about" className="min-h-screen flex items-center pt-20 px-6 pb-[60px] max-w-[1100px] mx-auto">
      <div className="w-full animate-fadeUp opacity-0" style={{ animationFillMode: 'forwards' }}>
        <div className="inline-flex items-center gap-2 px-[14px] py-[5px] border border-border2 rounded-full mb-7 bg-[rgba(0,212,255,0.05)]">
          <span className="w-1.5 h-1.5 rounded-full bg-green animate-pulseAlpha" />
          <span className="text-xs text-text2 font-dm tracking-[0.5px]">Available for internship</span>
        </div>
        
        <h1 className="font-syne font-extrabold text-[clamp(36px,6vw,80px)] leading-[1.08] tracking-[-2px] mb-4">
          Suraj<br />
          <span className="text-accent">Kelaginamani</span>
        </h1>
        
        <div className="font-dm text-[clamp(13px,2vw,18px)] text-text2 mb-6 min-h-[28px]">
          <span className="text-green">&gt; </span>
          {typed}
          <span className="text-accent animate-[typing_1s_step-end_infinite]">|</span>
        </div>
        
        <p className="text-[clamp(14px,1.5vw,17px)] text-text2 max-w-[600px] leading-[1.7] mb-9">
          {DATA.objective}
        </p>
        
        <div className="flex gap-3 flex-wrap mb-12">
          <a href={`mailto:${DATA.email}`} className="inline-flex items-center gap-2 py-[11px] px-6 rounded-lg bg-accent text-bg font-bold text-sm hover:-translate-y-0.5 transition-transform">
            ✉ Get In Touch
          </a>
          <a href={DATA.links.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 py-[11px] px-6 rounded-lg border border-border2 text-text font-semibold text-sm hover:border-accent hover:text-accent transition-colors">
            ⌥ GitHub
          </a>
          <a href={DATA.links.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 py-[11px] px-6 rounded-lg border border-border2 text-text font-semibold text-sm hover:border-accent3 hover:text-accent3 transition-colors">
            ⊞ LinkedIn
          </a>
        </div>

        <div className="flex gap-8 flex-wrap">
          {[['8.9', 'CGPA'], ['3+', 'Projects'], ['DIPEX 2026', 'Exhibition']].map(([n, l]) => (
            <div key={l} className="text-center">
              <div className="font-syne font-extrabold text-[clamp(20px,3vw,28px)] text-accent">{n}</div>
              <div className="text-[11px] text-text3 tracking-[1px] uppercase mt-0.5">{l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}