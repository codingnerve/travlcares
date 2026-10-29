import Image from "next/image";
import { images } from "@/config/site";

const ARCH = "M0 640V270C0 126.4 116.4 10 260 10s260 116.4 260 270V640Z";

/**
 * Hero visual. Uses a licensed photo when one is configured in
 * config/site.ts, otherwise original vector artwork: an umbrella (the brand
 * mark) over a home and a car.
 */
export function HeroArt({ className = "" }: { className?: string }) {
  const photo = images.hero;

  if (photo.src) {
    return (
      <div
        className={`overflow-hidden rounded-t-[999px] shadow-2xl ring-1 ring-black/5 ${className}`}
        style={{ aspectRatio: "520 / 640" }}
      >
        <Image
          src={photo.src}
          alt={photo.alt}
          width={photo.width}
          height={photo.height}
          priority
          sizes="(min-width: 1024px) 520px, 80vw"
          className="size-full object-cover"
        />
      </div>
    );
  }

  return (
    <svg
      viewBox="0 0 520 640"
      role="img"
      aria-label="Illustration of an umbrella sheltering a home and a car"
      className={className}
    >
      <defs>
        <clipPath id="hero-arch">
          <path d={ARCH} />
        </clipPath>
      </defs>
      <path d={ARCH} fill="#DBEAF6" />
      <g clipPath="url(#hero-arch)">
        {/* soft rings echoing the canopy */}
        <circle cx="260" cy="270" r="250" fill="none" stroke="#fff" strokeOpacity=".7" strokeWidth="2" />
        <circle cx="260" cy="270" r="195" fill="none" stroke="#fff" strokeOpacity=".7" strokeWidth="2" />
        <circle cx="260" cy="270" r="140" fill="none" stroke="#fff" strokeOpacity=".7" strokeWidth="2" />

        {/* sun */}
        <circle cx="415" cy="318" r="30" fill="#F4B942" />

        {/* far hills, near hills, road */}
        <path d="M0 470C80 430 150 440 230 465S400 470 520 430V640H0Z" fill="#A9CBE6" />
        <path d="M0 522C110 482 200 500 300 515S450 502 520 482V640H0Z" fill="#2C83C6" />
        <path d="M0 578H520V640H0Z" fill="#102A43" />
        <path d="M18 609H70M110 609H162M202 609H254M294 609H346M386 609H438M478 609H520" stroke="#fff" strokeWidth="4" strokeLinecap="round" />

        {/* tree */}
        <rect x="213" y="478" width="6" height="26" rx="2" fill="#102A43" />
        <ellipse cx="216" cy="466" rx="17" ry="26" fill="#20A39E" />

        {/* home */}
        <rect x="156" y="391" width="14" height="26" fill="#102A43" />
        <rect x="80" y="430" width="104" height="78" fill="#fff" />
        <path d="M68 434L132 380L196 434Z" fill="#102A43" />
        <rect x="119" y="464" width="26" height="44" rx="2" fill="#F4B942" />
        <rect x="92" y="448" width="18" height="18" rx="2" fill="#DBEAF6" />
        <rect x="154" y="448" width="18" height="18" rx="2" fill="#DBEAF6" />

        {/* car */}
        <path
          d="M300 576V556C300 549 305 545 312 544L338 539L356 521C360 517 364 515 370 515H405C412 515 418 518 422 524L434 542C442 544 448 549 448 557V576Z"
          fill="#20A39E"
        />
        <path d="M364 525H402L414 541H348Z" fill="#fff" fillOpacity=".92" />
        <circle cx="338" cy="578" r="15" fill="#0A1C2E" />
        <circle cx="338" cy="578" r="6" fill="#fff" />
        <circle cx="408" cy="578" r="15" fill="#0A1C2E" />
        <circle cx="408" cy="578" r="6" fill="#fff" />
        <circle cx="443" cy="556" r="4" fill="#F4B942" />

        {/* umbrella */}
        <path
          d="M260 215V345C260 377 224 380 218 354"
          fill="none"
          stroke="#F4B942"
          strokeWidth="9"
          strokeLinecap="round"
        />
        <path
          d="M70 215C70 130 150 75 260 75S450 130 450 215C420 195 395 195 372 215C349 195 322 195 296 215C274 195 246 195 224 215C198 195 171 195 148 215C125 195 98 195 70 215Z"
          fill="#102A43"
        />
        <path
          d="M260 75C225 110 215 160 224 215M260 75C295 110 305 160 296 215M260 75C190 100 150 150 148 215M260 75C330 100 370 150 372 215"
          fill="none"
          stroke="#2C83C6"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <circle cx="260" cy="68" r="7" fill="#20A39E" />
      </g>
    </svg>
  );
}
