"use client";

import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1000);
  };

  return (
    <div className="flex-1 flex items-center justify-center px-4 py-16 w-full">
      <div className="w-full max-w-md bg-zinc-900/70 border border-zinc-800 rounded-3xl p-8 sm:p-10 backdrop-blur-2xl shadow-2xl relative overflow-hidden">
        {/* Ambient background glow */}
        <div className="absolute -top-20 -left-20 w-44 h-44 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -right-20 w-44 h-44 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />

        {/* Header */}
        <div className="text-center mb-8 relative">
          <div className="inline-flex w-12 h-12 rounded-2xl bg-gradient-to-tr from-indigo-500 to-violet-500 items-center justify-center text-white font-bold text-xl mb-4 shadow-lg shadow-indigo-500/25">
            🔐
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Welcome Back
          </h1>
          <p className="text-sm text-zinc-400 mt-2">
            Please enter your credentials to sign in
          </p>
        </div>

        {submitted ? (
          <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-center">
            <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-3 text-2xl">
              ✓
            </div>
            <h3 className="font-semibold text-emerald-400 text-lg">Login Successful</h3>
            <p className="text-xs text-zinc-300 mt-1">
              Logged in as <span className="font-mono text-emerald-300">{email}</span>
            </p>
            <div className="mt-5 flex gap-2 justify-center">
              <Link
                href="/saad"
                className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-medium transition"
              >
                Go to Saad Profile
              </Link>
              <button
                onClick={() => setSubmitted(false)}
                className="px-4 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-xs font-medium transition"
              >
                Log out
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-xs font-medium text-zinc-300 mb-1.5 uppercase tracking-wider"
              >
                Email Address
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="saad@example.com"
                className="w-full px-4 py-3 rounded-xl bg-zinc-950/60 border border-zinc-800 text-white placeholder-zinc-500 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition"
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label
                  htmlFor="password"
                  className="block text-xs font-medium text-zinc-300 uppercase tracking-wider"
                >
                  Password
                </label>
                <a
                  href="#"
                  className="text-xs text-indigo-400 hover:text-indigo-300 transition"
                >
                  Forgot password?
                </a>
              </div>
              <input
                id="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-4 py-3 rounded-xl bg-zinc-950/60 border border-zinc-800 text-white placeholder-zinc-500 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition"
              />
            </div>

            <div className="flex items-center">
              <input
                id="remember"
                type="checkbox"
                className="w-4 h-4 rounded bg-zinc-950 border-zinc-800 text-indigo-600 focus:ring-indigo-500/40"
              />
              <label htmlFor="remember" className="ml-2 text-xs text-zinc-400">
                Remember me for 30 days
              </label>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full mt-2 py-3 px-4 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-600 hover:from-indigo-600 hover:to-violet-700 text-white font-medium text-sm transition-all duration-200 shadow-lg shadow-indigo-500/25 active:scale-[0.98] disabled:opacity-50 flex items-center justify-center gap-2 cursor-pointer"
            >
              {isSubmitting ? (
                <>
                  <span className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                  Signing in...
                </>
              ) : (
                "Sign In"
              )}
            </button>
          </form>
        )}

        {/* Social / Divider */}
        <div className="mt-6 pt-6 border-t border-zinc-800/80 text-center">
          <p className="text-xs text-zinc-500">
            Don&apos;t have an account?{" "}
            <Link href="/saad" className="text-indigo-400 hover:underline">
              Join Saad&apos;s team
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
