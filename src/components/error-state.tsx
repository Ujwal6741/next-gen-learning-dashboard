"use client";

export function ErrorState({ message }: { message: string }) {
  return (
    <article className="rounded-[2rem] border border-rose-500/20 bg-rose-500/10 p-6 text-rose-100">
      <h2 className="text-lg font-semibold">Could not load courses</h2>
      <p className="mt-2 text-sm text-rose-100/80">{message}</p>
      <p className="mt-4 text-sm text-rose-100/70">
        Check your Supabase env vars, table name, and Row Level Security policy.
      </p>
    </article>
  );
}
