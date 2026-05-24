import { Flame, Clock3 } from "lucide-react";

export function HeroTile({ name }: { name: string }) {
  return (
    <article className="relative overflow-hidden rounded-[2rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] p-6 shadow-glow">
      <div className="pointer-events-none absolute inset-0 bg-mesh-dark opacity-80" />
      <div className="relative flex h-full min-h-[220px] flex-col justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.28em] text-white/45">Welcome back</p>
          <h1 className="mt-3 max-w-xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Welcome back, {name}
          </h1>
          <p className="mt-3 max-w-lg text-sm leading-6 text-white/60">
            Your learning space is synced, focused, and ready for a high-energy session.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-2 rounded-2xl border border-white/8 bg-white/5 px-4 py-3">
            <Flame className="h-4 w-4 text-orange-300" />
            <div>
              <p className="text-xs text-white/45">Streak</p>
              <p className="text-sm font-medium text-white">12 days</p>
            </div>
          </div>
          <div className="flex items-center gap-2 rounded-2xl border border-white/8 bg-white/5 px-4 py-3">
            <Clock3 className="h-4 w-4 text-cyan-300" />
            <div>
              <p className="text-xs text-white/45">Study window</p>
              <p className="text-sm font-medium text-white">45 min today</p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
