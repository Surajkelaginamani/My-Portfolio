import { DATA } from '../data/constants';
import SectionHeader from './SectionHeader';

export default function Achievements() {
  return (
    <section id="achievements" className="pt-20 px-6 pb-[120px] max-w-[1100px] mx-auto">
      <SectionHeader label="Achievements" title="Milestones" />
      <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-4 mt-10">
        {DATA.achievements.map((a, i) => {
          const colors = ['#00d4ff', '#7b61ff', '#00ff9d'];
          const c = colors[i % 3];
          return (
            <div key={i} className="p-6 border border-border rounded-2xl bg-surface transition-all duration-200 hover:-translate-y-1" onMouseEnter={e => e.currentTarget.style.borderColor = c} onMouseLeave={e => e.currentTarget.style.borderColor = '#1f2d42'}>
              <div className="inline-flex px-3 py-1 rounded-full text-[11px] font-bold tracking-[1px] uppercase mb-3 font-dm" style={{ background: `${c}15`, color: c, border: `1px solid ${c}30` }}>
                🏆 {a.title}
              </div>
              <p className="text-text2 text-sm leading-[1.6]">{a.desc}</p>
            </div>
          );
        })}
        
        <div className="p-6 border border-border rounded-2xl bg-surface hover:border-[#ff9f43] hover:-translate-y-1 transition-all duration-200">
          <div className="inline-flex px-3 py-1 rounded-full text-[11px] font-bold tracking-[1px] uppercase mb-3 font-dm bg-[rgba(255,159,67,0.1)] text-[#ff9f43] border border-[rgba(255,159,67,0.3)]">
            📜 Certifications
          </div>
          <ul className="pl-0 m-0">
            {DATA.certifications.map((c, i) => (
              <li key={i} className={`flex gap-2 text-text2 text-[13px] py-1 ${i < DATA.certifications.length - 1 ? 'border-b border-border' : ''}`}>
                <span className="text-[#ff9f43]">◆</span>{c}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}