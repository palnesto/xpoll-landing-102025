import { useMemo, useState } from "react";
import { ASSETS } from "@/constants";
import { StandardWidthLayout } from "@/App";

export const StructuredIntelligence = () => {
  const IMAGES: Record<string, string> = useMemo(
    () => ({
      Policy: ASSETS.images.structuredIntelligence.policy,
      Media: ASSETS.images.structuredIntelligence.media,
      Executive: ASSETS.images.structuredIntelligence.executive,
      Markets: ASSETS.images.structuredIntelligence.markets,
      Research: ASSETS.images.structuredIntelligence.research,
    }),
    []
  );

  const [active, setActive] = useState<keyof typeof IMAGES>("Policy");
  const categories = Object.keys(IMAGES) as (keyof typeof IMAGES)[];

  return (
    <StandardWidthLayout>
      <section className="w-full px-6 py-14 lg:py-20">
        <div className="flex flex-col items-stretch gap-10 lg:grid lg:grid-cols-2 lg:gap-12">
          {/* Left copy */}
          <div className="flex flex-col justify-center">
            <div className="inline-flex w-fit items-center rounded-full border border-gray-200 bg-white/70 px-3 py-1 text-xs text-blue-700 shadow-sm">
              + From Opinion to Intelligence
            </div>

            <h2 className="mt-4 text-xl font-semibold leading-tight text-gray-900 sm:text-3xl">
              Every poll becomes
              <br />
              <span className="gradient-text text-2xl 2xl:text-4xl">
                Structured intelligence
              </span>
            </h2>

            <p className="mt-6 text-sm text-gray-600">
              Powering decision making across:
            </p>

            <div className="mt-4 grid w-full max-w-xl grid-cols-2 gap-x-10 gap-y-3 text-[15px]">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setActive(c)}
                  className={[
                    "group inline-flex w-fit items-center gap-2 text-left transition",
                    active === c
                      ? "text-blue-700"
                      : "text-gray-700 hover:text-gray-900",
                  ].join(" ")}
                >
                  <span
                    className={[
                      "h-1.5 w-1.5 rounded-full",
                      active === c
                        ? "bg-blue-600"
                        : "bg-gray-300 group-hover:bg-gray-400",
                    ].join(" ")}
                  />
                  {c} <span className="ml-1">→</span>
                </button>
              ))}
            </div>
          </div>

          {/* Right image */}
          <div className="flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-[560px] overflow-hidden rounded-2xl shadow-xl ring-1 ring-black/5">
              <img
                key={active}
                src={IMAGES[active]}
                alt={String(active)}
                className="block h-[280px] w-full object-cover sm:h-[340px] md:h-[380px] transition-opacity duration-300"
              />
            </div>
          </div>
        </div>
      </section>
    </StandardWidthLayout>
  );
};
