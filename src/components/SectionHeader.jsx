export default function SectionHeader({ label, title }) {
  return (
    <div>
      <div className="font-dm text-[11px] text-accent tracking-[2px] uppercase mb-2">// {label}</div>
      <h2 className="font-syne font-extrabold text-[clamp(24px,4vw,40px)] tracking-[-1px]">{title}</h2>
    </div>
  );
}