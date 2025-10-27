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
      <section className="w-full py-14 md:py-20 xl:py-32 flex flex-col justify-between lg:flex-row gap-10 lg:gap-0">
        {/* Left copy */}
        <div className="flex flex-col justify-center w-full 2xl:gap-5">
          <h2 className="md:text-lg inline-flex w-fit items-center rounded-full border border-gray-200 bg-white/70 px-3 py-1 text-xs text-blue-700 shadow-sm">
            + From Opinion to Intelligence
          </h2>

          <h2 className="mt-4 text-[24px] font-semibold text-gray-900 md:text-4xl lg:text-3xl 2xl:text-5xl">
            Every poll becomes
            <br />
            <span className="gradient-text text-[27px] md:text-5xl lg:text-4xl 2xl:text-6xl">
              Structured intelligence
            </span>
          </h2>

          <p className="mt-6 md:text-2xl text-gray-600">
            Powering decision making across:
          </p>

          <div className="mt-4 grid w-full max-w-xl font-medium grid-cols-2 gap-x-10 gap-y-3 2xl:gap-y-7 text-lg md:text-2xl">
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
        <div className="flex items-center lg:justify-end w-full">
          <figure className="relative w-full overflow-hidden rounded-2xl shadow-xl ring-1 ring-black/5">
            <img
              key={active}
              src={IMAGES[active]}
              alt={String(active)}
              className="block h-[300px] w-full object-cover md:h-[400px] xl:h-[550px] transition-opacity duration-300"
            />
          </figure>
        </div>
      </section>
    </StandardWidthLayout>
  );
};
