export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-slate-400 md:flex-row">
        <p>© 2026 Kalvin Al Ma&apos;ruf. All rights reserved.</p>

        <p>
          Built with <span className="text-cyan-400">Next.js</span> and{" "}
          <span className="text-cyan-400">Tailwind CSS</span>
        </p>
      </div>
    </footer>
  );
}