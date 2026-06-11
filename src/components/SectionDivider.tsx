type SectionDividerProps = {
  label?: string;
};

export default function SectionDivider({ label = "Next Section" }: SectionDividerProps) {
  return (
    <div className="relative px-6">
      <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" />
      <div className="absolute left-1/2 top-1/2 h-24 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/10 blur-3xl" />

      <div className="relative mx-auto flex max-w-6xl justify-center">
        <span className="rounded-full border border-cyan-400/30 bg-slate-950 px-5 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300 shadow-lg shadow-cyan-950/30">
          {label}
        </span>
      </div>
    </div>
  );
}