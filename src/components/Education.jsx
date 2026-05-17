import { DATA } from '../data/constants';
import SectionHeader from './SectionHeader';

export default function Education() {
  return (
    <section id="education" className="py-20 px-6 max-w-[1100px] mx-auto">
      <SectionHeader label="Education" title="Academic Journey" />
      <div className="mt-10 flex flex-col">
        {DATA.education.map((e, i) => (
          <div key={i} className="flex">
            <div className="flex flex-col items-center mr-6 flex-shrink-0">
              <div className="w-3 h-3 rounded-full border-2 border-accent bg-bg mt-1.5 shadow-[0_0_12px_var(--accent)]" />
              {i < DATA.education.length - 1 && <div className="w-px flex-1 bg-border my-1" />}
            </div>
            <div className="pb-9 flex-1">
              <div className="p-5 border border-border rounded-2xl bg-surface hover:border-accent transition-colors duration-200">
                <div className="flex justify-between items-start flex-wrap gap-2">
                  <div>
                    <h3 className="font-syne font-bold text-base mb-1">{e.inst}</h3>
                    <p className="text-text2 text-sm">{e.deg}</p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <div className="text-accent font-dm text-[13px] font-medium">{e.score}</div>
                    <div className="text-text3 text-xs mt-0.5">{e.period}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}