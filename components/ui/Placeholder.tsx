/**
 * Marks a fact the business still has to supply. Intentionally visible so
 * nothing unverified ships unnoticed. Fill the matching value in
 * config/site.ts and this disappears.
 */
export function Placeholder({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-sm border border-dashed border-sun-400 bg-sun-100 px-1.5 py-0.5 text-[0.9em] font-medium text-navy-900">
      [{children}]
    </span>
  );
}
