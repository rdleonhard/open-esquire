export default function Eyebrow({ children, className = "", dark = false }) {
  return (
    <p
      className={[
        "font-mono text-[11px] font-medium uppercase tracking-[0.24em]",
        dark ? "text-gold-300/85" : "text-slate-500",
        className,
      ].join(" ")}
    >
      {children}
    </p>
  );
}
