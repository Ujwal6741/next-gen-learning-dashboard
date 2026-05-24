export function ActivityTile() {
  const bars = [38, 65, 22, 70, 85, 46, 30, 58, 76, 34, 80, 52, 28, 63, 88, 54, 36, 72, 49, 60, 42, 78, 56, 33, 67, 82, 48, 31];

  return (
    <article className="overflow-hidden rounded-[2rem] border border-white/8 bg-white/[0.04] p-6 shadow-glow">
      <p className="text-sm text-white/50">Activity</p>
      <h2 className="mt-2 text-xl font-semibold text-white">Consistency over time</h2>
      <div className="mt-5 flex h-44 items-end gap-2">
        {bars.map((value, idx) => (
          <div key={idx} className="flex-1">
            <div
              className="w-full rounded-t-full bg-gradient-to-t from-cyan-400/25 to-indigo-400/85"
              style={{ height: `${value}%` }}
            />
          </div>
        ))}
      </div>
      <div className="mt-4 flex items-center justify-between text-xs text-white/45">
        <span>Last 4 weeks</span>
        <span>92% completion</span>
      </div>
    </article>
  );
}
