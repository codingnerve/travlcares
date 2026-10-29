"use client";

import { CallButton } from "@/components/ui/CallButton";

export default function ErrorPage({ reset }: { error: Error; reset: () => void }) {
  return (
    <section className="section-y bg-white">
      <div className="container-page max-w-2xl">
        <p className="eyebrow">Something went wrong</p>
        <h1 className="h-section mt-3">We hit a snag loading this page.</h1>
        <p className="mt-5 text-lg text-muted">
          Please try again. If the problem continues, you can reach an agent by
          phone.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <button
            type="button"
            onClick={reset}
            className="inline-flex min-h-14 items-center justify-center rounded-md border-2 border-navy-900 px-7 py-3.5 text-lg font-bold text-navy-900 hover:bg-navy-900 hover:text-white"
          >
            Try again
          </button>
          <CallButton location="error" size="lg" />
        </div>
      </div>
    </section>
  );
}
