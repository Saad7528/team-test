const technologies = [
  "Next.js",
  "React.js",
  "JavaScript",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "Express.js",
  "MongoDB",
];

const features = [
  {
    number: "01",
    icon: "⚡",
    title: "Frontend Development",
    description:
      "Building responsive, accessible, and user-friendly interfaces with React, Next.js, and Tailwind CSS.",
    color: "from-cyan-400 to-blue-500",
  },
  {
    number: "02",
    icon: "🛠️",
    title: "Full-Stack Projects",
    description:
      "Creating practical web applications with REST APIs, authentication, CRUD operations, and MongoDB.",
    color: "from-violet-400 to-purple-500",
  },
  {
    number: "03",
    icon: "🌱",
    title: "Always Learning",
    description:
      "Improving my problem-solving skills and exploring modern technologies to become a better developer.",
    color: "from-emerald-400 to-teal-500",
  },
];

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#080d1b] text-slate-100 selection:bg-cyan-400 selection:text-slate-950">
      {/* Background decorations */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/4 h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px]" />
        <div className="absolute right-0 top-1/3 h-96 w-96 rounded-full bg-blue-600/10 blur-[140px]" />
        <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-violet-600/10 blur-[120px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.035)_1px,transparent_1px)] bg-size-[48px_48px]" />
      </div>

      {/* Hero section */}
      <main className="relative mx-auto max-w-6xl px-6">
        <section className="flex min-h-162.5 flex-col items-center justify-center py-24 text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/[0.07] px-4 py-2 text-sm text-emerald-300">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            MERN Stack Developer Intern at WholCure
          </div>

          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Hello, World! 👋 I&apos;m
          </p>

          <h1 className="max-w-4xl text-5xl font-black leading-[1.12] tracking-tight sm:text-7xl lg:text-8xl">
            Diponkor
            <span className="mt-2 block bg-linear-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">
              Roy.
            </span>
          </h1>

          <h2 className="mt-8 text-xl font-semibold text-slate-200 sm:text-2xl">
            Frontend Developer
            <span className="text-cyan-400"> (MERN Stack)</span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
            I build modern, responsive web applications with clean UI,
            reusable components, and practical full-stack features.
            I love turning ideas into useful digital experiences.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://github.com/diponkorroy064-max"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-linear-to-r from-cyan-400 to-blue-500 px-7 py-3.5 font-bold text-slate-950 shadow-xl shadow-cyan-500/20 transition duration-300 hover:-translate-y-1 hover:shadow-cyan-400/30"
            >
              Explore My GitHub
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>

            <a
              href="https://diponkor-roy.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/15 bg-white/4 px-7 py-3.5 font-semibold text-slate-200 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/50 hover:bg-white/8"
            >
              Visit My Portfolio ↗
            </a>
          </div>

          {/* Technologies */}
          <div className="mt-16 w-full max-w-3xl">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
              Technologies I Work With
            </p>

            <div className="flex flex-wrap justify-center gap-3">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-xl border border-white/9 bg-white/[0.035] px-4 py-2.5 text-sm font-medium text-slate-300 transition duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/8 hover:text-cyan-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Feature cards */}
        <section className="pb-24 pt-8">
          <div className="mb-12 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
              What I Do
            </p>

            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Turning Ideas Into{" "}
              <span className="text-slate-400">Reality.</span>
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-slate-400">
              Focused on writing better code, building better products,
              and growing every day.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {features.map((feature) => (
              <article
                key={feature.number}
                className="group relative overflow-hidden rounded-2xl border border-white/9 bg-[#101729]/80 p-7 transition duration-300 hover:-translate-y-2 hover:border-cyan-400/30 hover:bg-[#131e33]"
              >
                <div
                  className={`absolute inset - x - 0 top - 0 h - px bg - gradient - to - r ${ feature.color } opacity - 40 transition - opacity group - hover: opacity - 100`}
                />

                <div className="mb-7 flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/4 text-2xl transition-transform duration-300 group-hover:scale-110">
                    {feature.icon}
                  </div>

                  <span className="font-mono text-sm text-slate-600">
                    / {feature.number}
                  </span>
                </div>

                <h3 className="mb-3 text-xl font-bold text-white">
                  {feature.title}
                </h3>

                <p className="text-sm leading-7 text-slate-400">
                  {feature.description}
                </p>

                <div
                  className={`mt - 6 h - 1 w - 12 rounded - full bg - gradient - to - r ${ feature.color } transition - all duration - 300 group - hover: w - 20`}
                />
              </article>
            ))}
          </div>
        </section>

        {/* Contact section */}
        <section className="mb-20 rounded-3xl border border-cyan-400/15 bg-linear-to-br from-cyan-400/8 via-blue-500/4 to-violet-500/8 px-6 py-12 text-center sm:px-12">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Have a project in mind?
          </p>

          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
            Let&apos;s build something great.
          </h2>

          <p className="mx-auto mt-4 max-w-xl leading-7 text-slate-400">
            I&apos;m always excited to connect, learn, collaborate,
            and explore new opportunities in web development.
          </p>

          <a
            href="https://www.linkedin.com/in/diponkorroy21010504"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex rounded-full bg-white px-7 py-3.5 font-bold text-slate-950 transition hover:bg-cyan-300"
          >
            Connect on My LinkedIn ↗
          </a>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative border-t border-white/8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-7 text-center sm:flex-row sm:text-left">
          <p className="text-sm text-slate-500">
            © Diponkor Roy. All rights reserved.
          </p>

          <p className="text-sm text-slate-500">
            Designed with <span className="text-cyan-400">♥</span> and React
          </p>
        </div>
      </footer>
    </div>
  );
}
