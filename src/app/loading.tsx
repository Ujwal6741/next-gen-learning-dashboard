import { HeroSkeleton, CardSkeleton } from "@/components/skeletons";

export default function Loading() {
  return (
    <div className="min-h-screen px-4 py-4 md:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-4 lg:grid-cols-[280px_minmax(0,1fr)]">
        <aside className="hidden rounded-[2rem] border border-white/8 bg-white/[0.03] p-4 lg:block" />
        <main className="space-y-4">
          <HeroSkeleton />
          <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
          </section>
        </main>
      </div>
    </div>
  );
}
