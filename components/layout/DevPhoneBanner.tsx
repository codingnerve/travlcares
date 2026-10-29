import { phone } from "@/config/site";

/** Development-only reminder. Never rendered in production builds. */
export function DevPhoneBanner() {
  if (!phone.isPlaceholder || process.env.NODE_ENV === "production") return null;
  return (
    <div
      role="note"
      className="bg-sun-400 px-4 py-1.5 text-center text-xs font-bold text-navy-900"
    >
      DEV: placeholder phone number in use. Set NEXT_PUBLIC_PHONE_E164 and
      NEXT_PUBLIC_PHONE_DISPLAY, or edit config/site.ts.
    </div>
  );
}
