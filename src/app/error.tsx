"use client";

import { ErrorState } from "@/components/error-state";

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <div className="min-h-screen px-4 py-4 md:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <ErrorState message={error.message} />
        <button
          onClick={reset}
          className="mt-4 rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
