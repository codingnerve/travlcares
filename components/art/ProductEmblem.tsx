import { ProductIcon } from "@/components/ui/ProductIcon";
import type { ProductIconKey } from "@/content/products";

/** Decorative hero emblem for product pages: the brand's canopy rings around the product icon. */
export function ProductEmblem({
  icon,
  className = "",
}: {
  icon: ProductIconKey;
  className?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={`relative mx-auto aspect-square w-full max-w-[22rem] ${className}`}
    >
      <svg viewBox="0 0 400 400" className="absolute inset-0 size-full">
        <g fill="none" stroke="#fff" strokeOpacity=".16" strokeWidth="1.5">
          <circle cx="200" cy="200" r="196" />
          <circle cx="200" cy="200" r="150" />
          <circle cx="200" cy="200" r="104" />
        </g>
        <path
          d="M200 4A196 196 0 0 1 396 200"
          fill="none"
          stroke="#F4B942"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <circle cx="396" cy="200" r="7" fill="#20A39E" />
      </svg>
      <div className="absolute inset-[27%] flex items-center justify-center rounded-full bg-white text-brand-600 shadow-lift">
        <ProductIcon name={icon} className="size-1/3 min-h-12 min-w-12" />
      </div>
    </div>
  );
}
