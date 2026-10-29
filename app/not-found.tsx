import Link from "next/link";
import { CallButton } from "@/components/ui/CallButton";

export default function NotFound() {
  return (
    <section className="section-y bg-white">
      <div className="container-page max-w-2xl">
        <p className="eyebrow">Page not found</p>
        <h1 className="h-section mt-3">We couldn&rsquo;t find that page.</h1>
        <p className="mt-5 text-lg text-muted">
          The page may have moved, or the address may be mistyped. You can head
          back to the homepage or call us and we&rsquo;ll point you in the
          right direction.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <CallButton location="not-found" size="lg" />
          <Link
            href="/"
            className="inline-flex min-h-14 items-center justify-center rounded-md border-2 border-navy-900 px-7 py-3.5 text-lg font-bold text-navy-900 hover:bg-navy-900 hover:text-white"
          >
            Back to home
          </Link>
        </div>
      </div>
    </section>
  );
}
