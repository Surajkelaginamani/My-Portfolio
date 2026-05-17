import { DATA } from '../data/constants';

export default function Footer() {
  return (
    <footer className="border-t border-border py-7 px-6 text-center text-text3 text-[13px]">
      <span className="font-dm">Built by </span>
      <span className="text-accent font-syne font-bold">Suraj Kelaginamani</span>
      <span className="font-dm"> · {new Date().getFullYear()}</span>
      <div className="mt-2 flex justify-center gap-5">
        {Object.entries({ LinkedIn: DATA.links.linkedin, GitHub: DATA.links.github, HackerRank: DATA.links.hackerrank }).map(([k, v]) => (
          <a key={k} href={v} target="_blank" rel="noreferrer" className="text-text3 text-[12px] hover:text-accent transition-colors">
            {k}
          </a>
        ))}
      </div>
    </footer>
  );
}