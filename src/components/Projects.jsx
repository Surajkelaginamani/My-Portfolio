import { useState } from 'react';
import { DATA } from '../data/constants';
import SectionHeader from './SectionHeader';

function ProjectCard({ p, i }) {
  const [open, setOpen] = useState(false);
  const colors = ['#00d4ff', '#7b61ff', '#00ff9d'];
  const c = colors[i % 3];

  return (
    <div 
      className="border border-border rounded-[18px] bg-surface overflow-hidden transition-all duration-200"
      onMouseEnter={e => { e.currentTarget.style.borderColor = c; e.currentTarget.style.boxShadow = '0 0 30px rgba(0,0,0,0.5)'; }}
      onMouseLeave={e => { e.currentTarget.style.borderColor = '#1f2d42'; e.currentTarget.style.boxShadow = 'none'; }}
    >
      <div className="p-6 sm:px-7 cursor-pointer flex justify-between items-start gap-4" onClick={() => setOpen(!open)}>
        <div className="flex-1">
          <div className="flex items-center gap-2.5 mb-2 flex-wrap">
            <span className="text-[10px] px-2.5 py-[3px] rounded-full font-dm tracking-[0.5px]" style={{ background: `${c}15`, color: c, border: `1px solid ${c}40` }}>
              {p.sub}
            </span>
          </div>
          <h3 className="font-syne font-bold text-[clamp(16px,2vw,20px)] mb-2.5">{p.name}</h3>
          <div className="flex flex-wrap gap-1.5">
            {p.stack.map(s => (
              <span key={s} className="text-[11px] px-[9px] py-[3px] rounded bg-bg2 text-text3 border border-border font-dm">
                {s}
              </span>
            ))}
          </div>
        </div>
        
        <div className="flex gap-2 items-center flex-shrink-0">
          {p.live && (
            <a href={p.live} target="_blank" rel="noreferrer" onClick={e => e.stopPropagation()} 
               className="px-3.5 py-1.5 rounded-md text-[12px] font-semibold no-underline transition-all" 
               style={{ border: `1px solid ${c}`, color: c }}
               onMouseEnter={e => { e.target.style.background = c; e.target.style.color = '#080b10'; }}
               onMouseLeave={e => { e.target.style.background = 'transparent'; e.target.style.color = c; }}>
              Live ↗
            </a>
          )}
          {p.github && (
            <a href={p.github} target="_blank" rel="noreferrer" onClick={e => e.stopPropagation()} 
               className="px-3.5 py-1.5 rounded-md border border-border2 text-text2 text-[12px] font-semibold no-underline hover:border-text hover:text-text transition-all">
              Code
            </a>
          )}
          <span className={`text-text3 text-lg transition-transform duration-300 ${open ? 'rotate-180' : ''}`}>⌄</span>
        </div>
      </div>

      {open && (
        <div className="px-7 pb-6 animate-fadeUp">
          <div className="w-full h-px bg-border mb-4" />
          <ul className="pl-0 flex flex-col gap-2 m-0">
            {p.points.map((pt, j) => (
              <li key={j} className="flex gap-2.5 text-text2 text-[14px] leading-[1.6]">
                <span className="flex-shrink-0 mt-0.5" style={{ color: c }}>◆</span>
                {pt}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 max-w-[1100px] mx-auto">
      <SectionHeader label="Projects" title="Things I've Built" />
      <div className="flex flex-col gap-5 mt-10">
        {DATA.projects.map((p, i) => (
          <ProjectCard key={i} p={p} i={i} />
        ))}
      </div>
    </section>
  );
}