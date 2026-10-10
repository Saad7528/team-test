import Link from "next/link";

export default function Home() {
  return (
    <div className="flex-1 flex flex-col justify-between selection:bg-indigo-500 selection:text-white">
      {/* Hero section */}
      <main className="flex-1 max-w-5xl mx-auto px-6 py-20 flex flex-col items-center justify-center text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium bg-zinc-800/80 border border-zinc-700/60 text-zinc-300 mb-8 backdrop-blur shadow-sm">
          <span className="text-indigo-400">⚡</span>
          <span>Hexadevs Team Test Project</span>
        </div>

        <div className="space-y-4">
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-400 leading-tight">
            Hello! My name is <span className="bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-400 bg-clip-text text-transparent">Saad</span>
          </h1>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-zinc-400">
            Team Members: <span className="text-zinc-200">Pinon</span> &amp; <span className="text-zinc-200">Shakil Khan</span>
          </h2>
        </div>

        {/* Feature Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 w-full text-left">
          <Link
            href="/saad"
            className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 backdrop-blur hover:border-indigo-500/50 hover:bg-zinc-900/90 transition duration-300 group block"
          >
            <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-4 group-hover:scale-110 transition-transform">
              👤
            </div>
            <h3 className="font-semibold text-zinc-100 text-lg mb-2 flex items-center justify-between">
              Saad&apos;s Route
              <span className="text-xs text-indigo-400 group-hover:translate-x-0.5 transition-transform">→</span>
            </h3>
            <p className="text-sm text-zinc-400 leading-normal">
              Visit the newly created <code className="text-xs bg-zinc-800 px-1.5 py-0.5 rounded text-zinc-300">/saad</code> route.
            </p>
          </Link>

          <Link
            href="/login"
            className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 backdrop-blur hover:border-purple-500/50 hover:bg-zinc-900/90 transition duration-300 group block"
          >
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-4 group-hover:scale-110 transition-transform">
              🔐
            </div>
            <h3 className="font-semibold text-zinc-100 text-lg mb-2 flex items-center justify-between">
              Login Page
              <span className="text-xs text-purple-400 group-hover:translate-x-0.5 transition-transform">→</span>
            </h3>
            <p className="text-sm text-zinc-400 leading-normal">
              Modern authentication page with validation and state management.
            </p>
          </Link>

          <div className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 backdrop-blur hover:border-zinc-700 transition duration-300 group">
            <div className="w-10 h-10 rounded-xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center text-pink-400 mb-4 group-hover:scale-110 transition-transform">
              ⚡
            </div>
            <h3 className="font-semibold text-zinc-100 text-lg mb-2">Fast &amp; Modern</h3>
            <p className="text-sm text-zinc-400 leading-normal">
              Powered by Next.js 16, React 19, and Tailwind CSS.
            </p>
          </div>
        </div>

        {/* Quick actions */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/saad"
            className="px-6 py-3 rounded-full bg-indigo-600 text-white font-medium hover:bg-indigo-500 transition shadow-lg shadow-indigo-600/20 text-sm"
          >
            View Saad Profile
          </Link>
          <Link
            href="/login"
            className="px-6 py-3 rounded-full bg-white text-zinc-950 font-medium hover:bg-zinc-200 transition shadow-lg shadow-white/10 text-sm"
          >
            Sign In / Login
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-800/80 py-6 text-center text-xs text-zinc-500">
        Created for Saad • Hexadevs Team Test Workspace
      </footer>
    </div>
  );
}
