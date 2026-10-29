import Image from "next/image";
import Link from "next/link";
import { brand } from "@/config/site";

export function LogoMark({ className = "size-10" }: { className?: string }) {
  return (
    <span className={`relative inline-block ${className}`}>
      <Image
        src="/images/logo-shield.png"
        alt="Travlcares logo mark"
        width={100}
        height={95}
        priority
        className="size-full object-contain"
      />
    </span>
  );
}

export function Logo({
  tone = "light",
  className = "",
}: {
  /** "light" = for light backgrounds, "dark" = for navy backgrounds. */
  tone?: "light" | "dark";
  className?: string;
}) {
  const isDark = tone === "dark";

  return (
    <Link
      href="/"
      aria-label={`${brand.name} home`}
      className={`inline-flex items-center ${className}`}
    >
      <Image
        src={isDark ? "/images/logo-horizontal-dark.png" : "/images/logo-horizontal.png"}
        alt={`${brand.name} - Insurance For What Matters`}
        width={220}
        height={62}
        priority
        className="h-10 w-auto object-contain sm:h-12"
      />
    </Link>
  );
}
