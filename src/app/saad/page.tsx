import Link from "next/link";

export default function SaadPage() {
  return (
    <div className="flex-1 max-w-5xl mx-auto px-6 py-16 w-full flex flex-col items-center">
      {/* Profile Card */}
      <div className="w-full max-w-2xl bg-zinc-900/60 border border-zinc-800 rounded-3xl p-8 md:p-10 backdrop-blur-xl shadow-2xl relative overflow-hidden">
        {/* Glow accent */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl -z-10 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-violet-500/10 rounded-full blur-3xl -z-10 pointer-events-none" />

        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left">
          <div className="w-24 h-24 rounded-2xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center text-4xl font-extrabold text-white shadow-xl shadow-indigo-500/25">
            S
          </div>

          <div className="flex-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 mb-3">
              Route: /saad
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              S. M. Amirul Islam Saad
            </h1>
            <p className="text-zinc-400 mt-2 text-base leading-relaxed">
              Software Engineer &amp; Full Stack Developer at HEXADEVS Team Workspace.
            </p>
          </div>
        </div>

        {/* Stats / Details */}
        <div className="mt-8 pt-8 border-t border-zinc-800 grid grid-cols-2 sm:grid-cols-3 gap-4">
          <div className="bg-zinc-950/50 p-4 rounded-xl border border-zinc-800/60">
            <span className="text-xs text-zinc-500 block uppercase font-mono">Role</span>
            <span className="text-sm font-semibold text-zinc-200 mt-1 block">Lead Developer</span>
          </div>
          <div className="bg-zinc-950/50 p-4 rounded-xl border border-zinc-800/60">
            <span className="text-xs text-zinc-500 block uppercase font-mono">Stack</span>
            <span className="text-sm font-semibold text-zinc-200 mt-1 block">Next.js &amp; React</span>
          </div>
          <div className="bg-zinc-950/50 p-4 rounded-xl border border-zinc-800/60 col-span-2 sm:col-span-1">
            <span className="text-xs text-zinc-500 block uppercase font-mono">Status</span>
            <span className="text-sm font-semibold text-emerald-400 mt-1 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Online
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Link
            href="/"
            className="px-5 py-2.5 rounded-xl bg-zinc-800 text-zinc-200 text-sm font-medium hover:bg-zinc-700 transition"
          >
            ← Back to Home
          </Link>
          <Link
            href="/login"
            className="px-5 py-2.5 rounded-xl bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-500 transition shadow-lg shadow-indigo-600/20"
          >
            Go to Login
          </Link>
        </div>
      </div>
    </div>
  );
}
