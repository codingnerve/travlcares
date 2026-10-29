import { Phone } from "lucide-react";
import { phone } from "@/config/site";

type Variant = "primary" | "outline" | "outline-dark" | "navy";
type Size = "md" | "lg";

const variants: Record<Variant, string> = {
  /** Warm accent: the one colour reserved for calling. */
  primary:
    "bg-sun-400 text-navy-900 hover:bg-sun-300 shadow-[0_1px_0_rgb(0_0_0/0.08)]",
  navy: "bg-navy-900 text-white hover:bg-navy-800",
  outline:
    "border-2 border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white",
  "outline-dark":
    "border-2 border-white/70 text-white hover:bg-white hover:text-navy-900",
};

const sizes: Record<Size, string> = {
  md: "min-h-11 px-5 py-2.5 text-[0.9375rem]",
  lg: "min-h-14 px-7 py-3.5 text-lg",
};

type Props = {
  /** Visible label. */
  label?: string;
  /** Where the button sits, for analytics added later (e.g. "hero"). */
  location: string;
  variant?: Variant;
  size?: Size;
  /** Append the phone number to the label. */
  showNumber?: boolean;
  className?: string;
};

/**
 * The single click-to-call button used across the site. The number always
 * comes from config/site.ts.
 */
export function CallButton({
  label = "Call an Agent",
  location,
  variant = "primary",
  size = "md",
  showNumber = false,
  className = "",
}: Props) {
  return (
    <a
      href={phone.href}
      data-cta="call"
      data-cta-location={location}
      aria-label={`${label}: ${phone.display}`}
      className={`inline-flex items-center justify-center gap-2.5 rounded-md font-bold transition-colors ${variants[variant]} ${sizes[size]} ${className}`}
    >
      <Phone className="size-[1.1em] shrink-0" aria-hidden="true" />
      <span>
        {label}
        {showNumber && <span className="font-extrabold whitespace-nowrap"> · {phone.display}</span>}
      </span>
    </a>
  );
}

/** Text-style phone link for use inside copy. */
export function PhoneLink({
  location,
  className = "",
}: {
  location: string;
  className?: string;
}) {
  return (
    <a
      href={phone.href}
      data-cta="call"
      data-cta-location={location}
      className={`font-bold underline underline-offset-4 ${className}`}
    >
      {phone.display}
    </a>
  );
}
