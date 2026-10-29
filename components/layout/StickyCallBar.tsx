import { CallButton } from "@/components/ui/CallButton";

/**
 * Mobile-only call bar. It is in normal fixed positioning and the footer adds
 * matching bottom padding, so it never hides page content. There are no cookie
 * controls on this site; if any are added later, offset them above this bar.
 */
export function StickyCallBar() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-white/95 px-4 pt-3 shadow-[0_-4px_16px_rgb(16_42_67/0.08)] backdrop-blur md:hidden"
      style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
    >
      <CallButton
        location="sticky-bar"
        label="Call an Agent"
        showNumber
        className="w-full"
      />
    </div>
  );
}
