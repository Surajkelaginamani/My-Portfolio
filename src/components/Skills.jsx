import { DATA } from '../data/constants';
import SectionHeader from './SectionHeader';

export default function Skills() {
  const groups = [
    { label: 'Technical', color: '#00d4ff', items: DATA.skills.technical },
    { label: 'Core', color: '#7b61ff', items: DATA.skills.core },
    { label: 'Tools', color: '#00ff9d', items: DATA.skills.tools },
    { label: 'Soft Skills', color: '#ff9f43', items: DATA.skills.soft },
    { label: 'Languages', color: '#fd79a8', items: DATA.skills.langs },
  ];
  
  return (
    <section id="skills" className="py-20 px-6 max-w-[1100px] mx-auto">
      <SectionHeader label="Skills" title="What I Work With" />
      <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-4 mt-10">
        {groups.map(g => (
          <div key={g.label} className="p-6 border border-border rounded-2xl bg-surface transition-colors duration-200" onMouseEnter={e => e.currentTarget.style.borderColor = g.color} onMouseLeave={e => e.currentTarget.style.borderColor = '#1f2d42'}>
            <div className="text-[11px] font-bold tracking-[1.5px] mb-3.5 uppercase font-dm" style={{ color: g.color }}>
              {g.label}
            </div>
            <div className="flex flex-wrap gap-2">
              {g.items.map(item => (
                <span key={item} className="px-3 py-1.5 rounded-md bg-surface2 text-text2 text-[13px] border border-border2">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}