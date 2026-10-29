import { Check } from "lucide-react";
import { HeroArt } from "@/components/art/HeroArt";
import { CallButton } from "@/components/ui/CallButton";
import { phone } from "@/config/site";

const points = [
  "Plain-language explanations of coverage",
  "Direct access to an agent by phone",
  "Options explained before any next step",
];

export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="on-dark relative overflow-hidden bg-navy-900 text-white"
    >
      {/* quiet topographic lines */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 size-full opacity-[0.07]"
        preserveAspectRatio="xMidYMid slice"
        viewBox="0 0 1200 700"
      >
        <g fill="none" stroke="#fff" strokeWidth="1.5">
          <path d="M-20 520C200 440 330 600 560 520S900 380 1220 460" />
          <path d="M-20 560C200 480 330 640 560 560S900 420 1220 500" />
          <path d="M-20 600C200 520 330 680 560 600S900 460 1220 540" />
          <path d="M-20 640C200 560 330 720 560 640S900 500 1220 580" />
        </g>
      </svg>

      <div className="container-page relative grid items-end gap-10 pt-14 lg:grid-cols-12 lg:gap-6 lg:pt-20">
        <div className="animate-rise pb-14 lg:col-span-7 lg:pb-24">
          <p className="eyebrow !text-sun-300">Insurance guidance, by phone</p>
          <h1
            id="hero-heading"
            className="h-display mt-5 !text-white"
          >
            Protection for what matters most.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-navy-200 sm:text-xl">
            Explore insurance options with guidance from a team that puts your
            needs first. Call Travlcares to discuss your coverage options and
            find the right next step.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <CallButton
              location="hero"
              label="Call an Insurance Agent"
              size="lg"
              className="sm:min-w-[17rem]"
            />
            <a
              href="#products"
              className="inline-flex min-h-14 items-center justify-center rounded-md border-2 border-white/60 px-7 py-3.5 text-lg font-bold text-white transition-colors hover:bg-white hover:text-navy-900"
            >
              Explore Coverage Options
            </a>
          </div>

          <p className="mt-5 text-navy-200">
            Prefer to dial?{" "}
            <a
              href={phone.href}
              data-cta="call"
              data-cta-location="hero-number"
              className="font-display text-lg font-extrabold text-white underline decoration-sun-400 decoration-2 underline-offset-4"
            >
              {phone.display}
            </a>
          </p>

          <ul className="mt-10 grid gap-3 border-t border-white/15 pt-8 text-[0.9375rem] sm:grid-cols-3 sm:gap-6">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-2.5">
                <Check
                  className="mt-0.5 size-5 shrink-0 text-sun-400"
                  aria-hidden="true"
                />
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="animate-rise relative mx-auto hidden w-full max-w-[26rem] self-end lg:col-span-5 lg:block [animation-delay:120ms]">
          <HeroArt className="block h-auto w-full" />
        </div>
      </div>
    </section>
  );
}
