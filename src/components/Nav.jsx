import { useState, useEffect } from 'react';
import { DATA } from '../data/constants';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const links = ['About', 'Skills', 'Projects', 'Education', 'Achievements'];

  return (
    <nav className={`fixed top-0 inset-x-0 z-50 px-6 h-16 flex items-center justify-between transition-all duration-300 ${
      scrolled ? 'bg-[#080b10eb] backdrop-blur-[20px] border-b border-border' : 'bg-transparent border-b border-transparent'
    }`}>
      <span className="font-syne font-extrabold text-lg text-accent tracking-[-0.5px]">
        SK<span className="text-text3">.</span>
      </span>

      <div className="hidden sm:flex gap-8">
        {links.map(l => (
          <a key={l} href={`#${l.toLowerCase()}`} className="text-text2 text-[13px] font-medium tracking-[0.5px] hover:text-accent transition-colors">
            {l}
          </a>
        ))}
      </div>

      <a href={`mailto:${DATA.email}`} className="hidden sm:inline-flex py-[7px] px-[18px] rounded-lg border border-accent text-accent text-xs font-semibold tracking-[0.5px] hover:bg-accent hover:text-bg transition-all">
        Hire Me
      </a>

      <button onClick={() => setMenuOpen(!menuOpen)} className="sm:hidden text-text text-[22px]">
        ☰
      </button>

      {menuOpen && (
        <div className="absolute top-16 inset-x-0 bg-[#0d1117fa] backdrop-blur-[20px] border-b border-border py-4 flex flex-col sm:hidden">
          {links.map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setMenuOpen(false)} className="text-text2 px-6 py-3 text-[15px] font-medium border-b border-border hover:text-accent">
              {l}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}