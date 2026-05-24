export function HeroSkeleton() {
  return (
    <div className="animate-pulse rounded-[2rem] border border-white/8 bg-white/[0.03] p-6">
      <div className="h-4 w-40 rounded-full bg-white/10" />
      <div className="mt-4 h-10 w-3/5 rounded-2xl bg-white/10" />
      <div className="mt-3 h-4 w-4/5 rounded-full bg-white/10" />
      <div className="mt-10 flex gap-3">
        <div className="h-16 w-36 rounded-2xl bg-white/10" />
        <div className="h-16 w-36 rounded-2xl bg-white/10" />
      </div>
    </div>
  );
}

export function CardSkeleton() {
  return (
    <div className="animate-pulse rounded-[2rem] border border-white/8 bg-white/[0.03] p-5">
      <div className="flex items-center justify-between">
        <div className="h-11 w-11 rounded-2xl bg-white/10" />
        <div className="h-6 w-14 rounded-full bg-white/10" />
      </div>
      <div className="mt-4 h-5 w-3/4 rounded-full bg-white/10" />
      <div className="mt-7 h-2 rounded-full bg-white/10" />
    </div>
  );
}
