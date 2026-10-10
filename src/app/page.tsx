import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-950 via-zinc-900 to-black text-white flex flex-col justify-between selection:bg-indigo-500 selection:text-white">
      {/* Navigation */}
      <header className="border-b border-zinc-800/80 backdrop-blur-md sticky top-0 z-50 bg-zinc-950/70">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-500 to-violet-400 flex items-center justify-center font-bold text-sm shadow-lg shadow-indigo-500/20">
              S
            </div>
            <span className="font-semibold text-zinc-100 tracking-tight text-lg">Saad&apos;s Workspace</span>
          </div>

          
        </div>
      </header>

      {/* Hero section */}
      <main className="flex-1 max-w-5xl mx-auto px-6 py-20 flex flex-col items-center justify-center text-center">
       

        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-400 max-w-3xl leading-tight">
          Hello! My name is <span className="bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-400 bg-clip-text text-transparent">Saad</span>
        </h1>
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-400 max-w-3xl leading-tight">
          Hello! My name is <span className="bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-400 bg-clip-text text-transparent">Shakil khan</span>
        </h1>

        
        {/* Feature Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 w-full text-left">
          <div className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 backdrop-blur hover:border-zinc-700 transition duration-300 group">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-4 group-hover:scale-110 transition-transform">
              🚀
            </div>
            <h3 className="font-semibold text-zinc-100 text-lg mb-2">App Router Ready</h3>
            <p className="text-sm text-zinc-400 leading-normal">
              Using the latest Next.js App Router inside <code className="text-xs bg-zinc-800 px-1.5 py-0.5 rounded text-zinc-300">src/app/</code>.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 backdrop-blur hover:border-zinc-700 transition duration-300 group">
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-4 group-hover:scale-110 transition-transform">
              ⚡
            </div>
            <h3 className="font-semibold text-zinc-100 text-lg mb-2">Lightning Fast</h3>
            <p className="text-sm text-zinc-400 leading-normal">
              Powered by Turbopack for instant page reloads and optimal build times.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 backdrop-blur hover:border-zinc-700 transition duration-300 group">
            <div className="w-10 h-10 rounded-xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center text-pink-400 mb-4 group-hover:scale-110 transition-transform">
              🎨
            </div>
            <h3 className="font-semibold text-zinc-100 text-lg mb-2">Tailwind CSS v4</h3>
            <p className="text-sm text-zinc-400 leading-normal">
              Modern styling engine configured and ready for rapid UI development.
            </p>
          </div>
        </div>

        {/* Quick actions */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://nextjs.org/docs"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full bg-white text-zinc-950 font-medium hover:bg-zinc-200 transition shadow-lg shadow-white/10 text-sm"
          >
            Next.js Docs →
          </a>
          <a
            href="https://nextjs.org/learn"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full bg-zinc-800/80 border border-zinc-700 text-zinc-200 font-medium hover:bg-zinc-700/80 transition text-sm"
          >
            Learn Next.js
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-800/80 py-6 text-center text-xs text-zinc-500">
        Created for Saad • Hexadevs Team Test Workspace
      </footer>
    </div>
  );
}
